import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = { title: "Peloton Ambassador" };

export default function PelotonPage() {
  const page = getPageBySlug("peloton-ambassador");
  return (
    <>
      <PageHeader
        eyebrow="Passions · Peloton"
        title={
          <>
            <span className="italic text-accent">Peloton</span> ambassador.
          </>
        }
        lede="Curated playlists, class picks and community notes from a long-time rider."
      />
      <section>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          {page ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-accent prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p className="text-ink-muted">Peloton content coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
