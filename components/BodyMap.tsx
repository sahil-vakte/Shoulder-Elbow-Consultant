"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { conditions } from "@/content/conditions";

/** Interactive "where does it hurt?" symptom navigator. */
const zones = [
  { id: "top", label: "Top of the shoulder", x: 118, y: 104, slugs: ["ac-joint-arthritis", "ac-joint-injury", "shoulder-impingement"] },
  { id: "outer", label: "Outer upper arm", x: 92, y: 150, slugs: ["rotator-cuff-tear", "shoulder-impingement", "calcific-tendonitis"] },
  { id: "deep", label: "Deep in the joint / stiffness", x: 132, y: 140, slugs: ["frozen-shoulder", "shoulder-arthritis", "slap-tear-labral-tear"] },
  { id: "unstable", label: "Slips or dislocates", x: 150, y: 128, slugs: ["shoulder-dislocation-instability", "slap-tear-labral-tear"] },
  { id: "lat-elbow", label: "Outer elbow", x: 76, y: 244, slugs: ["tennis-elbow", "elbow-arthritis"] },
  { id: "med-elbow", label: "Inner elbow / tingling fingers", x: 112, y: 250, slugs: ["golfers-elbow", "cubital-tunnel-syndrome"] },
  { id: "front-elbow", label: "Front of elbow — 'pop' when lifting", x: 96, y: 232, slugs: ["distal-biceps-rupture"] },
  { id: "back-elbow", label: "Point of elbow / swelling", x: 86, y: 266, slugs: ["olecranon-bursitis", "elbow-fractures-dislocation"] },
];

export default function BodyMap() {
  const [active, setActive] = useState(zones[1].id);
  const zone = zones.find((z) => z.id === active)!;
  const list = zone.slugs.map((s) => conditions.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,420px)_1fr]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 p-6">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-80" />
        <p className="relative flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/50">
          <MousePointerClick className="size-4" /> Tap where it hurts
        </p>
        <h3 className="relative mb-6 mt-5 text-3xl !text-white">A little more about<br />your symptoms.</h3>
        <p className="relative mb-6 text-sm leading-relaxed text-white/70">Choose the area or feeling that best describes your discomfort to explore related information.</p>
        <div className="relative mt-2 grid gap-2">
          {zones.map((z) => (
            <button key={z.id} onClick={() => setActive(z.id)}
              aria-pressed={z.id === active} className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition ${z.id === active ? "bg-aqua-400 text-navy-900" : "bg-white/10 text-white/75 hover:bg-white/20"}`}>
              {z.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div key={zone.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-1 flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-aqua-400">{zone.label}</p>
            <h3 className="mt-2 font-display text-2xl font-bold !text-white">Conditions that commonly cause pain here</h3>
            <ul className="mt-6 grid flex-1 gap-3">
              {list.map((c, i) => (
                <motion.li key={c.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i }}>
                  <Link href={`/conditions/${c.slug}`} className="glass-dark group flex items-center justify-between gap-4 rounded-2xl p-5 transition hover:border-aqua-400/50 hover:bg-white/10">
                    <span>
                      <span className="block font-display text-lg font-semibold text-white">{c.name}</span>
                      <span className="mt-1 block text-sm text-white/65">{c.short}</span>
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-aqua-400 transition group-hover:translate-x-1 group-hover:bg-aqua-400 group-hover:text-navy-900">
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/70">This guide is for information only and is not a diagnosis.</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
