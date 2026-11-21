import { NextResponse } from "next/server";

/**
 * Enquiry endpoint.
 * - Validates input and drops spam (honeypot).
 * - If RESEND_API_KEY is set, emails the enquiry to ENQUIRY_TO_EMAIL via Resend.
 * - If ENQUIRY_WEBHOOK_URL is set, forwards JSON to your booking app / CRM.
 * - Returns an explicit unavailable response until delivery is configured.
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

  const tasks: Promise<unknown>[] = [];
  if (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) {
    const html = Object.entries(data)
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
    tasks.push(fetch(process.env.ENQUIRY_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }));
  }
  if (!tasks.length) return NextResponse.json({ error: "Online enquiries are not available yet. Please try again later." }, { status: 503 });

  const results = await Promise.allSettled(tasks);
  if (results.some((r) => r.status === "rejected" || (r.status === "fulfilled" && r.value instanceof Response && !r.value.ok)))
    return NextResponse.json({ error: "We couldn't send your enquiry. Please call us instead." }, { status: 502 });

  return NextResponse.json({ ok: true });
}
