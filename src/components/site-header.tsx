import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="border-b border-slate-200 bg-slate-900 text-slate-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <p className="hidden md:block">Moonshine Capital: front-end marketplace + partner attribution routing layer.</p>
          <Link href="/partners/affiliate-network" className="font-semibold text-emerald-300 hover:text-emerald-200">
            View partner-ready flow
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
          {siteConfig.shortName}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/tools/funding-match" className="hidden rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 md:inline-flex">
            Funding Match
          </Link>
          <Link
            href="/apply"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
