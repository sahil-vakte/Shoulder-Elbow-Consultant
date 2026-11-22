"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/lib/site";

/* Sticky mobile call/book bar */
export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full bg-navy-900/95 p-2 shadow-lift backdrop-blur md:hidden">
          <a href={site.contact.phoneHref} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/10 py-3 text-sm font-semibold text-white">
            <Phone className="size-4" /> Call
          </a>
          <Link href="/contact" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sky-400 py-3 text-sm font-semibold text-navy-900">
            <CalendarCheck className="size-4" /> Book
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* UK GDPR / PECR cookie consent — GA4 loads only after opt-in */
const KEY = "sec-consent-v1";
export function ConsentAndAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) as "granted" | "denied" | null;
      setConsent(v);
    } catch {}
    setReady(true);
  }, []);
  const choose = (v: "granted" | "denied") => {
    setConsent(v);
    try {
      localStorage.setItem(KEY, v);
    } catch {}
  };
  return (
    <>
      {gaId && consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      <AnimatePresence>
        {ready && consent === null && (
          <motion.div role="dialog" aria-label="Cookie preferences" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-4 left-4 right-4 z-[70] max-w-md rounded-3xl border border-ice-200 bg-white p-6 shadow-lift sm:right-auto">
            <p className="font-display text-base font-semibold text-navy-800">Your privacy</p>
            <p className="mt-2 text-sm text-muted">
              We use essential cookies to run this site and, with your permission, analytics cookies to understand how it's used. See our <Link href="/cookies" className="font-semibold text-royal-600 underline">cookie policy</Link>.
            </p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => choose("denied")} className="btn-ghost flex-1 py-2.5">Essential only</button>
              <button onClick={() => choose("granted")} className="btn-primary flex-1 py-2.5">Accept all</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
