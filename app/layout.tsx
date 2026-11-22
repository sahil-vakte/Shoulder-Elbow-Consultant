import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCta, ConsentAndAnalytics } from "@/components/Chrome";
import { JsonLd } from "@/components/ui";
import { SITE_URL, site } from "@/lib/site";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shoulder & Elbow Specialist Leicester, Nuneaton & Warwickshire | Shoulder Elbow Consultant",
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.consultant.name }],
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: { siteName: site.brand, locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  other: { "geo.region": "GB-LCE", "geo.placename": "Leicester" },
};

export const viewport: Viewport = {
  themeColor: "#1f3a5c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <ConsentAndAnalytics />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
