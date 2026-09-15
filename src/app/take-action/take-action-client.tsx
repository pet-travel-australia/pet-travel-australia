"use client";

import { useMemo, useState } from "react";
import { Copy, CopyCheck, Mail } from "lucide-react";
import { advocacyIssues, advocacyTargets } from "@/data/advocacy-targets";
import { AustralianState, TransportMode } from "@/data/types";
import { modeLabels } from "@/lib/format";

const stateOptions: AustralianState[] = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];
const modeOptions: (TransportMode | "all")[] = ["all", "air", "train", "tram", "bus", "ferry"];

const targetTypeLabels: Record<string, string> = {
  airline: "Airline",
  minister: "State/federal minister",
  mp: "Local MP",
  authority: "Transport authority",
};

export function TakeActionClient() {
  const [state, setState] = useState<AustralianState>("VIC");
  const [mode, setMode] = useState<TransportMode | "all">("all");
  const [targetId, setTargetId] = useState(advocacyTargets[0].id);
  const [issueId, setIssueId] = useState(advocacyIssues[0].id);
  const [copied, setCopied] = useState(false);

  const availableTargets = useMemo(
    () => advocacyTargets.filter((t) => t.jurisdiction === state || t.jurisdiction === "National"),
    [state]
  );

  const target = advocacyTargets.find((t) => t.id === targetId) ?? availableTargets[0] ?? advocacyTargets[0];
  const issue = advocacyIssues.find((i) => i.id === issueId) ?? advocacyIssues[0];

  const message = useMemo(() => {
    const subject = `Subject: Pet-inclusive transport — ${modeLabels[mode]} services in ${state}\n\n`;
    return subject + issue.messageBody({ targetName: target.name, state });
  }, [issue, target, state, mode]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — user can still select and copy manually.
    }
  }

  return (
    <div className="section py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Take Action</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
          Ask for a trial, not a revolution.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-900/65">
          Generate a concise, civil, evidence-based message you can send to an airline, transport
          authority or elected representative. Every draft asks for practical trials and
          regulated access — never unrestricted access.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="card space-y-5 p-6">
          <Field label="State">
            <select className="select-field" value={state} onChange={(e) => setState(e.target.value as AustralianState)}>
              {stateOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Transport mode">
            <select className="select-field" value={mode} onChange={(e) => setMode(e.target.value as TransportMode | "all")}>
              {modeOptions.map((m) => (
                <option key={m} value={m}>
                  {modeLabels[m]}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Airline / operator / decision-maker">
            <select className="select-field" value={target.id} onChange={(e) => setTargetId(e.target.value)}>
              {availableTargets.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} — {targetTypeLabels[t.type]}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Issue">
            <select className="select-field" value={issue.id} onChange={(e) => setIssueId(e.target.value)}>
              {advocacyIssues.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.label}
                </option>
              ))}
            </select>
          </Field>
          <p className="rounded-lg bg-ink-950/[0.04] px-3 py-2.5 text-xs leading-relaxed text-ink-900/60">
            {issue.summary}
          </p>
        </div>

        <div className="card flex flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-lg font-extrabold text-ink-950">Your draft message</h2>
            <button type="button" onClick={handleCopy} className="btn-secondary !py-2 !px-4 text-xs">
              {copied ? <CopyCheck className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy message"}
            </button>
          </div>
          <pre className="mt-4 max-h-[28rem] flex-1 overflow-y-auto whitespace-pre-wrap rounded-xl bg-paper-100 p-5 font-sans text-sm leading-relaxed text-ink-900/85">
            {message}
          </pre>
          <a
            href={`mailto:?subject=${encodeURIComponent(`Pet-inclusive transport — ${modeLabels[mode]} services in ${state}`)}&body=${encodeURIComponent(issue.messageBody({ targetName: target.name, state }))}`}
            className="btn-ghost mt-4 self-start"
          >
            <Mail className="h-3.5 w-3.5" />
            Open in your email client
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink-900/70">{label}</span>
      {children}
    </label>
  );
}
