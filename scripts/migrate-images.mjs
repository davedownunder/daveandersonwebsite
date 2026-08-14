#!/usr/bin/env node
/**
 * Migrate remote images into the repo so the WordPress/SiteGround host can be
 * retired.
 *
 * The site pulls images from three places:
 *   - hard-coded URLs in src/**\/*.tsx
 *   - HTML inside wp-content.json, injected via dangerouslySetInnerHTML
 *   - the wp-content.json `attachments` table, used for post featured images
 *
 * Only images that actually render on the new site are worth keeping, so this
 * walks the same code paths the site does rather than grabbing every URL in
 * the export.
 *
 * Recovery is attempted in order, cheapest first:
 *   1. the URL as written
 *   2. the Jetpack CDN copy (i0.wp.com), which survives the origin going away
 *   3. a locally-extracted wp-content/uploads folder, via --from=DIR
 *   4. FTPS straight off the host, via --ftp
 *
 * Usage:
 *   node scripts/migrate-images.mjs                  # audit only, writes no files
 *   node scripts/migrate-images.mjs --download       # fetch live images to public/media
 *   node scripts/migrate-images.mjs --download --rewrite   # ...and repoint references
 *
 * Flags:
 *   --download   fetch images that responded 200 with an image content-type
 *   --rewrite    rewrite wp-content.json and src/**\/*.tsx to the local paths
 *   --all        include images from posts hidden by the retired/demo filters
 *   --from=DIR   for images the web can't serve, look in a locally-extracted
 *                wp-content/uploads folder (the easiest route — no credentials)
 *   --ftp        same, but pull off the host over FTPS using
 *                FTP_HOST / FTP_USER / FTP_PASS from the environment
 *   --concurrency=N   parallel requests (default 12)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import { extname, basename, join } from "node:path";
import { readdirSync, statSync } from "node:fs";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "media");
const MANIFEST = join(ROOT, "scripts", "image-manifest.json");
const REPORT = join(ROOT, "scripts", "image-audit.json");

const args = process.argv.slice(2);
const DO_DOWNLOAD = args.includes("--download");
const DO_REWRITE = args.includes("--rewrite");
const INCLUDE_ALL = args.includes("--all");
const CONCURRENCY = Number(
  (args.find((a) => a.startsWith("--concurrency=")) || "").split("=")[1] || 12
);

/**
 * Pull straight off the host over FTPS for images that neither the origin nor
 * the CDN will serve. Credentials come from the environment so they never live
 * in the repo:
 *
 *   FTP_HOST=host.example.com \
 *   FTP_USER='you@example.com' \
 *   FTP_PASS='...' \
 *   node scripts/migrate-images.mjs --download --ftp --rewrite
 *
 * Shells out to curl, which ships with macOS and speaks FTPS, rather than
 * adding an npm dependency for a one-off migration.
 */
const USE_FTP = args.includes("--ftp");
const FTP_HOST = process.env.FTP_HOST;
const FTP_USER = process.env.FTP_USER;
const FTP_PASS = process.env.FTP_PASS;
const FTP_ROOT = process.env.FTP_ROOT || "public_html/wp-content/uploads";

/**
 * Simplest path of all: download wp-content/uploads from the host's file
 * manager as a zip, unzip it, and point --from at the resulting folder. No
 * credentials, no network. The folder should contain the year directories
 * (2014/, 2015/, ...) directly.
 *
 *   node scripts/migrate-images.mjs --download --from=~/Downloads/uploads --rewrite
 */
const FROM_DIR = (args.find((a) => a.startsWith("--from=")) || "").split("=")[1] || "";
const execFileAsync = promisify(execFile);

// Kept in sync with RETIRED_CATEGORIES in src/lib/content.ts
const RETIRED_CATEGORIES = new Set(["travel"]);

// Kept in sync with THEME_DEMO_SLUGS in src/lib/content.ts
const THEME_DEMO_SLUGS = new Set([
  "talking-about-pinhole-photography",
  "sound-for-you-noise-to-others",
  "compassion-at-the-coffee-shop",
  "the-fashion-design-process",
  "creative-photo-book-ideas",
  "80-days-around-the-world",
  "hello-world",
]);

