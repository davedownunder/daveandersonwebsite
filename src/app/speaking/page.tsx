import type { Metadata } from "next";
import Link from "next/link";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Keynote speaker represented by Saxton Speakers Bureau. Booked by CBA, NAB, Telstra, Contentsquare, Qualtrics, Forrester, Red Hat Summit, AWS re:Invent, Lloyds and Mobile World Congress.",
};

const enterprises = [
  "Commonwealth Bank",
  "NAB",
  "Telstra",
  "Contentsquare",
  "Qualtrics",
  "Lloyds Banking Group",
  "Dynatrace",
];

const conferences = [
  "AWS re:Invent",
  "Red Hat Summit",
  "Mobile World Congress",
  "Shoptalk",
  "CX Summit",
  "CX Circle",
];

const analystEvents = ["Forrester Digital Summit", "Gartner"];

const stories = [
  {
    year: "Las Vegas · 2020",
    title: "Dynatrace Perform",
    body: "Grew Perform from a 500-person event into a 4,000+ attendee global conference — then pivoted to virtual during COVID, drawing 30,000+ attendees. Opened the 2020 mainstage with an original rap performance to set up the customer keynotes that followed.",
  },
  {
    year: "London · Ongoing",
    title: "Forrester Digital Summit",
    body: "Keynote on how AI is remaking the marketing-and-technology stack — delivered to CMOs and CIOs across EMEA.",
  },
  {
    year: "Sydney · 2015",
    title: "LinkedIn Sales Summit — “Markesales”",
    body: "The case for collapsing marketing and sales into one discipline, delivered to the top LinkedIn sales leaders across APAC. Awarded Best Presentation of the Summit.",
  },
  {
    year: "NYSE · 2019",
    title: "Dynatrace IPO roadshow",
    body: "Lead writer of the Dynatrace S-1 narrative, investor deck and IPO roadshow story — the on-stage story that took the company public.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">
          <p className="eyebrow mb-5">Speaking · Keynotes</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.05] tracking-tight text-ink max-w-4xl">
            Mainstage keynotes on{" "}
            <span className="italic text-brass">
              technology, marketing and AI
            </span>
            .
          </h1>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
            For twenty years I&rsquo;ve been the marketer explaining
            technology to non-technical audiences &mdash; and the
            technologist explaining marketing to boards. On stage that shows
            up as clear, funny, story-first keynotes that leave a room with
            something they can use on Monday.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.saxton.com.au/speakers/dave-anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Book via Saxton
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Or email direct
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip — verifiable credentials */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { big: "3 continents", small: "APAC · North America · EMEA" },
              { big: "4,000+", small: "at Dynatrace Perform, Las Vegas" },
              { big: "30,000+", small: "virtual audience, Perform 2020" },
              { big: "Saxton", small: "represented in Australia & NZ" },
            ].map((s) => (
              <div key={s.big} className="text-left md:text-center">
                <p className="font-serif text-4xl md:text-5xl font-light text-kraft leading-none">
                  {s.big}
                </p>
                <p className="mt-2 text-sm text-kraft/70 font-mono uppercase tracking-widest">
                  {s.small}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                the fastest way to lock a date. For everything else &mdash;
                brief calls, sponsor conversations, podcast guest requests
                &mdash; email works.
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

      {/* Client roster grouped by kind */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Selected client list</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-3xl leading-tight">
            Some of the stages where Dave has delivered keynote presentations.
          </h2>
          <TickRule className="mt-10 mb-10 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[
              { heading: "Enterprises", items: enterprises },
              { heading: "Conferences", items: conferences },
              { heading: "Analyst events", items: analystEvents },
            ].map((group) => (
              <div key={group.heading}>
                <p className="font-mono text-xs tracking-widest uppercase text-verdigris-dark mb-5">
                  {group.heading}
                </p>
                <ul className="space-y-3">
                  {group.items.map((c) => (
                    <li
                      key={c}
                      className="font-serif text-2xl md:text-[1.65rem] leading-tight text-ink"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

      {/* See it in the media */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">See more</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
              Broadcast, press and podcast appearances &mdash; the
              off-stage story.
            </h2>
          </div>
          <Link
            href="/media"
            className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm shrink-0"
          >
            View the Media page →
          </Link>
        </div>
      </section>
    </>
  );
}
