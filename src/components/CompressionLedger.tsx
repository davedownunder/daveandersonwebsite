"use client";

import { useEffect, useRef, useState } from "react";

export interface LedgerRow {
  work: string;
  /** What the job actually contains. */
  note: string;
  /** Conventional headcount. Estimate. */
  wasPeople: number;
  /** Conventional elapsed time, in working days. Estimate. */
  wasDays: number;
  wasLabel: string;
  /** Measured headcount. */
  nowPeople: number;
  /** Measured elapsed time, in working days. */
  nowDays: number;
  nowLabel: string;
  /** Where the measured figure comes from. */
  source: string;
  /** Set for work that repeats rather than completes. */
  recurring?: boolean;
}

/** Small figure glyph — reads as a person at 12px in a way a dot does not. */
function Figure({ filled }: { filled: boolean }) {
  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      aria-hidden
      className="shrink-0"
    >
      <circle
        cx="5.5"
        cy="3.4"
        r="3.1"
        fill={filled ? "var(--color-brass)" : "var(--color-kraft-alt)"}
        stroke={filled ? "none" : "var(--color-rule)"}
        strokeWidth="1"
      />
      <path
        d="M0.9 15.6v-4.3a4.6 4.6 0 0 1 9.2 0v4.3z"
        fill={filled ? "var(--color-brass)" : "var(--color-kraft-alt)"}
        stroke={filled ? "none" : "var(--color-rule)"}
        strokeWidth="1"
      />
    </svg>
  );
}

function People({
  count,
  filled,
  max,
}: {
  count: number;
  filled: boolean;
  max: number;
}) {
  return (
    <div className="flex gap-[3px] items-end" aria-hidden>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < count ? "" : "opacity-0"}>
          <Figure filled={filled} />
        </span>
      ))}
    </div>
  );
}

export default function CompressionLedger({ rows }: { rows: LedgerRow[] }) {
  const maxDays = Math.max(...rows.map((r) => r.wasDays));
  const maxPeople = Math.max(...rows.map((r) => r.wasPeople));

  return (
    <div className="mt-12">
      <div className="border-t border-rule">
        {rows.map((row) => (
          <LedgerLine
            key={row.work}
            row={row}
            maxDays={maxDays}
            maxPeople={maxPeople}
          />
        ))}
      </div>
    </div>
  );
}

function LedgerLine({
  row,
  maxDays,
  maxPeople,
}: {
  row: LedgerRow;
  maxDays: number;
  maxPeople: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-8% 0px -12% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const wasPct = (row.wasDays / maxDays) * 100;
  const nowPct = (row.nowDays / maxDays) * 100;

  const wasEffort = row.wasPeople * row.wasDays;
  const nowEffort = row.nowPeople * row.nowDays;
  const factor = wasEffort / nowEffort;

  // Below a day, person-days stops being a useful unit — say hours instead,
  // so "48 person-days -> 1 person-hour" reads as a real claim.
  const effort = (n: number) => {
    if (n >= 1) {
      const d = Math.round(n);
      return `${d.toLocaleString()} person-day${d === 1 ? "" : "s"}`;
    }
    const h = Math.max(Math.round(n * 8), 1);
    return `${h} person-hour${h === 1 ? "" : "s"}`;
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-8 border-b border-rule items-start"
    >
      {/* What */}
      <div className="md:col-span-4">
        <h3 className="font-serif text-lg md:text-xl font-normal leading-snug text-ink">
          {row.work}
        </h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">
          {row.note}
        </p>
      </div>

      {/* Time + people */}
      <div className="md:col-span-5">
        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink-muted mb-2">
          {row.recurring ? "Every week" : "Elapsed time"}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-4">
            <div
              className="h-4 rounded-[3px] bg-kraft-alt border border-rule transition-[width] duration-[1100ms] ease-out"
              style={{ width: shown ? `${Math.max(wasPct, 1)}%` : "0%" }}
            />
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-muted w-24 shrink-0 text-right">
            {row.wasLabel}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-1.5">
          <div className="flex-1 h-4">
            <div
              className="h-4 rounded-[3px] bg-brass transition-[width] duration-[1100ms] ease-out delay-200 min-w-[3px]"
              style={{ width: shown ? `${Math.max(nowPct, 0.5)}%` : "0%" }}
            />
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.1em] text-brass-dark w-24 shrink-0 text-right">
            {row.nowLabel}
          </span>
        </div>

        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink-muted mt-6 mb-2">
          People
        </p>

        <div className="flex items-center gap-3">
          <div className="flex-1">
            <People count={row.wasPeople} filled={false} max={maxPeople} />
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-muted w-24 shrink-0 text-right">
            {row.wasPeople}+ people
          </span>
        </div>

        <div className="flex items-center gap-3 mt-1.5">
          <div className="flex-1">
            <People count={row.nowPeople} filled max={maxPeople} />
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.1em] text-brass-dark w-24 shrink-0 text-right">
            {row.nowPeople === 0
              ? "an agent"
              : `${row.nowPeople} + agent${row.nowPeople > 1 ? "s" : ""}`}
          </span>
        </div>
      </div>

      {/* Effort */}
      <div className="md:col-span-3">
        <div className="border-l-2 border-rule pl-4 md:pl-5">
          {/* No people left on the task means no ratio to state — say so. */}
          {nowEffort === 0 ? (
            <>
              <span className="block font-serif text-3xl md:text-4xl text-verdigris-dark leading-none">
                Nobody
              </span>
              <span className="block font-mono text-[0.6rem] tracking-[0.16em] uppercase text-ink-muted mt-2">
                does this now
              </span>
              <p className="mt-2 text-[0.78rem] leading-snug text-ink-muted tabular-nums">
                {effort(wasEffort)} a week &rarr; none
              </p>
            </>
          ) : (
            <>
              <span className="block font-serif text-3xl md:text-4xl text-verdigris-dark tabular-nums leading-none">
                {factor >= 10 ? Math.round(factor) : factor.toFixed(1)}&times;
              </span>
              <span className="block font-mono text-[0.6rem] tracking-[0.16em] uppercase text-ink-muted mt-2">
                less effort
              </span>
              <p className="mt-2 text-[0.78rem] leading-snug text-ink-muted tabular-nums">
                {effort(wasEffort)} &rarr; {effort(nowEffort)}
                {row.recurring ? ", every week" : ""}
              </p>
            </>
          )}
          <p className="mt-3 text-[0.82rem] leading-relaxed text-ink-soft">
            {row.source}
          </p>
        </div>
      </div>
    </div>
  );
}
