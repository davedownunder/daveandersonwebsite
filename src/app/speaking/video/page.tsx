import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = { title: "Video Storytelling" };

export default function VideoStorytellingPage() {
  const page = getPageBySlug("video-storytelling");
  return (
    <>
      <PageHeader
        eyebrow="Speaking · Video"
        title={
          <>
            Brand and customer films that{" "}
            <span className="italic text-brass">travel</span>.
          </>
        }
        lede="From See the Magic (646k views) to the Dynatrace IPO roadshow film &mdash; a portfolio of video work built for scale."
      />
      <section>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          {page ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-brass prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p className="text-ink-soft">Portfolio coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
