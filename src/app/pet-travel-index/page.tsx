import type { Metadata } from "next";
import { operatorScores, overallScore } from "@/data/operators";
import { OperatorScoreCard } from "@/components/operator-score-card";
import { DemoDataNotice } from "@/components/demo-banner";

export const metadata: Metadata = {
  title: "Pet Travel Index",
  description:
    "A scorecard ranking Australian transport operators and states on pet access, clarity of rules, size inclusiveness, affordability, coverage, booking ease, welfare and non-driver accessibility.",
};

const groups: { title: string; category: "airline" | "state" | "operator"; blurb: string }[] = [
  {
    title: "Airlines",
    category: "airline",
    blurb: "Domestic carriers, scored on cabin and hold access for ordinary pets.",
  },
  {
    title: "State & metro transport networks",
    category: "state",
    blurb: "Trains, trams and buses operated or regulated by state transport authorities.",
  },
  {
    title: "Individual operators",
    category: "operator",
    blurb: "Ferries and other operators with notably distinct pet-access policies.",
  },
];

export default function PetTravelIndexPage() {
  return (
    <div className="section py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Pet Travel Index</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
          How do Australia&rsquo;s operators and states actually compare?
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-900/65">
          Every operator and state network is scored across eight categories: pet access,
          clarity of rules, size inclusiveness, affordability, geographical coverage, ease of
          booking, animal welfare, and accessibility for non-drivers.
        </p>
      </div>

      <DemoDataNotice className="mt-8 max-w-2xl">
        These are placeholder, illustrative scores demonstrating the format — not the output of a
        completed, audited scoring methodology. Pet Travel Australia intends to develop this into
        a fully methodology-backed <strong>Australian Pet Travel Index 2027</strong> annual
        report.
      </DemoDataNotice>

      {groups.map((group) => {
        const items = operatorScores
          .filter((o) => o.category === group.category)
          .sort((a, b) => overallScore(b) - overallScore(a));
        if (items.length === 0) return null;
        return (
          <section key={group.category} className="mt-12">
            <h2 className="font-display text-2xl font-extrabold text-ink-950">{group.title}</h2>
            <p className="mt-1 text-sm text-ink-900/55">{group.blurb}</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              {items.map((o, i) => (
                <OperatorScoreCard key={o.id} operator={o} rank={i + 1} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="card mt-14 p-8">
        <h2 className="font-display text-xl font-extrabold text-ink-950">
          Towards the Australian Pet Travel Index 2027
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-900/70">
          We intend to formalise this scorecard into an annual, independently reviewed report:
          public methodology, direct engagement with each operator ahead of publication, a right
          of reply, and year-on-year tracking of whether policy actually improves. If you work in
          transport policy or journalism and want to contribute to that methodology, get in touch
          via <a href="/about" className="font-semibold text-brand-700 underline underline-offset-2">About</a>.
        </p>
      </section>
    </div>
  );
}
