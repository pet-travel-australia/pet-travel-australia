import type { Metadata } from "next";
import { TakeActionClient } from "./take-action-client";

export const metadata: Metadata = {
  title: "Take Action",
  description: "Generate a concise, civil, evidence-based message to an airline, transport authority or elected representative.",
};

export default function TakeActionPage() {
  return <TakeActionClient />;
}
