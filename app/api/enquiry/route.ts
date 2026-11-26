import { NextResponse } from "next/server";
import { crmConfigured, sendToCrm } from "@/lib/avrix-crm";

/**
 * Enquiry endpoint.
 * - Validates input and drops spam (honeypot).
 * - If AVRIX_CRM_URL / AVRIX_CRM_KEY / AVRIX_CRM_SECRET are set, the enquiry goes to the Avrix CRM hub.
 * - If RESEND_API_KEY is set, emails the enquiry to ENQUIRY_TO_EMAIL via Resend.
 * - If ENQUIRY_WEBHOOK_URL is set, forwards JSON to your booking app / CRM.
 * - Succeeds when at least one destination accepts it; returns an explicit unavailable response until one is configured.
 */
const clean = (v: unknown, max = 2000) => String(v ?? "").replace(/[<>]/g, "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (body.company) return NextResponse.json({ ok: true }); // honeypot hit

  const data = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    clinic: clean(body.clinic, 80),
    area: clean(body.area, 40),
    funding: clean(body.funding, 60),
    message: clean(body.message, 2000),
    consent: body.consent === "on",
    receivedAt: new Date().toISOString(),
  };

  if (!data.name || !data.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return NextResponse.json({ error: "Please provide your name, phone number and a valid email." }, { status: 422 });
  if (!data.consent) return NextResponse.json({ error: "Please confirm you agree to be contacted." }, { status: 422 });

  const reference = `SEUK-${Date.now().toString(36).toUpperCase()}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  const tasks: Promise<unknown>[] = [];
  if (crmConfigured()) {
    tasks.push(sendToCrm({
      externalId: reference, name: data.name, email: data.email, phone: data.phone,
      service: data.area ? `${data.area} enquiry` : "Enquiry", message: data.message || undefined, source: "website_form",
      customFields: { reference, clinic: data.clinic, area: data.area, funding: data.funding },
      consent: { marketing: false, text: "Agreed to be contacted about this enquiry" },
    }));
  }
  if (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) {
    const html = Object.entries({ reference, ...data })
      .map(([k, v]) => `<p><strong>${k}</strong>: ${String(v)}</p>`)
      .join("");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.ENQUIRY_FROM_EMAIL || "website@example.com",
          to: process.env.ENQUIRY_TO_EMAIL,
          reply_to: data.email,
          subject: `New website enquiry — ${data.area || "General"} — ${data.name}`,
          html,
        }),
      }),
    );
  }
  if (process.env.ENQUIRY_WEBHOOK_URL) {
    tasks.push(fetch(process.env.ENQUIRY_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ reference, ...data }) }));
  }
  if (!tasks.length) return NextResponse.json({ error: "Online enquiries are not available yet. Please try again later." }, { status: 503 });

  const results = await Promise.allSettled(tasks);
  const ok = (r: PromiseSettledResult<unknown>) => r.status === "fulfilled" && !(r.value instanceof Response && !r.value.ok);
  results.forEach((r, i) => { if (!ok(r)) console.error(`[enquiry] ${reference} destination ${i + 1} failed`); });
  if (!results.some(ok)) return NextResponse.json({ error: "We couldn't send your enquiry. Please call us instead." }, { status: 502 });

  return NextResponse.json({ ok: true });
}
