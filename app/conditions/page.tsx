import { PageHero, CtaBand } from "@/components/ui";
import { ConditionsExplorer } from "@/components/interactive";
import { conditions } from "@/content/conditions";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shoulder & Elbow Conditions A–Z",
  description: "Consultant-written guides to shoulder and elbow conditions: symptoms, causes, diagnosis and treatment — rotator cuff, frozen shoulder, tennis elbow and more.",
  path: "/conditions",
});

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Conditions", path: "/conditions" }]} eyebrow="Conditions A–Z" title="Shoulder & elbow conditions" lead={<p>Search by symptom or browse {conditions.length} detailed, specialist-reviewed guides.</p>} />
      <section className="container-x py-16"><ConditionsExplorer items={conditions} /></section>
      <CtaBand />
    </>
  );
}
