import { Story, StoryCategory } from "./types";

/**
 * ILLUSTRATIVE PLACEHOLDER STORIES.
 * These are written to represent common, realistic situations raised by
 * pet owners — they are not real individual testimonials. Replace with
 * genuine, consented submissions via the Stories submission form.
 */
export const sampleStories: Story[] = [
  {
    id: "story-1",
    name: "Elena R.",
    location: "Inner-city Sydney, NSW",
    category: "no-drive",
    title: "I gave up my car years ago. My dog didn't sign up for that.",
    body:
      "I live two train stops from the vet and don't own a car by choice — public transport gets me everywhere I need to go. Everywhere except with my dog. Rani is a 14kg kelpie cross, calm as anything, but she's too big for a carrier and Sydney Trains won't take her. A twenty-minute trip becomes a $45 rideshare each way, or I don't go.",
  },
  {
    id: "story-2",
    name: "Marcus T.",
    location: "Relocating Brisbane → Perth",
    category: "relocation",
    title: "Moving my life across the country meant moving my dog separately, by freight.",
    body:
      "When my job relocated me from Brisbane to Perth, I could book my own flight in twenty minutes. Getting my 22kg staffy there took three weeks of research, a specialist pet transport agent, an IATA crate, and about $650. He travelled in the cargo hold of a different flight to me, alone. It worked out, but it shouldn't be that hard for something this common.",
  },
  {
    id: "story-3",
    name: "Priya K.",
    location: "Regional Victoria",
    category: "veterinary",
    title: "The nearest specialist vet is 90 minutes away and I don't drive at night.",
    body:
      "My cat needed specialist treatment only available in Melbourne. V/Line was fine for the trip up — small pet, secure carrier, no issue. Coming home after dark with a sedated cat and no car was the hard part. A same-day fare rule for medical travel would have made a stressful day much less so.",
  },
  {
    id: "story-4",
    name: "The Whitfield family",
    location: "Gold Coast, QLD",
    category: "holidays",
    title: "We looked into a pet-friendly Australian holiday. We ended up driving eleven hours instead of flying two.",
    body:
      "We wanted to take our golden retriever on a family holiday within Australia. Every domestic airline we checked either didn't accept dogs his size or routed him through freight, separate from us, at a cost close to a second ticket. We drove instead — eleven hours each way — because at least we were together.",
  },
  {
    id: "story-5",
    name: "David O.",
    location: "Emergency evacuation, Northern NSW",
    category: "emergency",
    title: "During the floods, 'no pets' wasn't an option I could accept.",
    body:
      "When we were told to evacuate, the community bus that came through had a strict no-pets rule. I wasn't leaving my dog behind, so we waited for a friend with a ute instead, longer than I would have liked. Emergency transport policy needs a clear, pre-agreed pet provision — not something worked out on the day.",
  },
  {
    id: "story-6",
    name: "Grace L.",
    location: "Retired, Adelaide, SA",
    category: "older-owner",
    title: "I stopped driving at 78. I didn't want to give up my dog too.",
    body:
      "After I stopped driving, my daughter worried I'd become isolated. My dog Biscuit and the Adelaide Metro tram are honestly a big part of why that didn't happen — we can get to the park, to appointments, to see friends. It works because the rules here are clear and reasonably generous. Not every state makes it this easy.",
  },
  {
    id: "story-7",
    name: "Sam & Jordan",
    location: "Apartment living, Melbourne, VIC",
    category: "apartment",
    title: "No yard, no car — just us, a dog, and the tram network.",
    body:
      "We chose inner-city apartment life on purpose — no car, low footprint, everything walkable. Our dog Otis relies entirely on public transport to get to the park, the vet and my parents' place. Melbourne's off-peak tram and train rules make that possible. It's one of the reasons we haven't looked at moving interstate.",
  },
  {
    id: "story-8",
    name: "Anonymous",
    location: "Regional Tasmania",
    category: "regional",
    title: "The bus is the only public transport option for 40km. It doesn't take pets at all.",
    body:
      "Out here, if you don't drive, the regional bus is genuinely the only public transport option — and it's carrier-only for very small pets. My two dogs simply cannot come with me anywhere the bus goes. It's not a capital-city problem; regional pet owners are affected too, often with fewer alternatives.",
  },
];

export const storyCategoryLabels: Record<StoryCategory, string> = {
  "no-drive": "I don't drive",
  relocation: "Interstate relocation",
  veterinary: "Veterinary access",
  regional: "Regional travel",
  holidays: "Holidays",
  emergency: "Emergency travel",
  "older-owner": "Older pet owner",
  apartment: "Apartment living",
  other: "Other",
};
