import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
      <h2 className="text-2xl font-bold tracking-tight">Ready to route your next funding lead?</h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        Build partner-ready landing paths, capture attribution data, and send qualified applications directly into your revenue workflow.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/apply" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
          Start application
        </Link>
        <Link href="/contact" className="rounded-full border border-slate-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-300">
          Talk to partnerships
        </Link>
      </div>
    </section>
  );
}