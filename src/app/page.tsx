import { CardGrid } from "@/components/card-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { OfferCard } from "@/components/offer-card";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { VerticalCard } from "@/components/vertical-card";
import { fundingCategories } from "@/content/funding-categories";
import { partners } from "@/content/partners";
import { tools } from "@/content/tools";
import { verticals } from "@/content/verticals";
import Link from "next/link";

export default function HomePage() {
  const featuredFunding = fundingCategories.filter((item) => item.featured).slice(0, 3);
  const featuredVerticals = verticals.slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Funding Categories"
          title="Capital products designed for real operator constraints"
          description="Each offer route is structured for high-intent conversion with clear qualification ranges, speed expectations, and use-case alignment."
          actions={
            <Link href="/funding" className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
              See all funding categories
            </Link>
          }
        />
        <CardGrid>
          {featuredFunding.map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </CardGrid>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Verticals"
          title="Vertical hubs with conversion-ready market context"
          description="Route users into messaging that matches operating reality, then connect each segment to a funding path with clear rationale."
          actions={
            <Link href="/verticals/saas" className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
              Browse vertical entrypoint
            </Link>
          }
        />
        <CardGrid>
          {featuredVerticals.map((vertical) => (
            <VerticalCard key={vertical.slug} vertical={vertical} />
          ))}
        </CardGrid>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Tools"
          title="Interactive qualification tools for demand capture"
          description="Use utility-led landing experiences to qualify intent, collect context, and route prospects into application-ready flows."
          actions={
            <Link href="/tools" className="text-sm font-semibold text-slate-900 hover:text-emerald-700">
              View full toolset
            </Link>
          }
        />
        <CardGrid>
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </CardGrid>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <SectionHeading
          eyebrow="Partner Program"
          title="Distribution-ready partner landing framework"
          description="Launch co-branded experiences with tracked attribution fields and channel-specific campaign defaults, without rebuilding the funnel each time."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {partners.slice(0, 3).map((partner) => (
            <article key={partner.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">{partner.name}</p>
              <p className="mt-2 text-sm text-slate-600">{partner.highlight}</p>
              <p className="mt-3 text-xs text-slate-500">Model: {partner.distributionModel}</p>
              <Link href={`/partners/${partner.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:text-emerald-700">
                Open partner page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
