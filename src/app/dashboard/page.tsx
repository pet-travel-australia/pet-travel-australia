import type { Metadata } from "next";
import { DashboardClient } from "./dashboard-client";

export const metadata: Metadata = {
  title: "Demand Dashboard",
  description: "Aggregate view of registered pet-travel demand across Australia — routes, states, weight bands and willingness to pay.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
