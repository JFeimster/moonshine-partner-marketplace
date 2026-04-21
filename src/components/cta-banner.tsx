import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-600 via-emerald-700 to-slate-900 px-8 py-10 text-white shadow-xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">Partner Distribution</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Ready to scale partner-sourced funding demand?</h2>
          <p className="mt-3 max-w-2xl text-emerald-50/90">
            Deploy co-branded landing journeys, preserve attribution across channels, and route qualified applicants into Moonshine Capital offer paths.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Join partner program
            </Link>
            <Link
              href="/partners/affiliate-network"
              className="rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
            >
              View partner experience
            </Link>
            <Link
              href="/funding"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-emerald-50 transition hover:border-white hover:bg-white/10"
            >
              Browse funding marketplace
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/30 bg-white/10 p-5 text-sm backdrop-blur">
          <p className="font-semibold">Clear conversion path</p>
          <ul className="mt-3 space-y-2 text-emerald-50/90">
            <li>- Choose offer category or vertical entrypoint</li>
            <li>- Qualify through tools and intent signals</li>
            <li>- Apply with partner attribution attached</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
