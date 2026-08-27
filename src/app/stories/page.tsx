import type { Metadata } from "next";
import { StoriesClient } from "./stories-client";

export const metadata: Metadata = {
  title: "Stories",
  description: "Real situations pet owners face when transport doesn't account for travelling with a pet.",
};

export default function StoriesPage() {
  return <StoriesClient />;
}
