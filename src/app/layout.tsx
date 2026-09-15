import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://pettravel.org.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pet Travel Australia — Where can we go together?",
    template: "%s | Pet Travel Australia",
  },
  description:
    "See where pet-friendly travel exists in Australia, where it doesn't, and where demand is waiting. Journey Checker, Demand Register and Pet Travel Index — evidence for pet owners, operators and policymakers.",
  keywords: [
    "pet travel Australia",
    "pet friendly transport",
    "pet policy",
    "dogs on public transport",
    "airline pet policy Australia",
    "pet transport advocacy",
  ],
  openGraph: {
    title: "Pet Travel Australia — Where can we go together?",
    description:
      "Australia moves. Our pets should be able to move with us. Evidence, data and practical policy models for pet-inclusive transport.",
    url: siteUrl,
    siteName: "Pet Travel Australia",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Travel Australia",
    description: "Australia moves. Our pets should be able to move with us.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={manrope.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
