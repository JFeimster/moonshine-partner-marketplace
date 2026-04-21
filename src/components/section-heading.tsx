type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      <p className="max-w-3xl text-slate-600">{description}</p>
    </div>
  );
}