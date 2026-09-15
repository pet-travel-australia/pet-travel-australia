import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { CommercialCalculator } from "./commercial-calculator";
import { DemoDataNotice } from "@/components/demo-banner";

export const metadata: Metadata = {
  title: "Commercial Case",
  description:
    "An interactive calculator translating unmet pet-travel demand into a realistic revenue opportunity for transport operators.",
};

const dataPublishingPoints = [
  "Route",
  "Provider",
  "Animal size",
  "Frequency",
  "Willingness to pay",
];

export default function CommercialCasePage() {
  return (
    <div className="section py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="label-eyebrow">Commercial Case</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            The opportunity operators are leaving on the table
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-900/65">
            Excluding pets isn&rsquo;t neutral — it&rsquo;s a foregone revenue line and a real
            reason some travellers choose a competitor, drive instead, or don&rsquo;t travel at
            all. This calculator makes that opportunity concrete.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-950 shadow-card">
          <Image
            src="/images/cat-plane-window.jpg"
            alt="A cat's silhouette against an aeroplane window, looking out at the wing"
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      <DemoDataNotice className="mt-8 max-w-2xl">
        Default figures are illustrative starting points, not verified market sizing. Adjust every
        assumption to match your own route, operator or market.
      </DemoDataNotice>

      <div className="mt-8">
        <CommercialCalculator />
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="label-eyebrow">
            <TrendingUp className="h-3.5 w-3.5" />
            Where the data comes from
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-950">
            Aggregate, anonymised demand data
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-900/70">
            Pet Travel Australia aims to eventually publish anonymised, aggregate demand data
            directly to operators and policymakers, broken down by:
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {dataPublishingPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 rounded-lg bg-ink-950/[0.04] px-3 py-2 font-medium text-ink-900/75">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-display text-lg font-extrabold text-ink-950">What we won&rsquo;t do</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-900/70">
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-900/35" />
              We won&rsquo;t make unsupported claims about market size — every published figure
              will cite its underlying sample and method.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-900/35" />
              We won&rsquo;t sell or share individually identifiable submissions — see our{" "}
              <a href="/demand-register" className="font-semibold text-brand-700 underline underline-offset-2">
                Demand Register
              </a>{" "}
              privacy consent.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-900/35" />
              We won&rsquo;t claim this dataset is representative of the national population until
              it reaches a credible sample size and methodology.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
