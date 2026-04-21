import { CardGrid } from "@/components/card-grid";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/content/tools";

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tools"
        title="Interactive qualification toolkit"
        description="Lead magnets and decision tools designed to drive qualified applicants into funding routes."
      />
      <CardGrid>
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </CardGrid>
    </div>
  );
}