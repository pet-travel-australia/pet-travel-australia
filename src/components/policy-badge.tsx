import { PolicyStatus } from "@/data/types";
import { clsx } from "clsx";

const config: Record<PolicyStatus, { label: string; className: string }> = {
  verified: { label: "Verified current rule", className: "badge-verified" },
  proposal: { label: "Proposal / campaign position", className: "badge-proposal" },
  international: { label: "International example", className: "badge-international" },
};

export function PolicyBadge({ status, className }: { status: PolicyStatus; className?: string }) {
  const c = config[status];
  return <span className={clsx("badge", c.className, className)}>{c.label}</span>;
}

const permissionConfig: Record<string, { label: string; className: string }> = {
  yes: { label: "Pet permitted", className: "bg-brand-100 text-brand-800" },
  restricted: { label: "Restricted", className: "bg-ochre-100 text-ochre-700" },
  no: { label: "Not permitted", className: "bg-clay-500/10 text-clay-600" },
};

export function PermissionBadge({ value, className }: { value: string; className?: string }) {
  const c = permissionConfig[value] ?? permissionConfig.restricted;
  return <span className={clsx("badge", c.className, className)}>{c.label}</span>;
}
