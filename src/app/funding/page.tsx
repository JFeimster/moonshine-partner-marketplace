import { CardGrid } from "@/components/card-grid";
import { OfferCard } from "@/components/offer-card";
import { SectionHeading } from "@/components/section-heading";
import { fundingCategories } from "@/content/funding-categories";

export default function FundingIndexPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Funding"
        title="Funding solutions"
        description="Browse category-level offers and route applicants into the right product path based on timeline, amount, and operating model."
      />
      <CardGrid>
        {fundingCategories.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </CardGrid>
    </div>
  );
}