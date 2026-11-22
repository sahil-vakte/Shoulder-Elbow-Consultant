import Link from "next/link";
import { ClipboardList, Shirt, Pill, Car, BedDouble, Dumbbell } from "lucide-react";
import { PageHero, CtaBand, SectionHead } from "@/components/ui";
import { Journey } from "@/components/sections";
import Reveal from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Patient Information — Your Consultation, Surgery & Recovery",
  description: "What to expect at your shoulder or elbow consultation, how to prepare for surgery, and practical advice for recovery — sleeping, driving, work and physiotherapy.",
  path: "/patient-information",
});

const prep = [
  { i: ClipboardList, t: "Bring your paperwork", d: "Referral letter, insurer membership and authorisation numbers, medication list and any previous scan reports." },
  { i: Shirt, t: "Wear loose clothing", d: "A vest top or loose shirt allows both shoulders or elbows to be examined comfortably." },
  { i: Pill, t: "Medication", d: "Let us know about blood thinners, diabetes medication or allergies before any injection or surgery." },
  { i: Car, t: "Transport", d: "You won't be able to drive home after surgery or a nerve block — arrange a lift." },
  { i: BedDouble, t: "Sleeping after surgery", d: "Many people sleep more comfortably propped up with pillows, or in a recliner, for the first few weeks." },
  { i: Dumbbell, t: "Physiotherapy", d: "Rehabilitation is as important as the operation. Your exercises start early and are progressed by a specialist physio." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Patient information", path: "/patient-information" }]} eyebrow="Before & after" title="Patient information" lead={<p>Everything you need to know about your consultation, preparing for treatment, and getting the best result from your recovery.</p>} />
      <Journey />
      <section className="bg-ice-50 section">
        <div className="container-x">
          <SectionHead eyebrow="Preparing" title="Practical tips" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prep.map(({ i: Icon, t, d }, k) => (
              <Reveal key={t} delay={k * 0.05} className="card p-6">
                <Icon className="size-7 text-royal-600" />
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x section">
        <div className="prose prose-lg max-w-3xl prose-headings:font-display prose-headings:text-navy-800 prose-p:text-muted">
          <h2>After your operation</h2>
          <p>You'll receive written instructions tailored to your procedure, including sling use, wound care and an exercise sheet. Keep dressings dry until your wound check, usually at around 10–14 days.</p>
          <h3>When to seek advice</h3>
          <ul>
            <li>Increasing redness, swelling, discharge or a high temperature</li>
            <li>Pain that is getting worse rather than better</li>
            <li>New numbness, colour change or coldness in the hand</li>
            <li>Calf pain or breathlessness — seek urgent care</li>
          </ul>
          <p>Contact the secretary during working hours, or the hospital ward out of hours. In an emergency call 999.</p>
          <p>Read our guides to <Link href="/treatments">specific treatments</Link> for detailed recovery timelines, or our <Link href="/faqs">FAQs</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
