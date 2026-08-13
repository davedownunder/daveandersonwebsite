import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "Tech Seeking Human, hosted by Dave Anderson, and Stuart MacGill: Twisted.",
};

const shows = [
  {
    title: "Tech Seeking Human",
    tag: "Hosted",
    desc: "Long-form interviews at the intersection of technology and humanity. Guests include Magic Johnson, Marc Randolph, Baratunde Thurston, Hannah Fry, Adam Cheyer, Gene Kim and Libby Trickett.",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/show/0yrGPFIScz9aok2qwzsVVt" },
      { label: "Apple Podcasts", href: "https://podcasts.apple.com/au/podcast/tech-seeking-human/id1571011755" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UCIMxTvRKb6tJqvlzesZHFuA" },
      { label: "techseekinghuman.ai", href: "http://techseekinghuman.ai" },
    ],
  },
  {
    title: "Stuart MacGill: Twisted",
    tag: "Produced",
    desc: "An audio biography of the former Australian cricketer Stuart MacGill. 40+ planned episodes, told in his own voice.",
    links: [
      { label: "Producer overview", href: "https://vimeo.com/776852716" },
      { label: "Sponsorship: daveando@gmail.com", href: "mailto:daveando@gmail.com" },
    ],
  },
];

export default function PodcastsPage() {
  const page = getPageBySlug("podcasts");

  return (
    <>
      <PageHeader
        eyebrow="Podcasts"
        title={
          <>
            Long-form conversations with{" "}
            <span className="italic text-brass">remarkable people</span>.
          </>
        }
        lede="Host of Tech Seeking Human. Producer of Stuart MacGill: Twisted. Always on the lookout for the next great story."
      />

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shows.map((s) => (
              <div
                key={s.title}
                className="border border-rule bg-kraft-soft rounded-md p-8 md:p-10 flex flex-col"
              >
                <ShopTag>{s.tag}</ShopTag>
                <h2 className="font-serif text-3xl font-light mt-5 leading-tight">
                  {s.title}
                </h2>
                <p className="mt-5 text-ink-soft leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-4 py-2 rounded-full text-xs"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page && page.content && (
        <section>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-brass prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      )}
    </>
  );
}
