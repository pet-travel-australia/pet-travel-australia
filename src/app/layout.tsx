import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    "Pet Travel Australia is an independent civic-tech and consumer-data platform quantifying unmet demand for pet-inclusive transport and giving operators and governments evidence for practical, responsible change.",
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
    <html lang="en-AU" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
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
