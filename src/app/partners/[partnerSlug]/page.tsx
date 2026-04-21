import Link from "next/link";
import { notFound } from "next/navigation";
import { partners } from "@/content/partners";
import { buildTrackingSnapshot, pickTrackingParams, toQueryString, type RawSearchParams, type TrackingParams } from "@/lib/tracking";

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
  const defaults = partnerDefaults(partnerSlug);
  const trackingSnapshot = buildTrackingSnapshot(defaults, incoming);
  const merged = trackingSnapshot.merged;

  const queryString = toQueryString(merged);
  const applyHref = queryString ? `/apply?${queryString}` : "/apply";

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Partner Landing Page</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{partner.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{partner.description}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Audience</p>
            <p className="mt-1 text-sm text-slate-900">{partner.audience}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Distribution Model</p>
            <p className="mt-1 text-sm text-slate-900">{partner.distributionModel}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Primary Goal</p>
            <p className="mt-1 text-sm text-slate-900">{partner.primaryGoal}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Tracking and attribution snapshot</h2>
        <p className="mt-2 text-sm text-slate-600">
          This mock tracking helper confirms partner defaults and incoming overrides for `partner_id`, UTM fields, `ref`, and `asset_id`.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-4 py-3">Field</th>
                <th className="px-4 py-3">Value</th>
                <th className="px-4 py-3">Source</th>
              </tr>
            </thead>
            <tbody>
              {trackingSnapshot.rows.map((row) => (
                <tr key={row.key} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.label}</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">{row.value}</td>
                  <td className="px-4 py-3 text-xs">
                    <span
                      className={
                        row.source === "incoming"
                          ? "rounded-full bg-emerald-100 px-2 py-1 font-semibold text-emerald-800"
                          : row.source === "default"
                            ? "rounded-full bg-sky-100 px-2 py-1 font-semibold text-sky-800"
                            : "rounded-full bg-slate-100 px-2 py-1 font-semibold text-slate-700"
                      }
                    >
                      {row.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href={applyHref} className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Continue with tracked application
        </Link>
        <Link
          href={`/funding?${queryString}`}
          className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          Browse tracked funding routes
        </Link>
      </div>
    </div>
  );
}
