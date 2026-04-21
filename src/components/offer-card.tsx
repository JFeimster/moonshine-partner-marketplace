import Link from "next/link";
import type { FundingCategory } from "@/content/funding-categories";
import { formatCurrency } from "@/lib/utils";

type OfferCardProps = {
  offer: FundingCategory;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-xl">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Funding Offer</p>
        {offer.featured ? (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">Featured</span>
        ) : null}
      </div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{offer.title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-700">{offer.tagline}</p>
      <p className="mt-3 text-sm text-slate-600">{offer.summary}</p>
      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
        <p>
          <span className="font-medium text-slate-900">Funding ceiling:</span> {formatCurrency(offer.maxAmount)}
        </p>
        <p className="mt-1">
          <span className="font-medium text-slate-900">Min monthly revenue:</span> {formatCurrency(offer.minMonthlyRevenue)}
        </p>
        <p className="mt-1">
          <span className="font-medium text-slate-900">Speed:</span> {offer.timeToFunding}
        </p>
        <p className="mt-1">
          <span className="font-medium text-slate-900">Term range:</span> {offer.termRange}
        </p>
        <p className="mt-1">
          <span className="font-medium text-slate-900">Pricing profile:</span> {offer.pricingRange}
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-xs text-slate-500">Best for: {offer.bestFor.slice(0, 2).join(" • ")}</p>
        <p className="text-xs text-slate-500">Approval signals: {offer.approvalSignals.slice(0, 2).join(" • ")}</p>
      </div>
      <Link
        href={`/funding/${offer.slug}`}
        className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:text-emerald-700"
      >
        View funding details
      </Link>
    </article>
  );
}
