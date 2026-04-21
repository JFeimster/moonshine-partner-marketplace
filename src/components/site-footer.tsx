import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 text-sm text-slate-600 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-base font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 max-w-md">
            Front-end funding marketplace and partner distribution platform designed for attribution clarity and conversion velocity.
          </p>
          <p className="mt-4 text-xs text-slate-500">Support: {siteConfig.legal.supportEmail}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Marketplace</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/funding" className="hover:text-slate-900">
              Funding offers
            </Link>
            <Link href="/verticals/saas" className="hover:text-slate-900">
              Vertical hubs
            </Link>
            <Link href="/tools" className="hover:text-slate-900">
              Interactive tools
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Company</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
            <Link href="/apply" className="hover:text-slate-900">
              Apply
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.legal.company}. All rights reserved.</p>
          <p>Moonshine Capital marketplace UI v1</p>
        </div>
      </div>
    </footer>
  );
}
