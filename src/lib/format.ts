export function formatAUD(value: number, opts: { maxFractionDigits?: number } = {}): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: opts.maxFractionDigits ?? 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-AU").format(Math.round(value));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const weightBandLabels: Record<string, string> = {
  "under-5kg": "Under 5 kg",
  "5-10kg": "5–10 kg",
  "10-20kg": "10–20 kg",
  "20-40kg": "20–40 kg",
  "over-40kg": "Over 40 kg",
};

export const modeLabels: Record<string, string> = {
  air: "Air",
  train: "Train",
  tram: "Tram",
  bus: "Bus",
  ferry: "Ferry",
  all: "All transport",
};

export const petTypeLabels: Record<string, string> = {
  dog: "Dog",
  cat: "Cat",
  "small-pet": "Small pet (rabbit, bird, etc.)",
  other: "Other",
};

export const frequencyLabels: Record<string, string> = {
  weekly: "Weekly",
  monthly: "Monthly",
  "few-times-year": "A few times a year",
  "once-a-year": "About once a year",
  rarely: "Rarely",
};
