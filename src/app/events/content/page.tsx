import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = { title: "Event Content" };

export default function EventContentPage() {
  const page = getPageBySlug("content");
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-8">
          Event <span className="text-[#692e5e]">Content</span>
        </h1>
        {page ? (
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-[#692e5e]" dangerouslySetInnerHTML={{ __html: page.content }} />
        ) : (
          <p className="text-gray-600">Event content information coming soon.</p>
        )}
      </div>
    </section>
  );
}
