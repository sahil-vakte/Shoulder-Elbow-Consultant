import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { PageHero, CtaBand, Faqs, SectionHead, JsonLd } from "./ui";
import { ConditionCard, TreatmentCard } from "./cards";
import JointIllustration from "./JointIllustration";
import Reveal from "./Reveal";
import { conditionsByRegion, type Region } from "@/content/conditions";
import { treatments } from "@/content/treatments";
import { abs } from "@/lib/seo";

const copy = {
  shoulder: {
    title: "Shoulder Specialist",
    lead: "The shoulder is the most mobile joint in the body — and one of the most commonly injured. Whether you have night pain, stiffness, weakness or a shoulder that keeps slipping out, our consultant-led clinics in Leicester, Nuneaton and Warwickshire provide a clear diagnosis and the full range of modern treatment.",
    intro: [
      "Shoulder pain affects around one in four adults at some point. The most common causes are problems with the rotator cuff tendons, frozen shoulder, arthritis and instability after a dislocation. Many respond well to physiotherapy and guided injections; others benefit from keyhole surgery or joint replacement.",
      "At your consultation we take time to understand how the problem affects your life, examine both shoulders carefully, and use X-ray and ultrasound to confirm what's going on — so your treatment is targeted from the start.",
    ],
    faqs: [
      { q: "When should I see a shoulder specialist?", a: "If shoulder pain lasts more than six weeks, disturbs your sleep, follows an injury, or you're losing strength or movement, a specialist assessment is worthwhile." },
      { q: "What is the most common cause of shoulder pain?", a: "Rotator cuff problems — from tendinopathy and bursitis through to tears — are the most common cause, followed by frozen shoulder and arthritis." },
      { q: "Can shoulder pain come from the neck?", a: "Yes. Neck problems can cause pain over the shoulder blade and down the arm, often with pins and needles. Part of the assessment is distinguishing neck from shoulder pain." },
    ],
  },
  elbow: {
    title: "Elbow Specialist",
    lead: "From tennis and golfer's elbow to biceps tendon ruptures, nerve compression and arthritis, elbow problems can make gripping, lifting and working difficult. We offer prompt, specialist assessment and treatment across Leicester, Nuneaton and Warwickshire.",
    intro: [
      "The elbow is a complex hinge-and-pivot joint that transfers load from the hand to the shoulder. Overuse tendon problems are by far the most common cause of elbow pain, but injuries, arthritis and nerve compression all require specialist care.",
      "Some elbow conditions — particularly a distal biceps rupture — are time-sensitive, so prompt assessment can make a real difference to your outcome.",
    ],
    faqs: [
      { q: "What causes pain on the outside of the elbow?", a: "Most commonly tennis elbow (lateral epicondylitis), an overload of the forearm tendons. Less commonly arthritis or nerve irritation." },
      { q: "Why are my little and ring fingers tingling?", a: "This is often due to compression of the ulnar nerve at the elbow (cubital tunnel syndrome), especially if worse when the elbow is bent." },
      { q: "I felt a pop at the front of my elbow — is it urgent?", a: "Yes — this can be a distal biceps rupture, which is best repaired within two to three weeks. Please contact us promptly." },
    ],
  },
};

export default function RegionHub({ region }: { region: Region }) {
  const c = copy[region];
  const list = conditionsByRegion(region);
  const tx = treatments.filter((t) => t.region === region || t.region === "both");
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${region} conditions`,
          itemListElement: list.map((x, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/conditions/${x.slug}`), name: x.name })),
        }}
      />
      <PageHero
        crumbs={[{ name: region === "shoulder" ? "Shoulder" : "Elbow", path: `/${region}` }]}
        eyebrow={`${region} conditions & treatment`}
        title={<>{c.title} in Leicester, Nuneaton &amp; Warwickshire</>}
        lead={<p>{c.lead}</p>}
        aside={
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] bg-navy-800 p-6 shadow-lift">
            <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-70" />
            <JointIllustration region={region} spot={region === "shoulder" ? "cuff" : "lateral"} dark className="relative w-full" />
          </div>
        }
      >
        <Link href="/contact" className="btn-primary"><CalendarCheck className="size-4" /> Book a {region} consultation</Link>
      </PageHero>

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {c.intro.map((p) => <Reveal key={p.slice(0, 20)}><p className="text-lg leading-relaxed text-muted">{p}</p></Reveal>)}
        </div>
      </section>

      <section className="container-x pb-20">
        <SectionHead eyebrow="Conditions" title={`${region === "shoulder" ? "Shoulder" : "Elbow"} conditions we treat`} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((x, k) => <Reveal key={x.slug} delay={(k % 3) * 0.05}><ConditionCard c={x} /></Reveal>)}
        </div>
      </section>

      <section className="bg-ice-50 py-20">
        <div className="container-x">
          <SectionHead eyebrow="Treatments" title={`${region === "shoulder" ? "Shoulder" : "Elbow"} treatments`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tx.map((t) => <TreatmentCard key={t.slug} t={t} />)}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow="FAQs" title={`${region === "shoulder" ? "Shoulder" : "Elbow"} pain questions`} />
        <Faqs items={c.faqs} />
      </section>
      <CtaBand />
    </>
  );
}
