export default function ApplyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Apply for Funding</h1>
      <p className="max-w-3xl text-slate-600">
        This is the Moonshine Capital application intake surface. Final form fields, prequalification logic, and partner routing handoff will be connected in the next sprint.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Application flow placeholder</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Business profile and operating history</li>
          <li>Revenue and cash flow qualification checks</li>
          <li>Offer matching and routing to underwriting partners</li>
        </ul>
      </div>
    </div>
  );
}