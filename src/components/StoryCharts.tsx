"use client";

import { useEffect, useRef, useState } from "react";

/** Shared: reveal once the element is on screen, honouring reduced motion. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-5% 0px -10% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

/* ── Output inventory ─────────────────────────────────────────
   One square per published page. The count is the visual — a
   number in a sentence does not land the same way as 439 marks. */

export interface InventoryGroup {
  label: string;
  count: number;
  tone: "ink" | "brass" | "verdigris" | "kraft";
  note: string;
}

const toneFill: Record<InventoryGroup["tone"], string> = {
  ink: "var(--color-ink)",
  brass: "var(--color-brass)",
  verdigris: "var(--color-verdigris)",
  kraft: "var(--color-kraft-alt)",
};

export function OutputInventory({ groups }: { groups: InventoryGroup[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const total = groups.reduce((s, g) => s + g.count, 0);

  // Flatten to one entry per page so the grid is a true unit chart.
  const cells: string[] = [];
  groups.forEach((g) => {
    for (let i = 0; i < g.count; i++) cells.push(g.tone);
  });

  return (
    <div ref={ref} className="mt-12">
      <div className="flex flex-wrap gap-[3px] leading-none">
        {cells.map((tone, i) => (
          <span
            key={i}
            className="rounded-[1.5px] transition-opacity duration-500"
            style={{
              width: 9,
              height: 9,
              background: toneFill[tone as InventoryGroup["tone"]],
              border:
                tone === "kraft" ? "1px solid var(--color-rule)" : "none",
              opacity: shown ? 1 : 0,
              transitionDelay: `${Math.min(i * 1.6, 900)}ms`,
            }}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
        {groups.map((g) => (
          <div key={g.label} className="flex gap-3">
            <span
              className="mt-[7px] rounded-[1.5px] shrink-0"
              style={{
                width: 9,
                height: 9,
                background: toneFill[g.tone],
                border:
                  g.tone === "kraft" ? "1px solid var(--color-rule)" : "none",
              }}
            />
            <div>
              <span className="block font-serif text-2xl text-ink tabular-nums leading-none">
                {g.count}
              </span>
              <span className="block text-sm text-ink mt-1.5">{g.label}</span>
              <span className="block text-[0.8rem] text-ink-muted mt-0.5 leading-snug">
                {g.note}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 font-serif text-2xl text-ink">
        {total} pages live, from a site that did not exist on 1 June.
      </p>
    </div>
  );
}

/* ── Growth bars ──────────────────────────────────────────────
   Percentage change only. No raw counts leave the building. */

export interface GrowthRow {
  label: string;
  pct: number;
  detail: string;
}

export function GrowthBars({ rows }: { rows: GrowthRow[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const max = Math.max(...rows.map((r) => Math.abs(r.pct)));

  return (
    <div ref={ref} className="mt-12 border-t border-rule">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-rule items-center"
        >
          <div className="md:col-span-4">
            <h3 className="font-serif text-lg font-normal text-ink leading-snug">
              {r.label}
            </h3>
            <p className="text-sm text-ink-muted mt-1 leading-relaxed">
              {r.detail}
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="h-7">
              <div
                className="h-7 rounded-[3px] bg-verdigris transition-[width] duration-[1200ms] ease-out"
                style={{
                  width: shown ? `${(Math.abs(r.pct) / max) * 100}%` : "0%",
                  transitionDelay: `${i * 120}ms`,
                }}
              />
            </div>
          </div>
          <div className="md:col-span-2 md:text-right">
            <span className="font-serif text-3xl text-verdigris-dark tabular-nums">
              +{r.pct}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Usage bars ───────────────────────────────────────────────
   Where the agent actually spent its time. */

export interface UsageRow {
  label: string;
  value: number;
  note?: string;
}

export function UsageBars({
  rows,
  unit,
  dark = false,
}: {
  rows: UsageRow[];
  unit: string;
  dark?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const max = Math.max(...rows.map((r) => r.value));

  return (
    <div ref={ref} className="mt-8">
      {rows.map((r, i) => (
        <div key={r.label} className="py-2.5">
          <div className="flex items-baseline justify-between gap-4 mb-1.5">
            <span
              className={`text-sm ${dark ? "text-kraft" : "text-ink"}`}
            >
              {r.label}
              {r.note && (
                <span
                  className={`ml-2 text-[0.75rem] ${dark ? "text-kraft/50" : "text-ink-muted"}`}
                >
                  {r.note}
                </span>
              )}
            </span>
            <span
              className={`font-mono text-[0.75rem] tabular-nums shrink-0 ${
                dark ? "text-brass-soft" : "text-brass-dark"
              }`}
            >
              {r.value.toLocaleString()}
            </span>
          </div>
          <div className={`h-2 ${dark ? "bg-ink-soft" : "bg-kraft-alt"} rounded-full`}>
            <div
              className={`h-2 rounded-full ${dark ? "bg-brass-soft" : "bg-brass"} transition-[width] duration-[1000ms] ease-out`}
              style={{
                width: shown ? `${(r.value / max) * 100}%` : "0%",
                transitionDelay: `${i * 70}ms`,
              }}
            />
          </div>
        </div>
      ))}
      <p
        className={`mt-5 font-mono text-[0.65rem] tracking-[0.16em] uppercase ${
          dark ? "text-kraft/45" : "text-ink-muted"
        }`}
      >
        {unit}
      </p>
    </div>
  );
}
