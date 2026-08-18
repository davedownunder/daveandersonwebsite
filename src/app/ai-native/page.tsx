import type { Metadata } from "next";
import Link from "next/link";
import TickRule from "@/components/TickRule";
import ShopTag from "@/components/ShopTag";
import CompressionLedger, {
  type LedgerRow,
} from "@/components/CompressionLedger";
import {
  OutputInventory,
  GrowthBars,
  UsageBars,
  BeforeAfter,
  type InventoryGroup,
  type GrowthRow,
  type UsageRow,
  type BeforeAfterRow,
} from "@/components/StoryCharts";

export const metadata: Metadata = {
  title: "AI-native marketing: when the marketers ship the code",
  description:
    "A field note from a five-person marketing team with production access to its own website — 108 merged pull requests from marketing, not engineering. The method, the counts, and the limitations.",
};

/**
 * Conventional figures are estimates from twenty years of running these
 * functions with conventional teams, and are labelled as estimates on the
 * page. Measured figures are counted from the working record: git history,
 * session transcripts and published work.
 */
const ledger: LedgerRow[] = [
  {
    work: "Rebuild the company website",
    note: "Not a reskin. Reimagined, rebranded, and roughly three times the size of the site it replaced — design tokens, navigation, page migration, demo redesign.",
    wasPeople: 6,
    wasDays: 110,
    wasLabel: "4–6 months",
    nowPeople: 2,
    nowDays: 8,
    nowLabel: "8 days",
    source:
      "Repository opens with Initial commit on 1 Jun 2026. 205 commits in the first eight days, run as phased agent tasks.",
  },
  {
    work: "Turn a research paper into a launch program",
    note: "Landing page, gated guide, sources page, blog, press release, two videos, podcast, PR pack, social sequence.",
    wasPeople: 6,
    wasDays: 45,
    wasLabel: "8–10 weeks",
    nowPeople: 1,
    nowDays: 14,
    nowLabel: "14 days",
    source:
      "Token Efficiency Study. Every asset produced by one person — the CMO — not a launch team.",
  },
  {
    work: "Build a campaign from concept to playable",
    note: "A working app, a horse race, AI-generated video, landing pages and a brand system around it. Not a deck describing a campaign — the campaign.",
    wasPeople: 6,
    wasDays: 40,
    wasLabel: "2+ months",
    nowPeople: 1,
    nowDays: 1,
    nowLabel: "1 day",
    source:
      "Cloud casino. Conventionally this is an agency brief, a production schedule and a branding round.",
  },
  {
    work: "Build a webinar campaign, end to end",
    note: "Story arc, the three reasons for PointFive on Google Cloud, the technical opportunities that differentiate us, landing page, registration form, email copy, ad copy, social posts, branding.",
    wasPeople: 4,
    wasDays: 5,
    wasLabel: "1 week",
    nowPeople: 1,
    nowDays: 0.125,
    nowLabel: "1 hour",
    source:
      "A week of coordinated work across four functions, executed inside a single session.",
  },
  {
    work: "Produce a 90-second product explainer",
    note: "Conventionally: brand, product marketing, an animation specialist, storyboarding and approval rounds. Now: narration-timed scenes written as code.",
    wasPeople: 4,
    wasDays: 12,
    wasLabel: "2–3 weeks",
    nowPeople: 1,
    nowDays: 0.125,
    nowLabel: "1 hour",
    source:
      "Re-rendered on a copy change rather than re-edited, so revisions cost minutes instead of another approval cycle.",
  },
  {
    work: "Build and maintain competitor comparison pages",
    note: "Positioning from internal IP, claim sourcing with capture dates, page build, browser QA, pull request.",
    wasPeople: 3,
    wasDays: 25,
    wasLabel: "4–6 weeks",
    nowPeople: 1,
    nowDays: 0.5,
    nowLabel: "1 session",
    source:
      "Seventeen pages live. An agent now reviews all of them weekly and recommends updates as competitors ship and our own product moves.",
  },
  {
    work: "Report the week across every channel",
    note: "Analytics, search, social, CRM, community and AI visibility, read in one pass and reconciled where the sources disagree.",
    wasPeople: 2,
    wasDays: 2,
    wasLabel: "2 days a week",
    nowPeople: 0,
    nowDays: 0.05,
    nowLabel: "Automatic",
    source:
      "Runs on its own. The CMO reads the output; nobody assembles it.",
    recurring: true,
  },
];

