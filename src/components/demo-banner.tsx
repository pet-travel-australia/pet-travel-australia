import { FlaskConical } from "lucide-react";
import { clsx } from "clsx";

export function DemoDataNotice({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        "flex items-start gap-3 rounded-xl border border-ochre-300/60 bg-ochre-50 px-4 py-3 text-sm text-ochre-700",
        className
      )}
      role="note"
    >
      <FlaskConical className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}
