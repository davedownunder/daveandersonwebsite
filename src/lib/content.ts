import fs from "fs";
import path from "path";
import { nativePosts } from "@/content/posts";

export interface WPPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  featured_image_id: string;
  type: string;
  /**
   * Direct image URL. Native posts use this instead of featured_image_id,
   * which only resolves against the WordPress attachment table.
   */
  featured_image_url?: string;
}

export interface WPContent {
  site: string;
  pages: WPPost[];
  posts: WPPost[];
  attachments: Record<string, string>;
  nav_items: Array<{
    title: string;
    url: string;
    type: string;
    object: string;
    object_id: string;
    parent: string;
  }>;
  stats: { pages: number; posts: number; attachments: number };
}

// Slugs shipped as Mesmerize / Highend theme demo content — hide from the site.
const THEME_DEMO_SLUGS = new Set([
  "talking-about-pinhole-photography",
  "sound-for-you-noise-to-others",
  "compassion-at-the-coffee-shop",
  "the-fashion-design-process",
  "creative-photo-book-ideas",
  "80-days-around-the-world",
  "hello-world",
]);

let _content: WPContent | null = null;

export function getContent(): WPContent {
  if (_content) return _content;
  const filePath = path.join(process.cwd(), "wp-content.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  _content = JSON.parse(raw);
  return _content!;
}

// Categories retired from the site. The 2023 Japan travel diary was a
// personal trip log; it dilutes a site whose job is speaking, podcasting
// and marketing, and nearly all of its images died with the old host.
const RETIRED_CATEGORIES = new Set(["travel"]);

function isPublishablePost(post: WPPost): boolean {
  if (THEME_DEMO_SLUGS.has(post.slug)) return false;
  return !post.categories.some((c) => RETIRED_CATEGORIES.has(c.toLowerCase()));
}

export function getAllPosts(category?: string): WPPost[] {
  const { posts } = getContent();
  // Native posts authored in this repo sit alongside the WordPress import.
  const publishable = [...nativePosts, ...posts.filter(isPublishablePost)];
  const filtered = category
    ? publishable.filter((p) =>
        p.categories.some((c) => c.toLowerCase() === category.toLowerCase())
      )
    : publishable;
  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Categories covering Dave's professional output — marketing and tech
// commentary, media appearances, talks and podcast work. Personal
// categories (Lifestyle, Photography, Design) are deliberately excluded.
const PROFESSIONAL_CATEGORIES = new Set([
  "blog: marketing",
  "spokesperson",
  "presentations",
  "podcasts",
  "technology",
  "news",
  "social",
]);

/**
 * Professional writing only — used on the homepage so personal posts don't
 * surface alongside business content. /blog still lists everything published.
 */
export function getProfessionalPosts(): WPPost[] {
  return getAllPosts().filter((post) =>
    post.categories.some((c) => PROFESSIONAL_CATEGORIES.has(c.toLowerCase()))
  );
}

export function getPostBySlug(slug: string): WPPost | undefined {
  const { posts, pages } = getContent();
  return [...nativePosts, ...posts, ...pages].find((p) => p.slug === slug);
}

export function getPageBySlug(slug: string): WPPost | undefined {
  const { pages } = getContent();
  return pages.find((p) => p.slug === slug);
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  if (post.featured_image_url) return post.featured_image_url;
  if (!post.featured_image_id) return null;
  const { attachments } = getContent();
  return attachments[post.featured_image_id] || null;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function getExcerpt(post: WPPost, maxLength = 160): string {
  const text = post.excerpt || stripHtml(post.content);
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

/**
 * WordPress HTML doesn't carry `target="_blank"` on its outbound links.
 * Server-side rewrite every external <a> to open in a new tab, and add
 * `rel="noopener noreferrer"` for safety. Skips anchors that already
 * declare a target so we don't double-annotate.
 */
function openExternalLinksInNewTab(html: string): string {
  return html.replace(
    /<a\b(?![^>]*\btarget=)([^>]*?)\bhref="(https?:\/\/[^"]+)"([^>]*?)>/gi,
    '<a$1 href="$2"$3 target="_blank" rel="noopener noreferrer">'
  );
}

/**
 * Every `wp-content/uploads/...` URL in the export points at the retired
 * WordPress host, which no longer serves anything — the domain now resolves to
 * this site. Images recovered by scripts/migrate-images.mjs live in
 * public/media under `<basename>-<hash>.<ext>`, so a reference can be repointed
 * by matching on the basename.
 *
 * techseekinghuman.ai is a separate, still-live WordPress install; its uploads
 * are not affected.
 */
const LIVE_WORDPRESS_HOSTS = /techseekinghuman\.ai/i;

let _mediaByStem: Map<string, string> | null = null;

function mediaByStem(): Map<string, string> {
  if (_mediaByStem) return _mediaByStem;
  const dir = path.join(process.cwd(), "public", "media");
  const map = new Map<string, string>();
  for (const file of fs.existsSync(dir) ? fs.readdirSync(dir) : []) {
    const match = file.match(/^(.*)-[0-9a-f]{8}\.[^.]+$/);
    if (match) map.set(match[1].toLowerCase(), `/media/${file}`);
  }
  _mediaByStem = map;
  return map;
}

/** Mirrors the slugging migrate-images.mjs applies when it names local files. */
function stemOf(uploadsPath: string): string {
  const base = decodeURIComponent(uploadsPath.split("/").pop() || "");
  return base
    .replace(/\.[^.]+$/, "")
    .replace(/[^A-Za-z0-9.-]+/g, "-")
    .toLowerCase();
}

const UPLOADS_URL_RE =
  /https?:\/\/[^\s"'<>()\\]*?\/wp-content\/uploads\/[^\s"'<>()\\]+/gi;

/** Repoint any recovered upload to its copy in public/media. */
function rewriteToLocalMedia(html: string): string {
  const media = mediaByStem();
  return html.replace(UPLOADS_URL_RE, (url) => {
    if (LIVE_WORDPRESS_HOSTS.test(url)) return url;
    const local = media.get(stemOf(url.split("?")[0]));
    return local || url;
  });
}

function isDeadUpload(url: string): boolean {
  return /\/wp-content\/uploads\//i.test(url) && !LIVE_WORDPRESS_HOSTS.test(url);
}

/**
 * Drop images and audio whose files died with the old host, so a retired asset
 * renders as nothing rather than as a broken-image icon. Removes the whole
 * `<figure>` where there is one, so captions don't outlive their picture.
 */
function dropDeadMedia(html: string): string {
  return html
    .replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, (block) =>
      isDeadUpload(block) ? "" : block
    )
    .replace(/<img\b[^>]*>/gi, (tag) => (isDeadUpload(tag) ? "" : tag))
    .replace(/<audio\b[^>]*>[\s\S]*?<\/audio>/gi, (tag) =>
      isDeadUpload(tag) ? "" : tag
    )
    // WordPress wraps inline images in a lightbox link to the full-size file.
    // Once the image is gone the anchor is an empty, dead link — drop it too.
    .replace(/<a\b[^>]*>\s*<\/a>/gi, (tag) => (isDeadUpload(tag) ? "" : tag));
}

/**
 * The single entry point for WordPress HTML injected via
 * dangerouslySetInnerHTML. Recovers what we have locally, drops what is gone,
 * then fixes up outbound links.
 */
export function renderContent(html: string): string {
  return openExternalLinksInNewTab(dropDeadMedia(rewriteToLocalMedia(html)));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
