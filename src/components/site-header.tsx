"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, PawPrint } from "lucide-react";
import { clsx } from "clsx";

const primaryNav = [
  { href: "/journey-checker", label: "Journey Checker" },
  { href: "/pet-travel-index", label: "Pet Travel Index" },
  { href: "/policy-lab", label: "Policy Lab" },
  { href: "/commercial-case", label: "Commercial Case" },
  { href: "/evidence", label: "Evidence" },
  { href: "/dashboard", label: "Dashboard" },
];

const secondaryNav = [
  { href: "/take-action", label: "Take Action" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-950/[0.07] bg-paper-50/90 backdrop-blur">
      <div className="section flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950 text-brand-200">
            <PawPrint className="h-4.5 w-4.5" strokeWidth={2.25} aria-hidden />
          </span>
          <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink-950">
            Pet Travel <span className="text-brand-600">Australia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium text-ink-900/75 transition hover:text-ink-950",
                pathname === item.href && "text-ink-950 font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          {secondaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink-900/60 hover:text-ink-950">
              {item.label}
            </Link>
          ))}
          <Link href="/demand-register" className="btn-primary">
            Add your demand
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-950/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-ink-950/[0.07] bg-paper-50 lg:hidden">
          <nav className="section flex flex-col gap-1 py-4" aria-label="Mobile">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-lg px-3 py-2.5 text-sm font-medium text-ink-900/80 hover:bg-ink-950/5",
                  pathname === item.href && "bg-ink-950/5 font-semibold text-ink-950"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/demand-register" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Add your demand
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
