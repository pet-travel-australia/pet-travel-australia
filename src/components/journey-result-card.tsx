import { ExternalLink } from "lucide-react";
import { JourneyResult } from "@/lib/journey";
import { PermissionBadge, PolicyBadge } from "@/components/policy-badge";
import { formatAUD, formatDate, modeLabels } from "@/lib/format";

export function JourneyResultCard({ result }: { result: JourneyResult }) {
  const { option } = result;
  const isExternal = option.sourceUrl.startsWith("http");

  return (
    <div className="card flex flex-col gap-4 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-900/45">
            {modeLabels[option.mode]} · {option.serviceType}
          </span>
          <h3 className="mt-1 font-display text-xl font-extrabold text-ink-950">{option.provider}</h3>
        </div>
        <PermissionBadge value={option.petPermitted} />
      </div>

      <dl className="grid gap-3 border-y border-ink-950/[0.06] py-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-ink-900/45">Weight / carrier restriction</dt>
          <dd className="mt-0.5 font-medium text-ink-950">
            {option.maxWeightKg !== null
              ? `Up to ${option.maxWeightKg} kg${option.carrierRequired ? ", approved carrier required" : ""}`
              : option.carrierRequired
                ? "No stated weight cap — approved carrier/crate required"
                : "No stated weight cap"}
          </dd>
        </div>
        <div>
          <dt className="text-ink-900/45">Estimated pet fee</dt>
          <dd className="mt-0.5 font-medium text-ink-950 font-tabular">
            {option.feeAUD
              ? option.feeAUD.min === option.feeAUD.max
                ? option.feeAUD.min === 0
                  ? "Free"
                  : formatAUD(option.feeAUD.min)
                : `${formatAUD(option.feeAUD.min)} – ${formatAUD(option.feeAUD.max)}`
              : "Not applicable / not offered"}
          </dd>
        </div>
      </dl>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-900/45">Key conditions</p>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-900/75">
          {option.conditions.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-900/35" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {option.notes && (
        <p className="rounded-lg bg-ink-950/[0.04] px-3 py-2 text-xs leading-relaxed text-ink-900/60">
          {option.notes}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <PolicyBadge status={option.status} />
        <div className="flex items-center gap-4 text-xs text-ink-900/50">
          <span>Verified {formatDate(option.dateVerified)}</span>
          {isExternal ? (
            <a
              href={option.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800"
            >
              Source <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
              {option.sourceOrganisation}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
