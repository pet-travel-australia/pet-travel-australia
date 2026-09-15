import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpenCheck,
  Handshake,
  Heart,
  MapPin,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pet Travel Australia supports responsible, not unrestricted, animal access to transport — evidence before ideology, animal welfare and passenger safety first.",
};

const principles = [
  { icon: Heart, title: "Animal welfare", body: "No policy model we advocate for should compromise the wellbeing of the animal being transported." },
  { icon: ShieldCheck, title: "Passenger safety", body: "Other passengers' safety and comfort is a legitimate, non-negotiable constraint on any access model." },
  { icon: Scale, title: "Protection of assistance-animal access", body: "Nothing we propose changes, dilutes or conditions the existing legal rights of accredited assistance animals." },
  { icon: BookOpenCheck, title: "Clear behavioural expectations", body: "Access should come with a plain, enforceable behaviour standard — not an unconditional right." },
  { icon: Handshake, title: "Practical rules for operators", body: "We design proposals operators can actually run: priced, insurable, and staff-enforceable." },
  { icon: Sparkles, title: "Evidence before ideology", body: "We publish our sources and our assumptions, and we change our position when the evidence does." },
  { icon: MapPin, title: "National consistency where possible", body: "Pet owners shouldn't need to learn eight different rulebooks to cross a state border." },
  { icon: Users, title: "Consumer choice", body: "Operators who choose to offer pet-inclusive options should be able to compete on that basis." },
];

export default function AboutPage() {
  return (
    <div className="section py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div className="max-w-2xl">
          <p className="label-eyebrow">About</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Responsible access, not unrestricted access
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-900/65">
            Pet Travel Australia is an independent civic-tech and consumer-data platform. We
            advocate for practical, responsible pet-inclusive transport — not for pets to go
            everywhere, unconditionally, regardless of size, behaviour or context.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-900/65">
            Australians love and spend heavily on their pets, but transport infrastructure
            frequently assumes pet owners have private cars. We make the barriers visible, quantify
            unmet demand, identify workable solutions, and give transport providers and governments
            the evidence to make change.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/golden-retriever-street.jpg"
              alt="A golden retriever resting on a city footpath"
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/ginger-cat-canal.jpg"
              alt="A ginger and white cat sitting on a brick walkway beside a canal"
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-ink-950">Our principles</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="card p-5">
              <p.icon className="h-5 w-5 text-brand-600" aria-hidden />
              <h3 className="mt-3 text-sm font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-900/65">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mt-14 grid gap-8 p-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-950">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-900/70">
            <li>Australian pet owners trying to work out what&rsquo;s actually possible</li>
            <li>Airlines and transport operators assessing the commercial opportunity</li>
            <li>State and federal policymakers weighing practical policy options</li>
            <li>Journalists reporting on transport, consumer affairs or pet ownership</li>
            <li>Tourism operators building pet-inclusive travel offerings</li>
            <li>Researchers and animal-welfare organisations</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-950">What we are not</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-900/70">
            <li>Not a government body, regulator or airline — an independent platform</li>
            <li>Not a campaign for unrestricted pet access to any transport, anywhere</li>
            <li>Not a substitute for official operator or government policy — always verify before travelling</li>
            <li>Not a pet retailer, breeder or booking agent — we don&rsquo;t sell anything to pet owners</li>
          </ul>
        </div>
      </section>

      <section className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-ink-950 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-xl font-semibold text-white">Get involved</h2>
          <p className="mt-2 max-w-lg text-sm text-white/65">
            Add your journey, share your story, or reach out if you work in transport policy,
            journalism or animal welfare and want to contribute.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/demand-register" className="btn-primary bg-white text-ink-950 hover:bg-brand-100 hover:text-ink-950">
            Add your demand
          </Link>
          <Link href="/stories/submit" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
            Share your story
          </Link>
        </div>
      </section>
    </div>
  );
}