const inventory: InventoryGroup[] = [
  {
    label: "Blog posts",
    count: 96,
    tone: "ink",
    note: "Migrated and newly written, all searchable",
  },
  {
    label: "Product and core pages",
    count: 36,
    tone: "brass",
    note: "Fourteen are product pages — the rebuild replaced these, not just the content around them",
  },
  {
    label: "Guides and knowledge base",
    count: 41,
    tone: "verdigris",
    note: "24 guides, including 16 AEO pieces in one release, plus 17 knowledge-base entries",
  },
  {
    label: "Seven other sections",
    count: 76,
    tone: "kraft",
    note: "17 comparisons, 15 press, 14 events, 13 careers, 8 case studies, 7 research, 2 campaigns",
  },
];

/** Reach — January against July, from analytics and Search Console. */
const reach: GrowthRow[] = [
  {
    label: "Unique visitors",
    pct: 123,
    detail: "People reaching the site.",
  },
  {
    label: "Search impressions",
    pct: 119,
    detail: "How often the site surfaces in search at all.",
  },
  {
    label: "Website sessions",
    pct: 109,
    detail: "Traffic more than doubled.",
  },
  {
    label: "Pages viewed",
    pct: 77,
    detail: "Depth held up as volume climbed.",
  },
  {
    label: "Organic search clicks",
    pct: 73,
    detail: "Peaked at +157% in June, the month the new site landed.",
  },
];

/**
 * Conversion — first-quarter monthly average against the April-to-July
 * monthly average, from the CRM. Webinar growth is an order of magnitude
 * above the rest and is called out separately rather than flattening the
 * chart.
 */
const conversion: GrowthRow[] = [
  {
    label: "Event registrations",
    pct: 1450,
    detail: "A repeatable registration path where there was none.",
  },
  {
    label: "All form submissions",
    pct: 382,
    detail: "Every conversion path on the site, combined.",
  },
  {
    label: "Demo requests",
    pct: 167,
    detail: "The bottom of the funnel moved, not just the top.",
  },
];

const engine: BeforeAfterRow[] = [
  {
    thing: "Legacy forms, no campaign coding",
    now: "Every form carries a date, a type and a program it belongs to",
  },
  {
    thing: "No webinar program running",
    now: "A webinar every month, each with an on-demand version behind it",
  },
  {
    thing: "No repeatable event registration path",
    now: "Event registration as a standing flow, on-demand versions included",
  },
  {
    thing: "HubSpot not connected to Salesforce",
    now: "Connected — a submission becomes a routed record",
  },
  {
    thing: "No conversion measurement in analytics",
    now: "Instrumented in August, so both systems now agree",
  },
];

const systems: UsageRow[] = [
  { label: "Supermetrics", value: 863, note: "analytics, search, social, ads" },
  { label: "Notion", value: 362, note: "plans and positioning" },
  { label: "HubSpot", value: 342, note: "CRM and campaigns" },
  { label: "Common Room", value: 194, note: "community signal" },
  { label: "Slack", value: 172, note: "decisions and internal data" },
  { label: "Peec", value: 110, note: "AI visibility" },
  { label: "Webflow", value: 77, note: "legacy surfaces" },
  { label: "Google Drive", value: 43, note: "documents" },
  { label: "G2", value: 43, note: "buyer intent" },
];

const actions: UsageRow[] = [
  { label: "Shell commands", value: 5410, note: "builds, renders, git" },
  { label: "Browser control", value: 3337, note: "QA on real pages" },
  { label: "File edits", value: 1906 },
  { label: "File reads", value: 1508 },
  { label: "Web research", value: 993, note: "fetch and search" },
  { label: "Files written", value: 776 },
  { label: "Video renders", value: 650, note: "ffmpeg and Remotion" },
];

