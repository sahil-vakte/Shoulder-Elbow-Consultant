import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { posts, postBySlug } from "@/content/blog";
import { conditionBySlug } from "@/content/conditions";
import { PageHero, CtaBand, JsonLd, MedicalDisclaimer } from "@/components/ui";
import { ConditionCard } from "@/components/cards";
import { ReadingProgress } from "@/components/interactive";
import { pageMeta, abs } from "@/lib/seo";
import { site, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return { ...pageMeta({ title: p.metaTitle, description: p.metaDescription, path: `/blog/${p.slug}`, type: "article" }), other: { "article:published_time": p.date } };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const related = p.related.map(conditionBySlug).filter(Boolean);
  return (
    <>
      <ReadingProgress />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.metaDescription,
        datePublished: p.date, dateModified: p.date, inLanguage: "en-GB", mainEntityOfPage: abs(`/blog/${p.slug}`),
        image: abs("/opengraph-image.jpg"),
        author: { "@type": "Person", name: site.consultant.name, url: abs("/about") },
        publisher: { "@id": `${SITE_URL}/#organization` },
      }} />
      <PageHero crumbs={[{ name: "Blog", path: "/blog" }, { name: p.title, path: `/blog/${p.slug}` }]} eyebrow={p.tag} title={p.title}
        lead={<p className="flex flex-wrap items-center gap-4 text-base"><span>By <Link href="/about" className="font-semibold text-royal-600">{site.consultant.name}</Link></span><span className="flex items-center gap-1"><Calendar className="size-4" />{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span><span className="flex items-center gap-1"><Clock className="size-4" />{p.readMins} min read</span></p>} />
      <article className="container-x max-w-3xl py-14">
        <p className="text-xl leading-relaxed text-navy-800">{p.excerpt}</p>
        <div className="prose prose-lg mt-8 max-w-none prose-headings:font-display prose-headings:text-navy-800 prose-p:text-muted">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((x) => <p key={x.slice(0, 20)}>{x}</p>)}
              {s.list && <ul>{s.list.map((x) => <li key={x}>{x}</li>)}</ul>}
            </section>
          ))}
        </div>
        <MedicalDisclaimer reviewed={p.date} />
      </article>
      {related.length > 0 && (
        <section className="bg-ice-50 py-16">
          <div className="container-x">
            <h2 className="h-section">Related conditions</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{related.map((c) => <ConditionCard key={c!.slug} c={c!} />)}</div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
