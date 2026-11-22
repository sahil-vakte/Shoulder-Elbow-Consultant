import Link from "next/link";
import { ArrowRight, ChevronRight, Phone, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted">
          {all.map((it, i) => (
            <li key={it.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5 opacity-50" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-navy-800">{it.name}</span>
              ) : (
                <Link href={it.path} className="hover:text-royal-600">{it.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="hero-to-white relative overflow-hidden bg-gradient-to-b from-ice-100 via-ice-50 to-white pb-10 pt-28 md:pb-12 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg mask-fade-b" />
      <div className="pointer-events-none absolute -right-32 -top-20 size-[480px] rounded-full bg-royal-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 size-[380px] rounded-full bg-silver-300/20 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
          <h1 className="h-display mt-4">{title}</h1>
          {lead && <div className="lead mt-6 max-w-2xl">{lead}</div>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, center, dark }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean; dark?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <h2 className={`h-section mt-4 ${dark ? "!text-white" : ""}`}>{title}</h2>
      {lead && <p className={`lead mt-4 ${dark ? "!text-white/70" : ""}`}>{lead}</p>}
    </Reveal>
  );
}

export function Faqs({ items, withSchema = true }: { items: { q: string; a: string }[]; withSchema?: boolean }) {
  return (
    <div className="faq space-y-3">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>
            {f.q}
            <span className="chev" aria-hidden><Plus className="size-4" /></span>
          </summary>
          <p className="answer">{f.a}</p>
        </details>
      ))}
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </div>
  );
}

export function CtaBand({ title = "Get a clear diagnosis and plan — without the wait", text }: { title?: string; text?: string }) {
  return (
    <section className="container-x section">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-8 py-12 text-white ring-1 ring-silver-300/30 sm:px-14 md:py-14">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-70" />
          <div className="pointer-events-none absolute -right-20 -top-24 size-[420px] rounded-full bg-royal-600/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-10 size-[320px] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-semibold !text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-white/75">
                {text ?? "Consultant appointments in Leicester, Nuneaton & Hinckley and Warwickshire. Self-pay or insured — no GP referral needed if you're self-funding."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-light">Book a consultation <ArrowRight className="size-4" /></Link>
              <a href={site.contact.phoneHref} className="btn-ghost-dark"><Phone className="size-4" /> {site.contact.phone}</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-ice-100 px-3 py-1 text-xs font-semibold text-royal-600">{children}</span>;
}

export function MedicalDisclaimer({ reviewed }: { reviewed: string }) {
  return (
    <aside className="mt-8 rounded-2xl border border-ice-200 bg-ice-50 p-5 text-sm text-muted">
      <p>
        <strong className="text-navy-800">Medically reviewed</strong> by {site.consultant.name}, {site.consultant.title} ·
        Last reviewed {new Date(reviewed).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.
      </p>
      <p className="mt-2">
        This information is for general education and does not replace a personal consultation. If you have sudden severe pain, a deformity after injury, numbness, fever or a hot red joint, seek urgent medical care (NHS 111 or A&amp;E).
      </p>
    </aside>
  );
}
