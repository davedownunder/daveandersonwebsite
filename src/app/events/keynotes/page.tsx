import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = { title: "Keynotes" };

export default function KeynotesPage() {
  const page = getPageBySlug("keynotes");
  return (
    <>
      <PageHeader
        eyebrow="Events · Keynotes"
        title={
          <>
            Keynotes that{" "}
            <span className="italic text-accent">move a room</span>.
          </>
        }
        lede="From product launches to industry conferences, Dave delivers keynote presentations that blend tech insight, humour, and human stories."
      />
      <section>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          {page ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-accent prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p className="text-ink-muted">Keynote information coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
