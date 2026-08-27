import type { Metadata } from "next";
import { JourneyCheckerClient } from "./journey-checker-client";

export const metadata: Metadata = {
  title: "Journey Checker",
  description:
    "Search any Australian route by transport mode, pet type and weight to see what's permitted, restricted or unavailable.",
};

export default function JourneyCheckerPage() {
  return <JourneyCheckerClient />;
}
