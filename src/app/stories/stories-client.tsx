"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sampleStories, storyCategoryLabels } from "@/data/stories";
import { StoryCategory } from "@/data/types";
import { DemoDataNotice } from "@/components/demo-banner";

const categories: (StoryCategory | "all")[] = ["all", ...(Object.keys(storyCategoryLabels) as StoryCategory[])];

export function StoriesClient() {
  const [filter, setFilter] = useState<StoryCategory | "all">("all");
  const visible = filter === "all" ? sampleStories : sampleStories.filter((s) => s.category === filter);

  return (
    <div className="section py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="label-eyebrow">Stories</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
            What does pet transport access mean for you?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-900/65">
            Behind every statistic is a specific, ordinary journey someone couldn&rsquo;t make
            with their pet. These stories put a human shape on the data.
          </p>
        </div>
        <Link href="/stories/submit" className="btn-primary shrink-0">
          Share your story
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <DemoDataNotice className="mt-8 max-w-2xl">
        The stories below are illustrative placeholders written to represent common, realistic
        situations — not real individual testimonials. Genuine, consented stories will replace
        them as they&rsquo;re submitted.
      </DemoDataNotice>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === c
                ? "bg-ink-950 text-white"
                : "bg-ink-950/[0.05] text-ink-900/65 hover:bg-ink-950/10"
            }`}
          >
            {c === "all" ? "All stories" : storyCategoryLabels[c]}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
        {filter === "all" && (
          <>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/cat-beach.jpg"
                alt="A cat on a sandy beach with people walking in the background"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/puppy-beach.jpg"
                alt="A puppy sitting on a beach looking up at its owner"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
          </>
        )}
        {visible.map((story) => (
          <article key={story.id} className="card p-6">
            <span className="badge badge-demo">Illustrative placeholder</span>
            <h2 className="mt-3 font-display text-lg font-extrabold leading-snug text-ink-950">{story.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-900/70">{story.body}</p>
            <p className="mt-4 text-xs font-medium text-ink-900/45">
              {story.name} · {story.location} · {storyCategoryLabels[story.category]}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
