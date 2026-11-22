import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, GraduationCap, Hospital, ShieldCheck, Stethoscope } from "lucide-react";
import { PageHero, CtaBand, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { site, clinics } from "@/lib/site";
import { pageMeta, abs } from "@/lib/seo";

export const metadata = pageMeta({
  title: `About ${site.consultant.name} — Consultant Shoulder & Elbow Surgeon`,
  description: `Meet ${site.consultant.name}, ${site.consultant.title} seeing private patients in Leicester, Nuneaton & Warwickshire. Training, memberships and approach to care.`,
  path: "/about",
});

export default function Page() {
  const c = site.consultant;
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", url: abs("/about"), mainEntity: { "@id": `${abs("/")}/#physician` } }} />
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="Your consultant"
        title={<>{c.name}<span className="mt-2 block text-2xl font-semibold text-royal-600 sm:text-3xl">{c.postNominals}</span></>}
        lead={<p>{c.title}. Fellowship-trained in shoulder and elbow surgery and dedicated exclusively to the upper limb.</p>}
        aside={
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-royal-600 to-sky-500" />
            <Image src={c.photo} alt={`${c.name}, ${c.title}`} width={600} height={750} priority className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-lift" />
          </div>
        }
      >
        <Link href="/contact" className="btn-primary">Book a consultation</Link>
      </PageHero>

      <section className="container-x grid gap-12 section lg:grid-cols-[1.4fr_1fr]">
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-800 prose-p:text-muted">
          {/* ⚠️ TODO: replace with the consultant's own biography (training, fellowships, NHS post, research, interests). */}
          <h2>About {c.name}</h2>
          <p>
            {c.name} is a {c.title} who specialises exclusively in conditions of the shoulder and elbow. After higher surgical training in trauma and orthopaedics, they completed sub-specialist fellowship training in shoulder and elbow surgery, developing expertise in arthroscopic (keyhole) surgery, joint replacement and sports injuries.
          </p>
          <p>
            Alongside private practice in Leicester, Nuneaton and Warwickshire, {c.name} holds an NHS appointment ({c.nhsRole}), teaches surgical trainees and contributes to research into upper-limb conditions.
          </p>
          <h3>Approach to care</h3>
          <p>
            Every patient deserves a clear explanation of what is wrong and honest advice about all of the options — including when surgery is <em>not</em> the best choice. Treatment plans are shared in writing, coordinated with your GP and physiotherapist, and you'll see the same consultant at every stage.
          </p>
          <h3>Clinical interests</h3>
          <ul>
            <li>Arthroscopic rotator cuff repair and subacromial surgery</li>
            <li>Frozen shoulder — hydrodilatation and capsular release</li>
            <li>Shoulder instability and sports injuries</li>
            <li>Anatomic and reverse shoulder replacement</li>
            <li>Tennis elbow, biceps rupture and nerve compression</li>
          </ul>
        </div>
        <aside className="space-y-5">
          {[
            { i: ShieldCheck, k: "GMC registration", v: c.gmcNumber },
            { i: GraduationCap, k: "Qualifications", v: c.postNominals },
            { i: Hospital, k: "NHS appointment", v: c.nhsRole },
            { i: Stethoscope, k: "Private clinics", v: clinics.map((x) => x.town).join(" · ") },
          ].map(({ i: Icon, k, v }) => (
            <Reveal key={k} className="card flex gap-4 p-5">
              <Icon className="size-6 shrink-0 text-royal-600" />
              <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted">{k}</span><span className="font-semibold text-navy-800">{v}</span></span>
            </Reveal>
          ))}
          <Reveal className="card p-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted"><Award className="size-4" /> Memberships</p>
            <ul className="mt-3 space-y-2 text-sm font-medium text-navy-800">{c.memberships.map((m) => <li key={m}>{m}</li>)}</ul>
          </Reveal>
          <Reveal className="card p-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted"><BookOpen className="size-4" /> Verify</p>
            <p className="mt-2 text-sm text-muted">You can check any doctor's registration on the <a className="font-semibold text-royal-600 underline" href="https://www.gmc-uk.org/registration-and-licensing/the-medical-register" target="_blank" rel="noopener">GMC medical register</a>.</p>
          </Reveal>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
