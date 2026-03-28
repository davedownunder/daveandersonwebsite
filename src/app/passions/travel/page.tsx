import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = { title: "Travel Blog" };

export default function TravelPage() {
  const posts = getAllPosts("Travel");
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-8">
          Travel <span className="text-[#692e5e]">Blog</span>
        </h1>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} basePath="/blog" />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Travel posts coming soon.</p>
        )}
      </div>
    </section>
  );
}
