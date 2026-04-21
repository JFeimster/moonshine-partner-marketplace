import Link from "next/link";
import { notFound } from "next/navigation";
import { fundingCategories } from "@/content/funding-categories";
import { verticals } from "@/content/verticals";
import { formatCurrency } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return fundingCategories.map((category) => ({ slug: category.slug }));
}

export default async function FundingSlugPage({ params }: Props) {
  const { slug } = await params;
  const category = fundingCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const matchingVerticals = verticals.filter((vertical) => category.recommendedVerticalSlugs.includes(vertical.slug));

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Funding Category</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{category.title}</h1>
        <p className="mt-2 text-base font-medium text-slate-700">{category.tagline}</p>
        <p className="mt-4 max-w-3xl text-slate-600">{category.summary}</p>
        <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-emerald-700">Best-fit borrower profile</p>
          <p className="mt-1 text-sm text-emerald-900">{category.bestFitBorrower}</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Funding Ceiling</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{formatCurrency(category.maxAmount)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Min Monthly Revenue</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{formatCurrency(category.minMonthlyRevenue)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Speed</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{category.timeToFunding}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Term Range</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{category.termRange}</p>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Pricing profile</p>
          <p className="mt-1 text-sm font-medium text-slate-800">{category.pricingRange}</p>
        </div>

        <div className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">Ideal for</p>
              <ul className="mt-3 grid gap-2">
                {category.bestFor.map((item) => (
                  <li key={item} className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Not ideal for</p>
              <ul className="mt-3 grid gap-2">
                {category.notIdealFor.map((item) => (
                  <li key={item} className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">Funding highlights</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {category.approvalSignals.map((signal) => (
              <li key={signal} className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800">
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Next step</p>
          <p className="mt-1 text-sm text-slate-600">Choose your conversion path: apply now or run a quick matching tool first.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href={`/apply?product=${category.slug}`}
              className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Continue to application
            </Link>
            <Link
              href="/tools/funding-match"
              className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Use funding matcher
            </Link>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/funding" className="font-semibold text-slate-700 hover:text-slate-900">
            Back to funding index
          </Link>
          <Link href="/tools" className="font-semibold text-slate-700 hover:text-slate-900">
            Explore all tools
          </Link>
          <Link href="/partners/affiliate-network" className="font-semibold text-slate-700 hover:text-slate-900">
            See partner distribution example
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Aligned vertical routes</h2>
        {matchingVerticals.length === 0 ? (
          <p className="mt-3 text-sm text-slate-600">Vertical mappings for this category are being expanded.</p>
        ) : (
          <div className="mt-4 flex flex-wrap gap-2">
            {matchingVerticals.map((vertical) => (
              <Link
                key={vertical.slug}
                href={`/verticals/${vertical.slug}`}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-200"
              >
                {vertical.title}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
