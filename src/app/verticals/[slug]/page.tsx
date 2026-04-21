import Link from "next/link";
import { notFound } from "next/navigation";
import { fundingCategories } from "@/content/funding-categories";
import { tools } from "@/content/tools";
import { verticals } from "@/content/verticals";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return verticals.map((vertical) => ({ slug: vertical.slug }));
}

export default async function VerticalSlugPage({ params }: Props) {
  const { slug } = await params;
  const vertical = verticals.find((item) => item.slug === slug);

  if (!vertical) {
    notFound();
  }

  const featuredOffer = fundingCategories.find((item) => item.slug === vertical.featuredFundingSlug);
  const recommendedTool = tools.find((item) => item.slug === vertical.recommendedToolSlug);
  const alternateOffers = fundingCategories.filter((item) => item.slug !== vertical.featuredFundingSlug).slice(0, 2);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Vertical Landing Page</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{vertical.title} funding solutions</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{vertical.summary}</p>
        <p className="mt-2 max-w-3xl text-sm text-slate-500">{vertical.operatorProfile}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Primary constraint</p>
            <p className="mt-1 text-sm text-slate-800">{vertical.painPoint}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Market signal</p>
            <p className="mt-1 text-sm text-slate-800">{vertical.marketSignal}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">Important KPIs</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {vertical.keyKpis.map((kpi) => (
              <li key={kpi} className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-medium text-sky-900">
                {kpi}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Recommended offer path</h2>
        <p className="mt-2 text-sm text-slate-600">{featuredOffer ? `${featuredOffer.title}: ${featuredOffer.tagline}` : "Offer mapping in progress."}</p>
        {featuredOffer ? (
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/funding/${featuredOffer.slug}`} className="inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
              View recommended funding category
            </Link>
            <Link href={`/apply?vertical=${vertical.slug}&product=${featuredOffer.slug}`} className="inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
              Continue to tracked application
            </Link>
          </div>
        ) : null}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Recommended qualification tool</h2>
        {recommendedTool ? (
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">{recommendedTool.title}</p>
            <p className="mt-1 text-sm text-slate-600">{recommendedTool.summary}</p>
            <p className="mt-1 text-sm text-slate-600">
              <span className="font-medium text-slate-800">Primary metric:</span> {recommendedTool.primaryMetric}
            </p>
            <Link href={`/tools/${recommendedTool.slug}`} className="mt-3 inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
              Open tool
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-600">Tool recommendation is being configured for this vertical.</p>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Alternate categories to test</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {alternateOffers.map((offer) => (
            <Link key={offer.slug} href={`/funding/${offer.slug}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
              <p className="font-semibold text-slate-900">{offer.title}</p>
              <p className="mt-1 text-sm text-slate-600">{offer.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
