import { PageHero, CtaBand, SectionHead } from "@/components/ui";
import { TreatmentCard } from "@/components/cards";
import Reveal from "@/components/Reveal";
import { treatments } from "@/content/treatments";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shoulder & Elbow Treatments | Keyhole Surgery, Injections, Replacement",
  description: "Explore shoulder and elbow treatments — guided injections, arthroscopic (keyhole) surgery, rotator cuff repair, stabilisation and joint replacement — near Leicester.",
  path: "/treatments",
});

const groups = ["Non-surgical", "Keyhole surgery", "Reconstruction", "Nerve & tendon", "Joint replacement"] as const;

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Treatments", path: "/treatments" }]} eyebrow="Treatments" title="Shoulder & elbow treatments" lead={<p>Always starting with the least invasive option likely to work — from guided injections to day-case keyhole surgery and joint replacement.</p>} />
      {groups.map((g) => {
        const list = treatments.filter((t) => t.category === g);
        if (!list.length) return null;
        return (
          <section key={g} className="container-x section">
            <SectionHead title={g} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((t, k) => <Reveal key={t.slug} delay={k * 0.05}><TreatmentCard t={t} /></Reveal>)}
            </div>
          </section>
        );
      })}
      <CtaBand />
    </>
  );
}
