import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and thoughts from Dave Anderson.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-2">
          The <span className="text-[#692e5e]">Blog</span>
        </h1>
        <p className="text-gray-600 mb-10">{posts.length} articles.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} basePath="/blog" />
          ))}
        </div>
      </div>
    </section>
  );
}
