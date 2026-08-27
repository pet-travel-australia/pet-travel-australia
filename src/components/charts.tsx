import { clsx } from "clsx";

export interface BarDatum {
  label: string;
  value: number;
}

export function HorizontalBarChart({
  data,
  formatValue = (v) => String(v),
  barClassName = "bg-brand-500",
}: {
  data: BarDatum[];
  formatValue?: (v: number) => string;
  barClassName?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <ul className="space-y-3">
      {data.map((d) => (
        <li key={d.label}>
          <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
            <span className="font-medium text-ink-900/80">{d.label}</span>
            <span className="font-tabular text-ink-900/55">{formatValue(d.value)}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-ink-950/[0.06]">
            <div
              className={clsx("h-full rounded-full", barClassName)}
              style={{ width: `${(d.value / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function VerticalBarChart({
  data,
  formatValue = (v) => String(v),
  barClassName = "bg-brand-500",
  height = 160,
}: {
  data: BarDatum[];
  formatValue?: (v: number) => string;
  barClassName?: string;
  height?: number;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="flex gap-3" style={{ height }}>
      {data.map((d) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
          <span className="font-tabular text-xs text-ink-900/55">{formatValue(d.value)}</span>
          <div className="flex w-full flex-1 items-end">
            <div
              className={clsx("w-full rounded-t-md", barClassName)}
              style={{ height: `${Math.max((d.value / max) * 100, 3)}%`, minHeight: 4 }}
            />
          </div>
          <span className="text-center text-[11px] font-medium leading-tight text-ink-900/70">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export function DonutStat({
  percent,
  label,
  colorClass = "text-brand-500",
}: {
  percent: number;
  label: string;
  colorClass?: string;
}) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="flex items-center gap-5">
      <svg width={104} height={104} viewBox="0 0 104 104" className="shrink-0 -rotate-90">
        <circle cx={52} cy={52} r={r} fill="none" stroke="currentColor" strokeWidth={10} className="text-ink-950/[0.07]" />
        <circle
          cx={52}
          cy={52}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={10}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={colorClass}
        />
      </svg>
      <div>
        <p className="font-display text-3xl font-semibold text-ink-950">{percent}%</p>
        <p className="max-w-[12rem] text-sm text-ink-900/60">{label}</p>
      </div>
    </div>
  );
}
