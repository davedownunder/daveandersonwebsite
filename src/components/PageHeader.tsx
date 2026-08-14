import { ReactNode } from "react";
import TickRule from "./TickRule";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}

export default function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.05] tracking-tight max-w-4xl text-ink">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 text-lg text-ink-soft max-w-2xl leading-relaxed">
            {lede}
          </p>
        )}
        <TickRule className="mt-12 opacity-60" />
      </div>
    </section>
  );
}
