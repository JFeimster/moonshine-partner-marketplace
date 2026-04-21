import { CardGrid } from "@/components/card-grid";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/content/tools";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Tools Hub</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Qualification tools built for conversion intent</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Each tool is designed to capture context before the application step, improving routing quality and partner attribution accuracy.
        </p>
      </section>

      <SectionHeading
        eyebrow="Interactive Tools"
        title="Conversion-oriented planning and matching experiences"
        description="Deploy these modules across organic, paid, and partner channels to pre-qualify users before lead submission."
        actions={
          <Link href="/apply" className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
            Go to application
          </Link>
        }
      />
      <CardGrid>
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </CardGrid>
    </div>
  );
}
