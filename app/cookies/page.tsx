import Legal from "@/components/Legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Cookie Policy", description: "How this website uses essential and optional analytics cookies, and how to change your preferences.", path: "/cookies" });

export default function Page() {
  return (
    <Legal title="Cookie policy" path="/cookies">
      <p>We use a small number of cookies and similar technologies. Non-essential cookies are only set if you choose "Accept all" on our cookie banner.</p>
      <h2>Essential</h2>
      <p>Your cookie choice is stored in your browser's local storage (key <code>sec-consent-v1</code>) so we don't ask again.</p>
      <h2>Analytics (optional)</h2>
      <p>With your consent we use Google Analytics 4 to understand how visitors use the site, with IP anonymisation. Cookies: <code>_ga</code>, <code>_ga_*</code> (up to 2 years).</p>
      <h2>Changing your choice</h2>
      <p>Clear this site's data in your browser settings and the banner will appear again on your next visit.</p>
    </Legal>
  );
}
