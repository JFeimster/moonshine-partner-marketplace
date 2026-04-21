import { CardGrid } from "@/components/card-grid";
import { OfferCard } from "@/components/offer-card";
import { SectionHeading } from "@/components/section-heading";
import { fundingCategories } from "@/content/funding-categories";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export default function FundingIndexPage() {
  const featured = fundingCategories.filter((category) => category.featured);
  const totalCapacity = fundingCategories.reduce((sum, category) => sum + category.maxAmount, 0);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Funding Marketplace</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Choose the right funding path for operating reality</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Compare offer structures by speed, revenue thresholds, and use-case fit. Moonshine Capital is the front-end marketplace that routes qualified demand
          from direct and partner channels.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Categories</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{fundingCategories.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Listed Capacity</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{formatCurrency(totalCapacity)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Fastest Routes</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{featured.length} featured offers</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Offers"
          title="High-demand categories"
          description="These categories are often the first destination for partner-referred and inbound operator demand."
          actions={
            <Link href="/tools/funding-match" className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
              Use funding match tool
            </Link>
          }
        />
        <CardGrid>
          {featured.map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </CardGrid>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="All Categories" title="Complete funding catalog" description="Use the full catalog when mapping offers to specific vertical or partner traffic sources." />
        <CardGrid>
          {fundingCategories.map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </CardGrid>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">How the marketplace flow works</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">1. Discover</p>
            <p className="mt-1 text-sm text-slate-600">Select a category that matches the operator&apos;s capital objective and time horizon.</p>
          </article>
          <article className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">2. Qualify</p>
            <p className="mt-1 text-sm text-slate-600">Use interactive tools to confirm readiness and route quality before submission.</p>
          </article>
          <article className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">3. Apply</p>
            <p className="mt-1 text-sm text-slate-600">Send the application with attribution context attached for partner reporting.</p>
          </article>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/apply" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Start application
          </Link>
          <Link href="/tools" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
            Explore qualification tools
          </Link>
        </div>
      </section>
    </div>
  );
}
