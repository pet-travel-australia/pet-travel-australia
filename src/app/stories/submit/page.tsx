import type { Metadata } from "next";
import { SubmitStoryClient } from "./submit-story-client";

export const metadata: Metadata = {
  title: "Share Your Story",
  description: "Tell us what pet transport access means for you.",
};

export default function SubmitStoryPage() {
  return <SubmitStoryClient />;
}
