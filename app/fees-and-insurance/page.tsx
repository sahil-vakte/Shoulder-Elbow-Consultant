import Link from "next/link";
import { CheckCircle2, CreditCard, FileCheck2, ShieldCheck } from "lucide-react";
import { PageHero, CtaBand, Faqs, SectionHead } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { generalFaqs } from "@/content/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Fees & Insurance — Private Shoulder & Elbow Treatment",
  description: "Self-pay consultation fees, fixed-price surgery packages and private medical insurance (Bupa, AXA, Aviva, Vitality, WPA and more) for shoulder & elbow care.",
  path: "/fees-and-insurance",
});

// ⚠️ TODO: confirm all prices with the practice before launch (or remove the figures and keep "Price on request").
const fees = [
  { k: "New patient consultation", v: "£[000]", n: "Approx. 30 minutes" },
  { k: "Follow-up consultation", v: "£[000]", n: "Approx. 15 minutes" },
  { k: "Ultrasound-guided injection", v: "£[000]", n: "Excludes consultation" },
  { k: "Surgery packages", v: "Fixed price", n: "Surgeon, anaesthetist & hospital — quote on request" },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Fees & Insurance", path: "/fees-and-insurance" }]} eyebrow="Paying for treatment" title="Fees & insurance" lead={<p>Transparent pricing for self-funding patients, and straightforward claims if you have private medical insurance.</p>} />
      <section className="container-x grid gap-8 py-16 lg:grid-cols-2">
        <Reveal className="card p-8">
          <span className="grid size-12 place-items-center rounded-2xl bg-navy-800 text-white"><ShieldCheck className="size-6" /></span>
          <h2 className="mt-5 font-display text-2xl font-bold">Using private medical insurance</h2>
          <ol className="mt-5 space-y-4">
            {["Ask your GP or physiotherapist for a referral letter", "Call your insurer to confirm cover and obtain an authorisation (pre-auth) number", "Book your appointment and give us your membership and authorisation numbers", "We bill your insurer directly — you only pay any excess or shortfall"].map((s, i) => (
              <li key={s} className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-ice-100 font-display text-sm font-bold text-royal-600">{i + 1}</span><span className="text-muted">{s}</span></li>
            ))}
          </ol>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Insurers</p>
            <ul className="mt-3 flex flex-wrap gap-2">{site.insurers.filter((x) => x !== "Self-pay").map((n) => <li key={n} className="rounded-full bg-ice-50 px-3 py-1.5 text-sm font-medium text-navy-800">{n}</li>)}</ul>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="card p-8">
          <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-royal-600 to-aqua-500 text-white"><CreditCard className="size-6" /></span>
          <h2 className="mt-5 font-display text-2xl font-bold">Self-pay</h2>
          <p className="mt-3 text-muted">No referral needed. You'll receive a written, all-inclusive quote before any procedure, so there are no surprises.</p>
          <dl className="mt-6 divide-y divide-ice-200 rounded-2xl border border-ice-200">
            {fees.map((f) => (
              <div key={f.k} className="flex items-center justify-between gap-4 p-4">
                <dt><span className="block font-semibold text-navy-800">{f.k}</span><span className="text-xs text-muted">{f.n}</span></dt>
                <dd className="font-display text-lg font-bold text-royal-600">{f.v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li className="flex gap-2"><CheckCircle2 className="size-4 text-aqua-500" /> Fixed-price surgery packages</li>
            <li className="flex gap-2"><CheckCircle2 className="size-4 text-aqua-500" /> Scans and tests quoted in advance</li>
            <li className="flex gap-2"><FileCheck2 className="size-4 text-aqua-500" /> Finance options may be available via the hospital</li>
          </ul>
          <Link href="/contact" className="btn-primary mt-8">Request a quote</Link>
        </Reveal>
      </section>
      <section className="container-x grid gap-12 py-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow="FAQs" title="Fees & insurance questions" />
        <Faqs items={generalFaqs[1].items} />
      </section>
      <CtaBand />
    </>
  );
}
