import Link from "next/link";

export function Hero() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 p-8 shadow-sm md:p-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Moonshine Capital Marketplace</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Partner-distributed funding offers built for speed, attribution, and conversion.
      </h1>
      <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
        Launch vertical landing pages, route leads into tailored funding paths, and measure every partner touchpoint with clean tracking.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/funding" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Browse funding
        </Link>
        <Link href="/tools/funding-match" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
          Try funding match
        </Link>
      </div>
    </section>
  );
}