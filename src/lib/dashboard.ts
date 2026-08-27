import { DemandSubmission } from "@/data/types";
import { cityLabel } from "@/data/cities";
import { weightBandLabels, modeLabels } from "@/lib/format";

const frequencyPerYear: Record<DemandSubmission["frequency"], number> = {
  weekly: 52,
  monthly: 12,
  "few-times-year": 4,
  "once-a-year": 1,
  rarely: 0.5,
};

export function topRoutes(submissions: DemandSubmission[], limit = 6) {
  const counts = new Map<string, number>();
  for (const s of submissions) {
    const key = `${s.origin}-${s.destination}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, value]) => {
      const [origin, destination] = key.split("-");
      return { label: `${cityLabel(origin)} → ${cityLabel(destination)}`, value };
    });
}

export function demandByState(submissions: DemandSubmission[]) {
  const counts = new Map<string, number>();
  for (const s of submissions) {
    if (!s.state) continue;
    counts.set(s.state, (counts.get(s.state) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value }));
}

const weightOrder: DemandSubmission["weightBand"][] = ["under-5kg", "5-10kg", "10-20kg", "20-40kg", "over-40kg"];

export function weightDistribution(submissions: DemandSubmission[]) {
  const counts = new Map<string, number>();
  for (const s of submissions) {
    counts.set(s.weightBand, (counts.get(s.weightBand) ?? 0) + 1);
  }
  return weightOrder.map((w) => ({ label: weightBandLabels[w], value: counts.get(w) ?? 0 }));
}

const wtpBuckets: [number, number, string][] = [
  [0, 0, "$0"],
  [1, 25, "$1–25"],
  [26, 50, "$26–50"],
  [51, 100, "$51–100"],
  [101, 200, "$101–200"],
  [201, Infinity, "$200+"],
];

export function willingnessToPayDistribution(submissions: DemandSubmission[]) {
  return wtpBuckets.map(([min, max, label]) => ({
    label,
    value: submissions.filter((s) => s.willingnessToPayAUD >= min && s.willingnessToPayAUD <= max).length,
  }));
}

export function preferredModes(submissions: DemandSubmission[]) {
  const counts = new Map<string, number>();
  for (const s of submissions) {
    counts.set(s.mode, (counts.get(s.mode) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([mode, value]) => ({ label: modeLabels[mode] ?? mode, value }));
}

export function adjacentSeatPercent(submissions: DemandSubmission[]): number {
  if (submissions.length === 0) return 0;
  const yes = submissions.filter((s) => s.wouldBuyAdjacentSeat).length;
  return Math.round((yes / submissions.length) * 100);
}

export function behaviourSupportPercent(submissions: DemandSubmission[]): number {
  if (submissions.length === 0) return 0;
  const yes = submissions.filter((s) => s.supportsBehaviourRequirements).length;
  return Math.round((yes / submissions.length) * 100);
}

/**
 * Illustrative annual revenue estimate implied by tracked demand-register
 * submissions: sum of (journeys per year implied by stated frequency ×
 * stated willingness to pay). This is a demonstration-scale figure from a
 * small sample, not a market forecast — see the Commercial Case calculator
 * for a scalable, editable version of this model.
 */
export function estimatedAnnualRevenue(submissions: DemandSubmission[]): number {
  return submissions.reduce((sum, s) => {
    const journeys = frequencyPerYear[s.frequency];
    const seatPremium = s.wouldBuyAdjacentSeat ? s.willingnessToPayAUD * 1.5 : 0;
    return sum + journeys * (s.willingnessToPayAUD + seatPremium);
  }, 0);
}
