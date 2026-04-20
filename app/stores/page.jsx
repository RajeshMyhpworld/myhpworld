import StoreLocator from "./StoreLocator";
import { STORES } from "@/data/stores";
import { SITE } from "@/data/site";

export const metadata = {
  title: `All ${SITE.totalStores} HP World Stores Across Kerala`,
  description: `Find your nearest HP World store — ${SITE.totalStores} authorised outlets across all ${SITE.totalDistricts} Kerala districts. Search by PIN code, city or district. Free delivery and expert in-store advice.`,
  alternates: { canonical: "/stores" },
};

export default function Page() {
  // Pre-build a small LocalBusiness schema for each store (helps local SEO)
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: STORES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Store",
        name: s.name,
        telephone: s.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: s.address,
          addressLocality: s.city,
          addressRegion: "Kerala",
          postalCode: s.pin,
          addressCountry: "IN",
        },
        url: `${SITE.url}/stores/${s.district}/${s.slug}`,
      },
    })),
  };

  return (
    <>
      <StoreLocator />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
