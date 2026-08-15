"use client";

import { useEffect, useRef, useState } from "react";

export interface LedgerRow {
  /** What was built. */
  work: string;
  /** One line on how it was actually done. */
  note: string;
  /** Conventional duration, in working days. Estimate. */
  wasDays: number;
  /** Conventional duration, as written. */
  wasLabel: string;
  /** Measured duration, in working days. */
  nowDays: number;
  /** Measured duration, as written. */
  nowLabel: string;
  /** Where the measured figure comes from. */
  source: string;
}

/**
 * A scale drawing, not a chart. Both bars share one horizontal scale, so the
 * conventional estimate is drawn at its true length and the measured figure is
 * whatever fraction of it actually is. Bars grow once the row is on screen.
 */
export default function CompressionLedger({ rows }: { rows: LedgerRow[] }) {
  const max = Math.max(...rows.map((r) => r.wasDays));

  return (
    <div className="mt-12">
      {/* Scale header — a measuring rule, in the site's tick idiom. */}
      <div className="hidden md:grid grid-cols-12 gap-6 items-end pb-3">
        <div className="col-span-4" />
        <div className="col-span-8">
          <div className="flex justify-between">
            {[0, 0.25, 0.5, 0.75, 1].map((f, i) => (
              <span
                key={f}
                className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-muted"
              >
                {Math.round(f * max)}
                {i === 4 ? " working days" : ""}
              </span>
            ))}
          </div>
          <div className="tick-rule mt-1.5 opacity-70" />
        </div>
      </div>

      <div className="border-t border-rule">
        {rows.map((row, i) => (
          <LedgerLine key={row.work} row={row} max={max} index={i} />
        ))}
      </div>
    </div>
  );
}

function LedgerLine({
  row,
  max,
  index,
}: {
  row: LedgerRow;
  max: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion by drawing the bars at full length immediately.
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
      { rootMargin: "-10% 0px -15% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const wasPct = (row.wasDays / max) * 100;
  const nowPct = (row.nowDays / max) * 100;
  const factor = row.wasDays / row.nowDays;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-7 border-b border-rule items-start"
    >
      <div className="md:col-span-4">
        <h3 className="font-serif text-lg md:text-xl font-normal leading-snug text-ink">
          {row.work}
        </h3>
        <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
          {row.note}
        </p>
      </div>

      <div className="md:col-span-8">
        {/* Conventional — drawn in kraft, the colour of the old way. */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-5 relative">
            <div
              className="h-5 rounded-[3px] bg-kraft-alt border border-rule transition-[width] duration-[1100ms] ease-out"
              style={{ width: shown ? `${wasPct}%` : "0%" }}
            />
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.12em] text-ink-muted uppercase w-28 shrink-0 text-right">
            {row.wasLabel}
          </span>
        </div>

        {/* Measured — brass, and usually a stub. */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex-1 h-5 relative">
            <div
              className="h-5 rounded-[3px] bg-brass transition-[width] duration-[1100ms] ease-out delay-200 min-w-[3px]"
              style={{ width: shown ? `${Math.max(nowPct, 0.4)}%` : "0%" }}
            />
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.12em] text-brass-dark uppercase w-28 shrink-0 text-right">
            {row.nowLabel}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-serif text-2xl text-verdigris-dark tabular-nums">
            {factor >= 10 ? Math.round(factor) : factor.toFixed(1)}&times;
          </span>
          <span className="text-sm text-ink-muted">{row.source}</span>
        </div>
      </div>
    </div>
  );
}
