import { OperatorScore } from "@/data/types";
import { overallScore, scoreCategoryLabels } from "@/data/operators";
import { clsx } from "clsx";

function scoreColor(score: number): string {
  if (score >= 7) return "bg-brand-500";
  if (score >= 4) return "bg-ochre-400";
  return "bg-clay-500";
}

export function OperatorScoreCard({ operator, rank }: { operator: OperatorScore; rank: number }) {
  const overall = overallScore(operator);
  return (
    <div className="card p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-950 font-display text-base font-extrabold text-white">
            {rank}
          </span>
          <div>
            <h3 className="font-display text-lg font-extrabold text-ink-950">{operator.name}</h3>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-ink-900/45">
              {operator.jurisdiction} · {operator.category === "airline" ? "Airline" : operator.category === "state" ? "State network" : "Operator"}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl font-extrabold text-ink-950">{overall.toFixed(1)}</p>
          <p className="text-xs text-ink-900/45">out of 10</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-900/70">{operator.summary}</p>

      <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {(Object.entries(operator.scores) as [keyof OperatorScore["scores"], number][]).map(([key, value]) => (
          <div key={key}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-ink-900/65">{scoreCategoryLabels[key]}</span>
              <span className="font-tabular text-ink-900/45">{value}/10</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-950/[0.06]">
              <div
                className={clsx("h-full rounded-full", scoreColor(value))}
                style={{ width: `${(value / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
