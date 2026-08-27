// Shared domain types for Pet Travel Australia.
// Keeping these in one place makes it straightforward to swap the mock
// data sources for a real database (see src/lib/demand-store.ts) later.

export type AustralianState =
  | "NSW"
  | "VIC"
  | "QLD"
  | "WA"
  | "SA"
  | "TAS"
  | "ACT"
  | "NT";

export type TransportMode = "air" | "train" | "tram" | "bus" | "ferry";

export type PetType = "dog" | "cat" | "small-pet" | "other";

export type WeightBand = "under-5kg" | "5-10kg" | "10-20kg" | "20-40kg" | "over-40kg";

export type PetPermission = "yes" | "restricted" | "no";

export type PolicyStatus = "verified" | "proposal" | "international";

/** A city used as an origin/destination in the Journey Checker. */
export interface City {
  code: string;
  name: string;
  state: AustralianState;
}

/**
 * A single transport option for a given route (e.g. "Qantas — Melbourne to
 * Perth flights"). This is demonstration data modelled on publicly known
 * general policy patterns — it should be replaced with verified,
 * individually sourced entries before this becomes a production dataset.
 */
export interface TransportOption {
  id: string;
  routeOrigins: string[]; // City codes this option departs from ("ANY" = all)
  routeDestinations: string[]; // City codes this option serves ("ANY" = all)
  provider: string;
  mode: TransportMode;
  serviceType: string; // e.g. "Domestic mainline flight", "Metro rail network"
  petPermitted: PetPermission;
  eligiblePetTypes: PetType[];
  maxWeightKg: number | null; // null = no stated pet-specific limit found
  carrierRequired: boolean;
  /** False for freight/cargo-style services where the pet does not travel in the same journey as its owner. */
  travelsWithOwner: boolean;
  conditions: string[];
  feeAUD: { min: number; max: number } | null;
  sourceOrganisation: string;
  sourceUrl: string;
  dateVerified: string; // ISO date
  status: PolicyStatus;
  jurisdiction: AustralianState | "National" | "International";
  notes?: string;
}

export interface EvidenceStat {
  id: string;
  value: string;
  label: string;
  sourceOrganisation: string;
  sourceUrl: string;
  dateChecked: string;
}

export interface OperatorScore {
  id: string;
  name: string;
  category: "airline" | "state" | "operator";
  jurisdiction: AustralianState | "National";
  scores: {
    petAccess: number;
    clarityOfRules: number;
    sizeInclusiveness: number;
    affordability: number;
    geographicalCoverage: number;
    easeOfBooking: number;
    animalWelfare: number;
    accessibilityNonDrivers: number;
  };
  summary: string;
}

export interface PolicyModel {
  id: string;
  title: string;
  scenario: string;
  description: string;
  details: string[];
  icon: "carrier" | "leash" | "seat" | "clock" | "shield" | "receipt" | "flask";
}

export interface AdvocacyTarget {
  id: string;
  name: string;
  type: "airline" | "minister" | "mp" | "authority";
  jurisdiction: AustralianState | "National";
}

export interface AdvocacyIssue {
  id: string;
  label: string;
  summary: string;
  messageBody: (context: { targetName: string; state: string }) => string;
}

export type StoryCategory =
  | "no-drive"
  | "relocation"
  | "veterinary"
  | "regional"
  | "holidays"
  | "emergency"
  | "older-owner"
  | "apartment"
  | "other";

export interface Story {
  id: string;
  name: string;
  location: string;
  category: StoryCategory;
  title: string;
  body: string;
}

export interface EvidenceEntry {
  id: string;
  title: string;
  summary: string;
  sourceOrganisation: string;
  sourceUrl: string;
  dateChecked: string;
  jurisdiction: AustralianState | "National" | "International";
  policyType: "regulation" | "operator-policy" | "research" | "campaign-position" | "international-example";
  status: PolicyStatus;
}

export interface DemandSubmission {
  id: string;
  createdAt: string;
  origin: string;
  destination: string;
  petType: PetType;
  weightBand: WeightBand;
  mode: TransportMode | "all";
  frequency: "weekly" | "monthly" | "few-times-year" | "once-a-year" | "rarely";
  willingnessToPayAUD: number;
  wouldBuyAdjacentSeat: boolean;
  supportsBehaviourRequirements: boolean;
  postcode?: string;
  email?: string;
  story?: string;
  state?: AustralianState;
}
