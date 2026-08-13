import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";

export const metadata: Metadata = {
  title: "About",
  description:
    "CMO at PointFive, keynote speaker represented by Saxton, host of Tech Seeking Human, musician and cabinetmaker based in Melbourne.",
};

const arc = [
  {
    year: "Now",
    company: "PointFive",
    role: "Chief Marketing Officer",
    body: "Building the marketing engine at PointFive — a category-defining company at the intersection of AI and cloud cost.",
  },
  {
    year: "2023–24",
    company: "DataRobot",
    role: "AI evangelist & advisor",
    body: "Public evangelism for enterprise AI: keynotes, podcasts, and press across APAC and North America during the generative-AI inflection.",
  },
  {
    year: "2015–23",
    company: "Dynatrace",
    role: "CMO, APAC · then global brand & storytelling",
    body: "Led APAC marketing through the NYSE IPO. Produced See the Magic (646k views), the IPO roadshow film, and Perform mainstage keynotes.",
  },
  {
    year: "Earlier",
    company: "Compuware · Various",
    role: "Marketing, product & press",
    body: "Two decades helping technical companies find a human voice — regularly quoted in Fast Company, BBC, Fox News, Mashable, Sky Business.",
  },
];

const sides = [
  {
    tag: "Podcast",
    title: "Tech Seeking Human",
    body: "Long-form conversations at the intersection of technology and humanity. Guests include Magic Johnson, Marc Randolph, Baratunde Thurston, Hannah Fry, Adam Cheyer, Gene Kim and Libby Trickett.",
    href: "/podcasts",
    linkLabel: "Listen",
  },
  {
    tag: "Music",
    title: "Two albums, one ongoing project",
    body: "Wish It All Away (2009) earned 4/5 in the Sydney Morning Herald and had a track placed on ABC drama The Lying Game. These Lies That Divide Us (2023) is out now on every streaming platform.",
    href: "/music",
    linkLabel: "Hear it",
  },
  {
    tag: "Workshop",
    title: "Cabinetry & making",
    body: "The workshop is the thing that keeps the rest honest. Wood, joinery, tools — the same slow, satisfying loop of design, build, test, revise that shows up in every other part of my work.",
    href: "/passions",
    linkLabel: "See more",
  },
  {
    tag: "Peloton",
    title: "Ambassador, Australia",
    body: "Long-time rider and official ambassador. Curated playlists, class picks and thoughts on why the community works.",
    href: "/passions/peloton",
    linkLabel: "Follow along",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Marketing leader, keynote speaker, podcast host — and{" "}
            <span className="italic text-brass">cabinetmaker</span> in the
            evenings.
          </>
        }
        lede="I&rsquo;m Dave Anderson. Chief Marketing Officer at PointFive, represented for speaking by Saxton, and the host of Tech Seeking Human. I spend my career explaining hard technology to non-technical audiences, and my weekends explaining wood joints to nobody in particular."
      />

      {/* Bio */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <ShopTag>Bio</ShopTag>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-5 leading-tight">
                Twenty years at the edge of marketing and technology.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-lg text-ink-soft leading-relaxed">
              <p>
                I grew up thinking I&rsquo;d be a musician, went to work in
                technology to pay rent, and discovered a career where the two
                weren&rsquo;t as far apart as they looked. Every serious
                marketing problem I&rsquo;ve ever worked on has been, at heart,
                a storytelling problem in disguise.
              </p>
              <p>
                Most recently that&rsquo;s meant taking Dynatrace through an
                NYSE IPO as APAC CMO, then evangelising AI at DataRobot, and
                now building the marketing function at{" "}
                <span className="text-ink font-medium">PointFive</span>. In
                parallel I keep{" "}
                <Link href="/podcasts" className="text-brass hover:underline underline-offset-4">
                  Tech Seeking Human
                </Link>{" "}
                running, put out an album every decade or so, and sneak into
                the workshop as often as I&rsquo;m allowed.
              </p>
              <p>
                Australian, based in Melbourne, will travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career arc */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Career arc</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            The short version, in four stops.
          </h2>
          <TickRule className="mt-10 mb-6 opacity-50" />
          <div className="space-y-8 mt-10">
            {arc.map((a) => (
              <div
                key={a.company}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-8 border-b border-rule-soft last:border-b-0 last:pb-0"
              >
                <div className="md:col-span-2">
                  <p className="font-mono text-xs tracking-widest uppercase text-verdigris-dark">
                    {a.year}
                  </p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-xl font-medium text-ink">
                    {a.company}{" "}
                    <span className="text-ink-muted font-normal italic">
                      · {a.role}
                    </span>
                  </h3>
                  <p className="mt-2 text-ink-soft leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The other things */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Around the edges</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            The projects that keep the main job honest.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {sides.map((s) => (
              <div
                key={s.title}
                className="border border-rule bg-kraft-soft rounded-md p-8 flex flex-col"
              >
                <p className="font-mono text-xs tracking-widest uppercase text-brass-dark">
                  {s.tag}
                </p>
                <h3 className="font-serif text-2xl font-light mt-3 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed flex-1">
                  {s.body}
                </p>
                <Link
                  href={s.href}
                  className="mt-6 text-brass text-sm hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  {s.linkLabel} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow text-brass-soft">Get in touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-3 leading-tight text-kraft max-w-2xl">
              Speaking, podcasts, PointFive, or a cup of coffee in Melbourne?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brass text-ink hover:bg-brass-dark hover:text-kraft transition-colors font-medium px-6 py-3 rounded-full text-sm shrink-0"
          >
            Say hello →
          </Link>
        </div>
      </section>
    </>
  );
}
