import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { PageHero, CtaBand } from "@/components/ui";
import JointIllustration from "@/components/JointIllustration";
import Reveal from "@/components/Reveal";
import { posts } from "@/content/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shoulder & Elbow Advice Blog",
  description: "Specialist advice on shoulder pain, frozen shoulder, tennis elbow, rotator cuff recovery and more — written by a consultant shoulder & elbow surgeon.",
  path: "/blog",
});

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Blog", path: "/blog" }]} eyebrow="Patient guides" title="Advice from the clinic" lead={<p>Practical, evidence-based guidance on shoulder and elbow problems.</p>} />
      <section className="container-x grid gap-6 py-16 md:grid-cols-2">
        {posts.map((p, k) => (
          <Reveal key={p.slug} delay={(k % 2) * 0.06}>
            <Link href={`/blog/${p.slug}`} className="card card-hover group grid h-full overflow-hidden sm:grid-cols-[200px_1fr]">
              <div className="relative min-h-48 overflow-hidden bg-navy-800">
                <div className="absolute inset-0 grid-bg-dark opacity-60" />
                <JointIllustration region={p.tag === "Elbow" ? "elbow" : "shoulder"} dark className="absolute -bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 transition duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-royal-600">{p.tag}</span>
                <h2 className="mt-2 font-display text-xl font-bold leading-snug group-hover:text-royal-600">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
                <p className="mt-4 flex gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1"><Calendar className="size-3.5" />{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="size-3.5" />{p.readMins} min</span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