// Pages the app actually calls getPageBySlug() for. Anything else in the
// export never renders, so its images don't need migrating.
const RENDERED_PAGE_SLUGS = new Set([
  "media",
  "podcasts",
  "music",
  "music-2",
  "peloton-ambassador",
]);

const IMG_RE = /https?:\/\/[^\s"'<>()\\]+?\.(?:jpg|jpeg|png|gif|webp)/gi;

/** Hosts that disappear when SiteGround is cancelled. */
const AT_RISK = /(^|\.)daveanderson\.com\.au$|(^|\.)daveandersononline\.com$|(^|\.)i0\.wp\.com$/i;

const hostOf = (u) => {
  try {
    return new URL(u).hostname;
  } catch {
    return "";
  }
};

/**
 * i0.wp.com is Jetpack's CDN in front of the WordPress origin. Unwrap to find
 * the true source, for reporting and for stable local filenames.
 */
function originOf(url) {
  const h = hostOf(url);
  if (/^i\d\.wp\.com$/i.test(h)) {
    const path = new URL(url).pathname.replace(/^\//, "");
    return `https://${path}`;
  }
  return url;
}

/**
 * Jetpack's CDN keeps its own cached copy, so an image can survive there after
 * the WordPress origin has gone — which is exactly what happens once DNS moves
 * to Vercel. Given an origin URL, produce the CDN equivalent to try as a
 * fallback.
 */
function cdnVariantOf(url) {
  const h = hostOf(url);
  if (/^i\d\.wp\.com$/i.test(h)) return null; // already the CDN
  return `https://i0.wp.com/${url.replace(/^https?:\/\//, "")}`;
}

/** The path under wp-content/uploads/, which is also the path on the host. */
function uploadsPathOf(url) {
  const clean = originOf(url).split("?")[0];
  const m = clean.match(/\/wp-content\/uploads\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

async function fetchViaFtp(url, dest) {
  const rel = uploadsPathOf(url);
  if (!rel) return false;
  const remote = `ftp://${FTP_HOST}/${FTP_ROOT}/${rel}`;
  try {
    await execFileAsync(
      "curl",
      [
        "--fail", "--silent", "--show-error",
        "--ssl-reqd", "--ftp-pasv",
        "--connect-timeout", "20", "--max-time", "120",
        "--user", `${FTP_USER}:${FTP_PASS}`,
        "--output", dest,
        remote,
      ],
      { maxBuffer: 1024 * 1024 }
    );
    return existsSync(dest) && statSync(dest).size > 0;
  } catch {
    return false;
  }
}

/** Copy an image out of a locally-extracted uploads folder. */
function copyFromDir(url, dest) {
  const rel = uploadsPathOf(url);
  if (!rel || !FROM_DIR) return false;
  const base = FROM_DIR.replace(/^~/, process.env.HOME || "~");
  // Try the path as-is, then without any WordPress -WxH size suffix, since
  // the export often references a resized variant that was never generated.
  const candidates = [
    join(base, rel),
    join(base, rel.replace(/-\d+x\d+(\.[a-z]+)$/i, "$1")),
  ];
  for (const src of candidates) {
    if (existsSync(src) && statSync(src).isFile()) {
      copyFileSync(src, dest);
      return true;
    }
  }
  return false;
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(tsx|ts)$/.test(entry)) out.push(full);
  }
  return out;
}

function collect() {
  const wp = JSON.parse(readFileSync(join(ROOT, "wp-content.json"), "utf8"));
  /** @type {Map<string, Set<string>>} url -> where it came from */
  const refs = new Map();
  const note = (url, where) => {
    if (!refs.has(url)) refs.set(url, new Set());
    refs.get(url).add(where);
  };

  // 1. hard-coded in components/pages
  for (const file of walk(join(ROOT, "src"))) {
    const text = readFileSync(file, "utf8");
    for (const m of text.match(IMG_RE) || []) {
      note(m, `src:${file.replace(ROOT + "/", "")}`);
    }
  }

  // 2. post bodies that actually get a /blog/[slug] route
  for (const post of wp.posts || []) {
    if (!INCLUDE_ALL && THEME_DEMO_SLUGS.has(post.slug)) continue;
    if (
      !INCLUDE_ALL &&
      (post.categories || []).some((c) => RETIRED_CATEGORIES.has(String(c).toLowerCase()))
    )
      continue;
    for (const m of (post.content || "").match(IMG_RE) || []) {
      note(m, `post:${post.slug}`);
    }
    // featured image via the attachments table
    const att = post.featured_image_id && wp.attachments?.[post.featured_image_id];
    if (att) note(att, `featured:${post.slug}`);
  }

  // 3. page bodies the app renders
  for (const page of wp.pages || []) {
    if (!RENDERED_PAGE_SLUGS.has(page.slug)) continue;
    for (const m of (page.content || "").match(IMG_RE) || []) {
      note(m, `page:${page.slug}`);
    }
  }

  return refs;
}

async function probe(url) {
  // Some WordPress hosts reject HEAD; fall back to a ranged GET.
  const attempt = async (method, extra = {}) => {
    const ctl = AbortSignal.timeout(15000);
    return fetch(url, { method, redirect: "follow", signal: ctl, ...extra });
  };
  try {
    let r = await attempt("HEAD");
    if (r.status === 405 || r.status === 501) {
      r = await attempt("GET", { headers: { Range: "bytes=0-2048" } });
    }
    return {
      status: r.status,
      type: r.headers.get("content-type") || "",
      length: Number(r.headers.get("content-length") || 0),
    };
  } catch (e) {
    return { status: 0, type: "", length: 0, error: String(e.message || e) };
  }
}

const isImage = (r) => r.status === 200 && r.type.startsWith("image/");

/**
 * Try the URL as written; if the origin is gone, try the Jetpack CDN copy.
 * Returns which URL to actually download from.
 */
async function resolve(url) {
  const direct = await probe(url);
  if (isImage(direct)) return { ...direct, fetchUrl: url, via: "origin" };

  const cdn = cdnVariantOf(url);
  if (cdn) {
    const alt = await probe(cdn);
    if (isImage(alt)) return { ...alt, fetchUrl: cdn, via: "cdn" };
  }
  return { ...direct, fetchUrl: url, via: "none" };
}

async function pool(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    })
  );
  return out;
}

