"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { clinics } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export default function EnquiryForm({ compact }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("ok");
      form.reset();
      // GA4 conversion event (only fires if analytics consent was given)
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", { form: "enquiry" });
    } catch (err) {
      setStatus("error");
      setError((err as Error).message);
    }
  }

  if (status === "ok")
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="size-14 text-aqua-500" />
        <h3 className="mt-4 font-display text-2xl font-bold">Thank you — we've received your enquiry</h3>
        <p className="mt-2 max-w-md text-muted">The secretary will contact you within one working day to arrange your appointment.</p>
      </div>
    );

  const field = "w-full rounded-xl border border-ice-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal-400 focus:ring-4 focus:ring-royal-200/50";
  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8" noValidate={false}>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block text-sm font-medium text-navy-800">
          Full name *
          <input name="name" required autoComplete="name" className={`${field} mt-1.5`} />
        </label>
        <label className="block text-sm font-medium text-navy-800">
          Phone *
          <input name="phone" type="tel" required autoComplete="tel" className={`${field} mt-1.5`} />
        </label>
        <label className="block text-sm font-medium text-navy-800">
          Email *
          <input name="email" type="email" required autoComplete="email" className={`${field} mt-1.5`} />
        </label>
        <label className="block text-sm font-medium text-navy-800">
          Preferred clinic
          <select name="clinic" className={`${field} mt-1.5`} defaultValue="">
            <option value="">No preference</option>
            {clinics.map((c) => <option key={c.id} value={c.town}>{c.town}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium text-navy-800">
          Area of concern
          <select name="area" className={`${field} mt-1.5`} defaultValue="">
            <option value="">Select…</option>
            <option>Shoulder</option>
            <option>Elbow</option>
            <option>Both / not sure</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-navy-800">
          Funding
          <select name="funding" className={`${field} mt-1.5`} defaultValue="">
            <option value="">Select…</option>
            <option>Private medical insurance</option>
            <option>Self-pay</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-navy-800">
        Briefly describe your problem (please don't include detailed medical history)
        <textarea name="message" rows={4} className={`${field} mt-1.5 resize-y`} />
      </label>
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 size-4 accent-royal-600" />
        <span>I agree to be contacted about my enquiry and have read the <a href="/privacy" className="font-semibold text-royal-600 underline">privacy notice</a>. *</span>
      </label>
      {status === "error" && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
        {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Request an appointment
      </button>
      <p className="text-xs text-muted">For urgent medical problems please call NHS 111 or attend A&amp;E. This form is not monitored out of hours.</p>
    </form>
  );
}
