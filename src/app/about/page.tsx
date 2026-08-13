import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";

export const metadata: Metadata = {
  title: "About",
  description:
    "CMO at PointFive (the AI Efficiency OS). VP Product Marketing at Contentsquare. VP Marketing & AI Evangelist at DataRobot. SVP Marketing / CMO at Dynatrace through the 2019 NYSE IPO. Australian, based in Boston.",
};

const arc = [
  {
    year: "Now",
    range: "Dec 2025 — present · Boston, MA",
    company: "PointFive",
    role: "Chief Marketing Officer",
    body: "Building the marketing function at PointFive — the AI Efficiency OS. Directed communications for the $60M Series B led by Accel, launched the platform and TokenShift at FinOps X, and rebuilt the brand and website (Astro, Vercel, GitHub) to +183% search impressions. Runs an AI-native team with Claude and Claude Code as production infrastructure.",
  },
  {
    year: "2022–2025",
    range: "3y 5m · Boston, MA",
    company: "Contentsquare",
    role: "VP Product Marketing",
    body: "Owned platform comms and the “One Platform” narrative. Developed the value-based sales pitch adopted globally by field and partner teams. Launched Contentsquare Sense (AI) — the company's most successful product rollout to date at >80% adoption in a single quarter. Managed a global team of 10+ product marketers. Led analyst relations across Forrester Wave, Gartner Market Guides, and IDC Landscape Reports.",
  },
  {
    year: "2021–2022",
    range: "11m · Melbourne, AU",
    company: "DataRobot",
    role: "VP Marketing & AI Evangelist",
    body: "Worked with global and APAC organisations to shape AI strategy and connect priorities to real ML outcomes — especially in FSI and retail. Opened C-level conversations at regional FSI leaders. Weekly AMA sessions. Continued Tech Seeking Human throughout.",
  },
  {
    year: "2014–2021",
    range: "7y 6m · Melbourne → London → Boston",
    company: "Dynatrace",
    role: "Senior Marketing Director APAC → VP EMEA/APAC → SVP Marketing / CMO",
    body: "Led Dynatrace's transformation from legacy APM vendor to cloud-native AI-powered SaaS platform, culminating in the NYSE IPO in 2019 — where Dave was lead writer of the S-1 narrative, investor deck, and roadshow story. Transformed Dynatrace Perform from a 500-person event into a 4,000+ attendee global conference, then pivoted to virtual for 30,000+ attendees during COVID. Co-led analyst relations with Gartner, Forrester and IDC — Leader in the Gartner Magic Quadrant every year during tenure.",
  },
  {
    year: "2006–2014",
    range: "8y · Sydney / APJ",
    company: "HP",
    role: "TSG Marketing Comms → Enterprise Marketing APJ",
    body: "Eight years across HP Australia and the APJ region — B2B integrated marketing communications, paid search budget management across major APJ markets, regional social media strategy execution, brand execution and campaign deployment for HP Enterprise Business.",
  },
  {
    year: "Earlier",
    range: "2004–2006 · Perth / Sydney",
    company: "Precedent · Oxygen Learning",
    role: "Agency-side marketing & account work",
    body: "Started on the agency side — proposals, brand development, communications strategy, workshops and training. Studied at The University of Western Australia (BSc Human Movement, MBA Management).",
  },
];

const sides = [
  {
    tag: "Podcast",
    title: "Tech Seeking Human",
    body: "Long-form conversations at the intersection of technology and humanity. Currently focused on the economics of the token — how AI usage is priced, measured and optimised as it becomes the unit of work. Guests include Magic Johnson, Marc Randolph, Baratunde Thurston, Hannah Fry, Adam Cheyer, Gene Kim, Tricia Wang and Max Tegmark.",
    href: "/podcasts",
    linkLabel: "Listen",
  },
  {
    tag: "Music",
    title: "Two albums, one ongoing project",
    body: "Wish It All Away (2009) earned 4/5 in the Sydney Morning Herald and had a track placed on ABC drama The Lying Game. These Lies That Divide Us (2023) is out on every streaming platform.",
    href: "/music",
    linkLabel: "Hear it",
  },
  {
    tag: "Home stack",
    title: "Home Assistant & UniFi",
    body: "The passion project — a self-hosted home automation and networking stack, tuned in the evenings. Same slow, satisfying loop of design, build, test, revise that shows up in every other part of the work.",
    href: "/passions",
    linkLabel: "See more",
  },
  {
    tag: "Peloton",
    title: "Ambassador",
    body: "Long-time rider and Peloton ambassador. Curated playlists, class picks and thoughts on why the community works.",
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
            CMO, keynote speaker, podcast host — and I never market a product
            I can&rsquo;t{" "}
            <span className="italic text-brass">demo and understand deeply</span>.
          </>
        }
        lede="I&rsquo;m Dave Anderson. Chief Marketing Officer at PointFive, the AI Efficiency OS. Represented for speaking by Saxton. Host of Tech Seeking Human. Australian, based in Boston."
      />

      {/* Bio */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <ShopTag>Bio</ShopTag>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-5 leading-tight">
                Storytelling more than strategy. Clarity over cleverness.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-lg text-ink-soft leading-relaxed">
              <p>
                I&rsquo;ve always believed that to understand people, or
                technology, you need to get close to how it works. That&rsquo;s
                why I build with AI tools daily, host conversations with
                founders and technologists, and never market a product I
                can&rsquo;t demo and understand deeply.
              </p>
              <p>
                My career has been about building stories that scale:
                rebranding and repositioning{" "}
                <span className="text-ink font-medium">Dynatrace</span> ahead
                of its IPO (lead writer on the S-1, investor deck, and
                roadshow), driving platform GTM at{" "}
                <span className="text-ink font-medium">Contentsquare</span>,
                and evangelising enterprise AI at{" "}
                <span className="text-ink font-medium">DataRobot</span>. Today
                I&rsquo;m CMO at{" "}
                <span className="text-ink font-medium">PointFive</span> —
                where Claude and Claude Code are core production
                infrastructure for an AI-native marketing team.
              </p>
              <p>
                I also host{" "}
                <Link href="/podcasts" className="text-brass hover:underline underline-offset-4">
                  Tech Seeking Human
                </Link>
                , currently focused on the economics of the token: how AI
                usage is priced, measured and optimised as it becomes the
                unit of work.
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
            Twenty-two years of building marketing engines for technology
            companies.
          </h2>
          <TickRule className="mt-10 mb-6 opacity-50" />
          <div className="space-y-8 mt-10">
            {arc.map((a) => (
              <div
                key={a.company}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-8 border-b border-rule-soft last:border-b-0 last:pb-0"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-xs tracking-widest uppercase text-verdigris-dark">
                    {a.year}
                  </p>
                  <p className="text-xs text-ink-muted mt-1 font-mono">
                    {a.range}
                  </p>
                </div>
                <div className="md:col-span-9">
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
            <p className="eyebrow" style={{ color: "#c7a35a" }}>Get in touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-3 leading-tight text-kraft max-w-2xl">
              Speaking, podcasts, PointFive, or a cup of coffee in Boston?
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
