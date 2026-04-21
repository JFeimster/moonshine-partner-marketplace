import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, actions }: SectionHeadingProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
        <p className="max-w-3xl text-base text-slate-600">{description}</p>
      </div>
      {actions ? <div className="shrink-0 text-sm">{actions}</div> : null}
    </header>
  );
}
