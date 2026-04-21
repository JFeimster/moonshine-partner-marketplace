import Link from "next/link";
import { notFound } from "next/navigation";
import { fundingCategories } from "@/content/funding-categories";
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

  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Vertical landing page</p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{vertical.title} funding solutions</h1>
      <p className="max-w-3xl text-slate-600">{vertical.description}</p>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Recommended offer path</h2>
        <p className="mt-2 text-sm text-slate-600">
          {featuredOffer ? `${featuredOffer.title}: ${featuredOffer.summary}` : "Offer mapping in progress."}
        </p>
        {featuredOffer ? (
          <Link href={`/funding/${featuredOffer.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
            View funding category
          </Link>
        ) : null}
      </section>
    </div>
  );
}