import Link from "next/link";
import type { FundingCategory } from "@/content/funding-categories";
import { formatCurrency } from "@/lib/utils";

type OfferCardProps = {
  offer: FundingCategory;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Funding Offer</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{offer.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{offer.summary}</p>
      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
        <p>
          <span className="font-medium text-slate-900">Up to:</span> {formatCurrency(offer.maxAmount)}
        </p>
        <p className="mt-1">
          <span className="font-medium text-slate-900">Best for:</span> {offer.idealFor}
        </p>
      </div>
      <Link href={`/funding/${offer.slug}`} className="mt-5 text-sm font-semibold text-slate-900 hover:text-emerald-700">
        View details
      </Link>
    </article>
  );
}