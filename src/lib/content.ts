import fs from "fs";
import path from "path";

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

function isPublishablePost(post: WPPost): boolean {
  return !THEME_DEMO_SLUGS.has(post.slug);
}

export function getAllPosts(category?: string): WPPost[] {
  const { posts } = getContent();
  const publishable = posts.filter(isPublishablePost);
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
// categories (Travel, Lifestyle, Photography, Design) are deliberately
// excluded: they have their own homes under /passions and /blog.
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
 * Professional writing only — used on the homepage so the travel diary
 * doesn't surface alongside business content. /blog still lists everything.
 */
export function getProfessionalPosts(): WPPost[] {
  return getAllPosts().filter((post) =>
    post.categories.some((c) => PROFESSIONAL_CATEGORIES.has(c.toLowerCase()))
  );
}

export function getPostBySlug(slug: string): WPPost | undefined {
  const { posts, pages } = getContent();
  return [...posts, ...pages].find((p) => p.slug === slug);
}

export function getPageBySlug(slug: string): WPPost | undefined {
  const { pages } = getContent();
  return pages.find((p) => p.slug === slug);
}

export function getFeaturedImageUrl(post: WPPost): string | null {
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
export function openExternalLinksInNewTab(html: string): string {
  return html.replace(
    /<a\b(?![^>]*\btarget=)([^>]*?)\bhref="(https?:\/\/[^"]+)"([^>]*?)>/gi,
    '<a$1 href="$2"$3 target="_blank" rel="noopener noreferrer">'
  );
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
