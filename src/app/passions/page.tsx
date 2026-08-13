import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Passions" };

const passions = [
  {
    num: "01",
    title: "Travel",
    blurb:
      "Notes from the road. Family trips, speaking engagements, and the slow-travel detours in between.",
    href: "/passions/travel",
  },
  {
    num: "02",
    title: "Peloton",
    blurb:
      "Official Peloton ambassador. Curated playlists, class reviews, and thoughts on the community.",
    href: "/passions/peloton",
  },
];

export default function PassionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Passions"
        title={
          <>
            The{" "}
            <span className="italic text-brass">side projects</span> that keep
            the main ones honest.
          </>
        }
        lede="Outside of work and the podcast, there are a couple of pursuits worth writing down."
      />
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            {passions.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-kraft hover:bg-kraft-soft transition-colors p-10 group flex flex-col min-h-[220px]"
              >
                <p className="font-mono text-xs tracking-widest uppercase text-brass-dark">
                  {p.num}
                </p>
                <h2 className="font-serif text-3xl font-light mt-4 group-hover:text-brass transition-colors">
                  {p.title}
                </h2>
                <p className="text-ink-soft mt-3 leading-relaxed flex-1">
                  {p.blurb}
                </p>
                <span className="text-brass text-sm mt-6 inline-flex items-center gap-1">
                  Read more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
