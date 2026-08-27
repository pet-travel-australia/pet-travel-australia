import { City } from "./types";

export const cities: City[] = [
  { code: "SYD", name: "Sydney", state: "NSW" },
  { code: "MEL", name: "Melbourne", state: "VIC" },
  { code: "BNE", name: "Brisbane", state: "QLD" },
  { code: "PER", name: "Perth", state: "WA" },
  { code: "ADL", name: "Adelaide", state: "SA" },
  { code: "HBA", name: "Hobart", state: "TAS" },
  { code: "CBR", name: "Canberra", state: "ACT" },
  { code: "DRW", name: "Darwin", state: "NT" },
  { code: "GLD", name: "Gold Coast", state: "QLD" },
  { code: "NCL", name: "Newcastle", state: "NSW" },
  { code: "GEL", name: "Geelong", state: "VIC" },
  { code: "CNS", name: "Cairns", state: "QLD" },
];

export function cityByCode(code: string): City | undefined {
  return cities.find((c) => c.code === code);
}

export function cityLabel(code: string): string {
  const c = cityByCode(code);
  return c ? `${c.name} (${c.state})` : code;
}
