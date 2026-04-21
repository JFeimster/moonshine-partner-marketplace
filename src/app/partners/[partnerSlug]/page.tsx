import Link from "next/link";
import { notFound } from "next/navigation";
import { partners } from "@/content/partners";
import { pickTrackingParams, toQueryString, type RawSearchParams, type TrackingParams } from "@/lib/tracking";

type Props = {
  params: Promise<{ partnerSlug: string }>;
  searchParams: Promise<RawSearchParams>;
};

function partnerDefaults(partnerSlug: string): TrackingParams {
  const partner = partners.find((item) => item.slug === partnerSlug);
  if (!partner) {
    return {};
  }

  return {
    utm_source: partner.defaultUtmSource,
    utm_medium: partner.defaultUtmMedium,
    utm_campaign: partner.defaultUtmCampaign,
    partner_id: partner.partnerId,
    asset_id: partner.assetId,
  };
}

export function generateStaticParams() {
  return partners.map((partner) => ({ partnerSlug: partner.slug }));
}

export default async function PartnerPage({ params, searchParams }: Props) {
  const { partnerSlug } = await params;
  const partner = partners.find((item) => item.slug === partnerSlug);

  if (!partner) {
    notFound();
  }

  const incoming = pickTrackingParams(await searchParams);
  const merged = {
    ...partnerDefaults(partnerSlug),
    ...incoming,
  };

  const queryString = toQueryString(merged);
  const applyHref = queryString ? `/apply?${queryString}` : "/apply";

  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Partner landing page</p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{partner.name}</h1>
      <p className="max-w-3xl text-slate-600">{partner.description}</p>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Attribution context</h2>
        <p className="mt-2 text-sm text-slate-600">Partner pages are prewired for `partner_id`, UTM fields, `ref`, and `asset_id` forwarding.</p>
        <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">{JSON.stringify(merged, null, 2)}</pre>
      </section>

      <Link href={applyHref} className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
        Continue with tracked application
      </Link>
    </div>
  );
}