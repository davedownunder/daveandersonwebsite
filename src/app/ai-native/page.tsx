import type { Metadata } from "next";
import Link from "next/link";
import TickRule from "@/components/TickRule";
import ShopTag from "@/components/ShopTag";
import CompressionLedger, {
  type LedgerRow,
} from "@/components/CompressionLedger";

export const metadata: Metadata = {
  title: "How five people run an AI-native marketing team",
  description:
    "A field note from inside a five-person marketing team at PointFive. What months of work compressed to days looks like in practice, measured from nine weeks of the actual working record.",
};

/**
 * Conventional durations are estimates from twenty years of running these
 * functions with conventional teams — they are labelled as estimates on the
 * page. Measured durations are counted from the working record: git history,
 * session transcripts and published artefacts, 18 Jun – 15 Aug 2026.
 */
const ledger: LedgerRow[] = [
  {
    work: "Rebuild the company website",
    note: "Empty repository to a live marketing site — design tokens, navigation, page migration, demo redesign.",
    wasDays: 110,
    wasLabel: "4–6 months",
    nowDays: 8,
    nowLabel: "8 days",
    source:
      "First commit 1 Jun 2026. 205 commits in the first eight days, driven as phased agent tasks.",
  },
  {
    work: "Turn a research paper into a launch program",
    note: "Landing page, gated guide, sources page, blog, press release, two videos, podcast, PR pack, social sequence.",
    wasDays: 45,
    wasLabel: "8–10 weeks",
    nowDays: 14,
    nowLabel: "14 days",
    source: "Token Efficiency Study, live paper to full program, Aug 2026.",
  },
  {
    work: "Campaign concept to something you can play",
    note: "Not a mockup or a storyboard — a working prototype the team played before anyone pitched it.",
    wasDays: 18,
    wasLabel: "3–4 weeks",
    nowDays: 1,
    nowLabel: "1 day",
    source: "Cloud casino card deck, built and rendered in a single session.",
  },
  {
    work: "Produce a 90-second product explainer",
    note: "Written as code. Narration-timed scenes, cloned voiceover, brand-locked frames — re-rendered on a copy change, not re-edited.",
    wasDays: 25,
    wasLabel: "4–6 weeks",
    nowDays: 1,
    nowLabel: "1 day",
    source: "MCP setup, Datadog and MongoDB support videos. No crew, no vendor.",
  },
  {
    work: "Build a competitor comparison page",
    note: "Positioning, claim sourcing, page build, browser QA, pull request. Every claim carries a capture date.",
    wasDays: 12,
    wasLabel: "2–3 weeks",
    nowDays: 1,
    nowLabel: "1 session",
    source: "Eighteen comparison pages now live, from Vantage to IBM Turbonomic.",
  },
  {
    work: "Report the week across every channel",
    note: "Analytics, search, social, CRM, community and AI visibility read in one pass and reconciled where they disagree.",
    wasDays: 2,
    wasLabel: "2 days a week",
    nowDays: 0.15,
    nowLabel: "One refresh",
    source: "Six sources into one live app, presented in the team meeting.",
  },
];

const team = [
  {
    role: "Story and brand",
    covers: "Narrative, positioning, brand system, the CEO readout.",
    conventional:
      "Brand lead, copy chief, content strategist, internal comms.",
  },
  {
    role: "Growth and digital",
    covers:
      "Website, AEO and SEO, paid programs, webinar programs, marketing analytics.",
    conventional:
      "Web team, SEO agency, paid media agency, marketing ops, analyst.",
  },
  {
    role: "Product marketing",
    covers: "Use cases, product launches, positioning source of truth, enablement.",
    conventional: "Two to three PMMs, plus a competitive intelligence analyst.",
  },
  {
    role: "Social and video",
    covers: "Channel strategy, podcast, live shows, video production end to end.",
    conventional:
      "Social manager, producer, videographer, editor, motion designer.",
  },
  {
    role: "Operations",
    covers:
      "Program management, timelines, asset status, launch checklists, systems.",
    conventional: "Marketing ops team, project manager, production coordinator.",
  },
];

const loop = [
  {
    step: "01",
    title: "Ideate",
    body: "The only genuinely scarce input. What is worth saying, to whom, and why now. No agent decides this, and no agent should.",
    detail: "Human, always",
  },
  {
    step: "02",
    title: "Ground",
    body: "Pull the real numbers before writing a word. Fourteen systems are wired into the working session, so the agent reaches the billing record rather than a summary of it.",
    detail: "5,680 system calls",
  },
  {
    step: "03",
    title: "Execute",
    body: "Build the thing. A page, a video, a deck, a campaign, a pull request. The output is a merged commit or a finished file — not a suggestion to be actioned later.",
    detail: "17,566 tool actions",
  },
  {
    step: "04",
    title: "Prove",
    body: "Read the result back through the same systems that built it. The agent that made the funnel reports the 0.47% as readily as the 13.9%.",
    detail: "Measured, not estimated",
  },
];

