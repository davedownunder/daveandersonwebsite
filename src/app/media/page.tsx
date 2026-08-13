import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media",
  description: "Dave Anderson in the media — appearances, interviews, and features.",
};

export default function MediaPage() {
  const page = getPageBySlug("media");

  return (
    <>
      <PageHeader
        eyebrow="Media"
        title={
          <>
            <span className="italic text-brass">Appearances</span>, interviews
            and features.
          </>
        }
        lede="Fox News, BBC, Fast Company, Sky Business, Mashable, IT Pro, Domain &mdash; a decade of commentary on tech, retail, AI and the internet."
      />
      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          {page ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-brass prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p className="text-ink-soft">Media appearances coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
