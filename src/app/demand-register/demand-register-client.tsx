"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import { cities } from "@/data/cities";
import { AustralianState, DemandSubmission, PetType, TransportMode, WeightBand } from "@/data/types";
import { getDemandStore } from "@/lib/demand-store";
import { frequencyLabels, modeLabels, petTypeLabels, weightBandLabels } from "@/lib/format";
import { DemoDataNotice } from "@/components/demo-banner";

const petTypeOptions: PetType[] = ["dog", "cat", "small-pet", "other"];
const weightBandOptions: WeightBand[] = ["under-5kg", "5-10kg", "10-20kg", "20-40kg", "over-40kg"];
const modeOptions: (TransportMode | "all")[] = ["all", "air", "train", "tram", "bus", "ferry"];
const frequencyOptions: DemandSubmission["frequency"][] = [
  "weekly",
  "monthly",
  "few-times-year",
  "once-a-year",
  "rarely",
];
const stateOptions: AustralianState[] = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

function paramOr<T extends string>(value: string | null, fallback: T): T {
  return (value as T) ?? fallback;
}

export function DemandRegisterClient() {
  const params = useSearchParams();

  const [origin, setOrigin] = useState<string>(paramOr(params.get("origin"), "SYD"));
  const [destination, setDestination] = useState<string>(paramOr(params.get("destination"), "MEL"));
  const [petType, setPetType] = useState<PetType>(paramOr(params.get("petType"), "dog") as PetType);
  const [weightBand, setWeightBand] = useState<WeightBand>(
    paramOr(params.get("weightBand"), "10-20kg") as WeightBand
  );
  const [mode, setMode] = useState<TransportMode | "all">(
    paramOr(params.get("mode"), "all") as TransportMode | "all"
  );
  const [frequency, setFrequency] = useState<DemandSubmission["frequency"]>("few-times-year");
  const [willingnessToPayAUD, setWillingnessToPayAUD] = useState(60);
  const [wouldBuyAdjacentSeat, setWouldBuyAdjacentSeat] = useState(false);
  const [supportsBehaviourRequirements, setSupportsBehaviourRequirements] = useState(true);
  const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [state, setState] = useState<AustralianState | "">("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("submitting");
    await getDemandStore().add({
      origin,
      destination,
      petType,
      weightBand,
      mode,
      frequency,
      willingnessToPayAUD,
      wouldBuyAdjacentSeat,
      supportsBehaviourRequirements,
      postcode: postcode || undefined,
      email: email || undefined,
      story: story || undefined,
      state: state || undefined,
    });
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="section flex flex-col items-center py-24 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-600" aria-hidden />
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink-950">Demand registered</h1>
        <p className="mt-3 max-w-md text-ink-900/65">
          Thank you. Your route has been added to our aggregate demand data, which feeds the{" "}
          <a href="/dashboard" className="font-semibold text-brand-700 underline underline-offset-2">
            Dashboard
          </a>{" "}
          and, in time, our published evidence for operators and policymakers.
        </p>
        <a href="/journey-checker" className="btn-secondary mt-8">
          Check another journey
        </a>
      </div>
    );
  }

  return (
    <div className="section py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Demand Register</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          Tell us where you&rsquo;d travel, if you could.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-900/65">
          Every submission becomes anonymised, aggregate evidence of unmet demand — the kind of
          data operators and governments currently don&rsquo;t have.
        </p>
      </div>

      <DemoDataNotice className="mt-8 max-w-2xl">
        In this prototype, submissions are stored privately in your browser only (not sent to a
        server) and combined with seeded example data to populate the Dashboard. See README for
        how this connects to a real database.
      </DemoDataNotice>

      <form onSubmit={handleSubmit} className="card mt-8 max-w-2xl space-y-8 p-6 sm:p-8">
        <fieldset className="space-y-4">
          <legend className="font-display text-lg font-semibold text-ink-950">Your journey</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Origin">
              <select className="select-field" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                {cities.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Destination">
              <select className="select-field" value={destination} onChange={(e) => setDestination(e.target.value)}>
                {cities.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Pet type">
              <select className="select-field" value={petType} onChange={(e) => setPetType(e.target.value as PetType)}>
                {petTypeOptions.map((p) => (
                  <option key={p} value={p}>
                    {petTypeLabels[p]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Approximate weight band">
              <select
                className="select-field"
                value={weightBand}
                onChange={(e) => setWeightBand(e.target.value as WeightBand)}
              >
                {weightBandOptions.map((w) => (
                  <option key={w} value={w}>
                    {weightBandLabels[w]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Transport mode wanted">
              <select
                className="select-field"
                value={mode}
                onChange={(e) => setMode(e.target.value as TransportMode | "all")}
              >
                {modeOptions.map((m) => (
                  <option key={m} value={m}>
                    {modeLabels[m]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="How often would you use it?">
              <select
                className="select-field"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as DemandSubmission["frequency"])}
              >
                {frequencyOptions.map((f) => (
                  <option key={f} value={f}>
                    {frequencyLabels[f]}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-display text-lg font-semibold text-ink-950">What you&rsquo;d pay and expect</legend>
          <Field label={`What would you reasonably pay per journey? ${willingnessToPayAUD === 0 ? "(Free)" : `($${willingnessToPayAUD})`}`}>
            <input
              type="range"
              min={0}
              max={300}
              step={5}
              value={willingnessToPayAUD}
              onChange={(e) => setWillingnessToPayAUD(Number(e.target.value))}
              className="w-full accent-brand-600"
            />
          </Field>
          <label className="flex items-start gap-3 rounded-xl border border-ink-950/10 p-4 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-ink-950/30 accent-brand-600 text-brand-600 focus:ring-brand-500"
              checked={wouldBuyAdjacentSeat}
              onChange={(e) => setWouldBuyAdjacentSeat(e.target.checked)}
            />
            <span>
              <span className="block font-medium text-ink-950">
                I would purchase an adjacent seat for a medium/large dog
              </span>
              <span className="mt-0.5 block text-ink-900/55">
                If a carrier isn&rsquo;t practical for your pet&rsquo;s size, would you pay for the
                extra space directly?
              </span>
            </span>
          </label>
          <label className="flex items-start gap-3 rounded-xl border border-ink-950/10 p-4 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-ink-950/30 accent-brand-600 text-brand-600 focus:ring-brand-500"
              checked={supportsBehaviourRequirements}
              onChange={(e) => setSupportsBehaviourRequirements(e.target.checked)}
            />
            <span>
              <span className="block font-medium text-ink-950">
                I support behaviour and public-access requirements for pets in transit
              </span>
              <span className="mt-0.5 block text-ink-900/55">
                E.g. leash rules, calm-behaviour standards, and the right of operators to remove a
                disruptive animal.
              </span>
            </span>
          </label>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-display text-lg font-semibold text-ink-950">Optional details</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="State">
              <select className="select-field" value={state} onChange={(e) => setState(e.target.value as AustralianState)}>
                <option value="">Prefer not to say</option>
                {stateOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Postcode">
              <input
                className="input-field"
                inputMode="numeric"
                maxLength={4}
                placeholder="e.g. 3000"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </Field>
          </div>
          <Field label="Email (if you'd like updates on this route)">
            <input
              type="email"
              className="input-field"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field label="Tell us more (optional)">
            <textarea
              className="input-field min-h-24"
              placeholder="Anything that would help us understand this journey..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
          </Field>
        </fieldset>

        <label className="flex items-start gap-3 text-sm text-ink-900/70">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 rounded border-ink-950/30 accent-brand-600 text-brand-600 focus:ring-brand-500"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I consent to Pet Travel Australia storing this information and including it, in
            anonymised and aggregated form, in public demand data and advocacy materials. I
            understand I can request deletion at any time.
          </span>
        </label>

        <button type="submit" disabled={!consent || status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50">
          <Send className="h-4 w-4" />
          {status === "submitting" ? "Submitting…" : "Register my demand"}
        </button>
      </form>
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
