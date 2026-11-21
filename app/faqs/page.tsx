import { PageHero, CtaBand, Faqs, JsonLd } from "@/components/ui";
import { generalFaqs } from "@/content/faqs";
import { pageMeta, faqSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description: "Answers to common questions about seeing a private shoulder and elbow specialist — referrals, appointments, insurance, self-pay, surgery and recovery.",
  path: "/faqs",
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs.flatMap((g) => g.items))} />
      <PageHero crumbs={[{ name: "FAQs", path: "/faqs" }]} eyebrow="Help centre" title="Frequently asked questions" />
      <section className="container-x max-w-4xl space-y-14 py-16">
        {generalFaqs.map((g) => (
          <div key={g.group}>
            <h2 className="h-section">{g.group}</h2>
            <div className="mt-6"><Faqs items={g.items} withSchema={false} /></div>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
