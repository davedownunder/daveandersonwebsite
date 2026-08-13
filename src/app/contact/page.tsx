import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a keynote via Saxton, or email Dave direct for podcasts, sponsorships, and everything else.",
};

const routes = [
  {
    tag: "Keynotes & MC",
    heading: "Book via Saxton",
    body: "For confirmed dates, fees and availability, Saxton Speakers is the fastest path. They handle contracts, travel and logistics.",
    cta: { label: "Saxton Speakers", href: "https://www.saxton.com.au/speakers/dave-anderson", external: true },
    tone: "brass",
  },
  {
    tag: "Everything else",
    heading: "Email direct",
    body: "Podcast appearances, sponsor conversations for Twisted, media enquiries, PointFive-related questions, or just to say hello.",
    cta: { label: "daveando@gmail.com", href: "mailto:daveando@gmail.com", external: false },
    tone: "verdigris",
  },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daveando" },
  { label: "YouTube · Tech Seeking Human", href: "https://www.youtube.com/@techseekinghuman" },
  { label: "Spotify · Tech Seeking Human", href: "https://open.spotify.com/show/0yrGPFIScz9aok2qwzsVVt" },
  { label: "Spotify · Dave Anderson (music)", href: "https://open.spotify.com/album/2nrNpSbpWPsZaDOyfu3EaB" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Two doors:{" "}
            <span className="italic text-brass">Saxton</span> for keynotes,{" "}
            <span className="italic text-verdigris">email</span> for the rest.
          </>
        }
        lede="Please pick the right one &mdash; it saves a step for both of us."
      />

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((r) => (
              <div
                key={r.heading}
                className="border border-rule bg-kraft-soft rounded-md p-8 md:p-10 flex flex-col"
              >
                <ShopTag>{r.tag}</ShopTag>
                <h2 className="font-serif text-3xl font-light mt-5 leading-tight text-ink">
                  {r.heading}
                </h2>
                <p className="mt-4 text-ink-soft leading-relaxed flex-1">
                  {r.body}
                </p>
                <a
                  href={r.cta.href}
                  target={r.cta.external ? "_blank" : undefined}
                  rel={r.cta.external ? "noopener noreferrer" : undefined}
                  className={`mt-8 inline-flex items-center gap-2 font-medium px-5 py-3 rounded-full text-sm transition-colors ${
                    r.tone === "brass"
                      ? "bg-ink text-kraft hover:bg-brass hover:text-ink"
                      : "bg-verdigris text-kraft hover:bg-verdigris-dark"
                  }`}
                >
                  {r.cta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Elsewhere</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light max-w-3xl leading-tight">
            Find me on the usual platforms.
          </h2>
          <div className="flex flex-wrap gap-2 mt-8">
            {social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-5 py-2.5 rounded-full text-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
