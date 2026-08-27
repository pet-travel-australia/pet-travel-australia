import { transportOptions } from "@/data/transport-options";
import { PetType, TransportMode, TransportOption, WeightBand } from "@/data/types";

export const weightBandMidpointKg: Record<WeightBand, number> = {
  "under-5kg": 3,
  "5-10kg": 7.5,
  "10-20kg": 15,
  "20-40kg": 30,
  "over-40kg": 50,
};

export interface JourneyQuery {
  origin: string;
  destination: string;
  petType: PetType;
  weightBand: WeightBand;
  mode: TransportMode | "all";
}

function routeMatches(list: string[], code: string): boolean {
  return list.includes("ANY") || list.includes(code);
}

export interface JourneyResult {
  option: TransportOption;
  isPractical: boolean;
  weightCompatible: boolean;
  petTypeCompatible: boolean;
}

export function searchJourney(query: JourneyQuery): JourneyResult[] {
  const weightKg = weightBandMidpointKg[query.weightBand];

  const matches = transportOptions.filter((opt) => {
    const originOk = routeMatches(opt.routeOrigins, query.origin);
    const destOk = routeMatches(opt.routeDestinations, query.destination);
    const modeOk = query.mode === "all" || opt.mode === query.mode;
    return originOk && destOk && modeOk;
  });

  return matches
    .map((option) => {
      const petTypeCompatible =
        option.eligiblePetTypes.length === 0 ? false : option.eligiblePetTypes.includes(query.petType);
      const weightCompatible = option.maxWeightKg === null ? true : weightKg <= option.maxWeightKg;
      const isPractical =
        option.petPermitted !== "no" && petTypeCompatible && weightCompatible && option.travelsWithOwner;
      return { option, isPractical, weightCompatible, petTypeCompatible };
    })
    .sort((a, b) => {
      if (a.isPractical !== b.isPractical) return a.isPractical ? -1 : 1;
      const order: Record<string, number> = { yes: 0, restricted: 1, no: 2 };
      return order[a.option.petPermitted] - order[b.option.petPermitted];
    });
}

export function hasPracticalOption(results: JourneyResult[]): boolean {
  return results.some((r) => r.isPractical);
}
