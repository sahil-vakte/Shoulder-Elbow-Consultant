import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarCheck, Clock, Hospital, Syringe, Bandage, AlertCircle } from "lucide-react";
import { treatments, treatmentBySlug } from "@/content/treatments";
import { conditionBySlug } from "@/content/conditions";
import { PageHero, Faqs, CtaBand, JsonLd, MedicalDisclaimer } from "@/components/ui";
import { ConditionCard, TreatmentCard } from "@/components/cards";
import JointIllustration from "@/components/JointIllustration";
import Reveal from "@/components/Reveal";
import { pageMeta, medicalWebPage, abs } from "@/lib/seo";
import { CONTENT_REVIEWED } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const t = treatmentBySlug((await params).slug);
  if (!t) return {};
  return pageMeta({ title: t.metaTitle, description: t.metaDescription, path: `/treatments/${t.slug}` });
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = treatmentBySlug((await params).slug);
  if (!t) notFound();
  const conds = t.conditions.map(conditionBySlug).filter(Boolean);
  const region = t.region === "elbow" ? "elbow" : "shoulder";
  const others = treatments.filter((x) => x.slug !== t.slug && (x.region === t.region || x.region === "both")).slice(0, 3);
  const schema = medicalWebPage({
    path: `/treatments/${t.slug}`,
    name: t.metaTitle,
    description: t.metaDescription,
    about: {
      "@type": t.category === "Non-surgical" ? "TherapeuticProcedure" : "SurgicalProcedure",
      name: t.name,
      bodyLocation: t.region === "both" ? "Shoulder and elbow" : t.region === "shoulder" ? "Shoulder" : "Elbow",
      howPerformed: t.steps.join(". "),
      preparation: "Pre-operative assessment and consultation with your surgeon and anaesthetist",
      followup: t.timeline.map((x) => `${x.when}: ${x.what}`).join(". "),
      indication: conds.map((c) => ({ "@type": "MedicalIndication", name: c!.name, url: abs(`/conditions/${c!.slug}`) })),
    },
  });
  const facts = [
    { i: Syringe, k: "Anaesthetic", v: t.facts.anaesthetic },
    { i: Clock, k: "Duration", v: t.facts.duration },
    { i: Hospital, k: "Hospital stay", v: t.facts.stay },
    { i: Bandage, k: "Sling", v: t.facts.sling },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Treatments", path: "/treatments" }, { name: t.name, path: `/treatments/${t.slug}` }]}
        eyebrow={t.category}
        title={t.name}
        lead={<p>{t.short} Performed by a specialist shoulder &amp; elbow consultant for patients across Leicester, Nuneaton and Warwickshire.</p>}
        aside={
          <div className="grid grid-cols-2 gap-3">
            {facts.map(({ i: Icon, k, v }) => (
              <div key={k} className="glass rounded-3xl p-5 shadow-soft">
                <Icon className="size-5 text-royal-600" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted">{k}</p>
                <p className="mt-1 font-display font-semibold text-navy-800">{v}</p>
              </div>
            ))}
          </div>
        }
      >
        <Link href="/contact" className="btn-primary"><CalendarCheck className="size-4" /> Discuss this treatment</Link>
      </PageHero>

      <section className="container-x grid gap-12 section lg:grid-cols-[1fr_380px]">
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-800 prose-p:text-muted">
          <h2>What is {t.name.toLowerCase().replace(/ \(.*\)/, "")}?</h2>
          {t.overview.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <h2>Who is it suitable for?</h2>
          <ul>{t.suitableFor.map((s) => <li key={s}>{s}</li>)}</ul>
          <h2>What happens during the procedure</h2>
          <ol>{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        </article>
        <aside className="relative overflow-hidden rounded-[2.5rem] bg-navy-800 p-6 lg:sticky lg:top-32 lg:self-start">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-70" />
          <JointIllustration region={region} dark className="relative w-full" />
        </aside>
      </section>

      <section className="bg-navy-900 section text-white">
        <div className="container-x">
          <p className="eyebrow eyebrow-dark">Recovery timeline</p>
          <h2 className="h-section mt-4 !text-white">What recovery looks like</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-4">
            {t.timeline.map((s, k) => (
              <Reveal as="li" key={s.when} delay={k * 0.08} className="glass-dark relative rounded-3xl p-6">
                <span className="font-display text-sm font-semibold text-sky-400">{s.when}</span>
                <p className="mt-3 text-white/80">{s.what}</p>
                <span className="absolute right-5 top-5 font-display text-4xl font-semibold text-white/10">{String(k + 1).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 text-sm text-white/50">Timelines are typical and vary between individuals. Your consultant will give you a personalised plan.</p>
        </div>
      </section>

      <section className="container-x grid gap-12 section lg:grid-cols-2">
        <div>
          <h2 className="h-section">Risks &amp; complications</h2>
          <p className="lead mt-4">All procedures carry some risk. These will be discussed with you in detail so you can make an informed decision.</p>
          <ul className="mt-6 space-y-3">
            {t.risks.map((r) => <li key={r} className="flex gap-3 rounded-2xl bg-ice-50 p-4 text-navy-800"><AlertCircle className="mt-0.5 size-5 shrink-0 text-royal-600" />{r}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="h-section">Frequently asked questions</h2>
          <div className="mt-6"><Faqs items={t.faqs} /></div>
          <MedicalDisclaimer reviewed={CONTENT_REVIEWED} />
        </div>
      </section>

      {conds.length > 0 && (
        <section className="bg-ice-50 section">
          <div className="container-x">
            <h2 className="h-section">Conditions treated with {t.name.toLowerCase()}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{conds.slice(0, 6).map((c) => <ConditionCard key={c!.slug} c={c!} />)}</div>
          </div>
        </section>
      )}
      <section className="container-x section">
        <h2 className="h-section">Related treatments</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{others.map((o) => <TreatmentCard key={o.slug} t={o} />)}</div>
      </section>
      <CtaBand title={`Is ${t.name.toLowerCase()} right for you?`} />
    </>
  );
}
