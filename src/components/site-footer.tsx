import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-1 max-w-md">Partner-driven marketplace for funding discovery and conversion routing.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
          <Link href="/tools" className="hover:text-slate-900">
            Tools
          </Link>
        </div>
      </div>
    </footer>
  );
}