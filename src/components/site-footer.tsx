import Link from "next/link";
import { Paw, PawDivider } from "@/components/paw";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/journey-checker", label: "Journey Checker" },
      { href: "/demand-register", label: "Demand Register" },
      { href: "/dashboard", label: "Dashboard" },
      { href: "/pet-travel-index", label: "Pet Travel Index" },
    ],
  },
  {
    title: "Evidence & advocacy",
    links: [
      { href: "/policy-lab", label: "Policy Lab" },
      { href: "/commercial-case", label: "Commercial Case" },
      { href: "/evidence", label: "Evidence & Sources" },
      { href: "/take-action", label: "Take Action" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Pet Travel Australia" },
      { href: "/stories", label: "Stories" },
      { href: "/stories/submit", label: "Share your story" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-950/[0.08] bg-ink-950 text-paper-100">
      <div className="section grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-ochre text-white">
              <Paw size={18} />
            </span>
            <span className="font-display text-lg font-extrabold text-white">Pet Travel Australia</span>
          </Link>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-paper-100/40">
            A project by Pawblication House
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-100/60">
            We love pets. We also love evidence. Pet Travel Australia makes it easier to see where
            pet-friendly mobility exists — and where Australia still has work to do.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-paper-100/45">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper-100/75 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <PawDivider className="pb-8 text-brand-400" />

      <div className="border-t border-white/10">
        <div className="section flex flex-col gap-3 py-6 text-xs text-paper-100/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pet Travel Australia. Independent civic-tech project. Not affiliated with any government body or transport operator.</p>
          <p>Demonstration data is clearly labelled throughout this prototype. See our <Link href="/evidence" className="underline decoration-white/30 underline-offset-2 hover:text-white">Evidence &amp; Sources</Link> library.</p>
        </div>
      </div>
    </footer>
  );
}
