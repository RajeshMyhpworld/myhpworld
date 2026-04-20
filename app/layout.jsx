import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `HP World Kerala — Authorised HP Laptops, Printers & Accessories | ${SITE.totalStores} Stores`,
    template: "%s | HP World Kerala",
  },
  description: `Buy genuine HP laptops, desktops, printers and accessories at HP World Kerala's ${SITE.totalStores} authorised stores across all ${SITE.totalDistricts} districts. Free Kerala delivery, HP Care Pack, expert in-store advice.`,
  keywords: [
    "HP World Kerala",
    "HP laptop Kerala",
    "HP printer Kerala",
    "authorised HP dealer Kerala",
    "HP showroom Kochi",
    "HP store Trivandrum",
    "HP laptop price in Kerala",
    "HP Pavilion Kerala",
    "HP EliteBook Kerala",
    "HP service centre Kerala",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: "HP World Kerala",
    title: `HP World Kerala — ${SITE.totalStores} Authorised HP Stores`,
    description: `${SITE.tagline} — genuine HP products with free Kerala delivery and expert in-store advice.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "HP World Kerala",
    description: SITE.tagline,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  // Organisation schema for every page (good for local SEO)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.businessName,
    alternateName: "HP World Kerala",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.headOffice.line2,
      addressLocality: "Kochi",
      addressRegion: SITE.headOffice.state,
      postalCode: SITE.headOffice.pin,
      addressCountry: "IN",
    },
    areaServed: { "@type": "State", name: "Kerala" },
    description: `${SITE.tagline} — ${SITE.totalStores} authorised HP stores across ${SITE.totalDistricts} districts of Kerala.`,
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