const team = [
  {
    role: "Story and brand",
    covers: "Narrative, positioning, brand system, the CEO readout.",
    conventional: "Brand lead, copy chief, content strategist, internal comms.",
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
    covers:
      "Use cases, product launches, positioning source of truth, enablement.",
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
    body: "The load-bearing step, and the one most teams skip. Fourteen systems are wired into the session, so the agent reaches the billing record rather than a summary of it — then the dataset is frozen before a word is written. An agent that cannot invent a number does not need to be talked out of inventing one.",
    detail: "Fourteen systems of record",
  },
  {
    step: "03",
    title: "Execute",
    body: "Render it. A page, a press release, a competitor audit, a narrated video, a pull request — all off the same frozen dataset, which is why the format is close to free. The output is a merged commit or a finished file, not a suggestion to be actioned later.",
    detail: "A commit, not a draft",
  },
  {
    step: "04",
    title: "Prove",
    body: "Read the result back through the same systems that built it. The agent that made the funnel reports the disappointing number as readily as the good one.",
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

const limits = [
  {
    h: "Output is raw material, not a finished story",
    p: "It arrives structured and fast, and it is still not the story. Someone has to decide what to cut and what is actually worth saying. Shipping the first draft is how numbers drift.",
  },
  {
    h: "Speed moves the bottleneck, it does not remove it",
    p: "Two weeks from paper to full program was deliverable. Fact-checking it in two weeks was not. Build capacity outran data quality — a sequencing failure, not a tooling one.",
  },
  {
    h: "No agent owns a claim",
    p: "Every published number needs a source, a capture date and a named human approver. Competitor claims are the highest-risk content any team publishes, and agents write them at scale.",
  },
  {
    h: "A missing leader is still a missing leader",
    p: "This does fill seats — but only underneath a leader who is already there. Where we have no brand lead, we have a gap, and no amount of agent capacity closes it.",
  },
];

export default function AiNativePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">
          <p className="eyebrow mb-5">Field note · Marketing operations · 2026</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-tight text-ink max-w-5xl text-balance">
            The marketers ship the code.{" "}
            <span className="italic text-brass">All five of them.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            Not a metaphor for moving fast. Every person on this marketing team
            has GitHub and Vercel and can open a pull request against the
            production website — two of us have merged to it so far, and the one
            who has done it most is not the CMO. No ticket, no queue, no waiting
            on a sprint that belongs to someone else.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Underneath it is one idea. We did not build a content pipeline, we
            built an evidence layer — fourteen systems of record wired into the
            working session — and every output format is a renderer hanging off
            it. Nothing is generated from a prompt and a memory. The numbers get
            fetched, the dataset gets frozen, and only then does anything get
            built.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Which is why the range is what it is. The same spine produces a
            landing page, a press release, a competitor audit, a weekly report
            nobody assembles, and a ninety-second explainer with narration-timed
            scenes and a generated voice track. Text, web, video, audio. Add a
            format and you are adding a renderer, not starting a project.
          </p>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-2xl">
            The counts below come from git — a shared record a stranger can
            audit, not a self-report. What follows is the method behind them, the
            working log, and the things it does not solve.
          </p>

          <div className="mt-9">
            <ShopTag>Counted, not estimated · Jan – Aug 2026</ShopTag>
          </div>

          {/* Receipts. The claim above is unusual, so evidence comes early. */}
          <dl className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            {[
              { n: "108", l: "merged pull requests to production" },
              { n: "275", l: "commits, from marketing not engineering" },
              { n: "249", l: "live pages, whole site rebuilt" },
              { n: "14", l: "systems wired in" },
              { n: "5", l: "people" },
            ].map((s, i) => (
              <div
                key={s.l}
                /* Five tiles in a two-column grid leaves a dead cell — the
                   last one spans the row until the five-up kicks in. */
                className={`bg-paper px-5 py-6 ${
                  i === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <dt className="sr-only">{s.l}</dt>
                <dd>
                  <span className="block font-serif text-4xl text-ink tabular-nums leading-none">
                    {s.n}
                  </span>
                  <span className="block mt-2 text-sm text-ink-muted leading-snug">
                    {s.l}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <TickRule className="mt-12 opacity-60" />
        </div>
      </section>

      {/* ── The ledger ───────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">01 · The compression</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            It was never only about time.{" "}
            <span className="italic">It was about people.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Every one of these used to need a room of specialists — brand,
            product marketing, engineering, animation, SEO, copywriting — moving
            in sequence, each waiting on the last. Two axes below: how long it
            took, and how many people it took. Multiply them and you get the
            real number.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Added up, it is roughly the output of a team six times the size. That
            is the consequence, not the argument — the argument is the method,
            and the method is on the rows below.
          </p>

          <CompressionLedger rows={ledger} />

          <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
            Conventional headcount and duration are my estimates from twenty
            years of running these functions, and are labelled as estimates.
            Measured figures are counted — commit dates, session records, merged
            pull requests.
          </p>
        </div>
      </section>

      {/* ── What that produced ───────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">02 · What got built</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            One square per page.
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            A number in a sentence is easy to skim past. This is the same number,
            drawn. Two hundred and forty-nine live pages, grouped by the
            sections the site itself uses, so any of it can be checked against
            the sitemap rather than taken on trust.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Worth saying plainly: this was a replacement, not an extension.
            Fourteen product pages were rebuilt alongside everything else.
            Counted from the live sitemap on 18 August 2026.
          </p>

          <OutputInventory groups={inventory} />
        </div>
      </section>

      {/* ── The numbers moved ────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">03 · What it did to the numbers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            Output is not the point.{" "}
            <span className="italic text-brass">This is the point.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            I took the CMO seat in January. These are the moves since, as
            percentage change — the underlying counts stay in the building.
            Reach is what arrived. Conversion is what happened next, which is
            the half that actually matters.
          </p>

          <div className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-2xl font-normal text-ink">Reach</h3>
              <p className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-ink-muted">
                January against July
              </p>
            </div>
            <GrowthBars rows={reach} />

            <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 border border-rule rounded-md bg-paper px-7 py-6">
              <span className="font-serif text-4xl text-verdigris-dark leading-none">
                #1
              </span>
              <span className="text-base text-ink">
                Average position in AI search, of the twenty-five brands tracked
                in our category — ahead of every competitor.
              </span>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-2xl font-normal text-ink">
                Conversion
              </h3>
              <p className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-ink-muted">
                Jan–Mar monthly average vs Apr–Jul monthly average
              </p>
            </div>
            <GrowthBars rows={conversion} />

            <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 border border-rule rounded-md bg-paper px-7 py-6">
              <span className="font-serif text-4xl text-verdigris-dark leading-none tabular-nums">
                145&times;
              </span>
              <span className="text-base text-ink">
                Webinar registrations a month, from a standing start — there was
                no webinar program in the first quarter.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── The demand engine ────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">04 · The demand engine</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            This is not a team that did not exist.{" "}
            <span className="italic text-brass">
              It is an engine that was not running.
            </span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            The distinction matters. There were good people here in January, and
            there were forms — inherited ones, mostly whitepaper downloads,
            belonging to no program and coded to no campaign. What there was not
            was a machine: a webinar running every month, an event path that
            repeated, and an attribution trail from a click to a routed record.
          </p>

          <BeforeAfter rows={engine} />

          <p className="mt-10 text-base text-ink-soft leading-relaxed max-w-2xl">
            The percentages above come from the CRM, which is the only system
            that held the answer for the whole period. Analytics did not measure
            conversions until August, so it cannot be compared against January —
            the measurement changed, and reading that as a change in performance
            would be wrong.
          </p>
          <p className="mt-5 text-base text-ink-soft leading-relaxed max-w-2xl">
            <strong className="font-medium">
              Composition is the real finding, not volume.
            </strong>{" "}
            In January, not one submission carried a campaign code — the forms
            were inherited, mostly whitepaper downloads, attributable to
            nothing. From April, every single submission does, and the old forms
            have been retired. That is the difference between collecting names
            and running an engine.
          </p>
        </div>
      </section>

      {/* ── The five ─────────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">05 · The team</p>
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
          <p className="eyebrow mb-5 !text-brass-soft">06 · The flow</p>
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
          <p className="eyebrow mb-5">07 · The ground truth</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            The knowledge is already there.{" "}
            <span className="italic text-brass">Reach further down.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Most marketing teams are not short of data. They are short of access
            to it at the moment they are making something. Surface metrics are
            cheap and frequently wrong; the answer sits in the layer underneath.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            This is the part that actually matters, and the part that is easiest
            to skip. Everything else on this page — the multiples, the page
            count, the videos — is downstream of the four layers below. Get the
            source of truth wired in and the outputs become cheap. Skip it and
            you have a very fast way to publish things that are wrong.
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
            guide went out to a named account list, the ask to the data layer was
            explicit — aggregates only, state the sample size you used, flag
            anything you would not want quoted. The answer came back that one set
            of totals could not be defended. Those totals were dropped.
          </p>

          {/* The renderer side. The layers above are the argument; this is what
              makes it visible — the same frozen dataset leaving as four
              different media, not four flavours of text. */}
          <div className="mt-16">
            <p className="eyebrow mb-5">And out the other side</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight text-ink max-w-3xl">
              One dataset in.{" "}
              <span className="italic text-brass">Four kinds of thing out.</span>
            </h3>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              This is the test of whether an evidence layer is real. If it only
              produces prose, it is a writing tool. If the same frozen dataset
              can leave as a web page, a press release, an audit and a narrated
              video, it is infrastructure.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule rounded-md overflow-hidden">
              {[
                {
                  k: "Web",
                  v: "Landing pages, guides, comparison pages",
                  h: "Next.js, shipped by pull request",
                },
                {
                  k: "Written",
                  v: "Press releases, briefs, weekly reporting",
                  h: "Assembled from the systems, not retyped",
                },
                {
                  k: "Analysis",
                  v: "Competitor audits, brand and claim reviews",
                  h: "Re-run on a schedule as the market moves",
                },
                {
                  k: "Video and audio",
                  v: "Ninety-second explainers and how-tos",
                  h: "Scenes timed to a generated narration track",
                },
              ].map((r) => (
                <div key={r.k} className="bg-paper px-5 py-6">
                  <dt className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-brass-dark">
                    {r.k}
                  </dt>
                  <dd className="mt-3 text-base text-ink leading-snug">
                    {r.v}
                  </dd>
                  <dd className="mt-2 text-sm text-ink-muted leading-snug">
                    {r.h}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
              The video work is the clearest case. Rendered as code rather than
              cut in a timeline, an explainer is versionable and regenerable —
              when the product changes you re-run it instead of re-shooting it.
              Early and on low volume, average view duration on the short
              explainers has run at roughly 49% against a ~28% baseline. That
              retention signal is the reason the format is still being tested,
              and the volume is not yet there to call it more than a signal.
            </p>
          </div>
        </div>
      </section>

      {/* ── The record ───────────────────────────────────────── */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5 !text-brass-soft">08 · The working record</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight !text-kraft max-w-3xl">
            Nine weeks inside the machine. One person&rsquo;s log.
          </h2>
          <p className="mt-7 text-lg text-kraft/70 leading-relaxed max-w-2xl">
            Ninety-nine working sessions across fifteen parallel workstreams,
            18 June to 15 August. Not chat transcripts — a log of what was
            actually read, built, queried and shipped.
          </p>
          <p className="mt-5 text-base text-kraft/60 leading-relaxed max-w-2xl">
            Everything in this section is from my machine alone. The rest of the
            team runs the same way on their own, and none of it is counted here —
            so read these as one marketer&rsquo;s floor, not the team&rsquo;s
            total. The git numbers at the top are the team&rsquo;s.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="font-serif text-2xl font-light !text-kraft">
                Where the evidence came from
              </h3>
              <p className="mt-2 text-sm text-kraft/55 leading-relaxed">
                5,680 calls from my sessions into systems that already held
                the answer. Andrew and Melissa run their own, uncounted here.
              </p>
              <UsageBars rows={systems} unit="Calls per system · my sessions only" dark />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-light !text-kraft">
                What the agent actually did
              </h3>
              <p className="mt-2 text-sm text-kraft/55 leading-relaxed">
                17,566 actions, mine alone. Mostly building and checking, not
                writing prose.
              </p>
              <UsageBars rows={actions} unit="Actions by type · my sessions only" dark />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-soft border border-ink-soft rounded-md overflow-hidden">
            {[
              { n: "131", l: "subagents run in parallel" },
              { n: "82", l: "pull requests I opened, across all repos" },
              { n: "278", l: "artefacts published" },
              { n: "91", l: "encoded house rules invoked" },
            ].map((c) => (
              <div key={c.l} className="bg-ink px-6 py-7">
                <span className="block font-serif text-3xl md:text-4xl !text-kraft tabular-nums">
                  {c.n}
                </span>
                <span className="block mt-2 text-sm text-kraft/55 leading-snug">
                  {c.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Limits ───────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">09 · The honest part</p>
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

          <div className="mt-16 max-w-3xl">
            <p className="eyebrow mb-4">The shape of the next hire</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] text-ink">
              We do not need five brand designers. We need one, with AI.
            </h3>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              The same is true everywhere. Not five operations people — one or
              two, with AI. What this model scales is not headcount, it is
              leverage per person, and the constraint moves accordingly: every
              function needs someone good enough to direct it, and after that the
              volume takes care of itself.
            </p>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Which is why the gaps that hurt are leadership gaps, not capacity
              gaps. Where we are missing a leader — brand, right now — no amount
              of agent throughput closes it, because there is nobody to point it
              anywhere. <strong className="font-medium">Scale intelligent
              people with AI, not more people.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── For leaders ──────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">10 · If you run a team</p>
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
                h: "Make everyone able to ship",
                p: "All five of us have GitHub and Vercel. When the person with the idea is also the person who can publish it, the handover — and the week it costs — disappears. This is a permissions decision far more than a training one.",
              },
              {
                h: "Wire the evidence in before you ask for output",
                p: "Every hour spent connecting a system to the place the work happens comes back the first time someone needs a number at 6pm on a Thursday. The data was never the problem. The distance to it was.",
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

      {/* ── Outside the team ─────────────────────────────────── */}
      {/* Deliberately fenced off and labelled. Everything above is bounded to
          the PointFive marketing function over a fixed window; this is not, and
          conflating the two would be the fair criticism. It earns its place
          because it answers the obvious objection — that this only works with a
          funded team behind it. */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">11 · Outside the team</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            The obvious objection is that this needs a company behind it.{" "}
            <span className="italic text-brass">It does not.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Everything above is bounded to one marketing team over one measured
            window, and it should be read that way. So here is the same method
            with no team, no budget and no stakeholders — three websites I have
            written and published on the same stack, one of which is my mum&rsquo;s
            garden maintenance business on the Mornington Peninsula.
          </p>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            {[
              {
                site: "techseekinghuman.ai",
                what: "The podcast — 41 episodes, plus the rendered video format",
                href: "https://techseekinghuman.ai",
              },
              {
                site: "daveanderson.com.au",
                what: "This site. Including the page you are reading",
                href: "https://www.daveanderson.com.au",
              },
              {
                site: "dirtgirls.com.au",
                what: "Garden maintenance, Mornington Peninsula. My mum's business",
                href: "https://dirtgirls.com.au",
              },
            ].map((s) => (
              <li key={s.site} className="bg-paper px-5 py-6">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-wide text-brass-dark hover:text-ink transition-colors break-words"
                >
                  {s.site}
                </a>
                <p className="mt-3 text-sm text-ink-soft leading-snug">
                  {s.what}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h3 className="font-serif text-2xl font-light text-ink leading-snug">
                A whole category of tooling stopped being necessary
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed">
                All three run on Claude, GitHub and Vercel. No WordPress, no
                plugins, no hosting account, no theme to maintain. That removes
                about $500 a year, which is not the interesting number — the
                interesting part is that the line item disappeared rather than
                got cheaper. There is no CMS to log into because the site is a
                repository.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-light text-ink leading-snug">
                And one of them writes itself
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Dirt Girls has an agent that researches and publishes gardening
                and maintenance advice to the site on its own. Nobody briefs it
                and nobody publishes it. It is the smallest possible version of
                the argument on this page, running unattended for a business with
                no marketing function at all.
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-ink-muted leading-relaxed max-w-2xl">
            The video renderer generalises the same way. Two fifteen-minute
            episodes of{" "}
            <Link
              href="/podcasts"
              className="text-brass-dark hover:text-brass underline underline-offset-2"
            >
              Tech Seeking Human
            </Link>{" "}
            are fully rendered with no editor and no timeline —{" "}
            <a
              href="https://techseekinghuman.ai/podcasts/will-ai-take-your-job-by-2030-the-real-odds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brass-dark hover:text-brass underline underline-offset-2"
            >
              whether AI takes your job by 2030
            </a>{" "}
            and{" "}
            <a
              href="https://techseekinghuman.ai/podcasts/when-does-agi-actually-arrive-the-real-odds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brass-dark hover:text-brass underline underline-offset-2"
            >
              when AGI actually arrives
            </a>
            . Same pipeline as the ninety-second product explainers, just more of
            it, and built by one person rather than a team.
          </p>
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
