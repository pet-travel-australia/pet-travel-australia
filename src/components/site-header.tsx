"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Paw } from "@/components/paw";

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
      <div className="section flex min-h-16 items-center justify-between gap-4 py-2.5 sm:min-h-20">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-ochre text-white">
            <Paw size={20} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-tight text-ink-950">
              Pet Travel <span className="text-brand-600">Australia</span>
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.1em] text-ink-900/40 sm:block">
              A project by Pawblication House
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-semibold text-ink-900/70 transition hover:text-ink-950",
                pathname === item.href && "text-brand-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          {secondaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink-900/55 hover:text-ink-950">
              {item.label}
            </Link>
          ))}
          <Link href="/demand-register" className="btn-primary !px-5 !py-2.5">
            Add your demand
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-ink-950/10 lg:hidden"
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
                  "rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-900/80 hover:bg-ink-950/5",
                  pathname === item.href && "bg-brand-50 text-brand-700"
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
