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
  yes: { label: "Pet permitted", className: "bg-jade-600 text-white" },
  restricted: { label: "Restricted", className: "bg-ochre-500 text-white" },
  no: { label: "Not permitted", className: "bg-clay-500 text-white" },
};

export function PermissionBadge({ value, className }: { value: string; className?: string }) {
  const c = permissionConfig[value] ?? permissionConfig.restricted;
  return <span className={clsx("badge", c.className, className)}>{c.label}</span>;
}
