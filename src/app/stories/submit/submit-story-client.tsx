"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { storyCategoryLabels } from "@/data/stories";
import { StoryCategory } from "@/data/types";
import { DemoDataNotice } from "@/components/demo-banner";

const categoryOptions = Object.keys(storyCategoryLabels) as StoryCategory[];

export function SubmitStoryClient() {
  const [category, setCategory] = useState<StoryCategory>("no-drive");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="section flex flex-col items-center py-24 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-600" aria-hidden />
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink-950">Thank you</h1>
        <p className="mt-3 max-w-md text-ink-900/65">
          Your story has been recorded in this prototype session. In a live version of this site,
          it would be queued for review before publishing on the Stories page.
        </p>
        <a href="/stories" className="btn-secondary mt-8">
          Back to Stories
        </a>
      </div>
    );
  }

  return (
    <div className="section py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Share your story</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          What does pet transport access mean for you?
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-900/65">
          Specific, real situations are what move policymakers and journalists. A few sentences
          is plenty.
        </p>
      </div>

      <DemoDataNotice className="mt-8 max-w-2xl">
        In this prototype, submissions are not sent anywhere or published automatically — this
        form demonstrates the intended flow.
      </DemoDataNotice>

      <form onSubmit={handleSubmit} className="card mt-8 max-w-2xl space-y-5 p-6 sm:p-8">
        <Field label="Category">
          <select className="select-field" value={category} onChange={(e) => setCategory(e.target.value as StoryCategory)}>
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {storyCategoryLabels[c]}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Give your story a short title">
          <input required className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. I don't drive, so neither does my dog" />
        </Field>
        <Field label="Your story">
          <textarea
            required
            className="input-field min-h-32"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tell us what happened, what you needed, and what would have made it easier..."
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name (or how you'd like to be credited)">
            <input className="input-field" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Jamie, or 'Anonymous'" />
          </Field>
          <Field label="Location">
            <input className="input-field" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Brisbane, QLD" />
          </Field>
        </div>
        <label className="flex items-start gap-3 text-sm text-ink-900/70">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 rounded border-ink-950/30 accent-brand-600 text-brand-600 focus:ring-brand-500"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I consent to Pet Travel Australia reviewing and potentially publishing this story,
            with the attribution above, as part of its advocacy and evidence work.
          </span>
        </label>
        <button type="submit" disabled={!consent} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50">
          <Send className="h-4 w-4" />
          Submit my story
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink-900/70">{label}</span>
      {children}
    </label>
  );
}
