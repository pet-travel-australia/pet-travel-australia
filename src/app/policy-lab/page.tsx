import type { Metadata } from "next";
import { Armchair, Box, Clock, FlaskConical, Link2, Receipt, ShieldCheck } from "lucide-react";
import { assistanceAnimalNote, policyModels } from "@/data/policy-models";
import { PolicyModel } from "@/data/types";

export const metadata: Metadata = {
  title: "Policy Lab",
  description:
    "Practical policy models for pet-inclusive transport in Australia — carrier travel, leash and behaviour standards, adjacent-seat access, peak-period rules, pet fares and route trials.",
};

const icons: Record<PolicyModel["icon"], typeof Box> = {
  carrier: Box,
  leash: Link2,
  seat: Armchair,
  clock: Clock,
  shield: ShieldCheck,
  receipt: Receipt,
  flask: FlaskConical,
};

const chipColors: Record<PolicyModel["icon"], string> = {
  carrier: "bg-brand-50 text-brand-700",
  leash: "bg-ochre-50 text-ochre-600",
  seat: "bg-coral-50 text-coral-600",
  clock: "bg-brand-50 text-brand-700",
  shield: "bg-ochre-50 text-ochre-600",
  receipt: "bg-coral-50 text-coral-600",
  flask: "bg-brand-50 text-brand-700",
};

export default function PolicyLabPage() {
  return (
    <div className="section py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Policy Lab</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          What could actually work?
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-900/65">
          We don&rsquo;t advocate for unrestricted pet access. We advocate for practical,
          proportionate models that already work somewhere — matched to the animal, the route and
          the time of day.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {policyModels.map((model) => {
          const Icon = icons[model.icon];
          return (
            <div key={model.id} className="card p-6">
              <div className="flex items-start gap-4">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${chipColors[model.icon]}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{model.title}</p>
                  <h2 className="mt-1 font-display text-lg font-semibold text-ink-950">{model.scenario}</h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-900/70">{model.description}</p>
              <ul className="mt-4 space-y-2 border-t border-ink-950/[0.06] pt-4 text-sm text-ink-900/70">
                {model.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-900/35" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="card mt-10 border-brand-200 bg-brand-50 p-8">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-brand-700" aria-hidden />
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-950">
              Assistance animals are not part of this discussion
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-900/75">{assistanceAnimalNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
