import type { Metadata } from "next";
import Link from "next/link";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";

export const metadata: Metadata = {
  title: "You have six months",
  description:
    "Marketing efficiency measured at 41x — 1,313 conventional person-days delivered in 31.75. The argument, the arithmetic, and why agent sprawl is the next cloud bill.",
};

/**
 * The compression arithmetic. `was` is Dave's conventional estimate from twenty
 * years of running these functions; `now` is counted from git history and
 * session records. Both columns are published in full at /ai-native — this page
 * only shows the multiplication, because the multiplication is the argument.
 */
const projects = [
  { work: "Rebuild the company website", wasPd: 660, nowPd: 16 },
  { work: "Research paper to launch program", wasPd: 270, nowPd: 14 },
  { work: "Campaign, concept to playable", wasPd: 240, nowPd: 1 },
  { work: "Competitor comparison pages", wasPd: 75, nowPd: 0.5 },
  { work: "90-second product explainer", wasPd: 48, nowPd: 0.125 },
  { work: "Webinar campaign, end to end", wasPd: 20, nowPd: 0.125 },
];

const TOTAL_WAS = projects.reduce((n, p) => n + p.wasPd, 0);
const TOTAL_NOW = projects.reduce((n, p) => n + p.nowPd, 0);
const MULTIPLE = TOTAL_WAS / TOTAL_NOW;
const HALVED = TOTAL_WAS / 2 / TOTAL_NOW;

/** What one session produced, in ten minutes, as a merged pull request. */
const program = [
  "The topic and the story arc",
  "Landing page, live on production",
  "Registration form, wired to the CRM",
  "Email copy",
  "Ad copy",
  "Social sequence",
  "Branding applied throughout",
];

const conventionally = [
  "Someone to ideate",
  "Someone to write",
  "Someone to design",
  "Someone to build it",
  "Someone to run the schedule keeping the other four in sync",
];

/**
 * The org-chart consequence. Conventional column is the roster these functions
 * conventionally require; the AI-native column is what actually covers them.
 */
const orgChart = [
  {
    fn: "Story and brand",
    was: "Brand lead, copy chief, content strategist, internal comms",
    now: "One, with agents",
  },
  {
    fn: "Growth and digital",
    was: "Web team, SEO agency, paid media agency, marketing ops, analyst",
    now: "One, with agents",
  },
  {
    fn: "Product marketing",
    was: "Two to three PMMs, plus a competitive intelligence analyst",
    now: "One, with agents",
  },
  {
    fn: "Social and video",
    was: "Social manager, producer, videographer, editor, motion designer",
    now: "One, with agents",
  },
  {
    fn: "Operations",
    was: "Marketing ops team, project manager, production coordinator",
    now: "One, with agents",
  },
];

const governance = [
  {
    h: "Visibility",
    p: "If you cannot say how many agents are running and who owns each one, you do not have an AI strategy. You have an unmetered utility.",
  },
  {
    h: "Control",
    p: "Any competent marketer can start ten agents this afternoon. There is no procurement gate in front of agent capacity the way there is in front of software.",
  },
  {
    h: "Budgeting",
    p: "No cost centre, no owner of record, no line a CFO can read. The productivity is real. So is the invoice, about three years later.",
  },
];

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="bg-ink px-6 py-7">
      <span className="block font-serif text-3xl md:text-4xl text-kraft tabular-nums leading-none">
        {n}
      </span>
      <span className="block mt-2 text-sm text-kraft/55 leading-snug">{l}</span>
    </div>
  );
}

