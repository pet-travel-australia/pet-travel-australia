import { AdvocacyIssue, AdvocacyTarget } from "./types";

/**
 * Configurable "who to contact" data for the Take Action message generator.
 * Kept as plain data so new operators, ministers or authorities can be
 * added without touching page logic — see README for instructions.
 */
export const advocacyTargets: AdvocacyTarget[] = [
  { id: "qantas", name: "Qantas Domestic", type: "airline", jurisdiction: "National" },
  { id: "virgin", name: "Virgin Australia", type: "airline", jurisdiction: "National" },
  { id: "jetstar", name: "Jetstar", type: "airline", jurisdiction: "National" },
  { id: "rex", name: "Rex Airlines", type: "airline", jurisdiction: "National" },
  { id: "min-transport-nsw", name: "NSW Minister for Transport", type: "minister", jurisdiction: "NSW" },
  { id: "min-transport-vic", name: "Victorian Minister for Public and Active Transport", type: "minister", jurisdiction: "VIC" },
  { id: "min-transport-qld", name: "Queensland Minister for Transport and Main Roads", type: "minister", jurisdiction: "QLD" },
  { id: "min-transport-wa", name: "WA Minister for Transport", type: "minister", jurisdiction: "WA" },
  { id: "min-transport-federal", name: "Federal Minister for Infrastructure and Transport", type: "minister", jurisdiction: "National" },
  { id: "local-mp", name: "Your local Member of Parliament", type: "mp", jurisdiction: "National" },
  { id: "transport-nsw-authority", name: "Transport for NSW", type: "authority", jurisdiction: "NSW" },
  { id: "ptv-authority", name: "Public Transport Victoria", type: "authority", jurisdiction: "VIC" },
  { id: "translink-authority", name: "Translink Queensland", type: "authority", jurisdiction: "QLD" },
  { id: "pta-authority", name: "Public Transport Authority WA", type: "authority", jurisdiction: "WA" },
];

export const advocacyIssues: AdvocacyIssue[] = [
  {
    id: "trial-request",
    label: "Request a pilot trial on a specific route",
    summary: "Ask the operator or authority to trial expanded pet access on a defined route and publish the results.",
    messageBody: ({ targetName, state }) =>
      `I am writing as a resident of ${state} to ask ${targetName} to consider a time-limited trial of expanded pet-inclusive access on a selected route or service.\n\nAustralia has one of the highest rates of pet ownership in the world (73% of households), yet transport options for pet owners without a private car remain limited and inconsistent. A trial — even on a small number of routes, over 6–12 months, with clear behaviour standards and a reasonable pet fare — would let you assess complaint rates, uptake and any operational impact with real data before considering any wider change.\n\nI would welcome the opportunity to see published results from such a trial, and to contribute my own travel demand data via Pet Travel Australia's Demand Register.\n\nThank you for considering this practical, evidence-based request.`,
  },
  {
    id: "clarify-rules",
    label: "Ask for clearer, more accessible published rules",
    summary: "Request that current pet policy be published in plain language and kept up to date online.",
    messageBody: ({ targetName, state }) =>
      `I am writing to ask ${targetName} to publish a clear, plain-language summary of its current pet transport policy, including any weight, carrier and peak-period conditions, in one easy-to-find location online.\n\nAs someone travelling with a pet in ${state}, I have found it difficult to establish the exact rules that apply to my journey. Many pet owners rely on word of mouth or outdated forum posts rather than an authoritative source. A single, current, well-signposted policy page would reduce confusion for pet owners and reduce avoidable disputes for your staff.\n\nThank you for considering this straightforward, low-cost improvement.`,
  },
  {
    id: "size-inclusive",
    label: "Advocate for a size-inclusive access model",
    summary: "Propose a leash/behaviour or adjacent-seat model for medium and large pets, not just small carrier pets.",
    messageBody: ({ targetName, state }) =>
      `I am writing to ask ${targetName} to consider extending pet access beyond small carrier-based pets to include medium and large dogs, using a leash-and-behaviour standard or an adjacent-seat/designated-area model.\n\nCurrent policy in ${state} effectively excludes the majority of dog owners, since most dogs do not fit in a standard carrier. Practical models already operating successfully elsewhere — leash access on ferries and trams, and adjacent-seat programs used by some international operators — show that size-inclusive access does not have to compromise safety or comfort for other passengers, provided clear behaviour standards apply.\n\nI would welcome a considered response outlining whether this is something you would consider trialling.`,
  },
  {
    id: "non-driver-access",
    label: "Highlight the impact on people who don't drive",
    summary: "Explain how limited pet transport access affects people without a private car.",
    messageBody: ({ targetName, state }) =>
      `I am writing to raise the impact of current pet transport restrictions on people who do not drive.\n\nIn ${state}, current policy on services operated or regulated by ${targetName} assumes pet owners have access to a private car for veterinary visits, relocation, regional travel and everyday mobility. This particularly disadvantages older residents, people with disability, people who cannot afford a car, and inner-city residents without one by choice.\n\nI would ask that any future policy review explicitly consider the needs of pet owners who rely on public and commercial transport, not only those with private vehicles.`,
  },
  {
    id: "support-pet-fare",
    label: "Offer support for a reasonable pet fare",
    summary: "Signal willingness to pay a fair fee in exchange for expanded, reliable access.",
    messageBody: ({ targetName, state }) =>
      `I am writing to let ${targetName} know that, as a pet owner in ${state}, I would be willing to pay a reasonable additional fare in exchange for clear, reliable pet-inclusive travel options.\n\nCost recovery is a legitimate and reasonable basis for expanding access — many pet owners, myself included, already budget for pet-related costs and would rather pay a transparent fee than have no option at all. I would encourage you to consider a published pet fare as part of any future policy change, alongside clear behaviour expectations.\n\nI have also registered my travel demand with Pet Travel Australia's Demand Register, which is compiling anonymised, aggregate data on this kind of unmet demand.`,
  },
];
