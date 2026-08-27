import type { Metadata } from "next";
import { EvidenceClient } from "./evidence-client";

export const metadata: Metadata = {
  title: "Evidence & Sources",
  description: "A structured evidence library distinguishing verified current rules, proposals and international examples.",
};

export default function EvidencePage() {
  return <EvidenceClient />;
}
