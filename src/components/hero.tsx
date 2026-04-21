import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 px-8 py-12 text-white shadow-2xl md:px-12 md:py-16">
      <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Moonshine Capital Marketplace</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Funding infrastructure for partner-driven growth.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-200 md:text-lg">
            Convert high-intent traffic into qualified applications through verticalized offer pages, intelligent routing, and attribution-ready partner journeys.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Start application flow
            </Link>
            <Link
              href="/funding"
              className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/20"
            >
              Explore funding offers
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Marketplace Snapshot</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-xl font-bold">5</p>
              <p className="text-slate-200">Funding paths</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-xl font-bold">5</p>
              <p className="text-slate-200">Vertical hubs</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-xl font-bold">3</p>
              <p className="text-slate-200">Qualification tools</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-xl font-bold">6</p>
              <p className="text-slate-200">Tracked fields</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-200">
            Built for partner attribution, conversion confidence, and rapid launch across multiple acquisition channels.
          </p>
        </div>
      </div>
    </section>
  );
}
