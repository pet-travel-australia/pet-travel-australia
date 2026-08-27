import { MetadataRoute } from "next";

const routes = [
  "",
  "/journey-checker",
  "/demand-register",
  "/dashboard",
  "/pet-travel-index",
  "/policy-lab",
  "/commercial-case",
  "/take-action",
  "/stories",
  "/stories/submit",
  "/evidence",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pettravel.org.au";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
