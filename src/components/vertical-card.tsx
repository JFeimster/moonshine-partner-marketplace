import Link from "next/link";
import type { Vertical } from "@/content/verticals";

type VerticalCardProps = {
  vertical: Vertical;
};

export function VerticalCard({ vertical }: VerticalCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{vertical.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{vertical.description}</p>
      <Link href={`/verticals/${vertical.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
        Explore vertical
      </Link>
    </article>
  );
}