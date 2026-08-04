import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = { title: "Travel" };

export default function TravelPage() {
  const posts = getAllPosts("Travel");
  return (
    <>
      <PageHeader
        eyebrow="Passions · Travel"
        title={
          <>
            Notes from{" "}
            <span className="italic text-accent">the road</span>.
          </>
        }
        lede="Family trips, speaking detours and slow-travel stories."
      />
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} basePath="/blog" />
              ))}
            </div>
          ) : (
            <p className="text-ink-muted">Travel posts coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
