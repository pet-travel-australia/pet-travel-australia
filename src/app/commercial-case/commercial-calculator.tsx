"use client";

import { useMemo, useState } from "react";
import { formatAUD, formatNumber } from "@/lib/format";

export function CommercialCalculator() {
  const [travellers, setTravellers] = useState(45000);
  const [journeysPerYear, setJourneysPerYear] = useState(1.6);
  const [petFee, setPetFee] = useState(75);
  const [includeAdjacentSeat, setIncludeAdjacentSeat] = useState(true);
  const [adjacentSeatShare, setAdjacentSeatShare] = useState(35);
  const [adjacentSeatFee, setAdjacentSeatFee] = useState(220);

  const baseRevenue = useMemo(
    () => travellers * journeysPerYear * petFee,
    [travellers, journeysPerYear, petFee]
  );

  const adjacentSeatRevenue = useMemo(() => {
    if (!includeAdjacentSeat) return 0;
    const adjacentTravellers = travellers * (adjacentSeatShare / 100);
    return adjacentTravellers * journeysPerYear * adjacentSeatFee;
  }, [includeAdjacentSeat, travellers, adjacentSeatShare, journeysPerYear, adjacentSeatFee]);

  const totalRevenue = baseRevenue + adjacentSeatRevenue;

  return (
    <div className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <SliderField
          label="Number of interested travellers"
          value={travellers}
          min={1000}
          max={200000}
          step={1000}
          onChange={setTravellers}
          display={formatNumber(travellers)}
          hint="Pet owners who say they would use pet-inclusive travel on this operator's routes"
        />
        <SliderField
          label="Average journeys per year, per traveller"
          value={journeysPerYear}
          min={0.5}
          max={6}
          step={0.1}
          onChange={setJourneysPerYear}
          display={journeysPerYear.toFixed(1)}
        />
        <SliderField
          label="Pet fare per journey"
          value={petFee}
          min={0}
          max={250}
          step={5}
          onChange={setPetFee}
          display={formatAUD(petFee)}
          hint="Administration, cleaning and handling fee — consistent with existing airline cabin-pet fees"
        />

        <div className="rounded-xl border border-ink-950/10 p-5">
          <label className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-ink-950">Include adjacent-seat scenario</span>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-ink-950/30 accent-brand-600 text-brand-600 focus:ring-brand-500"
              checked={includeAdjacentSeat}
              onChange={(e) => setIncludeAdjacentSeat(e.target.checked)}
            />
          </label>
          {includeAdjacentSeat && (
            <div className="mt-5 space-y-6">
              <SliderField
                label="Share of travellers who'd buy an adjacent seat"
                value={adjacentSeatShare}
                min={0}
                max={100}
                step={1}
                onChange={setAdjacentSeatShare}
                display={`${adjacentSeatShare}%`}
              />
              <SliderField
                label="Adjacent-seat fee per journey"
                value={adjacentSeatFee}
                min={50}
                max={500}
                step={10}
                onChange={setAdjacentSeatFee}
                display={formatAUD(adjacentSeatFee)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-ink-950 p-6 text-white sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
            Estimated potential annual revenue
          </p>
          <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {formatAUD(totalRevenue)}
          </p>
        </div>
        <dl className="space-y-3 border-t border-white/10 pt-5 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-white/60">Standard pet-fare revenue</dt>
            <dd className="font-tabular font-semibold">{formatAUD(baseRevenue)}</dd>
          </div>
          {includeAdjacentSeat && (
            <div className="flex items-center justify-between">
              <dt className="text-white/60">Adjacent-seat revenue</dt>
              <dd className="font-tabular font-semibold">{formatAUD(adjacentSeatRevenue)}</dd>
            </div>
          )}
        </dl>
        <p className="text-xs leading-relaxed text-white/45">
          All figures are illustrative and fully editable. This is a simple linear model —
          travellers × journeys/year × fee — intended to frame the size of the opportunity, not
          to forecast it. Real assumptions should be built from route-level demand data such as
          the Demand Register.
        </p>
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label className="text-sm font-medium text-ink-900/80">{label}</label>
        <span className="font-tabular text-sm font-semibold text-ink-950">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-600"
      />
      {hint && <p className="mt-1 text-xs text-ink-900/45">{hint}</p>}
    </div>
  );
}
