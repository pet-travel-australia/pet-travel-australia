# Pet Travel Australia

An independent civic-tech and consumer-data platform advocating for practical, responsible
pet-inclusive transport across Australia. This repository is the MVP prototype: a Next.js site
with a signature **Journey Checker**, a **Demand Register**, a seeded **Dashboard**, a **Pet
Travel Index** scorecard, a **Policy Lab**, a **Commercial Case** revenue calculator, a **Take
Action** message generator, **Stories**, and an **Evidence & Sources** library.

> **Tagline:** Australia moves. Our pets should be able to move with us.
> **Short line:** Where can we go together?

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- No backend required — all data is static/mocked, with one storage abstraction
  (`src/lib/demand-store.ts`) designed to be swapped for Supabase later

## Project structure

```
src/
  app/                      Next.js App Router pages (one folder per route)
    page.tsx                Homepage
    journey-checker/        Signature interactive journey search
    demand-register/        Demand submission form
    dashboard/              Seeded charts dashboard
    pet-travel-index/       Operator/state scorecard
    policy-lab/             "What could actually work?" policy models
    commercial-case/        Interactive revenue calculator
    take-action/            Advocacy message generator
    stories/                Story listing + /submit form
    evidence/                Evidence & sources library
    about/                  Mission, audiences and principles
    sitemap.ts, robots.ts   SEO fundamentals
  components/               Reusable UI: header, footer, cards, charts, badges
  data/                     ALL structured content lives here (see below)
  lib/                      Pure logic: journey matching, dashboard aggregation,
                             formatting helpers, the demand-store abstraction
```

### Where policy data lives

Everything the site displays is defined as typed data in `src/data/`, not hard-coded in
components:

| File | Contents |
| --- | --- |
| `src/data/types.ts` | Shared TypeScript types for the whole domain model |
| `src/data/transport-options.ts` | The Journey Checker dataset — one entry per provider/route/mode |
| `src/data/cities.ts` | Cities available in the Journey Checker and Demand Register |
| `src/data/operators.ts` | Pet Travel Index scores (0–10 across 8 categories) |
| `src/data/policy-models.ts` | Policy Lab cards ("what could actually work") |
| `src/data/advocacy-targets.ts` | Take Action targets (airlines, ministers, MPs, authorities) and issue message templates |
| `src/data/stories.ts` | Sample/placeholder stories |
| `src/data/evidence-library.ts` | Evidence & Sources table entries |
| `src/data/evidence-stats.ts` | Homepage headline statistics |
| `src/data/demand-seed.ts` | Seeded Demand Register submissions used to populate the Dashboard |

**Every entry in this dataset is demonstration/placeholder data**, clearly labelled as such in
the UI (see the amber "demonstration data" notices throughout the site). It is modelled on
publicly known general policy patterns, not independently verified against live operator
policy. Replacing it with a verified dataset should not require touching any component — only
the relevant file in `src/data/`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. No environment variables or backend are required for the MVP.

Other scripts:

```bash
npm run build   # production build (also type-checks and lints)
npm run start   # run the production build
npm run lint    # ESLint only
```

## How to add a transport operator or route

Open `src/data/transport-options.ts` and add a new object to the `transportOptions` array,
matching the `TransportOption` type in `src/data/types.ts`. Key fields:

- `routeOrigins` / `routeDestinations`: arrays of city codes from `src/data/cities.ts`, or
  `["ANY"]` for a provider that effectively serves the whole network (e.g. a national airline).
- `mode`: one of `"air" | "train" | "tram" | "bus" | "ferry"`.
- `petPermitted`: `"yes" | "restricted" | "no"` — drives the badge colour and the "practical
  option" logic in `src/lib/journey.ts`.
- `status`: `"verified" | "proposal" | "international"` — drives the source badge on evidence
  displayed anywhere the option is shown.
- `sourceUrl`/`sourceOrganisation`/`dateVerified`: always include these — every card renders a
  clickable source and a "verified on" date.

If you're adding a brand-new city, add it to `src/data/cities.ts` first (`code`, `name`, `state`).

