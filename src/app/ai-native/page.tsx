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
  title: "How five people run an AI-native marketing team",
  description:
    "A field note from inside a five-person marketing team. What months of work compressed to days actually looks like — measured in time, in people, and in what it did to the numbers.",
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
      "Eighteen pages live. An agent now reviews all of them weekly and recommends updates as competitors ship and our own product moves.",
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
    count: 356,
    tone: "ink",
    note: "Migrated and newly written, all searchable",
  },
  {
    label: "Event and webinar pages",
    count: 44,
    tone: "brass",
    note: "Registration, live and on-demand",
  },
  {
    label: "Guides",
    count: 21,
    tone: "verdigris",
    note: "Including 16 AEO pieces in one release",
  },
  {
    label: "Comparison pages",
    count: 18,
    tone: "kraft",
    note: "Bottom-funnel, agent-maintained",
  },
];

const growth: GrowthRow[] = [
  {
    label: "Unique visitors",
    pct: 123,
    detail: "People reaching the site, January against July.",
  },
  {
    label: "Search impressions",
    pct: 119,
    detail: "How often the site surfaces in search at all.",
  },
  {
    label: "Website sessions",
    pct: 109,
    detail: "Traffic more than doubled over the same seven months.",
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

const engine: BeforeAfterRow[] = [
  {
    thing: "No conversion tracking at all",
    now: "Every conversion instrumented and reported weekly",
  },
  {
    thing: "No forms on the site",
    now: "Demo bookings, webinar registration, event registration",
  },
  {
    thing: "HubSpot not connected to Salesforce",
    now: "Connected — a submission becomes a routed record",
  },
  {
    thing: "No way to attribute a lead to a channel",
    now: "Source, campaign and landing page on every contact",
  },
  {
    thing: "No pipeline number marketing could stand behind",
    now: "Sourced pipeline, reported against the same numbers sales uses",
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
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-tight text-ink max-w-4xl">
            Five people.{" "}
            <span className="italic text-brass">
              The output of thirty.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            Months became days. Weeks became hours. The difference is not effort
            or talent or longer days — it is that the knowledge and the data are
            already sitting there, wired in and ready. All that is left is to
            ideate and execute.
          </p>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-2xl">
            Every person on this team is AI-native. All five have GitHub and
            Vercel. All five can publish a page, ship an app, and open a pull
            request against the production site. That is the baseline now, not
            the exception.
          </p>

          <div className="mt-9">
            <ShopTag>Counted, not estimated · Jan – Aug 2026</ShopTag>
          </div>

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
            drawn.
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
            I took the CMO seat in January. These are the January-to-July moves
            on pointfive.co, as percentage change — the underlying counts stay
            in the building.
          </p>

          <GrowthBars rows={growth} />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-2xl font-normal text-ink">
                On AI search, position beats volume
              </h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                Across the twenty-five brands tracked in our category, PointFive
                holds the <strong className="font-medium">best average position of any of them</strong> —
                ahead of every competitor including the two with nearly three
                times our visibility.
              </p>
              <p className="mt-3 text-base text-ink-muted leading-relaxed">
                Being named less often but named first is a better problem than
                the reverse. Visibility itself has been flat since May, and I
                would rather say that plainly than dress it up — it is the next
                thing to fix.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-normal text-ink">
                The research campaign is five days old
              </h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">
                It launched on 10 August. The analytics container was not live on
                the research pages until the 11th, and conversion events were not
                wired until the 13th — so the real traffic is{" "}
                <strong className="font-medium">higher than anything currently measured</strong>,
                and the early conversion picture is incomplete by construction.
              </p>
              <p className="mt-3 text-base text-ink-muted leading-relaxed">
                What is already true: the two research posts engaged at two to
                three times our baseline, on smaller reach than the posts they
                beat. Judging any of it as a finished result this week would be
                the wrong call.
              </p>
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
            The distinction matters. There were good people here in January.
            What there was not was a way for interest to become a record, a
            record to become a routed lead, or any of it to become a number
            anyone could stand behind in a board meeting.
          </p>

          <BeforeAfter rows={engine} />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            <div className="bg-paper px-7 py-8">
              <span className="block font-serif text-4xl text-verdigris-dark tabular-nums leading-none">
                +382%
              </span>
              <span className="block mt-3 text-base text-ink">
                Form submissions a month
              </span>
              <span className="block mt-1.5 text-sm text-ink-muted leading-snug">
                First-quarter average against the April-onward average.
              </span>
            </div>
            <div className="bg-paper px-7 py-8">
              <span className="block font-serif text-4xl text-verdigris-dark tabular-nums leading-none">
                +709%
              </span>
              <span className="block mt-3 text-base text-ink">
                Best month against January
              </span>
              <span className="block mt-1.5 text-sm text-ink-muted leading-snug">
                Same site, same category, same sales team.
              </span>
            </div>
            <div className="bg-ink px-7 py-8">
              <span className="block font-serif text-4xl !text-kraft leading-none">
                Zero
              </span>
              <span className="block mt-3 text-base text-kraft">
                Conversions recorded before August
              </span>
              <span className="block mt-1.5 text-sm text-kraft/55 leading-snug">
                Not a low number. An empty field, every month, until the
                tracking went in.
              </span>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
            The last one is the honest centre of this section. Analytics
            returns nothing for conversions in every month from January to
            July — because nothing was measuring them. You cannot improve a
            number that does not exist, and the first job was making it exist.
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

      {/* ── The record ───────────────────────────────────────── */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5 !text-brass-soft">08 · The working record</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight !text-kraft max-w-3xl">
            Nine weeks inside the machine.
          </h2>
          <p className="mt-7 text-lg text-kraft/70 leading-relaxed max-w-2xl">
            Ninety-nine working sessions across fifteen parallel workstreams,
            18 June to 15 August. Not chat transcripts — a log of what was
            actually read, built, queried and shipped.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="font-serif text-2xl font-light !text-kraft">
                Where the evidence came from
              </h3>
              <p className="mt-2 text-sm text-kraft/55 leading-relaxed">
                5,680 calls into systems that already held the answer.
              </p>
              <UsageBars rows={systems} unit="Calls per system" dark />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-light !text-kraft">
                What the agent actually did
              </h3>
              <p className="mt-2 text-sm text-kraft/55 leading-relaxed">
                17,566 actions. Mostly building and checking, not writing prose.
              </p>
              <UsageBars rows={actions} unit="Actions by type" dark />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-soft border border-ink-soft rounded-md overflow-hidden">
            {[
              { n: "131", l: "subagents run in parallel" },
              { n: "82", l: "pull requests to production" },
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
