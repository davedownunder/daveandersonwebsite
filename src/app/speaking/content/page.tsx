import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = { title: "Event Content" };

export default function EventContentPage() {
  const page = getPageBySlug("content");
  return (
    <>
      <PageHeader
        eyebrow="Speaking · Event Content"
        title={
          <>
            Turn three days of stage into{" "}
            <span className="italic text-brass">a year</span> of content.
          </>
        }
        lede="Customer interviews, keynote highlights, event recaps &mdash; captured on site, cut for every channel afterwards."
      />
      <section>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          {page ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-brass prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p className="text-ink-soft">Event content coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