To add a new **advocacy target** (airline, minister, MP or authority) for the Take Action tool,
add an entry to `advocacyTargets` in `src/data/advocacy-targets.ts` — no code changes needed.

## How to change Pet Travel Index scoring

Scores live in `src/data/operators.ts` as `operatorScores`, an array of `OperatorScore` objects.
Each has a `scores` object with eight 0–10 fields (`petAccess`, `clarityOfRules`,
`sizeInclusiveness`, `affordability`, `geographicalCoverage`, `easeOfBooking`, `animalWelfare`,
`accessibilityNonDrivers`). The overall score shown on each card is the simple average, computed
by `overallScore()` in the same file — change that function if you want a weighted methodology
instead. Category labels used across the UI are centralised in `scoreCategoryLabels` in the same
file, so renaming a category only needs one edit.

## How demand submissions could later connect to Supabase

`src/lib/demand-store.ts` defines a small `DemandStore` interface (`list()` and `add()`) and a
`getDemandStore()` factory. Right now it returns a `LocalDemandStore` that persists to
`window.localStorage` and merges results with the seed data in `src/data/demand-seed.ts`. No
other file in the app talks to storage directly — the Demand Register form and the Dashboard
both call `getDemandStore()`.

To connect Supabase:

1. `npm install @supabase/supabase-js` and add a Supabase client (e.g. `src/lib/supabase.ts`)
   using `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables.
2. Create a `demand_submissions` table matching the `DemandSubmission` type in
   `src/data/types.ts` (add appropriate Row Level Security policies — e.g. insert-only for
   anonymous users, select restricted to a service role for admin/dashboard use).
3. Implement `class SupabaseDemandStore implements DemandStore { ... }` in
   `src/lib/demand-store.ts`, calling `supabase.from("demand_submissions").select()/.insert()`.
4. Update `getDemandStore()` to return `new SupabaseDemandStore()` instead of
   `new LocalDemandStore()`. Nothing in `demand-register-client.tsx` or `dashboard-client.tsx`
   needs to change.
5. Decide whether the Dashboard should keep merging in `seedDemandSubmissions` (recommended
   until there's a credible volume of real submissions) or switch to live data only.

The same pattern (a small interface + one factory function) is a reasonable model for eventually
backing `src/data/transport-options.ts` and `src/data/evidence-library.ts` with a real database
too, once there's an editorial/verification workflow to go with it.

## Recommended next development steps

1. **Verify the seed dataset.** Every entry in `transport-options.ts`, `operators.ts` and
   `evidence-library.ts` needs to be checked against the live operator/authority policy, dated,
   and have its `status` confirmed, before any of it is presented as verified fact.
2. **Stand up Supabase** for the Demand Register (see above), plus basic spam/abuse protection
   (e.g. rate limiting, a honeypot field, or a CAPTCHA) before opening the form to the public.
3. **Add an admin/editorial workflow** for Stories and Evidence entries (moderation queue,
   review step) rather than direct publishing.
4. **Build the real Pet Travel Index methodology**: a public scoring rubric, a documented
   evidence trail per category per operator, and a right-of-reply process before the "2027"
   report is published.
5. **Instrument analytics** (privacy-respecting, e.g. Plausible) to see which routes and
   operators people are actually searching for — this is itself evidence.
6. **Accessibility and content audit**: run an automated + manual a11y pass (the site uses
   semantic HTML and visible focus states throughout, but a full audit — screen reader testing,
   colour contrast at scale — hasn't been done).
7. **Upgrade Next.js** past 14.2.x once ready to absorb the App Router/Server Actions changes in
   Next 15/16 — `npm audit` currently flags several advisories in the Next.js 14 line that are
   fixed upstream.

## Design notes

The visual language deliberately avoids paw-print/cartoon-pet clichés: a serif display face
(Fraunces) paired with Inter, a muted eucalyptus/ochre/ink palette, generous whitespace, and
data-forward layouts (tables, scorecards, sourced stat cards) — closer to a public-policy startup
or a data platform than a pet brand. Demonstration data is flagged with a consistent amber
"demonstration data" notice component (`src/components/demo-banner.tsx`) everywhere it appears.
