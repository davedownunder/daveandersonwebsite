import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, interviews and field notes from Dave Anderson.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title={
          <>
            Essays, interviews and{" "}
            <span className="italic text-brass">field notes</span>.
          </>
        }
        lede={`${posts.length} articles on marketing, technology, performance, AI and the odd Melbourne Cup.`}
      />
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} basePath="/blog" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
