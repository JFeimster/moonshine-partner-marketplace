import Link from "next/link";
import type { Tool } from "@/content/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{tool.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{tool.summary}</p>
      <Link href={`/tools/${tool.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
        {tool.ctaLabel}
      </Link>
    </article>
  );
}