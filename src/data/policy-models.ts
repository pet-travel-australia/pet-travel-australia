import { PolicyModel } from "./types";

export const policyModels: PolicyModel[] = [
  {
    id: "small-pets-carrier",
    title: "Small pets",
    scenario: "Carrier-based travel",
    description:
      "Small cats, dogs and other pets travel in an enclosed, secure carrier that fits on a lap, under a seat, or in a designated space.",
    details: [
      "Lowest-risk model — already the default policy on most Australian metro rail, tram and bus networks",
      "No behaviour risk to other passengers; minimal cleaning or liability exposure",
      "Reasonable next step: consistent national carrier-size standard so the rule doesn't change at the state border",
    ],
    icon: "carrier",
  },
  {
    id: "medium-dogs-leash",
    title: "Medium dogs",
    scenario: "Leash and behaviour requirements, or an appropriately sized carrier",
    description:
      "Dogs too large for a standard carrier travel on a short, fixed lead with a calm-behaviour expectation, similar to existing off-peak tram and ferry rules.",
    details: [
      "Already operating successfully on Melbourne trams, Sydney ferries and several regional ferries",
      "Owner remains responsible for the animal's behaviour throughout the journey",
      "Works best combined with off-peak or space-available conditions",
    ],
    icon: "leash",
  },
  {
    id: "large-dogs-adjacent-seat",
    title: "Large dogs",
    scenario: "Designated carriage or area, or an adjacent-seat model",
    description:
      "For larger dogs, a designated pet area (as used on some international rail services) or an adjacent-seat purchase (as trialled by some overseas carriers) lets the owner cover the animal's footprint directly.",
    details: [
      "No Australian airline currently offers this — it is a proposal, not an existing service",
      "Adjacent-seat purchase means the operator is compensated for the space used, addressing a common commercial objection",
      "Suited to a limited trial on selected high-leisure-demand routes before any wider rollout",
    ],
    icon: "seat",
  },
  {
    id: "peak-period-restriction",
    title: "Peak periods",
    scenario: "Operators may restrict ordinary pets during high-demand commuting periods",
    description:
      "Operators retain the right to exclude non-assistance pets during weekday peak commuter windows, preserving capacity when it matters most.",
    details: [
      "Mirrors the existing Melbourne and Perth off-peak models",
      "Reduces crowding and complaint risk without removing access altogether",
      "Assistance animals are never subject to peak-period restriction",
    ],
    icon: "clock",
  },
  {
    id: "behaviour-standard",
    title: "Behaviour standard",
    scenario: "Operators may remove animals that are disruptive, aggressive or unhygienic",
    description:
      "A clear, consistently enforced behaviour standard protects other passengers and gives staff a straightforward basis for action, rather than a blanket ban.",
    details: [
      "Operator retains full discretion to refuse or remove an animal on welfare or safety grounds",
      "Removes the need to justify exclusion by size or breed alone",
      "Should be published in plain language, not buried in general conditions of carriage",
    ],
    icon: "shield",
  },
  {
    id: "pet-fare",
    title: "Pet fare",
    scenario: "A reasonable additional fare to cover administration and cleaning",
    description:
      "A modest, transparent pet fare — consistent with existing airline cabin-pet fees — funds cleaning, administration and any additional handling, addressing the most common operator objection: cost.",
    details: [
      "Already standard practice for in-cabin air travel",
      "Should be published up-front, not negotiated at check-in or the gate",
      "Commercial modelling for this is explored in the Commercial Case calculator",
    ],
    icon: "receipt",
  },
  {
    id: "trial-first",
    title: "Trial first",
    scenario: "Pilot selected routes and measure complaints, uptake, revenue and operational impact",
    description:
      "Rather than a national mandate, operators and regulators can pilot an expanded policy on selected routes, publish the results, and adjust before any broader change.",
    details: [
      "Time-boxed trial (e.g. 6–12 months) on a defined set of routes",
      "Published metrics: complaint rate, uptake, incremental revenue, cleaning/incident cost",
      "Low political and commercial risk; evidence-led decision at the end of the trial",
    ],
    icon: "flask",
  },
];

export const assistanceAnimalNote =
  "Every model above applies to ordinary pets. Accredited assistance animals already have, and must keep, full legal access under the Disability Discrimination Act 1992 (Cth) and equivalent state legislation — none of these proposals change, dilute or condition that right in any way.";
