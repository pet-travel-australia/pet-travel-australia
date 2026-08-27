"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { evidenceLibrary } from "@/data/evidence-library";
import { PolicyBadge } from "@/components/policy-badge";
import { formatDate } from "@/lib/format";
import { PolicyStatus } from "@/data/types";
import { DemoDataNotice } from "@/components/demo-banner";

const statusFilters: (PolicyStatus | "all")[] = ["all", "verified", "proposal", "international"];
const statusFilterLabels: Record<PolicyStatus | "all", string> = {
  all: "All entries",
  verified: "Verified current rules",
  proposal: "Proposals / campaign positions",
  international: "International examples",
};

const policyTypeLabels: Record<string, string> = {
  regulation: "Regulation",
  "operator-policy": "Operator policy",
  research: "Research",
  "campaign-position": "Campaign position",
  "international-example": "International example",
};

export function EvidenceClient() {
  const [filter, setFilter] = useState<PolicyStatus | "all">("all");
  const visible = filter === "all" ? evidenceLibrary : evidenceLibrary.filter((e) => e.status === filter);

  return (
    <div className="section py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Evidence &amp; Sources</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          Every claim on this site should be checkable
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-900/65">
          This library distinguishes verified current rules from proposals and international
          examples, so nobody has to take our word for anything.
        </p>
      </div>

      <DemoDataNotice className="mt-8 max-w-2xl">
        This library is a working prototype of the evidence architecture. Entries marked
        &ldquo;verified&rdquo; represent our current understanding of policy as at the date
        checked and should still be confirmed directly with the source before relying on them.
      </DemoDataNotice>

      <div className="mt-8 flex flex-wrap gap-2">
        {statusFilters.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === s ? "bg-ink-950 text-white" : "bg-ink-950/[0.05] text-ink-900/65 hover:bg-ink-950/10"
            }`}
          >
            {statusFilterLabels[s]}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-ink-950/[0.07]">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink-950/[0.07] bg-ink-950/[0.02] text-left text-xs font-semibold uppercase tracking-[0.06em] text-ink-900/50">
              <th className="px-5 py-3.5">Entry</th>
              <th className="px-5 py-3.5">Jurisdiction</th>
              <th className="px-5 py-3.5">Type</th>
              <th className="px-5 py-3.5">Status</th>
              <th className="px-5 py-3.5">Checked</th>
              <th className="px-5 py-3.5">Source</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((e) => (
              <tr key={e.id} className="border-b border-ink-950/[0.05] last:border-0 even:bg-ink-950/[0.012]">
                <td className="max-w-xs px-5 py-4 align-top">
                  <p className="font-semibold text-ink-950">{e.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-900/55">{e.summary}</p>
                  <p className="mt-1.5 text-xs font-medium text-ink-900/45">{e.sourceOrganisation}</p>
                </td>
                <td className="px-5 py-4 align-top text-ink-900/70">{e.jurisdiction}</td>
                <td className="px-5 py-4 align-top text-ink-900/70">{policyTypeLabels[e.policyType]}</td>
                <td className="px-5 py-4 align-top">
                  <PolicyBadge status={e.status} />
                </td>
                <td className="px-5 py-4 align-top font-tabular text-ink-900/60">{formatDate(e.dateChecked)}</td>
                <td className="px-5 py-4 align-top">
                  {e.sourceUrl.startsWith("http") ? (
                    <a
                      href={e.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <a href={e.sourceUrl} className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800">
                      View
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card mt-10 p-8">
        <h2 className="font-display text-lg font-semibold text-ink-950">How this library stays current</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-900/70">
          Every entry carries a source organisation, a source URL, a date checked, a jurisdiction
          and a policy type. That structure — rather than free-text claims — is what makes ongoing
          updating tractable: each record can be re-verified and re-dated independently, and the
          same shape can later be backed by a real database instead of a static file. See the
          README for how to add or update an entry.
        </p>
      </div>
    </div>
  );
}