function localNameFor(url) {
  const clean = originOf(url).split("?")[0];
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 8);
  let base = basename(clean) || "image";
  base = base.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 60);
  const ext = extname(base) || ".jpg";
  const stem = base.slice(0, base.length - ext.length) || "image";
  return `${stem}-${hash}${ext}`;
}

async function main() {
  const refs = collect();
  const urls = [...refs.keys()];
  const atRisk = urls.filter((u) => AT_RISK.test(hostOf(u)));

  console.log(`Referenced images:      ${urls.length}`);
  console.log(`On the retiring host:   ${atRisk.length}`);
  console.log(`Checking reachability at concurrency ${CONCURRENCY}...\n`);

  const checked = await pool(atRisk, CONCURRENCY, async (u) => ({
    url: u,
    where: [...refs.get(u)],
    ...(await resolve(u)),
  }));

  const live = checked.filter(isImage);
  const dead = checked.filter((c) => !isImage(c));
  const viaCdn = live.filter((c) => c.via === "cdn").length;

  console.log(`  live:  ${live.length}  (${viaCdn} recovered via the Jetpack CDN)`);
  console.log(
    `  dead:  ${dead.length}  ${
      FROM_DIR || USE_FTP ? "(will try local folder / FTPS)" : "(neither origin nor CDN will serve these)"
    }`
  );

  const bytes = live.reduce((n, c) => n + (c.length || 0), 0);
  if (bytes) console.log(`  size:  ~${(bytes / 1024 / 1024).toFixed(1)} MB\n`);

  mkdirSync(join(ROOT, "scripts"), { recursive: true });
  writeFileSync(
    REPORT,
    JSON.stringify(
      {
        generated: new Date().toISOString(),
        totals: { referenced: urls.length, atRisk: atRisk.length, live: live.length, dead: dead.length },
        live: live.map(({ url, where, length, via }) => ({ url, where, length, via })),
        dead: dead.map(({ url, where, status, error }) => ({ url, where, status, error })),
      },
      null,
      2
    )
  );
  console.log(`Audit written to ${REPORT.replace(ROOT + "/", "")}`);

  if (!DO_DOWNLOAD) {
    console.log("\nAudit only. Re-run with --download to fetch the live images.");
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {};
  let ok = 0;
  let failed = 0;

  await pool(live, CONCURRENCY, async (c) => {
    const name = localNameFor(c.url);
    const dest = join(OUT_DIR, name);
    manifest[c.url] = `/media/${name}`;
    if (existsSync(dest)) {
      ok++;
      return;
    }
    try {
      const r = await fetch(c.fetchUrl, { redirect: "follow", signal: AbortSignal.timeout(30000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      writeFileSync(dest, buf);
      ok++;
    } catch (e) {
      failed++;
      delete manifest[c.url];
      console.warn(`  ! ${c.url} — ${e.message}`);
    }
  });

  // Anything the web could not serve: try a locally-extracted uploads folder.
  let viaDir = 0;
  if (FROM_DIR) {
    console.log(`\nLooking in ${FROM_DIR} for ${dead.length} unreachable image(s)...`);
    for (const c of dead) {
      const name = localNameFor(c.url);
      const dest = join(OUT_DIR, name);
      if (existsSync(dest) || copyFromDir(c.url, dest)) {
        manifest[c.url] = `/media/${name}`;
        viaDir++;
      }
    }
    console.log(`  recovered from disk: ${viaDir} of ${dead.length}`);
  }

  // Still missing: try the host directly.
  let viaFtp = 0;
  if (USE_FTP) {
    if (!FTP_HOST || !FTP_USER || !FTP_PASS) {
      console.warn("\n  --ftp given but FTP_HOST / FTP_USER / FTP_PASS are not set; skipping.");
    } else {
      console.log(`\nTrying FTPS on ${FTP_HOST} for ${dead.length} unreachable image(s)...`);
      await pool(dead, 4, async (c) => {
        const name = localNameFor(c.url);
        const dest = join(OUT_DIR, name);
        if (existsSync(dest)) {
          manifest[c.url] = `/media/${name}`;
          viaFtp++;
          return;
        }
        if (await fetchViaFtp(c.url, dest)) {
          manifest[c.url] = `/media/${name}`;
          viaFtp++;
        }
      });
      console.log(`  recovered over FTPS: ${viaFtp} of ${dead.length}`);
    }
  }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(
    `\nDownloaded ${ok}, failed ${failed}` +
      (FROM_DIR ? `, ${viaDir} from disk` : "") +
      (USE_FTP ? `, ${viaFtp} via FTPS` : "")
  );
  console.log(`Files in public/media, manifest at ${MANIFEST.replace(ROOT + "/", "")}`);

  if (!DO_REWRITE) {
    console.log("\nRe-run with --rewrite to repoint references at the local copies.");
    return;
  }

  // Rewrite longest-first so a URL that is a prefix of another can't corrupt it.
  const pairs = Object.entries(manifest).sort((a, b) => b[0].length - a[0].length);
  const applyTo = (text) => {
    let out = text;
    for (const [from, to] of pairs) out = out.split(from).join(to);
    return out;
  };

  const wpPath = join(ROOT, "wp-content.json");
  writeFileSync(wpPath, applyTo(readFileSync(wpPath, "utf8")));
  let touched = 1;
  for (const file of walk(join(ROOT, "src"))) {
    const before = readFileSync(file, "utf8");
    const after = applyTo(before);
    if (before !== after) {
      writeFileSync(file, after);
      touched++;
    }
  }
  console.log(`Rewrote ${touched} file(s) to /media/* paths.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
