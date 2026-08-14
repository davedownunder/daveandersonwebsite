import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Where Dave has appeared: Fox News, BBC, Fast Company, Sky Business, Mashable, IT Pro, Domain, plus podcast interviews with How I Made It in Marketing, Tech Talks Daily and the Software Sales Podcast.",
};

// YouTube's own hqdefault thumbnails are guaranteed to exist for any public
// video and never bring a white background with them — safer than the WP
// screenshot exports that were leaking white boxes onto the page.
const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const broadcast = [
  {
    outlet: "Fox News",
    kind: "AI Agent Holiday Shopping",
    year: "2025",
    href: "https://youtu.be/G1Y9lfSuOaU",
    thumb: ytThumb("G1Y9lfSuOaU"),
  },
  {
    outlet: "Fox News",
    kind: "ChatBots and eCommerce",
    year: "2024",
    href: "https://youtu.be/3BidKWCa2SA",
    thumb: ytThumb("3BidKWCa2SA"),
  },
  {
    outlet: "Fox News",
    kind: "AI Holiday Shopping",
    year: "2024",
    href: "https://youtu.be/052PgYy8UEI",
    thumb: ytThumb("052PgYy8UEI"),
  },
  {
    outlet: "Sky Business News",
    kind: "Australian online retailers — response times",
    year: "2016",
    href: "https://www.youtube.com/watch?v=GQGIQNsT7nM",
    thumb: ytThumb("GQGIQNsT7nM"),
  },
];

const featuredPress = {
  outlet: "Fast Company",
  topic: "AI for business owners",
  headline: "How Business Owners Can Use AI",
  href: "https://www.fastcompany.com/91164416/how-business-owners-can-use-ai",
};

const otherPress = [
  {
    outlet: "BBC",
    story: "Business tech commentary",
    href: "https://www.bbc.com/news/business-37100091",
  },
  {
    outlet: "Mashable",
    story: "DDoS attack on Australian IoT",
    href: "http://mashable.com/2016/10/23/ddos-attack-australian-iot/",
  },
  {
    outlet: "IT Pro",
    story: "“IoT could become a major burden”",
    href: "https://www.itproportal.com/news/iot-could-become-a-major-burden-execs-fear",
  },
  {
    outlet: "Domain",
    story: "A look inside the connected home of tomorrow",
    href: "https://www.domain.com.au/living/a-look-inside-this-incredibly-connected-home-of-tomorrow-1182719",
  },
  {
    outlet: "Fox News (online)",
    story: "WhatsApp back up after global outage",
    href: "https://www.foxnews.com/tech/whatsapp-back-up-after-global-outage",
  },
  {
    outlet: "The Australian",
    story: "Bylines and commentary",
    href: null,
  },
];

// Typographic podcast cards — the WP screenshot exports were bringing white
// backgrounds. Serif show name on kraft is on-brand and always looks right.
const guestPodcasts = [
  {
    show: "How I Made It in Marketing",
    kind: "Long-form interview",
    year: "2025",
  },
  {
    show: "Tech Talks Daily",
    kind: "Guest conversation",
    year: "2025",
  },
  {
    show: "Software Sales Podcast",
    kind: "GTM & marketing deep-dive",
    year: "2025",
  },
];

const outlets = [
  "Fox News",
  "BBC",
  "Fast Company",
  "Mashable",
  "Sky Business",
  "IT Pro",
  "Domain",
  "The Australian",
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title={
          <>
            <span className="italic text-brass">Where I&rsquo;ve appeared</span>{" "}
            &mdash; broadcast, press, and podcast interviews.
          </>
        }
        lede="A decade of commentary on retail, performance, AI and the internet. If you&rsquo;re looking for a source on enterprise AI, the economics of the token, or how marketing works inside AI-native companies — this is the record."
      />

      {/* As-seen-in banner */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-14">
          <p
            className="eyebrow text-center mb-6"
            style={{ color: "#c7a35a" }}
          >
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {outlets.map((logo) => (
              <span
                key={logo}
                className="font-serif text-xl md:text-2xl text-kraft/90"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Broadcast */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">Broadcast</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            On camera &mdash; Fox News and Sky Business.
          </h2>
          <TickRule className="mt-8 mb-8 opacity-50" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {broadcast.map((b) => (
              <a
                key={b.kind}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-rule bg-kraft-soft rounded-md overflow-hidden hover:border-brass transition-colors"
              >
                <div className="aspect-video bg-ink overflow-hidden relative">
                  <img
                    src={b.thumb}
                    alt={`${b.outlet} — ${b.kind}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Play glyph */}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-12 h-12 rounded-full bg-brass text-ink flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                        <path d="M2 1l11 6-11 6z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[0.65rem] tracking-widest uppercase text-verdigris-dark">
                    {b.outlet} · {b.year}
                  </p>
                  <h3 className="font-serif text-lg font-medium mt-2 leading-snug text-ink group-hover:text-brass transition-colors">
                    {b.kind}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured press piece */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">Featured press</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            The story worth pulling out.
          </h2>

          <a
            href={featuredPress.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 block border border-rule bg-kraft rounded-md p-8 md:p-12 hover:border-brass transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-9">
                <ShopTag>{featuredPress.outlet}</ShopTag>
                <p className="font-mono text-xs tracking-widest uppercase text-verdigris-dark mt-5">
                  {featuredPress.topic}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mt-3 leading-[1.05] text-ink group-hover:text-brass transition-colors">
                  {featuredPress.headline}
                </h3>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="inline-flex items-center gap-2 border border-rule group-hover:border-brass group-hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm">
                  Read the piece
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Other press — grid */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">More press</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            Quoted, cited, credited.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {otherPress.map((p) => {
              const card = (
                <div className="h-full border border-rule bg-kraft-soft rounded-md p-6 flex flex-col hover:border-brass hover:bg-kraft-alt transition-colors group">
                  <p className="font-mono text-[0.65rem] tracking-widest uppercase text-brass-dark">
                    {p.outlet}
                  </p>
                  <h3 className="font-serif text-xl font-light mt-3 leading-snug text-ink flex-1 group-hover:text-brass transition-colors">
                    {p.story}
                  </h3>
                  {p.href ? (
                    <span className="text-brass text-xs mt-5 inline-flex items-center gap-1">
                      Read the piece <span aria-hidden>→</span>
                    </span>
                  ) : (
                    <span className="text-ink-muted text-xs mt-5 font-mono uppercase tracking-widest">
                      Byline
                    </span>
                  )}
                </div>
              );
              return p.href ? (
                <a
                  key={p.outlet + p.story}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <div key={p.outlet + p.story}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Podcast guest — typographic cards, no image screenshots */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">Podcast guest</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            Recent long-form interviews on other people&rsquo;s shows.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {guestPodcasts.map((g) => (
              <div
                key={g.show}
                className="border border-rule bg-kraft rounded-md p-8 flex flex-col min-h-[220px] relative overflow-hidden"
              >
                {/* Decorative corner mark */}
                <span
                  aria-hidden
                  className="absolute top-3 right-3 font-mono text-[0.6rem] tracking-widest uppercase text-brass-dark opacity-60"
                >
                  {g.year}
                </span>
                <p className="font-mono text-[0.65rem] tracking-widest uppercase text-verdigris-dark">
                  {g.kind}
                </p>
                <h3 className="font-serif text-2xl md:text-[1.65rem] font-light mt-4 leading-tight text-ink">
                  {g.show}
                </h3>
                <TickRule className="mt-auto opacity-40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Media enquiries</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
              Need a source, a comment, or a guest?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm shrink-0"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
