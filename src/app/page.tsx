import Link from "next/link";
import {
  ArrowUpRight,
  Car,
  Cross,
  MapPinOff,
  MoveRight,
  Plane,
  Scale,
  Users,
} from "lucide-react";
import { heroStats } from "@/data/evidence-stats";
import { StatCard } from "@/components/stat-card";

const problems = [
  {
    icon: Car,
    title: "Increased dependence on private cars",
    body: "Pet owners without a car often have no way to reach a vet, a park, or a holiday, forcing costly rideshares or car ownership by necessity.",
  },
  {
    icon: Cross,
    title: "Difficulty accessing veterinary care",
    body: "Specialist and emergency vet care is frequently located far from home, and public transport rules rarely account for a sick or injured animal.",
  },
  {
    icon: MapPinOff,
    title: "Barriers to domestic tourism",
    body: "Families routinely rule out flights and long-distance rail for pet-inclusive holidays, driving instead or not travelling at all.",
  },
  {
    icon: MoveRight,
    title: "Complicated interstate relocation",
    body: "Moving a pet interstate can mean a separate freight booking, a specialist agent, and a bill running into hundreds of dollars.",
  },
  {
    icon: Users,
    title: "Reduced mobility for people who don't drive",
    body: "Older Australians, people with disability and car-free households are disproportionately cut off from taking their pet anywhere at all.",
  },
  {
    icon: Scale,
    title: "Unnecessary separation of people and companion animals",
    body: "In the least workable cases, people and pets are simply split up for the journey — travelling on different services, or not travelling together at all.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-950/[0.06] bg-paper-50">
        <div
          className="pointer-events-none absolute inset-0 bg-grid bg-[length:56px_56px] opacity-40"
          aria-hidden
        />
        <div className="section relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <p className="label-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Independent pet transport data platform
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Where can you travel with your pet in Australia?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-900/70">
              Australia has one of the world&rsquo;s highest rates of pet ownership. Yet whether
              your pet can travel with you still depends on your postcode, transport mode, animal
              size and sometimes pure luck.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/journey-checker" className="btn-primary">
                Check a journey
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/demand-register" className="btn-secondary">
                Add your demand
              </Link>
            </div>
            <p className="mt-6 font-display text-xl italic text-ink-900/50">
              &ldquo;Australia moves. Our pets should be able to move with us.&rdquo;
            </p>
          </div>

          <div className="relative">
            <div className="card overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-ink-950/[0.06] bg-ink-950 px-5 py-3.5 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Journey Checker preview
                </span>
                <Plane className="h-4 w-4 text-brand-200" aria-hidden />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink-900/60">Melbourne → Perth</span>
                  <span className="font-tabular text-ink-900/60">Dog · 12&nbsp;kg</span>
                </div>
                <div className="rounded-xl border border-clay-500/25 bg-clay-500/[0.06] p-4">
                  <p className="text-sm font-semibold text-clay-600">Mobility gap identified</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-900/65">
                    No airline, train or coach service currently offers a practical,
                    same-journey option for a dog this size on this route.
                  </p>
                </div>
                <div className="rounded-xl border border-ink-950/[0.07] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink-950">Qantas Freight</span>
                    <span className="badge bg-ochre-100 text-ochre-700">Restricted</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-ink-900/55">
                    Manifested cargo only — pet travels separately from owner. From $250.
                  </p>
                </div>
                <Link href="/journey-checker" className="btn-ghost">
                  Run your own journey
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-eyebrow">The scale of the market</p>
            <h2 className="mt-3 max-w-lg font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              A pet-owning nation, undersupplied by its own transport system
            </h2>
          </div>
          <Link href="/evidence" className="btn-ghost shrink-0">
            View full sourcing
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      <section className="border-y border-ink-950/[0.06] bg-ink-950 py-16 text-white sm:py-24">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="label-eyebrow text-brand-200">The problem</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A national country. A fragmented pet transport system.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                Rules vary between states, transport operators and airlines — often without clear
                logic, and rarely with any national consistency. For millions of pet owners, that
                fragmentation has real consequences.
              </p>
              <Link href="/pet-travel-index" className="btn-ghost mt-6 text-brand-200 hover:text-brand-100">
                See how operators and states compare
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((p) => (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p.icon className="h-5 w-5 text-brand-200" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16 sm:py-24">
        <p className="label-eyebrow">What this platform does</p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
          Make the barriers visible. Quantify unmet demand. Identify workable solutions.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <PathCard
            href="/journey-checker"
            eyebrow="For pet owners"
            title="Check a real journey"
            body="Search any Australian route by transport mode, pet type and weight to see exactly what's permitted, restricted or unavailable."
          />
          <PathCard
            href="/commercial-case"
            eyebrow="For operators & policymakers"
            title="See the commercial case"
            body="An interactive calculator translating unmet demand into a realistic pet-travel revenue opportunity — assumptions fully editable."
          />
          <PathCard
            href="/pet-travel-index"
            eyebrow="For journalists & researchers"
            title="Explore the Pet Travel Index"
            body="A scorecard ranking operators and states on access, clarity, affordability, welfare and more — the basis for an annual report."
          />
        </div>
      </section>
    </>
  );
}

function PathCard({
  href,
  eyebrow,
  title,
  body,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link href={href} className="card group flex flex-col gap-3 p-6 transition hover:shadow-pop">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{eyebrow}</span>
      <h3 className="font-display text-xl font-semibold text-ink-950">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-900/65">{body}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-ink-950">
        Explore
        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
