import Legal from "@/components/Legal";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Website Terms of Use", description: `Terms of use for the ${site.brand} website, including medical information disclaimer.`, path: "/terms" });

export default function Page() {
  return (
    <Legal title="Website terms of use" path="/terms">
      <h2>Medical information</h2>
      <p>The content on this website is for general information only and is not a substitute for a consultation with a qualified healthcare professional. Treatment outcomes vary between individuals. In an emergency call 999 or attend A&amp;E.</p>
      <h2>Accuracy</h2>
      <p>We review our content regularly but cannot guarantee it is complete or current at all times. Fees shown are a guide; a written quote will be provided before treatment.</p>
      <h2>Links</h2>
      <p>We are not responsible for the content of external websites linked from this site.</p>
      <h2>Copyright</h2>
      <p>© {site.brand}. All text and illustrations on this site are protected by copyright and may not be reproduced without permission.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of England and Wales.</p>
    </Legal>
  );
}
