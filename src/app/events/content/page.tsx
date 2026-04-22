import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = { title: "Event Content" };

export default function EventContentPage() {
  const page = getPageBySlug("content");
  return (
    <>
      <PageHeader
        eyebrow="Events · Content"
        title={
          <>
            Turn three days of stage into{" "}
            <span className="italic text-accent">a year</span> of content.
          </>
        }
        lede="Customer interviews, keynote highlights, event recaps — stories captured on site and shaped for every channel afterwards."
      />
      <section>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          {page ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-accent prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p className="text-ink-muted">Event content coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
