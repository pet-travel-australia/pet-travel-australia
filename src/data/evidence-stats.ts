import { EvidenceStat } from "./types";

/**
 * Headline statistics shown on the homepage. Figures reflect widely
 * reported industry estimates (Animal Medicines Australia's biennial "Pets
 * in Australia" report and related industry sizing). Replace `sourceUrl`
 * with direct citations to the latest report editions before treating this
 * as a verified figure — see /evidence for the full sourcing model.
 */
export const heroStats: EvidenceStat[] = [
  {
    id: "household-pet-ownership",
    value: "73%",
    label: "of Australian households have a pet",
    sourceOrganisation: "Animal Medicines Australia, Pets in Australia report",
    sourceUrl: "https://animalmedicinesaustralia.org.au/report/pets-in-australia-a-national-survey-of-pets-and-people/",
    dateChecked: "2026-01-15",
  },
  {
    id: "household-dog-ownership",
    value: "49%",
    label: "of households have a dog",
    sourceOrganisation: "Animal Medicines Australia, Pets in Australia report",
    sourceUrl: "https://animalmedicinesaustralia.org.au/report/pets-in-australia-a-national-survey-of-pets-and-people/",
    dateChecked: "2026-01-15",
  },
  {
    id: "national-pet-population",
    value: "31.6M",
    label: "pets nationally",
    sourceOrganisation: "Animal Medicines Australia, Pets in Australia report",
    sourceUrl: "https://animalmedicinesaustralia.org.au/report/pets-in-australia-a-national-survey-of-pets-and-people/",
    dateChecked: "2026-01-15",
  },
  {
    id: "annual-pet-spend",
    value: "$21.3B",
    label: "annual pet expenditure",
    sourceOrganisation: "Animal Medicines Australia, Pets in Australia report",
    sourceUrl: "https://animalmedicinesaustralia.org.au/report/pets-in-australia-a-national-survey-of-pets-and-people/",
    dateChecked: "2026-01-15",
  },
];
