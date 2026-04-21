import Link from "next/link";
import { notFound } from "next/navigation";
import { fundingCategories } from "@/content/funding-categories";

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

  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Funding category</p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{category.title}</h1>
      <p className="max-w-3xl text-slate-600">{category.summary}</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">Ideal borrower:</span> {category.idealFor}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-slate-900">Max amount:</span> ${category.maxAmount.toLocaleString("en-US")}
        </p>
      </div>
      <Link
        href={`/apply?product=${category.slug}`}
        className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Continue to application
      </Link>
    </div>
  );
}