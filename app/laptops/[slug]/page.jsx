import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/data/products";
import { SITE } from "@/data/site";
import ProductDetail from "./ProductDetail";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — Price in Kerala | HP World`,
    description: `${p.name} ${p.sub ? "(" + p.sub + ") " : ""}at ₹${p.price.toLocaleString("en-IN")}. Buy at any HP World store across Kerala. Free delivery, no-cost EMI, HP India warranty.`,
    alternates: { canonical: `/laptops/${p.slug}` },
  };
}

export default function Page({ params }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.tagline,
    sku: p.slug.toUpperCase(),
    brand: { "@type": "Brand", name: "HP" },
    category: p.category,
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/laptops/${p.slug}`,
      priceCurrency: "INR",
      price: p.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SITE.businessName },
      areaServed: "Kerala, India",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating,
      reviewCount: p.reviews,
    },
  };

  return (
    <>
      <ProductDetail product={p} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}
