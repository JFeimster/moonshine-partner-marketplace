import Link from "next/link";
import type { Tool } from "@/content/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">Interactive Tool</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{tool.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{tool.summary}</p>
      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">Outcome:</span> {tool.outcome}
        </p>
        <p className="mt-1">
          <span className="font-semibold text-slate-900">Completion time:</span> {tool.estimatedTime}
        </p>
        <p className="mt-1">
          <span className="font-semibold text-slate-900">Ideal for:</span> {tool.idealFor}
        </p>
      </div>
      <Link
        href={`/tools/${tool.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-slate-900 transition group-hover:text-emerald-700"
      >
        {tool.ctaLabel}
      </Link>
    </article>
  );
}
