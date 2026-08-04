import type { Metadata } from "next";
import Link from "next/link";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Keynotes, event content, and video storytelling by Dave Anderson.",
};

const tiles = [
  {
    num: "01",
    title: "Keynotes & MC",
    blurb:
      "Mainstage keynotes and MC work for technology conferences, customer events and industry forums.",
    href: "/events/keynotes",
  },
  {
    num: "02",
    title: "Event Content",
    blurb:
      "Customer interviews, event recaps and highlight films that turn a three-day event into a year of content.",
    href: "/events/content",
  },
  {
    num: "03",
    title: "Video Storytelling",
    blurb:
      "Brand films and customer narratives. Portfolio includes See the Magic (646k views) and the Dynatrace IPO roadshow film.",
    href: "/events/video-storytelling",
  },
];

export default function EventsPage() {
  const keynotes = getPageBySlug("keynotes");

  return (
    <>
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-24">
          <p className="eyebrow mb-6">Events</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.05] tracking-tight max-w-3xl">
            Bringing{" "}
            <span className="italic text-accent">energy, clarity</span> and a
            story to the stage.
          </h1>
          <p className="mt-8 text-lg text-ink-muted max-w-2xl leading-relaxed">
            Available for keynote presentations, MC duties, and event content
            creation worldwide.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
            {tiles.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="bg-cream hover:bg-cream-alt transition-colors p-8 group flex flex-col"
              >
                <p className="font-serif text-sm text-accent">{t.num}</p>
                <h2 className="font-serif text-2xl font-medium mt-4 group-hover:text-accent transition-colors">
                  {t.title}
                </h2>
                <p className="text-ink-muted text-sm mt-3 leading-relaxed flex-1">
                  {t.blurb}
                </p>
                <span className="text-accent text-sm mt-6 inline-flex items-center gap-1">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {keynotes && (
        <section>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-accent prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: keynotes.content }}
            />
          </div>
        </section>
      )}
    </>
  );
}
