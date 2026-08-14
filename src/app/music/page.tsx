import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPageBySlug, renderContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Music",
  description: "Dave Anderson's music — singer, songwriter, and performer.",
};

const albums = [
  {
    title: "These Lies That Divide Us",
    year: "2023",
    cover: "/media/album-cover-poster-66445f5f.jpg",
    blurb: "Second full-length. Rock, storytelling, raw emotion.",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/album/2nrNpSbpWPsZaDOyfu3EaB" },
      { label: "Apple Music", href: "https://music.apple.com/us/album/these-lies-that-divide-us/1695041837" },
    ],
  },
  {
    title: "Wish It All Away",
    year: "2009",
    cover:
      "/media/ab67616d0000b2731dbc32de9163e99338f2ff61-97d16ce2.jpeg",
    blurb: "Debut album. 4/5 in the Sydney Morning Herald. A track from it was placed on the ABC drama The Lying Game.",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/album/1zX2Q7Dq2zTJ8Ksn5ChJQ6" },
      { label: "Apple Music", href: "https://music.apple.com/us/album/wish-it-all-away/280155032" },
    ],
  },
];

export default function MusicPage() {
  const page = getPageBySlug("music") || getPageBySlug("music-2");

  return (
    <>
      <PageHeader
        eyebrow="Music"
        title={
          <>
            Songs about{" "}
            <span className="italic text-brass">the things that divide</span>{" "}
            and the things that hold.
          </>
        }
        lede="Two albums. One ongoing project. Available everywhere you stream."
      />

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {albums.map((a) => (
              <div key={a.title} className="flex flex-col">
                <div className="aspect-square overflow-hidden rounded-md border border-rule bg-kraft-alt">
                  <img
                    src={a.cover}
                    alt={a.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6">
                  <p className="eyebrow eyebrow-verdigris">Album · {a.year}</p>
                  <h2 className="font-serif text-3xl font-light mt-2 leading-tight">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-ink-soft leading-relaxed">{a.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {a.links.map((l) => (
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
              dangerouslySetInnerHTML={{
                __html: renderContent(page.content),
              }}
            />
          </div>
        </section>
      )}
    </>
  );
}
