import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  MessageSquarePlus,
  Search,
  TrendingUp,
  Ban,
} from "lucide-react";
import { Paw, PawWatermark } from "@/components/paw";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-b-[36px] bg-teal-jade sm:rounded-b-[56px]">
        <PawWatermark />
        <div className="section relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
          <div className="text-white">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Travel with pets in Australia shouldn&rsquo;t be this hard.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
              Pet Travel Australia shows where pet-friendly travel exists, where it doesn&rsquo;t,
              and where demand is waiting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/journey-checker" className="btn-primary">
                Check a route
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/demand-register" className="btn-outline-white">
                Register demand
              </Link>
            </div>
            <Link
              href="/pet-travel-index"
              className="btn-ghost mt-7 text-coral-200 decoration-coral-300 hover:text-white"
            >
              Explore the Pet Travel Index
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-pop lg:aspect-square">
            <Image
              src="/images/dogs-on-train.jpg"
              alt="Two leashed dogs travelling calmly on a metro train with their owners"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-[center_60%]"
            />
          </div>
        </div>
      </section>

      {/* THREE CORE TOOLS */}
      <section className="section py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          <ToolCard
            href="/journey-checker"
            colorClass="bg-brand-600"
            icon={Search}
            title="Journey Checker"
            body="Can your pet travel this route?"
          />
          <ToolCard
            href="/demand-register"
            colorClass="bg-coral-500"
            icon={MessageSquarePlus}
            title="Demand Register"
            body="Show where better pet travel options are needed."
          />
          <ToolCard
            href="/pet-travel-index"
            colorClass="bg-jade-600"
            icon={BarChart3}
            title="Pet Travel Index"
            body="See how pet-friendly Australia's transport options really are."
          />
        </div>
      </section>

      {/* THE GAP */}
      <section className="relative overflow-hidden bg-brand-900 py-16 text-white sm:py-20">
        <PawWatermark />
        <div className="section relative">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Australia has a pet-mobility gap.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            Many journeys still have no practical public-transport option for people travelling
            with pets.
          </p>

          <div className="mt-10 rounded-3xl bg-white/[0.06] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-coral-200">
              A route we track
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-lg font-bold sm:text-xl">
              <span>Melbourne</span>
              <span className="flex items-center gap-2 text-coral-300">
                <span className="h-px w-10 bg-coral-400/60 sm:w-16" />
                <Ban className="h-5 w-5 shrink-0" aria-hidden />
                <span className="h-px w-10 bg-coral-400/60 sm:w-16" />
              </span>
              <span>Perth</span>
              <span className="ml-1 rounded-full bg-coral-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                No practical option — dog, 10&ndash;20&nbsp;kg
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              This is one of many gaps the Journey Checker surfaces route by route.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/[0.06] p-6">
              <p className="font-display text-4xl font-extrabold text-coral-300">73%</p>
              <p className="mt-1 text-sm text-white/70">
                of Australian households have a pet
                <span className="block text-xs text-white/45">Animal Medicines Australia</span>
              </p>
            </div>
            <div className="rounded-3xl bg-white/[0.06] p-6">
              <p className="font-display text-4xl font-extrabold text-coral-300">$21.3B</p>
              <p className="mt-1 text-sm text-white/70">
                spent on pets in Australia each year
                <span className="block text-xs text-white/45">Animal Medicines Australia</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR OPERATORS */}
      <section className="section py-16 sm:py-20">
        <div className="grid gap-10 rounded-[32px] bg-ochre-50 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
          <div>
            <p className="label-eyebrow text-ochre-600">
              <Building2 className="h-3.5 w-3.5" />
              For operators and decision-makers
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-950 sm:text-3xl">
              Excluding pets has a cost. We can show you what it is.
            </h2>
            <Link href="/commercial-case" className="btn-secondary mt-7">
              Explore operator insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <OperatorPoint icon={TrendingUp} text="See unmet demand" />
            <OperatorPoint icon={Search} text="Identify promising routes" />
            <OperatorPoint icon={BarChart3} text="Explore the commercial opportunity" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative mx-6 mb-16 overflow-hidden rounded-[32px] bg-coral-500 py-14 text-center text-white sm:mx-8 sm:py-20 lg:mx-10">
        <PawWatermark />
        <div className="relative mx-auto max-w-xl px-6">
          <Paw size={36} className="mx-auto mb-5 text-white/80" />
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Help make pet travel easier in Australia.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/journey-checker" className="btn-outline-white">
              Check your journey
            </Link>
            <Link
              href="/demand-register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-coral-600 shadow-[0_10px_24px_-8px_rgba(35,24,9,0.35)] transition hover:bg-coral-50"
            >
              Register unmet demand
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ToolCard({
  href,
  colorClass,
  icon: Icon,
  title,
  body,
}: {
  href: string;
  colorClass: string;
  icon: typeof Search;
  title: string;
  body: string;
}) {
  return (
    <Link href={href} className="card group flex flex-col gap-4 p-7 transition hover:-translate-y-1 hover:shadow-pop">
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colorClass} text-white`}>
        <Icon className="h-7 w-7" aria-hidden />
      </span>
      <div>
        <h3 className="font-display text-xl font-extrabold text-ink-950">{title}</h3>
        <p className="mt-1.5 text-base text-ink-900/70">{body}</p>
      </div>
      <span className="mt-auto flex items-center gap-1.5 pt-1 text-sm font-bold text-ink-950">
        Open
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function OperatorPoint({ icon: Icon, text }: { icon: typeof Search; text: string }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-card">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ochre-500 text-white">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <p className="text-sm font-bold text-ink-950">{text}</p>
    </div>
  );
}
