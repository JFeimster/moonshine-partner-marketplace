import { CardGrid } from "@/components/card-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { OfferCard } from "@/components/offer-card";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { VerticalCard } from "@/components/vertical-card";
import { fundingCategories } from "@/content/funding-categories";
import { tools } from "@/content/tools";
import { verticals } from "@/content/verticals";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Funding Marketplace"
          title="Capital products built for operator velocity"
          description="Discover the right offer category, move through prequalification fast, and send clean lead payloads into your routing stack."
        />
        <CardGrid>
          {fundingCategories.slice(0, 3).map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </CardGrid>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Vertical Hubs"
          title="Industry-specific landing pages"
          description="Each vertical route is designed to align product fit, messaging, and conversion intent by segment."
        />
        <CardGrid>
          {verticals.slice(0, 3).map((vertical) => (
            <VerticalCard key={vertical.slug} vertical={vertical} />
          ))}
        </CardGrid>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Interactive Tools"
          title="Qualification tools that increase conversion confidence"
          description="Capture high-intent traffic through calculators and planners that feed funding recommendations."
        />
        <CardGrid>
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </CardGrid>
      </section>

      <CtaBanner />
    </div>
  );
}