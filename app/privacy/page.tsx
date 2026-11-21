import Legal from "@/components/Legal";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Privacy Notice", description: `How ${site.brand} collects, uses and protects your personal and health information under UK GDPR.`, path: "/privacy" });

export default function Page() {
  return (
    <Legal title="Privacy notice" path="/privacy">
      {/* ⚠️ TODO: have this reviewed by the practice's Data Protection Officer / ICO registration details added. */}
      <p>{site.brand} ("we") is committed to protecting your privacy. This notice explains how we handle personal data in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
      <h2>Data controller</h2>
      <p>{site.consultant.name}, trading as {site.brand}. ICO registration number: [to be added]. Contact: {site.contact.email}.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Contact details you provide through our enquiry form, phone or email</li>
        <li>Health information you choose to share in order to arrange care (special category data)</li>
        <li>Insurance details needed to process claims</li>
        <li>Website usage data, only if you consent to analytics cookies</li>
      </ul>
      <h2>Why we use it and our lawful basis</h2>
      <p>We use your data to respond to enquiries, arrange and provide healthcare, communicate with your GP, insurer and other clinicians involved in your care, and meet legal obligations. Our lawful bases are your consent, steps prior to entering a contract, legitimate interests, and — for health data — the provision of health care (Article 9(2)(h)).</p>
      <h2>How long we keep it</h2>
      <p>Enquiries that do not lead to an appointment are deleted within 12 months. Medical records are retained in line with the NHS Records Management Code of Practice.</p>
      <h2>Your rights</h2>
      <p>You can request access to, correction or deletion of your data, object to or restrict processing, and complain to the Information Commissioner's Office (ico.org.uk).</p>
      <h2>Security</h2>
      <p>Data is transmitted over encrypted connections and stored on secure, access-controlled systems.</p>
    </Legal>
  );
}
