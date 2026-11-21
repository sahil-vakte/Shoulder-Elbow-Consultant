import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import BodyMap from "@/components/BodyMap";
import Reveal from "@/components/Reveal";
import { InsurerMarquee, ServicesBento, ConsultantIntro, Journey, LocationsBlock } from "@/components/sections";
import { CtaBand, Faqs, SectionHead } from "@/components/ui";
import { ConditionCard, TreatmentCard } from "@/components/cards";
import JointIllustration from "@/components/JointIllustration";
import { conditions } from "@/content/conditions";
import { treatments } from "@/content/treatments";
import { posts } from "@/content/blog";
import { generalFaqs } from "@/content/faqs";
import { abs } from "@/lib/seo";

export const metadata = {
  alternates: { canonical: abs("/") },
};

const featured = ["rotator-cuff-tear", "frozen-shoulder", "shoulder-impingement", "tennis-elbow", "shoulder-dislocation-instability", "distal-biceps-rupture"];

export default function Home() {
  const homeFaqs = [...generalFaqs[0].items.slice(0, 3), generalFaqs[1].items[0], generalFaqs[2].items[0]];
  return (
    <>
      <Hero />
      <InsurerMarquee />
      <ServicesBento />

      {/* Interactive symptom map */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-0 size-[520px] rounded-full bg-royal-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full bg-aqua-500/20 blur-3xl" />
        <div className="container-x relative">
          <SectionHead dark eyebrow="Symptom navigator" title="Where does it hurt?" lead="Tap the area of your shoulder or elbow that's troubling you to see the conditions most likely to be responsible." />
          <div className="mt-14"><BodyMap /></div>
        </div>
      </section>

      {/* Conditions */}
      <section className="container-x py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Conditions we treat" title="Common shoulder & elbow problems" lead="Clear, consultant-written guides to symptoms, causes and every treatment option." />
          <Reveal className="flex gap-3">
            <Link href="/shoulder" className="btn-ghost">Shoulder</Link>
            <Link href="/elbow" className="btn-ghost">Elbow</Link>
            <Link href="/conditions" className="btn-primary">All conditions <ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, k) => {
            const c = conditions.find((x) => x.slug === s)!;
            return <Reveal key={s} delay={k * 0.05}><ConditionCard c={c} /></Reveal>;
          })}
        </div>
      </section>

      <ConsultantIntro />

      {/* Treatments */}
      <section className="container-x py-24">
        <SectionHead eyebrow="Treatments" title={<>Modern, <span className="text-gradient">minimally invasive</span> treatment</>} lead="From precisely guided injections to keyhole surgery and joint replacement — always starting with the least invasive option likely to work." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["image-guided-injections", "shoulder-arthroscopy", "rotator-cuff-repair", "capsular-release", "shoulder-replacement", "tennis-elbow-surgery"].map((s, k) => (
            <Reveal key={s} delay={k * 0.05}><TreatmentCard t={treatments.find((t) => t.slug === s)!} /></Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center"><Link href="/treatments" className="btn-ghost">View all {treatments.length} treatments <ArrowRight className="size-4" /></Link></Reveal>
      </section>

      <Journey />
      <LocationsBlock />

      {/* Articles */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionHead eyebrow="Patient guides" title="Advice from the clinic" />
          <Link href="/blog" className="hidden items-center gap-2 text-sm font-semibold text-royal-600 md:inline-flex">All articles <ArrowRight className="size-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p, k) => (
            <Reveal key={p.slug} delay={k * 0.06}>
              <Link href={`/blog/${p.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-navy-800">
                  <div className="absolute inset-0 grid-bg-dark opacity-60" />
                  <JointIllustration region={p.tag === "Elbow" ? "elbow" : "shoulder"} dark className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 opacity-90 transition duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-royal-600">{p.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug group-hover:text-royal-600">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
                  <p className="mt-4 flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1"><Calendar className="size-3.5" />{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3.5" />{p.readMins} min read</span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 py-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow="FAQs" title="Your questions, answered" lead={<>Can't find what you need? <Link href="/faqs" className="font-semibold text-royal-600">See all FAQs</Link> or call the secretary.</>} />
        <Reveal><Faqs items={homeFaqs} /></Reveal>
      </section>

      <CtaBand />
    </>
  );
}
