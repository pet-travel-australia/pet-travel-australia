import { OperatorScore } from "./types";

/**
 * DEMONSTRATION SCORES.
 *
 * The Pet Travel Index is designed to become an annual, methodology-backed
 * report ("Australian Pet Travel Index 2027"). These example scores
 * (0–10 per category) illustrate the format and are not the result of a
 * completed scoring methodology or audit. See /pet-travel-index for the
 * planned scoring approach.
 */
export const operatorScores: OperatorScore[] = [
  {
    id: "sydney-ferries",
    name: "Sydney Ferries",
    category: "operator",
    jurisdiction: "NSW",
    scores: {
      petAccess: 9,
      clarityOfRules: 8,
      sizeInclusiveness: 8,
      affordability: 10,
      geographicalCoverage: 6,
      easeOfBooking: 8,
      animalWelfare: 8,
      accessibilityNonDrivers: 9,
    },
    summary: "Leash access on open decks makes ferries the most consistently pet-inclusive mode in the country.",
  },
  {
    id: "vic-ptv",
    name: "Public Transport Victoria (trains, trams, buses)",
    category: "state",
    jurisdiction: "VIC",
    scores: {
      petAccess: 7,
      clarityOfRules: 7,
      sizeInclusiveness: 5,
      affordability: 10,
      geographicalCoverage: 8,
      easeOfBooking: 9,
      animalWelfare: 6,
      accessibilityNonDrivers: 8,
    },
    summary: "Clear off-peak leash policy across trains, trams and buses, but peak-time exclusion limits everyday usefulness.",
  },
  {
    id: "wa-transperth",
    name: "Transperth",
    category: "state",
    jurisdiction: "WA",
    scores: {
      petAccess: 6,
      clarityOfRules: 6,
      sizeInclusiveness: 5,
      affordability: 10,
      geographicalCoverage: 6,
      easeOfBooking: 8,
      animalWelfare: 6,
      accessibilityNonDrivers: 7,
    },
    summary: "Similar off-peak model to Victoria with less publicly visible documentation of the rules.",
  },
  {
    id: "sa-adelaide-metro",
    name: "Adelaide Metro",
    category: "state",
    jurisdiction: "SA",
    scores: {
      petAccess: 6,
      clarityOfRules: 6,
      sizeInclusiveness: 5,
      affordability: 10,
      geographicalCoverage: 5,
      easeOfBooking: 8,
      animalWelfare: 6,
      accessibilityNonDrivers: 6,
    },
    summary: "Comparable framework to other states; smaller network limits overall coverage.",
  },
  {
    id: "nsw-transport",
    name: "Transport for NSW (Sydney Trains, buses)",
    category: "state",
    jurisdiction: "NSW",
    scores: {
      petAccess: 4,
      clarityOfRules: 7,
      sizeInclusiveness: 2,
      affordability: 10,
      geographicalCoverage: 9,
      easeOfBooking: 8,
      animalWelfare: 5,
      accessibilityNonDrivers: 5,
    },
    summary: "Australia's busiest network is also its most restrictive for anything larger than a small carrier pet.",
  },
  {
    id: "qld-rail-translink",
    name: "Queensland Rail & Translink",
    category: "state",
    jurisdiction: "QLD",
    scores: {
      petAccess: 4,
      clarityOfRules: 6,
      sizeInclusiveness: 2,
      affordability: 9,
      geographicalCoverage: 7,
      easeOfBooking: 7,
      animalWelfare: 5,
      accessibilityNonDrivers: 5,
    },
    summary: "Carrier-only policy effectively excludes medium and large dogs from the state's rail and bus networks.",
  },
  {
    id: "rex-airlines",
    name: "Rex Airlines",
    category: "airline",
    jurisdiction: "National",
    scores: {
      petAccess: 6,
      clarityOfRules: 6,
      sizeInclusiveness: 5,
      affordability: 6,
      geographicalCoverage: 5,
      easeOfBooking: 5,
      animalWelfare: 6,
      accessibilityNonDrivers: 6,
    },
    summary: "The most pet-permissive Australian airline, with hold access for larger pets on selected regional routes.",
  },
  {
    id: "qantas",
    name: "Qantas Domestic",
    category: "airline",
    jurisdiction: "National",
    scores: {
      petAccess: 1,
      clarityOfRules: 7,
      sizeInclusiveness: 1,
      affordability: 3,
      geographicalCoverage: 8,
      easeOfBooking: 3,
      animalWelfare: 5,
      accessibilityNonDrivers: 2,
    },
    summary: "No standard passenger pet carriage of any kind — pets can only travel separately via Qantas Freight, at significant extra cost.",
  },
  {
    id: "virgin-australia",
    name: "Virgin Australia",
    category: "airline",
    jurisdiction: "National",
    scores: {
      petAccess: 5,
      clarityOfRules: 8,
      sizeInclusiveness: 2,
      affordability: 4,
      geographicalCoverage: 8,
      easeOfBooking: 4,
      animalWelfare: 6,
      accessibilityNonDrivers: 5,
    },
    summary: "Cabin access for small pets is clearly documented, but larger dogs have no same-flight option.",
  },
  {
    id: "jetstar",
    name: "Jetstar",
    category: "airline",
    jurisdiction: "National",
    scores: {
      petAccess: 1,
      clarityOfRules: 8,
      sizeInclusiveness: 1,
      affordability: 3,
      geographicalCoverage: 8,
      easeOfBooking: 3,
      animalWelfare: 5,
      accessibilityNonDrivers: 2,
    },
    summary: "Positioned as Australia's low-cost carrier, but offers no low-cost way to travel with a pet.",
  },
];

export const scoreCategoryLabels: Record<keyof OperatorScore["scores"], string> = {
  petAccess: "Pet access",
  clarityOfRules: "Clarity of rules",
  sizeInclusiveness: "Size inclusiveness",
  affordability: "Affordability",
  geographicalCoverage: "Geographical coverage",
  easeOfBooking: "Ease of booking",
  animalWelfare: "Animal welfare",
  accessibilityNonDrivers: "Accessibility for non-drivers",
};

export function overallScore(op: OperatorScore): number {
  const values = Object.values(op.scores);
  return values.reduce((a, b) => a + b, 0) / values.length;
}