const stack = [
  {
    layer: "Surface",
    what: "Brief, brand system, positioning source of truth",
    where: "Notion · Drive · encoded brand rules",
  },
  {
    layer: "Channel",
    what: "What every channel actually did this week",
    where: "GA4 · Search Console · LinkedIn · YouTube · Peec",
  },
  {
    layer: "Demand",
    what: "Who raised a hand, and where they came from",
    where: "HubSpot · Common Room · G2 · Slack",
  },
  {
    layer: "Depth",
    what: "Billing-grade truth. Every published number resolves here.",
    where: "Warehouse · CRM · platform data",
  },
];

const counted = [
  { n: "99", l: "working sessions" },
  { n: "15", l: "parallel workstreams" },
  { n: "17,566", l: "tool actions executed" },
  { n: "131", l: "subagents run in parallel" },
  { n: "5,680", l: "calls into business systems" },
  { n: "82", l: "pull requests to production" },
  { n: "650", l: "video render operations" },
  { n: "278", l: "artefacts published" },
];

const limits = [
  {
    h: "Output is raw material, not a finished story",
    p: "It arrives structured and fast, and it is still not the story. Someone has to decide what to cut and what is actually worth saying. Shipping the first draft is how numbers drift.",
  },
  {
    h: "Speed moves the bottleneck, it does not remove it",
    p: "Two weeks from paper to full program was deliverable. Fact-checking it in two weeks was not. Build capacity outran data quality, and that is a sequencing failure, not a tooling one.",
  },
  {
    h: "No agent owns a claim",
    p: "Every published number needs a source, a capture date and a named human approver. Competitor claims are the highest-risk content any team publishes, and agents write them at scale.",
  },
  {
    h: "It does not fill an empty seat",
    p: "Where a role is genuinely missing, the work waits. Faster production makes that gap more obvious, not less.",
  },
];

