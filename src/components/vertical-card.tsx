import Link from "next/link";
import type { Vertical } from "@/content/verticals";

type VerticalCardProps = {
  vertical: Vertical;
};

export function VerticalCard({ vertical }: VerticalCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Vertical Hub</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{vertical.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{vertical.summary}</p>
      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">Primary constraint</p>
        <p className="mt-1 text-sm text-slate-700">{vertical.painPoint}</p>
      </div>
      <p className="mt-3 text-xs text-slate-500">Signal: {vertical.marketSignal}</p>
      <Link
        href={`/verticals/${vertical.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-slate-900 transition group-hover:text-emerald-700"
      >
        Explore vertical strategy
      </Link>
    </article>
  );
}
