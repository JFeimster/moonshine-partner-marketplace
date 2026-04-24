import Link from "next/link";
import { verticals } from "@/content/verticals";

const segments = Array.from(new Set(verticals.map((vertical) => vertical.segment)));

export default function VerticalsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Vertical Coverage Directory</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Capital paths mapped to how operators actually make money</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          This directory turns the verticals section into something useful: segment-aware summaries, operator context, and best-fit capital paths instead of generic buzzwords wearing a blazer.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Verticals</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{verticals.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Segments</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{segments.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Use Case Lens</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">Best-fit capital paths</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Segments covered</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {segments.map((segment) => (
            <span key={segment} className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-medium text-sky-900">
              {segment}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {verticals.map((vertical) => (
          <article key={vertical.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{vertical.segment}</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">{vertical.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{vertical.summary}</p>

            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-900">Best-fit capital paths</p>
              <ul className="mt-3 grid gap-2">
                {vertical.bestFitCapitalPaths.map((path) => (
                  <li key={path} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-800">
                    {path}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/verticals/${vertical.slug}`} className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
                View vertical page
              </Link>
              <Link href={`/apply?vertical=${vertical.slug}`} className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
                Apply with context
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
