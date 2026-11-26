import { createHmac } from "node:crypto";

/**
 * Sends a lead to the Avrix CRM hub (avrix-marketing → /api/intake/leads).
 * Set AVRIX_CRM_URL, AVRIX_CRM_KEY and AVRIX_CRM_SECRET (from Admin → Applications in the CRM).
 * Returns null when the CRM is not configured.
 */
export type CrmLead = {
  externalId: string;
  name?: string; email?: string; phone?: string; businessName?: string;
  service?: string; message?: string; stage?: string; source?: string; priority?: "low" | "normal" | "high";
  customFields?: Record<string, unknown>; attachments?: { name: string; size?: number; type?: string }[];
  consent?: { marketing?: boolean; text?: string };
};

export function crmConfigured() {
  return !!(process.env.AVRIX_CRM_URL && process.env.AVRIX_CRM_KEY && process.env.AVRIX_CRM_SECRET);
}

export async function sendToCrm(lead: CrmLead) {
  if (!crmConfigured()) return null;
  const body = JSON.stringify(lead);
  const ts = Math.floor(Date.now() / 1000).toString();
  const sig = createHmac("sha256", process.env.AVRIX_CRM_SECRET!).update(`${ts}.${body}`).digest("hex");
  const res = await fetch(`${process.env.AVRIX_CRM_URL!.replace(/\/$/, "")}/api/intake/leads`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.AVRIX_CRM_KEY}`,
      "x-avrix-timestamp": ts,
      "x-avrix-signature": `sha256=${sig}`,
      "idempotency-key": lead.externalId,
    },
    body,
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`CRM responded ${res.status}`);
  return (await res.json()) as { leadId: string; outcome: string };
}
