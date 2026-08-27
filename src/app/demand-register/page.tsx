import type { Metadata } from "next";
import { Suspense } from "react";
import { DemandRegisterClient } from "./demand-register-client";

export const metadata: Metadata = {
  title: "Demand Register",
  description:
    "Register your route, pet and willingness to pay to help build the evidence base for pet-inclusive transport in Australia.",
};

export default function DemandRegisterPage() {
  return (
    <Suspense fallback={null}>
      <DemandRegisterClient />
    </Suspense>
  );
}
