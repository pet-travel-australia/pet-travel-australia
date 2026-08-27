import { DemandSubmission } from "@/data/types";
import { seedDemandSubmissions } from "@/data/demand-seed";

/**
 * Storage abstraction for Demand Register submissions.
 *
 * This MVP persists submissions to the visitor's browser (localStorage) so
 * the Demand Register and Dashboard feel real without a backend. The
 * interface below is intentionally the only thing the rest of the app
 * depends on — swapping to Supabase later means writing one new class
 * (e.g. `SupabaseDemandStore`) that implements `DemandStore` and pointing
 * `getDemandStore()` at it. See README.md → "Connecting to Supabase".
 */
export interface DemandStore {
  list(): Promise<DemandSubmission[]>;
  add(submission: Omit<DemandSubmission, "id" | "createdAt">): Promise<DemandSubmission>;
}

const STORAGE_KEY = "pta_demand_submissions_v1";

function readLocal(): DemandSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DemandSubmission[]) : [];
  } catch {
    return [];
  }
}

function writeLocal(items: DemandSubmission[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

class LocalDemandStore implements DemandStore {
  async list(): Promise<DemandSubmission[]> {
    const local = readLocal();
    return [...seedDemandSubmissions, ...local].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async add(submission: Omit<DemandSubmission, "id" | "createdAt">): Promise<DemandSubmission> {
    const record: DemandSubmission = {
      ...submission,
      id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    const local = readLocal();
    const next = [record, ...local];
    writeLocal(next);
    return record;
  }
}

let storeInstance: DemandStore | null = null;

/**
 * Returns the active demand store. Replace the implementation returned
 * here with a Supabase-backed store when a backend is connected — no
 * calling code elsewhere needs to change.
 */
export function getDemandStore(): DemandStore {
  if (!storeInstance) {
    storeInstance = new LocalDemandStore();
  }
  return storeInstance;
}
