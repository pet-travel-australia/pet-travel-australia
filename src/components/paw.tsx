import { clsx } from "clsx";

/**
 * Pet Travel Australia's paw mark — the brand's small recurring signature.
 * Used sparingly: a mark beside a heading, a divider between sections, a
 * background watermark on colour blocks, or the "Paw Approved" stamp on
 * success states. Not a decorative flourish to scatter everywhere.
 */
export function Paw({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <ellipse cx="50" cy="66" rx="27" ry="21" />
      <ellipse cx="19" cy="40" rx="11.5" ry="14.5" transform="rotate(-24 19 40)" />
      <ellipse cx="40" cy="20" rx="10.5" ry="13.5" transform="rotate(-9 40 20)" />
      <ellipse cx="62" cy="20" rx="10.5" ry="13.5" transform="rotate(9 62 20)" />
      <ellipse cx="83" cy="40" rx="11.5" ry="14.5" transform="rotate(24 83 40)" />
    </svg>
  );
}

/** A short row of fading paw prints, used as a quiet section separator. */
export function PawDivider({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center justify-center gap-3", className)} aria-hidden>
      <Paw size={10} className="text-current opacity-30" />
      <Paw size={14} className="text-current opacity-55" />
      <Paw size={10} className="text-current opacity-30" />
    </div>
  );
}

/**
 * A loose scatter of oversized, low-opacity paws for colour-block section
 * backgrounds. Absolutely positioned — the parent needs `relative` and
 * `overflow-hidden`.
 */
export function PawWatermark({ className }: { className?: string }) {
  return (
    <div className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <Paw size={160} className="absolute -left-10 -top-10 rotate-[-18deg] text-white/[0.07]" />
      <Paw size={220} className="absolute -bottom-16 -right-10 rotate-[14deg] text-white/[0.06]" />
      <Paw size={90} className="absolute bottom-8 left-1/3 rotate-[8deg] text-white/[0.05]" />
    </div>
  );
}

/** A rubber-stamp style "Paw Approved" mark for confirmation/success states. */
export function PawStamp({ label = "Paw Approved", className }: { label?: string; className?: string }) {
  return (
    <div
      className={clsx(
        "inline-flex -rotate-3 items-center gap-2 rounded-full border-[3px] border-jade-600 px-5 py-2 text-jade-700",
        className
      )}
    >
      <Paw size={22} />
      <span className="font-display text-sm font-extrabold uppercase tracking-[0.12em]">{label}</span>
    </div>
  );
}
