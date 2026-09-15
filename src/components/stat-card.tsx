import { EvidenceStat } from "@/data/types";
import { formatDate } from "@/lib/format";

export function StatCard({ stat }: { stat: EvidenceStat }) {
  return (
    <div className="card relative flex flex-col gap-3 overflow-hidden p-6">
      <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-ochre" aria-hidden />
      <span className="font-display text-4xl font-semibold tracking-tight text-brand-700 sm:text-5xl">
        {stat.value}
      </span>
      <p className="text-sm font-medium leading-snug text-ink-900/75">{stat.label}</p>
      <p className="mt-auto pt-2 text-xs text-ink-900/45">
        Source: {stat.sourceOrganisation} · checked {formatDate(stat.dateChecked)}
      </p>
    </div>
  );
}
