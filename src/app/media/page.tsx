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

const broadcast = [
  {
    outlet: "Fox News",
    kind: "AI Agent Holiday Shopping",
    year: "2025",
    href: "https://youtu.be/G1Y9lfSuOaU",
    thumb:
      "https://i0.wp.com/daveanderson.com.au/wp-content/uploads/2025/12/Untitled-design.jpg",
  },
  {
    outlet: "Fox News",
    kind: "ChatBots and eCommerce",
    year: "2024",
    href: "https://youtu.be/3BidKWCa2SA",
  },
  {
    outlet: "Fox News",
    kind: "AI Holiday Shopping",
    year: "2024",
    href: "https://youtu.be/052PgYy8UEI",
  },
  {
    outlet: "Fox News",
    kind: "WhatsApp global outage",
    year: "Prev.",
    href: "https://www.foxnews.com/tech/whatsapp-back-up-after-global-outage",
  },
  {
    outlet: "Sky Business News",
    kind: "Australian Online Retailers — response times",
    year: "2016",
    href: "https://www.youtube.com/watch?v=GQGIQNsT7nM",
  },
];

const press = [
  {
    outlet: "Fast Company",
    story: "How Business Owners Can Use AI",
    href: "https://www.fastcompany.com/91164416/how-business-owners-can-use-ai",
  },
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
    outlet: "The Australian",
    story: "Bylines and commentary",
    href: null,
  },
];

const guestPodcasts = [
  {
    show: "How I Made It in Marketing",
    thumb:
      "https://i0.wp.com/daveanderson.com.au/wp-content/uploads/2025/08/Screenshot-2025-08-18-at-12.01.02-pm.png",
  },
  {
    show: "Tech Talks Daily",
    thumb:
      "https://i0.wp.com/daveanderson.com.au/wp-content/uploads/2025/08/Screenshot-2025-08-18-at-12.01.13-pm.png",
  },
  {
    show: "Software Sales Podcast",
    thumb:
      "https://i0.wp.com/daveanderson.com.au/wp-content/uploads/2025/12/Screenshot-2025-12-02-at-4.43.46-pm.png",
  },
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

      {/* Press logos row — high-impact banner */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-14">
          <p
            className="eyebrow text-center mb-6"
            style={{ color: "#c7a35a" }}
          >
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {[
              "Fox News",
              "BBC",
              "Fast Company",
              "Mashable",
              "Sky Business",
              "IT Pro",
              "Domain",
              "The Australian",
            ].map((logo) => (
              <span
                key={logo}
                className="font-serif text-2xl md:text-3xl text-kraft/90"
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
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <p className="eyebrow mb-3">Broadcast</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
                On camera &mdash; Fox News and Sky Business.
              </h2>
            </div>
          </div>
          <TickRule className="opacity-50 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {broadcast.map((b) => (
              <a
                key={b.kind + b.year}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-rule bg-kraft-soft rounded-md overflow-hidden hover:border-brass hover:bg-kraft-alt transition-colors"
              >
                {b.thumb ? (
                  <div className="aspect-video bg-kraft-alt overflow-hidden">
                    <img
                      src={b.thumb}
                      alt={`${b.outlet} — ${b.kind}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-ink flex items-center justify-center">
                    <span className="font-serif text-3xl text-kraft/80">
                      {b.outlet}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <p className="eyebrow eyebrow-verdigris">
                    {b.outlet} · {b.year}
                  </p>
                  <h3 className="font-serif text-xl font-medium mt-2 leading-snug text-ink group-hover:text-brass transition-colors">
                    {b.kind}
                  </h3>
                  <p className="text-brass text-xs mt-3 inline-flex items-center gap-1">
                    Watch <span aria-hidden>→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">Press</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            Bylines, quotes and features.
          </h2>
          <TickRule className="mt-8 mb-8 opacity-50" />
          <div className="divide-y divide-rule-soft border border-rule rounded-md bg-kraft">
            {press.map((p) => {
              const inner = (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-6 md:p-7">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase text-brass-dark">
                      {p.outlet}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-light mt-2 leading-snug text-ink">
                      {p.story}
                    </h3>
                  </div>
                  {p.href && (
                    <span className="text-brass text-sm inline-flex items-center gap-1 shrink-0">
                      Read the piece <span aria-hidden>→</span>
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
                  className="block hover:bg-kraft-soft transition-colors group"
                >
                  {inner}
                </a>
              ) : (
                <div key={p.outlet + p.story}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Podcast guest appearances */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <ShopTag>Podcast guest</ShopTag>
          <h2 className="font-serif text-3xl md:text-4xl font-light mt-5 max-w-2xl leading-tight">
            Recent long-form interviews on other people&rsquo;s shows.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {guestPodcasts.map((g) => (
              <div
                key={g.show}
                className="border border-rule bg-kraft-soft rounded-md overflow-hidden"
              >
                <div className="aspect-video bg-kraft-alt overflow-hidden">
                  <img
                    src={g.thumb}
                    alt={g.show}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-medium leading-snug text-ink">
                    {g.show}
                  </h3>
                </div>
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
