import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { conditions, conditionBySlug } from "@/content/conditions";
import { treatmentBySlug } from "@/content/treatments";
import { locations } from "@/content/locations";
import { PageHero, Faqs, CtaBand, JsonLd, MedicalDisclaimer } from "@/components/ui";
import { TreatmentCard, ConditionCard } from "@/components/cards";
import { Toc } from "@/components/interactive";
import JointIllustration from "@/components/JointIllustration";
import Reveal from "@/components/Reveal";
import { pageMeta, medicalWebPage, abs } from "@/lib/seo";
import { site, CONTENT_REVIEWED } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = conditionBySlug((await params).slug);
  if (!c) return {};
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/conditions/${c.slug}` });
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = conditionBySlug((await params).slug);
  if (!c) notFound();
  const tx = c.treatments.map(treatmentBySlug).filter(Boolean);
  const related = conditions.filter((x) => x.region === c.region && x.slug !== c.slug).slice(0, 3);
  const regionPath = `/${c.region}`;
  const toc = [
    { id: "overview", label: "Overview" },
    { id: "symptoms", label: "Symptoms" },
    { id: "causes", label: "Causes" },
    { id: "diagnosis", label: "Diagnosis" },
    { id: "treatment", label: "Treatment options" },
    { id: "recovery", label: "Recovery" },
    { id: "when-to-see", label: "When to see a specialist" },
    { id: "faqs", label: "FAQs" },
  ];

  const schema = medicalWebPage({
    path: `/conditions/${c.slug}`,
    name: c.metaTitle,
    description: c.metaDescription,
    about: {
      "@type": "MedicalCondition",
      name: c.name,
      alternateName: c.aka,
      associatedAnatomy: { "@type": "AnatomicalStructure", name: c.region === "shoulder" ? "Shoulder joint" : "Elbow joint" },
      signOrSymptom: c.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
      possibleTreatment: tx.map((t) => ({ "@type": "MedicalProcedure", name: t!.name, url: abs(`/treatments/${t!.slug}`) })),
    },
  });

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: c.region === "shoulder" ? "Shoulder" : "Elbow", path: regionPath }, { name: c.name, path: `/conditions/${c.slug}` }]}
        eyebrow={`${c.region} condition${c.aka ? ` · ${c.aka}` : ""}`}
        title={c.name}
        lead={<p>{c.short} Specialist assessment and treatment in Leicester, Nuneaton &amp; Hinckley and Warwickshire.</p>}
        aside={
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] bg-navy-800 p-6 shadow-lift">
            <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-70" />
            <JointIllustration region={c.region} spot={c.spot} dark className="relative h-auto w-full" title={`Illustration of the ${c.region} showing the area affected by ${c.name}`} />
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary"><CalendarCheck className="size-4" /> Book a consultation</Link>
          <a href={site.contact.phoneHref} className="btn-ghost"><Phone className="size-4" /> {site.contact.phone}</a>
        </div>
      </PageHero>

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[220px_1fr_300px]">
        <aside className="hidden lg:block"><div className="sticky top-32"><Toc items={toc} /></div></aside>

        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-800 prose-a:text-royal-600 prose-li:my-1 prose-p:text-muted">
          <section id="overview">
            <h2>What is {c.name.toLowerCase()}?</h2>
            {c.overview.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </section>
          <section id="symptoms">
            <h2>Symptoms of {c.name.toLowerCase()}</h2>
            <ul className="tick-list not-prose mt-6 grid gap-3 sm:grid-cols-2">
              {c.symptoms.map((s) => <li key={s} className="rounded-2xl bg-ice-50 py-3 pr-4 text-[15px] text-navy-800 [&]:pl-12 before:!left-4 before:!top-3.5">{s}</li>)}
            </ul>
          </section>
          <section id="causes">
            <h2>Causes and risk factors</h2>
            <ul>{c.causes.map((s) => <li key={s}>{s}</li>)}</ul>
          </section>
          <section id="diagnosis">
            <h2>How {c.name.toLowerCase()} is diagnosed</h2>
            <ol>{c.diagnosis.map((s) => <li key={s}>{s}</li>)}</ol>
          </section>
          <section id="treatment">
            <h2>Treatment options</h2>
            <div className="not-prose mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-ice-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-aqua-500">Non-surgical</p>
                <ul className="tick-list mt-4 space-y-3 text-[15px] text-navy-800">{c.nonSurgical.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div className="rounded-3xl bg-navy-800 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-aqua-400">Surgical</p>
                <ul className="mt-4 space-y-3 text-[15px]">{c.surgical.map((s) => <li key={s} className="flex gap-3"><ArrowRight className="mt-1 size-4 shrink-0 text-aqua-400" />{s}</li>)}</ul>
              </div>
            </div>
          </section>
          <section id="recovery">
            <h2>Recovery</h2>
            <p>{c.recovery}</p>
          </section>
          <section id="when-to-see">
            <h2>When to see a {c.region} specialist</h2>
            <div className="not-prose rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <p className="flex items-center gap-2 font-semibold text-amber-900"><AlertTriangle className="size-5" /> Book an assessment if:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-amber-900/90">{c.seekHelp.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </section>
          <section id="faqs" className="not-prose mt-14">
            <h2 className="font-display text-3xl font-bold">{c.name}: frequently asked questions</h2>
            <div className="mt-6"><Faqs items={c.faqs} /></div>
          </section>
          <div className="not-prose"><MedicalDisclaimer reviewed={CONTENT_REVIEWED} /></div>
        </article>

        <aside>
          <div className="sticky top-32 space-y-5">
            <div className="rounded-3xl bg-gradient-to-br from-royal-600 to-navy-800 p-6 text-white shadow-lift">
              <p className="font-display text-xl font-bold">Seen within days, not months</p>
              <p className="mt-2 text-sm text-white/75">Private consultation for {c.name.toLowerCase()} in Leicester, Nuneaton or Warwickshire.</p>
              <Link href="/contact" className="btn-light mt-5 w-full">Book now</Link>
              <a href={site.contact.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white/90"><Phone className="size-4" />{site.contact.phone}</a>
            </div>
            <div className="rounded-3xl border border-ice-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Clinics near you</p>
              <ul className="mt-3 space-y-2 text-sm">
                {locations.map((l) => <li key={l.slug}><Link className="font-semibold text-royal-600 hover:underline" href={`/locations/${l.slug}`}>{c.name} — {l.name}</Link></li>)}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {tx.length > 0 && (
        <section className="bg-ice-50 py-20">
          <div className="container-x">
            <h2 className="h-section">Treatments for {c.name.toLowerCase()}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tx.map((t, k) => <Reveal key={t!.slug} delay={k * 0.05}><TreatmentCard t={t!} /></Reveal>)}
            </div>
          </div>
        </section>
      )}

      <section className="container-x py-20">
        <h2 className="h-section">Related {c.region} conditions</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => <ConditionCard key={r.slug} c={r} />)}
        </div>
      </section>
      <CtaBand title={`Get expert help for ${c.name.toLowerCase()}`} />
    </>
  );
}
