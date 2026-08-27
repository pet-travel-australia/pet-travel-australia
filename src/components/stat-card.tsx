import { EvidenceStat } from "@/data/types";
import { formatDate } from "@/lib/format";

export function StatCard({ stat }: { stat: EvidenceStat }) {
  return (
    <div className="card flex flex-col gap-3 p-6">
      <span className="font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
        {stat.value}
      </span>
      <p className="text-sm font-medium leading-snug text-ink-900/75">{stat.label}</p>
      <p className="mt-auto pt-2 text-xs text-ink-900/45">
        Source: {stat.sourceOrganisation} · checked {formatDate(stat.dateChecked)}
      </p>
    </div>
  );
}
