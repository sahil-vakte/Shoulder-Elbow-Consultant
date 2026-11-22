import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Microscope, Activity, Syringe, Bone, HeartPulse, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import RegionMap from "./RegionMap";
import { site, clinics } from "@/lib/site";
import { locations } from "@/content/locations";

export function InsurerMarquee() {
  const list = ["Understand your symptoms", "Explore your options", "Plan your next step"];
  return (
    <section aria-label="Insurers and payment options" className="border-y border-ice-200 bg-white py-5">
      <div className="container-x flex flex-col items-center gap-4 md:flex-row">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted">Care, with clarity</p>
        <div className="mask-fade-x relative w-full overflow-hidden">
          <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {list.map((n, i) => (
              <li key={i} className="whitespace-nowrap font-display text-base font-semibold text-navy-800">{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ServicesBento() {
  const items = [
    { i: Microscope, t: "Accurate diagnosis", d: "Detailed examination with X-ray, ultrasound, MRI or CT arranged promptly — so treatment is targeted, not trial and error.", href: "/patient-information", span: "md:col-span-2" },
    { i: Syringe, t: "Guided injections", d: "Ultrasound-guided steroid, hydrodilatation, barbotage and PRP.", href: "/treatments/image-guided-injections" },
    { i: Activity, t: "Keyhole surgery", d: "Arthroscopic repair, decompression, stabilisation and release — usually as a day case.", href: "/treatments/shoulder-arthroscopy" },
    { i: Bone, t: "Joint replacement", d: "Anatomic and reverse shoulder replacement and elbow replacement with 3D planning.", href: "/treatments/shoulder-replacement" },
    { i: HeartPulse, t: "Rehabilitation", d: "Coordinated physiotherapy with specialist upper-limb physios close to home, plus clear recovery milestones.", href: "/patient-information" },
  ];
  return (
    <section className="container-x section">
      <SectionHead eyebrow="How we help" title={<>Complete care — from first consultation to <span className="text-gradient">full recovery</span></>} lead="Most shoulder and elbow problems get better without surgery. When an operation is the right choice, you'll have it performed by a specialist who does nothing but upper-limb surgery." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map(({ i: Icon, t, d, href, span }, k) => (
          <Reveal key={t} delay={k * 0.06} className={span}>
            <Link href={href} className="card card-hover group relative flex h-full flex-col overflow-hidden p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-gradient-to-br from-royal-200/60 to-silver-300/20 blur-2xl transition-all duration-700 group-hover:scale-125" />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-royal-600 text-white ring-2 ring-silver-300/50">
                <Icon className="size-6" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-semibold">{t}</h3>
              <p className="relative mt-2 flex-1 text-muted">{d}</p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal-600">Find out more <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ConsultantIntro() {
  const c = site.consultant;
  return (
    <section className="relative overflow-hidden bg-ice-50 section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md rounded-t-[6rem] rounded-b-xl bg-gradient-to-b from-navy-800 to-navy-900 px-10 py-16 text-white ring-1 ring-silver-300/40">
          <p className="text-sm uppercase tracking-widest text-sky-400">A personal approach</p>
          <p className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">Your questions.<br />Your priorities.<br /><span className="text-sky-400">Your plan.</span></p>
          <p className="mt-6 text-base leading-relaxed text-white/75">Space to talk about what matters to you, understand your options and make informed decisions about your care.</p>
        </Reveal>
        <div>
          <SectionHead eyebrow="Meet your consultant" title={<>Specialist shoulder &amp; elbow surgeon</>} />
          <Reveal delay={0.1}>
            <p className="lead mt-5">
              {c.name} is a {c.title.toLowerCase()} with fellowship training dedicated to the upper limb. Every patient is seen, treated and followed up by the consultant personally — with honest advice about whether surgery is genuinely the best option.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { i: GraduationCap, t: "Fellowship trained", d: "Sub-specialist shoulder & elbow training" },
                { i: Award, t: "Professional memberships", d: c.memberships[0] },
                { i: Microscope, t: "Evidence-based", d: "Treatment guided by current research" },
                { i: HeartPulse, t: "Personal care", d: "Same consultant from start to finish" },
              ].map(({ i: Icon, t, d }) => (
                <li key={t} className="flex gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <Icon className="size-5 shrink-0 text-royal-600" />
                  <span><span className="block text-sm font-semibold text-navy-800">{t}</span><span className="text-xs text-muted">{d}</span></span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-ghost mt-8">About {c.name} <ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  const steps = [
    { t: "Get in touch", d: "Call, email or book online. A GP letter helps but isn't essential if you're self-paying." },
    { t: "Consultation", d: "30-minute appointment with history, examination and review of any previous scans." },
    { t: "Diagnosis", d: "X-ray, ultrasound or MRI arranged promptly so we can confirm exactly what's wrong." },
    { t: "Treatment", d: "A personalised plan — exercises, injections or surgery — explained clearly and in writing." },
    { t: "Recovery", d: "Coordinated physiotherapy and follow-up until you're back to what you enjoy." },
  ];
  return (
    <section className="section bg-ice-50">
      <div className="container-x">
      <SectionHead center eyebrow="Your journey" title="What to expect, step by step" />
      <ol className="relative mt-10 grid gap-8 md:grid-cols-5">
        <div aria-hidden className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-royal-600 to-silver-300 md:left-0 md:top-6 md:h-px md:w-full md:bg-gradient-to-r" />
        {steps.map((s, k) => (
          <Reveal as="li" key={s.t} delay={k * 0.1} className="relative pl-16 md:pl-0 md:pt-16">
            <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full border-4 border-ice-50 bg-navy-800 font-display font-semibold text-white shadow-lift md:left-0">
              {k + 1}
            </span>
            <h3 className="font-display text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
          </Reveal>
        ))}
      </ol>
      </div>
    </section>
  );
}

export function LocationsBlock() {
  return (
    <section className="container-x section">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Local clinics" title={<>Convenient clinics across <span className="text-gradient">Leicestershire &amp; Warwickshire</span></>} lead="See a specialist close to home — with surgery at a local private hospital and follow-up by video where appropriate." />
          <ul className="mt-8 space-y-3">
            {locations.map((l, k) => {
              const c = clinics.find((x) => x.areaSlug === l.slug);
              return (
                <Reveal as="li" key={l.slug} delay={k * 0.08}>
                  <Link href={`/locations/${l.slug}`} className="card card-hover group flex items-center gap-5 p-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ice-100 text-royal-600 transition group-hover:bg-royal-600 group-hover:text-white"><MapPin className="size-5" /></span>
                    <span className="flex-1">
                      <span className="block font-display text-lg font-semibold">{l.name}</span>
                      <span className="text-sm text-muted">{l.towns.slice(1, 5).join(" · ")}</span>
                      {c && <span className="mt-0.5 block text-xs text-muted">{c.name}</span>}
                    </span>
                    <ArrowRight className="size-5 text-royal-600 transition group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
        <Reveal className="rounded-[2rem] border border-ice-200 bg-ice-50 p-4">
          <RegionMap className="h-auto w-full" />
        </Reveal>
      </div>
    </section>
  );
}