export default function SixMonthsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="eyebrow text-brass-soft mb-6">
            The argument · Marketing · 2026
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.98] tracking-tight text-kraft max-w-4xl text-balance">
            You have{" "}
            <span className="italic text-brass-soft">six months</span>.
          </h1>
          <p className="mt-9 text-xl md:text-2xl text-kraft/85 leading-relaxed max-w-3xl font-light">
            Marketing is about to lose more jobs, faster, than any function in
            the company. Not to a reorg &mdash; to five people with production
            access to their own website.
          </p>
          <p className="mt-6 text-lg text-kraft/60 leading-relaxed max-w-2xl">
            You are either excellent with AI, or you are out of a job. I have
            stopped saying that gently, because every marketer I say it gently
            to hears &ldquo;carry on.&rdquo;
          </p>

          <div className="mt-11 flex flex-wrap gap-3">
            <Link
              href="/ai-native"
              className="inline-flex items-center gap-2 bg-brass text-ink hover:bg-brass-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Read the full working record
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/speaking"
              className="inline-flex items-center gap-2 border border-kraft/30 hover:border-brass-soft hover:text-brass-soft text-kraft/80 transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Book this as a keynote
            </Link>
          </div>
        </div>
      </section>

      {/* ── The number ───────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">01 · The arithmetic</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            Marketing efficiency, improved by{" "}
            <span className="italic">
              {Math.round(100 * (MULTIPLE - 1)).toLocaleString("en-AU")}%
            </span>
            .
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Six projects. For each one, the headcount and duration I would have
            quoted after twenty years of running these functions, set against
            what it actually took. The conventional column is my estimate and
            labelled as one. The actual column is counted from git history and
            session records.
          </p>

          <div className="mt-10">
            <ShopTag>Person-days · conventional estimate vs counted</ShopTag>
          </div>

          <div className="mt-10 border border-rule rounded-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-kraft-alt">
                  <th className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted font-normal px-5 py-4">
                    Work
                  </th>
                  <th className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted font-normal px-5 py-4 text-right whitespace-nowrap">
                    Conventional
                  </th>
                  <th className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted font-normal px-5 py-4 text-right whitespace-nowrap">
                    Actual
                  </th>
                  <th className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted font-normal px-5 py-4 text-right">
                    Multiple
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.work} className="border-t border-rule-soft">
                    <td className="px-5 py-4 text-ink leading-snug">{p.work}</td>
                    <td className="px-5 py-4 text-right tabular-nums text-ink-soft">
                      {p.wasPd}
                    </td>
                    <td className="px-5 py-4 text-right tabular-nums text-ink-soft">
                      {p.nowPd}
                    </td>
                    <td className="px-5 py-4 text-right tabular-nums font-serif text-lg text-brass-dark">
                      {Math.round(p.wasPd / p.nowPd)}&times;
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-ink bg-kraft-soft">
                  <td className="px-5 py-5 font-serif text-lg text-ink">
                    Total
                  </td>
                  <td className="px-5 py-5 text-right tabular-nums font-serif text-lg text-ink">
                    {TOTAL_WAS.toLocaleString("en-AU")}
                  </td>
                  <td className="px-5 py-5 text-right tabular-nums font-serif text-lg text-ink">
                    {TOTAL_NOW}
                  </td>
                  <td className="px-5 py-5 text-right tabular-nums font-serif text-2xl text-brass-dark">
                    {MULTIPLE.toFixed(1)}&times;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 border-l-2 border-brass pl-6 max-w-2xl">
            <p className="font-serif text-2xl md:text-3xl font-light leading-snug text-ink">
              You are entitled to think my conventional estimates are generous.
              So halve them.
            </p>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Halve every single one and it is still{" "}
              <strong className="text-ink">{HALVED.toFixed(1)}&times;</strong>{" "}
              &mdash; a {Math.round(100 * (HALVED - 1)).toLocaleString("en-AU")}% improvement. Cut them
              to a third and it is still nearly 14&times;. There is no version
              of this arithmetic that lands anywhere near the 10 or 20% gain the
              industry is comfortable talking about.
            </p>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              The gap between those two numbers is the whole story.
            </p>
          </div>
        </div>
      </section>

      {/* ── The commit split ─────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">02 · The number I would lead with</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            The person on my team who ships the most code{" "}
            <span className="italic">is not me</span>.
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Of the 275 commits marketing has made to production this year, 103
            are mine. I could have left the other number out.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule rounded-md overflow-hidden mt-12 max-w-2xl">
            <div className="bg-paper px-8 py-9">
              <span className="block font-serif text-6xl text-brass-dark tabular-nums leading-none">
                172
              </span>
              <p className="mt-4 text-ink leading-snug">
                Andrew Brown, who runs growth
              </p>
            </div>
            <div className="bg-paper px-8 py-9">
              <span className="block font-serif text-6xl text-ink-muted tabular-nums leading-none">
                103
              </span>
              <p className="mt-4 text-ink-muted leading-snug">
                Me, the CMO who writes about this
              </p>
            </div>
          </div>

          <p className="mt-10 text-lg text-ink-soft leading-relaxed max-w-2xl">
            It is the most useful fact I have, because it kills the easiest
            objection to everything above: that this is one enthusiast with an
            expensive hobby, a CMO with a side project and a flattering
            spreadsheet. It is not. It is a way of working that transferred to
            the person sitting next to me &mdash; and he is better at it than I
            am.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            That is also why this is a six-month problem rather than a five-year
            one. If it only worked for the person who enjoys it, you could wait
            it out.
          </p>
        </div>
      </section>

      {/* ── Ten minutes ──────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">03 · What ten minutes buys</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            A complete marketing program, built in under ten minutes.
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Not a brief for a program. Not a deck describing one. The program
            &mdash; live, on production, behind a merged pull request with my
            name on it. No meetings. No planning session. No developer. No
            creative round.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="border border-rule bg-kraft rounded-md p-8">
              <ShopTag>What came out</ShopTag>
              <ul className="mt-7 space-y-3">
                {program.map((p) => (
                  <li
                    key={p}
                    className="text-ink leading-snug pl-5 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-brass"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-rule bg-kraft rounded-md p-8">
              <ShopTag>What it used to take</ShopTag>
              <p className="mt-7 font-serif text-3xl font-light text-ink leading-tight">
                2&ndash;3 weeks.
                <br />
                Five people, minimum.
              </p>
              <ul className="mt-6 space-y-2.5">
                {conventionally.map((c) => (
                  <li
                    key={c}
                    className="text-ink-muted leading-snug pl-5 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full border border-rule"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Using AI is not the same thing ───────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">04 · The distinction</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-4xl">
            Almost every marketer is using AI. Almost none are{" "}
            <span className="italic">AI-native</span>.
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            The difference is not enthusiasm, or prompt quality. It is write
            access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule rounded-md overflow-hidden mt-12">
            <div className="bg-paper px-8 py-9">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted">
                An assistant that drafts copy
              </p>
              <p className="mt-4 font-serif text-2xl font-light text-ink leading-snug">
                Saves you an hour.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                It makes you slightly faster at the job you already have.
              </p>
            </div>
            <div className="bg-paper px-8 py-9">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brass-dark">
                An agent that ships
              </p>
              <p className="mt-4 font-serif text-2xl font-light text-ink leading-snug">
                Replaces the workflow.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                It reads the warehouse, builds the page, opens the pull request
                and measures what happened. That removes the job as it is
                currently constructed.
              </p>
            </div>
          </div>

          <p className="mt-12 text-lg text-ink-soft leading-relaxed max-w-2xl">
            So the skill that matters is not &ldquo;being good at AI.&rdquo; It
            is working like an engineer. Version control. A single source of
            truth. Grounding before generating. Freezing a dataset before anyone
            writes a word against it. Shipping a commit instead of circulating a
            draft.
          </p>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            None of that comes from a marketing playbook, and I do not think it
            can be faked from the outside.
          </p>
        </div>
      </section>

      {/* ── The org chart ────────────────────────────────────── */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">05 · The consequence</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink max-w-3xl">
            We do not need five brand designers.{" "}
            <span className="italic">We need one, with AI.</span>
          </h2>
          <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">
            This is the part that gets me disinvited from panels. It is not a
            story about tools levelling the playing field. It is a story about a
            small number of people in every marketing organisation becoming
            dramatically more valuable, and the rest becoming difficult to
            justify.
          </p>

          <TickRule className="mt-12 mb-10 opacity-50" />

          <div className="space-y-px bg-rule border border-rule rounded-md overflow-hidden">
            {orgChart.map((r) => (
              <div
                key={r.fn}
                className="bg-kraft grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 px-6 py-6"
              >
                <p className="md:col-span-3 font-serif text-xl text-ink leading-tight">
                  {r.fn}
                </p>
                <p className="md:col-span-6 text-ink-muted leading-snug line-through decoration-brass/50 decoration-1">
                  {r.was}
                </p>
                <p className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-brass-dark self-center">
                  {r.now}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Multiply that across a department and you are not looking at a
            productivity gain. You are looking at a budget line that halves,
            twice, and does not come back &mdash; both people and programs.
          </p>
        </div>
      </section>

      {/* ── Agent sprawl ─────────────────────────────────────── */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow text-brass-soft mb-5">
            06 · The part nobody is ready for
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-kraft max-w-3xl">
            Agent sprawl is the{" "}
            <span className="italic text-brass-soft">next cloud bill</span>.
          </h2>
          <p className="mt-7 text-lg text-kraft/75 leading-relaxed max-w-2xl">
            Running this way, I could not tell you exactly how many agents are
            working on my behalf. Somewhere near a hundred. Not a hundred
            sessions &mdash; a hundred running things, doing work against live
            systems while I am doing something else.
          </p>
          <p className="mt-5 text-lg text-kraft/75 leading-relaxed max-w-2xl">
            And the imprecision is the point. This whole page argues for counted
            numbers over estimated ones, and I cannot put a firm number on my
            own agent count. Nobody handed me a budget for it. Nobody approved
            it.
          </p>
          <p className="mt-5 text-lg text-kraft/75 leading-relaxed max-w-2xl">
            I run marketing for a company whose entire product is finding the
            waste in cloud spend, so I recognise this shape immediately. It is
            2013 and someone just discovered they can spin up instances on a
            credit card. The productivity was real. The bill, three years later,
            was also real &mdash; and by then nobody could remember who started
            what, or why.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 mt-14">
            {governance.map((g) => (
              <div key={g.h} className="border-t border-kraft/20 pt-6">
                <h3 className="font-serif text-2xl font-light text-kraft leading-snug">
                  {g.h}
                </h3>
                <p className="mt-3 text-kraft/70 leading-relaxed">{g.p}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 font-serif text-2xl md:text-3xl font-light leading-snug text-kraft max-w-3xl">
            This is not a reason to slow down. It is a reason to instrument.
          </p>
        </div>
      </section>

      {/* ── Monday ───────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <p className="eyebrow mb-5">07 · What I would do on Monday</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-serif text-3xl font-light text-ink leading-tight">
                Stop evaluating AI tools.
              </h3>
              <p className="mt-5 text-lg text-ink-soft leading-relaxed">
                Give your best marketer write access to something that matters,
                and see what comes back. If nothing comes back, you have learned
                something important about your team. If a merged pull request
                comes back, you have found the person your department should be
                rebuilt around.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-light text-ink leading-tight">
                Then count your agents.
              </h3>
              <p className="mt-5 text-lg text-ink-soft leading-relaxed">
                If you cannot say how many are running, who owns them, and what
                they cost, you do not have an AI strategy. You have an unmetered
                utility and a very good quarter.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-soft border border-ink-soft rounded-md overflow-hidden">
            <Stat n="108" l="merged pull requests to production" />
            <Stat n="249" l="live pages, whole site rebuilt" />
            <Stat n="14" l="systems of record wired in" />
            <Stat n="5" l="people" />
          </div>

          <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
            Counted from git history and session records, not self-reported. The
            full working log &mdash; including the four things this does not
            solve, and the launch where our own number appeared at three
            different values on three of our own surfaces &mdash; is published
            in full.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 md:items-end">
            <div>
              <p className="eyebrow mb-4">Six months</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.08] tracking-tight text-ink">
                Speed does not remove the bottleneck. It moves it somewhere you
                were not looking.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ai-native"
                className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm"
              >
                The full working record
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
