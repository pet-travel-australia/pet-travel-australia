"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, TriangleAlert } from "lucide-react";
import { cities } from "@/data/cities";
import { PetType, TransportMode, WeightBand } from "@/data/types";
import { hasPracticalOption, searchJourney } from "@/lib/journey";
import { JourneyResultCard } from "@/components/journey-result-card";
import { DemoDataNotice } from "@/components/demo-banner";
import { modeLabels, petTypeLabels, weightBandLabels } from "@/lib/format";

const modeOptions: { value: TransportMode | "all"; label: string }[] = [
  { value: "all", label: "All transport" },
  { value: "air", label: "Air" },
  { value: "train", label: "Train" },
  { value: "tram", label: "Tram" },
  { value: "bus", label: "Bus" },
  { value: "ferry", label: "Ferry" },
];

const petTypeOptions: PetType[] = ["dog", "cat", "small-pet", "other"];
const weightBandOptions: WeightBand[] = ["under-5kg", "5-10kg", "10-20kg", "20-40kg", "over-40kg"];

export function JourneyCheckerClient() {
  const [origin, setOrigin] = useState("MEL");
  const [destination, setDestination] = useState("PER");
  const [petType, setPetType] = useState<PetType>("dog");
  const [weightBand, setWeightBand] = useState<WeightBand>("10-20kg");
  const [mode, setMode] = useState<TransportMode | "all">("all");
  const [submitted, setSubmitted] = useState(true);

  const results = useMemo(
    () => searchJourney({ origin, destination, petType, weightBand, mode }),
    [origin, destination, petType, weightBand, mode]
  );

  const practical = hasPracticalOption(results);
  const originCity = cities.find((c) => c.code === origin);
  const destinationCity = cities.find((c) => c.code === destination);

  const registerHref = `/demand-register?origin=${origin}&destination=${destination}&petType=${petType}&weightBand=${weightBand}&mode=${mode}`;

  return (
    <div className="section py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="label-eyebrow">Journey Checker</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Where can you actually go together?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-900/65">
            Search a route to see every transport option we track, whether pets are permitted,
            restricted or excluded, and what it would cost and require.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/terrier-train-window.jpg"
            alt="A small terrier sitting beside its owner, looking out a train window"
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      <DemoDataNotice className="mt-8">
        Results are drawn from a representative demonstration dataset modelled on publicly known
        policy patterns, not a live, independently verified feed. Always confirm conditions with
        the operator before travelling. See <Link href="/evidence" className="underline decoration-ochre-400 underline-offset-2">Evidence &amp; Sources</Link>.
      </DemoDataNotice>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="card mt-6 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
      >
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
        <Field label="Animal type">
          <select className="select-field" value={petType} onChange={(e) => setPetType(e.target.value as PetType)}>
            {petTypeOptions.map((p) => (
              <option key={p} value={p}>
                {petTypeLabels[p]}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Animal weight">
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
        <Field label="Travel mode">
          <select
            className="select-field"
            value={mode}
            onChange={(e) => setMode(e.target.value as TransportMode | "all")}
          >
            {modeOptions.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </Field>
        <button type="submit" className="btn-primary sm:col-span-2 lg:col-span-5">
          <Search className="h-4 w-4" />
          Check this journey
        </button>
      </form>

      {submitted && (
        <div className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl font-semibold text-ink-950">
              {originCity?.name ?? origin} → {destinationCity?.name ?? destination}
              <span className="ml-2 font-sans text-sm font-medium text-ink-900/50">
                {petTypeLabels[petType]} · {weightBandLabels[weightBand]} · {modeLabels[mode]}
              </span>
            </h2>
            <span className="text-sm font-medium text-ink-900/50">
              {results.length} option{results.length === 1 ? "" : "s"} found
            </span>
          </div>

          {!practical && (
            <div className="card mt-5 flex flex-col gap-4 border-coral-500/30 bg-coral-500/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <TriangleAlert className="h-5 w-5 shrink-0 text-coral-600" aria-hidden />
                <div>
                  <p className="font-display text-lg font-semibold text-coral-600">Mobility gap identified</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-900/70">
                    We don&rsquo;t currently track a practical, same-journey option for this
                    combination of route, animal and weight. That doesn&rsquo;t mean nobody wants
                    one — it means the demand isn&rsquo;t visible yet.
                  </p>
                </div>
              </div>
              <Link href={registerHref} className="btn-primary shrink-0 whitespace-nowrap">
                Register demand for this route
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {results.map((r) => (
              <JourneyResultCard key={r.option.id} result={r} />
            ))}
          </div>

          {results.length === 0 && (
            <p className="mt-6 text-sm text-ink-900/55">
              We don&rsquo;t yet track any operator for this exact route and mode. Try
              &ldquo;All transport&rdquo; to see the wider picture, or register your demand above.
            </p>
          )}
        </div>
      )}
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
