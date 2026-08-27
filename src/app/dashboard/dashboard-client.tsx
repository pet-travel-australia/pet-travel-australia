"use client";

import { useEffect, useState } from "react";
import { DemandSubmission } from "@/data/types";
import { getDemandStore } from "@/lib/demand-store";
import {
  adjacentSeatPercent,
  behaviourSupportPercent,
  demandByState,
  estimatedAnnualRevenue,
  preferredModes,
  topRoutes,
  weightDistribution,
  willingnessToPayDistribution,
} from "@/lib/dashboard";
import { HorizontalBarChart, VerticalBarChart, DonutStat } from "@/components/charts";
import { DemoDataNotice } from "@/components/demo-banner";
import { formatAUD, formatNumber } from "@/lib/format";

export function DashboardClient() {
  const [submissions, setSubmissions] = useState<DemandSubmission[] | null>(null);

  useEffect(() => {
    getDemandStore()
      .list()
      .then(setSubmissions);
  }, []);

  if (!submissions) {
    return <div className="section py-16 text-sm text-ink-900/50">Loading dashboard…</div>;
  }

  const revenue = estimatedAnnualRevenue(submissions);
  const adjacentSeat = adjacentSeatPercent(submissions);
  const behaviourSupport = behaviourSupportPercent(submissions);

  return (
    <div className="section py-12 sm:py-16">
      <p className="label-eyebrow">Demand Dashboard</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
        What pet owners are telling us
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-900/65">
        Live aggregate view of {formatNumber(submissions.length)} Demand Register submissions —
        combining seeded example data with anything registered in this browser.
      </p>

      <DemoDataNotice className="mt-6 max-w-2xl">
        This dashboard is seeded with {formatNumber(submissions.length)} demonstration records so
        the platform feels populated. Figures will shift as real submissions replace the seed data.
      </DemoDataNotice>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricTile label="Tracked submissions" value={formatNumber(submissions.length)} />
        <MetricTile label="Estimated potential annual revenue" value={formatAUD(revenue)} highlight />
        <MetricTile label="Would buy an adjacent seat" value={`${adjacentSeat}%`} />
        <MetricTile label="Support behaviour requirements" value={`${behaviourSupport}%`} />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ChartCard title="Most requested routes">
          <HorizontalBarChart data={topRoutes(submissions)} />
        </ChartCard>
        <ChartCard title="Demand by state">
          <HorizontalBarChart data={demandByState(submissions)} barClassName="bg-ochre-400" />
        </ChartCard>
        <ChartCard title="Dog & pet weight distribution">
          <VerticalBarChart data={weightDistribution(submissions)} />
        </ChartCard>
        <ChartCard title="Willingness to pay per journey">
          <VerticalBarChart data={willingnessToPayDistribution(submissions)} barClassName="bg-brand-600" />
        </ChartCard>
        <ChartCard title="Preferred transport modes">
          <HorizontalBarChart data={preferredModes(submissions)} barClassName="bg-ink-800" />
        </ChartCard>
        <ChartCard title="Adjacent-seat willingness">
          <div className="flex h-full items-center">
            <DonutStat percent={adjacentSeat} label="of respondents would buy an adjacent seat for a medium/large dog" />
          </div>
        </ChartCard>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-ink-900/45">
        Methodology: estimated potential annual revenue = Σ (implied journeys per year from
        stated frequency × stated willingness to pay, plus a 1.5× seat-premium where the
        respondent indicated they would buy an adjacent seat). This is a demonstration-scale
        calculation from tracked submissions, not a market forecast — see the{" "}
        <a href="/commercial-case" className="font-semibold text-brand-700 underline underline-offset-2">
          Commercial Case
        </a>{" "}
        page for an editable, scalable version of this model.
      </p>
    </div>
  );
}

function MetricTile({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`card p-5 ${highlight ? "border-brand-300 bg-brand-50" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-900/45">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <h3 className="font-display text-lg font-semibold text-ink-950">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}
