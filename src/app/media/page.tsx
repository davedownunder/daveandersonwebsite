import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media",
  description: "Dave Anderson in the media - appearances, interviews, and features.",
};

export default function MediaPage() {
  const page = getPageBySlug("media");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-8">
          <span className="text-[#692e5e]">Media</span>
        </h1>

        {page ? (
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-[#692e5e]"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        ) : (
          <p className="text-gray-600">Media appearances and features coming soon.</p>
        )}
      </div>
    </section>
  );
}
