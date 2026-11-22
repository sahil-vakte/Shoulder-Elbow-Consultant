import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-editorial overflow-hidden bg-gradient-to-b from-ice-100 to-ice-50 pt-28 md:pt-40">
      <div className="container-x grid items-center gap-10 pb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-16">
        <div className="lg:py-6">
          <p className="eyebrow">Shoulder &amp; elbow care</p>
          <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.5rem,4.6vw,4.2rem)] font-semibold leading-[1.08] tracking-tight">
            Feel more like <span className="hero-emphasis">yourself again.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">When pain gets in the way of everyday life, understanding the cause is the first step. Personal shoulder and elbow care, with time to listen and a clear plan for what comes next.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary"><CalendarCheck className="size-4" /> Book a consultation</Link>
            <Link href="/conditions" className="btn-ghost">Explore your symptoms</Link>
          </div>
          <p className="mt-8 flex items-start gap-2 text-sm leading-relaxed text-muted"><MapPin className="mt-0.5 size-4 shrink-0 text-royal-600" /> Leicester · Nuneaton &amp; Hinckley · Warwickshire</p>
        </div>
        <figure className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-[8rem] rounded-b-2xl bg-ice-200 ring-1 ring-silver-300/60">
            <Image src="/images/everyday-movement.webp" alt="Illustrative image of a woman enjoying gentle movement in a garden" fill priority sizes="(min-width: 1024px) 46vw, 90vw" className="object-cover" />
          </div>
          <figcaption className="relative mx-5 -mt-16 rounded-xl border-l-4 border-royal-600 bg-white p-6 shadow-lift sm:mx-8">
            <p className="font-display text-lg font-semibold text-navy-800">Care built around your life.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">From reaching a shelf to returning to the activities you love.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
