import Link from "next/link";
import { WPPost, getExcerpt, formatDate, getFeaturedImageUrl } from "@/lib/content";

interface PostCardProps {
  post: WPPost;
  basePath: string;
}

export default function PostCard({ post, basePath }: PostCardProps) {
  const imageUrl = getFeaturedImageUrl(post);
  const excerpt = getExcerpt(post);

  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group block border border-rule bg-paper rounded-lg overflow-hidden hover:border-accent transition-colors"
    >
      {imageUrl && (
        <div className="aspect-[16/10] bg-cream-alt overflow-hidden">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        {post.categories.length > 0 && (
          <span className="eyebrow">{post.categories[0]}</span>
        )}
        <h3 className="font-serif text-xl font-medium mt-2 text-ink leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-ink-muted text-sm mt-3 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <time className="text-xs text-ink-muted mt-4 block">
          {formatDate(post.date)}
        </time>
      </div>
    </Link>
  );
}
