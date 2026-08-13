import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Keynote speaker and MC represented by Saxton Speakers. Booked by CBA, NAB, Telstra, Contentsquare, Forrester, Red Hat, AWS re:Invent and Mobile World Congress.",
};

const clients = [
  "Commonwealth Bank",
  "NAB",
  "Telstra",
  "Contentsquare",
  "Qualtrics",
  "Forrester",
  "Red Hat Summit",
  "AWS re:Invent",
  "Lloyds Banking Group",
  "Dynatrace",
  "Shoptalk",
  "CX Summit",
  "Gartner",
  "Mobile World Congress",
];

const stories = [
  {
    year: "2020",
    title: "Dynatrace Perform, Las Vegas",
    body: "Opened the Dynatrace Perform 2020 mainstage with an original rap performance to 4,000+ enterprise customers — the customer stories that followed all landed harder for it.",
  },
  {
    year: "2023",
    title: "Forrester Digital Summit, London",
    body: "Keynote on how AI is remaking the marketing-and-technology stack — delivered to CMOs and CIOs across EMEA.",
  },
  {
    year: "2022",
    title: "LinkedIn Sales Leaders Conference — “Markesales”",
    body: "Argued the case for collapsing marketing and sales into one discipline, to a room of the top LinkedIn sales leaders across APAC.",
  },
  {
    year: "2023",
    title: "CX Circle, Australia",
    body: "MC and keynote across two days on customer experience in an AI-first world.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking · Keynotes & MC"
        title={
          <>
            Mainstage keynotes and MC work on{" "}
            <span className="italic text-brass">technology, marketing and AI</span>.
          </>
        }
        lede="For twenty years I&rsquo;ve been the marketer explaining technology to non-technical audiences — and the technologist explaining marketing to boards. On stage that shows up as clear, funny, story-first talks that leave a room with something they can use on Monday."
      />

      {/* Saxton block */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <ShopTag>Represented by</ShopTag>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-5 leading-tight text-ink">
                Saxton Speakers Bureau, Australia
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed max-w-2xl">
                For availability, fee ranges and confirmed bookings, Saxton is
                the fastest way to lock a date. For everything else — brief
                calls, sponsor conversations, podcast guest requests — email
                works.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right space-y-3">
              <a
                href="https://www.saxton.com.au/speakers/dave-anderson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-5 py-3 rounded-full text-sm"
              >
                Book via Saxton
                <span aria-hidden>→</span>
              </a>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-5 py-3 rounded-full text-sm"
                >
                  Or email direct
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client roster */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Selected client list</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light max-w-3xl leading-tight">
            Some of the stages, sales kickoffs and conferences Dave has spoken
            at or MC&rsquo;d.
          </h2>
          <TickRule className="mt-8 mb-8 opacity-50" />
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 font-serif text-lg text-ink">
            {clients.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-brass mt-1.5 text-xs">▪</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stories */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">From the road</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            A handful of keynotes I&rsquo;m still proud of.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {stories.map((s) => (
              <div
                key={s.title}
                className="border border-rule bg-kraft rounded-md p-7 flex flex-col"
              >
                <p className="font-mono text-xs tracking-widest uppercase text-verdigris-dark">
                  {s.year}
                </p>
                <h3 className="font-serif text-xl font-medium mt-2 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub sections */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Also available</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light max-w-3xl leading-tight">
            The rest of the on-stage practice.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule rounded-md overflow-hidden mt-10">
            <Link
              href="/speaking/content"
              className="bg-kraft hover:bg-kraft-soft transition-colors p-8 group flex flex-col"
            >
              <p className="font-mono text-xs tracking-widest uppercase text-brass-dark">
                02
              </p>
              <h3 className="font-serif text-2xl font-medium mt-3 group-hover:text-brass transition-colors">
                Event Content
              </h3>
              <p className="text-ink-soft mt-3 leading-relaxed">
                Customer interviews, event recaps and highlight films — three
                days of event turned into a year of content.
              </p>
              <span className="text-brass text-sm mt-6 inline-flex items-center gap-1">
                Explore <span aria-hidden>→</span>
              </span>
            </Link>
            <Link
              href="/speaking/video"
              className="bg-kraft hover:bg-kraft-soft transition-colors p-8 group flex flex-col"
            >
              <p className="font-mono text-xs tracking-widest uppercase text-brass-dark">
                03
              </p>
              <h3 className="font-serif text-2xl font-medium mt-3 group-hover:text-brass transition-colors">
                Video Storytelling
              </h3>
              <p className="text-ink-soft mt-3 leading-relaxed">
                Brand and customer films built to travel. See the Magic (646k
                views) and the Dynatrace IPO roadshow film.
              </p>
              <span className="text-brass text-sm mt-6 inline-flex items-center gap-1">
                Explore <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