export default function AiNativePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">
          <p className="eyebrow mb-5">Field note · Marketing operations · 2026</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-tight text-ink max-w-4xl">
            Months became days.{" "}
            <span className="italic text-brass">Weeks became hours.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            There are five of us. We ship the output of a marketing department
            three times the size, and the difference is not effort or talent or
            longer days. It is that the knowledge and the data are already
            sitting there, wired in and ready. All that is left is to ideate and
            execute.
          </p>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-2xl">
            This is the working record, not a theory. Nine weeks, counted from
            git history, session transcripts and published work.
          </p>

          <div className="mt-9">
            <ShopTag>Measured 18 Jun – 15 Aug 2026</ShopTag>
          </div>

          <TickRule className="mt-12 opacity-60" />
        </div>
      </section>

      {/* ── The ledger ───────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">01 · The compression</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            Same work. Same standard.{" "}
            <span className="italic">A fraction of the calendar.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Both bars are drawn to one scale. The top bar is what each of these
            has cost me with a conventional team over twenty years of doing this
            job. The bar underneath is what it actually took.
          </p>

          <CompressionLedger rows={ledger} />

          <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
            Conventional durations are my estimates and are labelled as such.
            Measured durations are counted — first commit dates, session records,
            merged pull requests. Where the two disagree, believe the second one.
          </p>
        </div>
      </section>

      {/* ── The five ─────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">02 · The team</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            Five roles, each holding what used to be four or five.
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            The headcount did not shrink because people got faster at typing. It
            shrank because the work between having the idea and shipping the
            thing — the production, the coordination, the chasing — mostly
            stopped existing.
          </p>

          <div className="mt-12 border-t border-rule">
            {team.map((t) => (
              <div
                key={t.role}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-rule"
              >
                <h3 className="md:col-span-3 font-serif text-xl font-normal text-ink">
                  {t.role}
                </h3>
                <p className="md:col-span-5 text-base text-ink-soft leading-relaxed">
                  {t.covers}
                </p>
                <p className="md:col-span-4 text-sm text-ink-muted leading-relaxed">
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-brass-dark block mb-1.5">
                    Conventionally
                  </span>
                  {t.conventional}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The loop ─────────────────────────────────────────── */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow eyebrow-verdigris mb-5 !text-brass-soft">
            03 · The flow
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight !text-kraft max-w-3xl">
            One loop, run over and over, on everything.
          </h2>
          <p className="mt-7 text-lg text-kraft/70 leading-relaxed max-w-2xl">
            There is no separate AI workflow sitting beside the real one. This is
            the whole method, and it applies equally to a landing page, a
            campaign, a video, a board update and a competitor page.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-ink-soft border border-ink-soft rounded-md overflow-hidden">
            {loop.map((s) => (
              <div key={s.step} className="bg-ink p-7">
                <span className="font-mono text-[0.7rem] tracking-[0.22em] text-brass-soft">
                  {s.step}
                </span>
                <h3 className="font-serif text-2xl font-light !text-kraft mt-4">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-kraft/65 leading-relaxed">
                  {s.body}
                </p>
                <p className="mt-5 pt-4 border-t border-ink-soft font-mono text-[0.65rem] tracking-[0.16em] uppercase text-brass-soft">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base text-kraft/70 leading-relaxed max-w-2xl">
            Step one is the only part that did not get cheaper. Which is exactly
            why it is now the whole job.
          </p>
        </div>
      </section>

      {/* ── The stack ────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">04 · The ground truth</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            The knowledge is already there.{" "}
            <span className="italic text-brass">Reach further down.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Most marketing teams are not short of data. They are short of access
            to it at the moment they are making something. Surface metrics are
            cheap and frequently wrong; the answer sits in the layer underneath.
          </p>

          <div className="mt-12 rounded-md overflow-hidden border border-rule">
            {stack.map((s, i) => (
              <div
                key={s.layer}
                className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 px-6 py-6 items-baseline ${
                  i === stack.length - 1
                    ? "bg-ink"
                    : i === 2
                      ? "bg-kraft-alt"
                      : i === 1
                        ? "bg-kraft-soft"
                        : "bg-paper"
                }`}
              >
                <span
                  className={`md:col-span-2 font-mono text-[0.65rem] tracking-[0.22em] uppercase ${
                    i === stack.length - 1 ? "text-brass-soft" : "text-ink-muted"
                  }`}
                >
                  {s.layer}
                </span>
                <p
                  className={`md:col-span-6 text-base leading-relaxed ${
                    i === stack.length - 1 ? "text-kraft" : "text-ink"
                  }`}
                >
                  {s.what}
                </p>
                <p
                  className={`md:col-span-4 text-sm leading-relaxed md:text-right ${
                    i === stack.length - 1 ? "text-kraft/60" : "text-ink-muted"
                  }`}
                >
                  {s.where}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
            The discipline that makes the speed defensible: before a printed
            guide went to fifty named accounts, the ask to the data layer was
            explicit — aggregates only, state the sample size you used, flag
            anything you would not want quoted. The answer came back that one set
            of totals could not be defended. Those totals were dropped.
          </p>
        </div>
      </section>

      {/* ── Counted ──────────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">05 · The record</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            Nine weeks, counted.
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            {counted.map((c) => (
              <div key={c.l} className="bg-paper px-6 py-7">
                <span className="block font-serif text-3xl md:text-4xl font-normal text-ink tabular-nums">
                  {c.n}
                </span>
                <span className="block mt-2 text-sm text-ink-muted leading-snug">
                  {c.l}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-2xl font-normal text-ink">
                Quality did not go down
              </h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                The two research posts from that period engaged at 13.9% and
                11.8% against a 4.3–5.8% baseline — two to three times anything
                else published, on smaller reach. The finding itself was
                independently reproduced by another company running the same
                question with a different method.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-normal text-ink">
                And the honest number is right there too
              </h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                640 sessions landed on that campaign page. Three genuine external
                contacts came out the other end. Content quality was not the
                constraint; distribution was. Knowing that within days is the
                actual advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Limits ───────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">06 · The honest part</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            What this does not do.
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            A page that only lists wins is marketing about marketing. These are
            the four things that have actually bitten.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {limits.map((l) => (
              <div key={l.h} className="border-t border-rule pt-6">
                <h3 className="font-serif text-xl font-normal text-ink leading-snug">
                  {l.h}
                </h3>
                <p className="mt-3 text-base text-ink-soft leading-relaxed">
                  {l.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For leaders ──────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">07 · If you run a team</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            Four changes that did the work.
          </h2>

          <ol className="mt-12 border-t border-rule">
            {[
              {
                h: "Give the agent hands, not opinions",
                p: "An assistant that drafts copy saves an hour. An agent that reads the warehouse, builds the page, opens the pull request and measures the result replaces a workflow. The difference is write access, and it is the whole difference.",
              },
              {
                h: "Wire the evidence in before you ask for output",
                p: "Every hour spent connecting a system to the place the work happens comes back the first time someone needs a number at 6pm on a Thursday. The data was never the problem. The distance to it was.",
              },
              {
                h: "Encode the house rules once",
                p: "Brand, tone, format and structure written down as something the agent reads every time. Consistency then costs nothing to enforce, and the rules travel to whoever joins next.",
              },
              {
                h: "Move the gate to the front",
                p: "When production gets this fast, sequencing becomes the failure mode. Freeze the numbers before anything is built against them. We learned that the expensive way, once.",
              },
            ].map((s, i) => (
              <li
                key={s.h}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 border-b border-rule"
              >
                <span className="md:col-span-1 font-mono text-[0.7rem] tracking-[0.22em] text-brass-dark pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="md:col-span-4 font-serif text-xl font-normal text-ink leading-snug">
                  {s.h}
                </h3>
                <p className="md:col-span-7 text-base text-ink-soft leading-relaxed">
                  {s.p}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Close ────────────────────────────────────────────── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-ink">
              The measure that matters is not how much AI a team uses. It is
              whether the claim survives an audit, and whether the thing actually
              ships.
            </h2>
            <p className="mt-7 text-lg text-ink-soft leading-relaxed">
              Both are now countable. That is the part I would take to any team I
              worked with next.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm"
              >
                Talk to me about this
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/speaking"
                className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
              >
                Keynotes on this topic
              </Link>
            </div>
          </div>
          <TickRule className="mt-16 opacity-60" />
        </div>
      </section>
    </>
  );
}
