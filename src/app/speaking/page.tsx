import type { Metadata } from "next";
import Link from "next/link";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";
import VideoLightbox from "@/components/VideoLightbox";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Saxton-listed keynote speaker. Booked by CBA, NAB, Telstra, Contentsquare, Qualtrics, Forrester, Red Hat Summit, AWS re:Invent, Lloyds and Mobile World Congress.",
};

// Grouped client roster — the same names as before, sorted by the kind of
// event so the sheer breadth is legible at a glance.
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

// Speaking samples. All verified against YouTube's oembed API; each has a
// maxresdefault thumbnail available, which the collage uses.
// NOTE: the old Dynatrace "Reinvention" IPO film (IzgmwbpHxWQ) referenced by
// the previous WordPress site is now unavailable, so it is deliberately omitted.
const feature = {
  id: "huWsHT-AX5s",
  note: "CX Circle · Keynote",
  title: "Succeeding at digital experience is a team sport",
  body:
    "Twenty minutes on why digital experience only works when the whole organisation owns it. Guitar and Socceroos jersey included.",
};

const talks = [
  {
    id: "8kZDfD7msuQ",
    note: "CX Circle Melbourne · 2025",
    title: "Analytics on autopilot: the AI revolution",
    body: "On stage with Monisha Voonna.",
  },
  {
    id: "bY6NPHZjoi4",
    note: "CX Circle · Sydney",
    title: "Customer experience in an AI-first world",
    body: "Full session.",
  },
  {
    id: "lBMUyDymaIY",
    note: "Speaker reel",
    title: "Dave Anderson — Tech Evangelist",
    body: "A short cut of stage work.",
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5">Speaking · Keynotes</p>
              <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.05] tracking-tight text-ink">
                Mainstage keynotes on{" "}
                <span className="italic text-brass">
                  technology, marketing and AI
                </span>
                .
              </h1>
              <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
                For twenty years I&rsquo;ve been the marketer explaining
                technology to non-technical audiences &mdash; and the
                technologist explaining marketing to boards. On stage that
                shows up as clear, funny, story-first keynotes that leave a
                room with something they can use on Monday.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  Enquire about a keynote
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href="mailto:daveando@gmail.com"
                  className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  daveando@gmail.com
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-square max-w-sm mx-auto md:max-w-none overflow-hidden rounded-md border border-rule bg-kraft-alt shadow-[0_2px_0_rgba(33,29,24,0.08)] rotate-[-1.2deg]">
                <img
                  src="/Dave.jpeg"
                  alt="Dave Anderson"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">Watch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            See me on stage before you book me.
          </h2>
          <TickRule className="mt-8 mb-10 opacity-50" />

          {/* Feature: plays inline so a booker never has to leave */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-video overflow-hidden rounded-md border border-rule bg-ink">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${feature.id}`}
                  title={feature.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="lg:pt-2">
              <p className="eyebrow">{feature.note}</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light mt-3 leading-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed">
                {feature.body}
              </p>
            </div>
          </div>

          {/* Collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {talks.map((t) => (
              <VideoLightbox key={t.id} videoId={t.id} title={t.title}>
                <div className="aspect-video overflow-hidden rounded-md border border-rule bg-ink relative">
                  <img
                    src={`https://img.youtube.com/vi/${t.id}/maxresdefault.jpg`}
                    alt={t.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-brass text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                        <path d="M2 1l11 6-11 6z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <p className="eyebrow eyebrow-verdigris mt-4">{t.note}</p>
                <h3 className="font-serif text-lg font-medium mt-1 leading-snug text-ink group-hover:text-brass transition-colors">
                  {t.title}
                </h3>
                <p className="mt-1 text-ink-soft text-sm leading-relaxed">
                  {t.body}
                </p>
              </VideoLightbox>
            ))}
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
              { big: "Saxton", small: "listed speaker, Australia & NZ" },
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

      {/* How to book */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
          <p className="eyebrow mb-4">How to book</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight text-ink">
            Two routes, depending on where the event is.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="border border-rule bg-kraft rounded-md p-8 flex flex-col">
              <ShopTag>Worldwide</ShopTag>
              <h3 className="font-serif text-2xl font-light mt-5 leading-tight text-ink">
                Email me directly
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed flex-1">
                For events anywhere outside Australia and New Zealand &mdash;
                and for brief calls, availability questions or anything
                exploratory &mdash; email is the fastest route.
              </p>
              <a
                href="mailto:daveando@gmail.com"
                className="mt-7 inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-5 py-3 rounded-full text-sm self-start"
              >
                daveando@gmail.com
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="border border-rule bg-kraft rounded-md p-8 flex flex-col">
              <ShopTag>Australia &amp; NZ</ShopTag>
              <h3 className="font-serif text-2xl font-light mt-5 leading-tight text-ink">
                Saxton Speakers Bureau
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed flex-1">
                I&rsquo;m a listed speaker with Saxton. For events in
                Australia and New Zealand they handle availability, fees,
                contracts, travel and logistics end to end.
              </p>
              <a
                href="https://www.saxton.com.au/speakers/dave-anderson"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-5 py-3 rounded-full text-sm self-start"
              >
                View my Saxton profile
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client roster grouped by kind */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Selected stages</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-3xl leading-tight">
            Companies and conferences I&rsquo;ve presented to.
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
