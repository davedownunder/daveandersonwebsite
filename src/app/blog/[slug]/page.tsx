import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate, getFeaturedImageUrl } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);

  return (
    <article>
      <div className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-12 md:pt-20">
          <Link
            href="/blog"
            className="text-sm text-ink-muted hover:text-brass transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden>←</span> All writing
          </Link>
          <header className="mt-8">
            {post.categories.length > 0 && (
              <p className="eyebrow">{post.categories[0]}</p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl font-light mt-4 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            <time className="text-sm text-ink-muted mt-6 block font-mono tracking-wider uppercase">
              {formatDate(post.date)}
            </time>
          </header>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        {imageUrl && (
          <div className="mb-10 rounded-md overflow-hidden border border-rule">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-brass prose-strong:text-ink prose-blockquote:border-brass prose-blockquote:text-ink-soft"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <div className="border-t border-rule">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 flex items-center justify-between">
          <Link
            href="/blog"
            className="text-sm text-ink-muted hover:text-brass transition-colors"
          >
            ← All writing
          </Link>
          <Link
            href="/contact"
            className="text-sm text-brass hover:underline underline-offset-4"
          >
            Say hello →
          </Link>
        </div>
      </div>
    </article>
  );
}
