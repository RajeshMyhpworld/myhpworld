import { SITE } from "@/data/site";
import { STORES } from "@/data/stores";
import { DISTRICTS } from "@/data/districts";
import { PRODUCTS } from "@/data/products";

// Next.js auto-generates sitemap.xml from this file
export default function sitemap() {
  const base = SITE.url;
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/stores`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const districtPages = DISTRICTS.map((d) => ({
    url: `${base}/stores/${d.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const storePages = STORES.map((s) => ({
    url: `${base}/stores/${s.district}/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages = PRODUCTS.map((p) => ({
    url: `${base}/laptops/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...districtPages, ...storePages, ...productPages];
}
