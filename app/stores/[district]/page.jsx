import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowUpRight, MapPin, Phone, Clock, ShieldCheck, Truck,
  Award, Building2, Navigation, MessageCircle, ChevronRight, Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { DISTRICTS, getDistrict } from "@/data/districts";
import { STORES, getStoresByDistrict } from "@/data/stores";
import { SITE } from "@/data/site";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

// Pre-build all 14 district pages at build time
export async function generateStaticParams() {
  return DISTRICTS.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }) {
  const d = getDistrict(params.district);
  if (!d) return {};
  const stores = getStoresByDistrict(d.slug);
  return {
    title: `HP World ${d.name} — ${stores.length} Authorised HP Stores`,
    description: `Visit HP World in ${d.name}: ${stores.length} authorised HP stores. Genuine HP laptops, printers, accessories with free delivery across ${d.name}.`,
    alternates: { canonical: `/stores/${d.slug}` },
  };
}

export default function DistrictPage({ params }) {
  const d = getDistrict(params.district);
  if (!d) notFound();

  const stores = getStoresByDistrict(d.slug);
  const flagships = stores.filter((s) => s.type === "Flagship").length;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Stores", item: `${SITE.url}/stores` },
      { "@type": "ListItem", position: 3, name: `HP World ${d.name}` },
    ],
  };

  return (
    <>
      <AnnouncementBar message={`Free delivery in ${d.name} on orders above ${SITE.delivery.freeThreshold}`} />
      <Header active="stores" />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-[1400px] px-6 pt-6 text-[12px] text-[#0E1626]/60">
        <Link href="/" className="hover:text-[#0096D6]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/stores" className="hover:text-[#0096D6]">Stores</Link>
        <span className="mx-2">/</span>
        <span className="text-[#0E1626]">HP World {d.name}</span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pt-8 pb-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#0E1626]/60 mb-5">
            <MapPin className="w-3.5 h-3.5" /> {d.name} district · {d.heroLine}
          </div>
          <h1 className="font-serif font-normal text-[48px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
            HP laptops
            <br />
            & printers
            <br />
            <span className="italic text-[#0096D6]">in {d.name}.</span>
          </h1>
          <p className="mt-7 max-w-[520px] text-[15.5px] leading-[1.7] text-[#0E1626]/70">{d.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#stores" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-medium hover:bg-[#0096D6]">
              <MapPin className="w-4 h-4" /> See all stores
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={whatsappUrl(waMessages.general())} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-600 text-white text-[14px] font-medium hover:bg-emerald-700">
              <MessageCircle className="w-4 h-4" /> WhatsApp our team
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[600px]">
            {[
              { k: stores.length, v: `Stores in ${d.name}` },
              { k: flagships, v: flagships === 1 ? "Flagship" : "Flagships" },
              { k: "48h", v: "Delivery" },
              { k: "All", v: "HP products" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-[36px] leading-none">{s.k}</div>
                <div className="mt-1.5 text-[11.5px] text-[#0E1626]/60 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores */}
      <section id="stores" className="bg-white border-y border-[#0E1626]/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">
                All {stores.length} {stores.length === 1 ? "store" : "stores"}
              </div>
              <h2 className="font-serif font-normal text-[36px] lg:text-[48px] leading-[1] tracking-[-0.02em]">
                HP World stores in {d.name}
              </h2>
            </div>
            <Link href="/stores" className="inline-flex items-center gap-2 text-[13.5px] font-medium hover:text-[#0096D6]">
              All Kerala stores <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stores.map((s) => (
              <article key={s.slug} className="p-5 rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5 hover:border-[#0096D6] transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={`/stores/${d.slug}/${s.slug}`} className="font-serif text-[17px] font-medium hover:text-[#0096D6]">
                        {s.name}
                      </Link>
                      {s.type === "Flagship" && (
                        <span className="text-[9.5px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900">Flagship</span>
                      )}
                    </div>
                    <div className="text-[12.5px] text-[#0E1626]/60">{s.address} · {s.pin}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {s.services.map((x) => (
                    <span key={x} className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#0E1626]/70 border border-[#0E1626]/10">{x}</span>
                  ))}
                </div>
                <div className="space-y-1 text-[12px] text-[#0E1626]/70 mb-4">
                  <div className="inline-flex items-center gap-1.5"><Phone className="w-3 h-3" />{s.phone}</div><br />
                  <div className="inline-flex items-center gap-1.5"><Clock className="w-3 h-3" />{s.hours}</div>
                </div>
                <div className="flex gap-2">
                  <a href={whatsappUrl(waMessages.storeEnquiry(s.name))} target="_blank" rel="noopener noreferrer"
                    className="flex-1 h-9 rounded-full bg-emerald-600 text-white text-[12px] font-semibold inline-flex items-center justify-center gap-1 hover:bg-emerald-700">
                    <MessageCircle className="w-3 h-3" /> WhatsApp
                  </a>
                  <Link href={`/stores/${d.slug}/${s.slug}`}
                    className="flex-1 h-9 rounded-full bg-[#0A1F44] text-white text-[12px] font-semibold inline-flex items-center justify-center gap-1 hover:bg-[#0096D6]">
                    Details <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="max-w-[640px] mb-10">
          <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Why {d.name} chooses HP World</div>
          <h2 className="font-serif font-normal text-[36px] lg:text-[48px] leading-[1] tracking-[-0.02em]">
            Local presence, <span className="italic text-[#0096D6]">global brand.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { Icon: ShieldCheck, t: "Genuine HP India warranty", s: "Every product carries full manufacturer warranty — validated from any HP World store." },
            { Icon: Truck, t: `48-hour delivery in ${d.name}`, s: "In-stock products dispatched within 48 hours across the district." },
            { Icon: Award, t: "HP-certified specialists", s: "Our team is trained directly by HP on the full range." },
            { Icon: Building2, t: "Dedicated business desk", s: `Serving ${d.name}'s IT hubs, colleges and hospitals with GST billing and AMC.` },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="p-6 rounded-2xl bg-white border border-[#0E1626]/10">
              <Icon className="w-7 h-7 text-[#0A1F44] mb-3" strokeWidth={1.3} />
              <div className="text-[15px] font-semibold mb-1.5">{t}</div>
              <div className="text-[12.5px] text-[#0E1626]/65 leading-[1.6]">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="bg-white border-y border-[#0E1626]/10">
        <div className="mx-auto max-w-[1000px] px-6 py-16">
          <h2 className="font-serif text-[24px] mb-6 font-medium">
            Buy HP laptops, desktops, printers and accessories in {d.name}
          </h2>
          <div className="text-[14px] leading-[1.9] text-[#0E1626]/75 space-y-4">
            <p>
              HP World {d.name} is the {d.name} district's {stores.length === 1 ? "dedicated" : "largest network"} of authorised HP retail outlets.
              {stores.length > 1 && ` With ${stores.length} stores across ${stores.slice(0, 3).map((s) => s.city).join(", ")}${stores.length > 3 ? " and more" : ""},`}
              {stores.length === 1 && ` Located at ${stores[0].address},`} we serve customers across the district with genuine HP products, authorised warranty and local service.
            </p>
            <p>
              Explore the full HP consumer range — HP Pavilion, HP Envy, HP OmniBook, HP Omen gaming laptops, HP Spectre x360, HP Chromebooks —
              alongside commercial models like the HP EliteBook, HP ProBook and HP ZBook workstations. For home offices and businesses, we stock HP DeskJet,
              HP Smart Tank, HP OfficeJet and HP LaserJet printers, genuine HP ink cartridges and toner, monitors, keyboards, mice, backpacks and every essential HP accessory.
            </p>
            <p>
              Every HP laptop, printer and desktop sold at HP World {d.name} comes with full HP India warranty and the option to extend coverage
              with HP Care Pack — redeemable at any of our {SITE.totalStores} Kerala stores. Business buyers get dedicated pricing, GST invoicing,
              AMC support, on-site installation and service SLAs.
            </p>
            <p>
              <strong>Popular searches in {d.name}:</strong> HP laptop shop in {d.name}, HP laptop dealer in {d.name}, HP printer service centre {d.name},
              HP Pavilion price in Kerala, HP EliteBook dealer {d.name}, HP authorised reseller {d.name}, HP ink cartridge {d.name}, HP LaserJet Kerala.
            </p>
          </div>

          {d.areas?.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#0E1626]/10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#0E1626]/50 mb-3">Areas we serve</div>
              <div className="flex flex-wrap gap-1.5">
                {d.areas.map((a) => (
                  <span key={a} className="text-[11.5px] px-3 py-1 rounded-full bg-[#F6F2EA] border border-[#0E1626]/10 text-[#0E1626]/70">
                    HP World · {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-[#0E1626]/10">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#0E1626]/50 mb-3">Other Kerala districts</div>
            <div className="flex flex-wrap gap-2 text-[12.5px] text-[#0E1626]/70">
              {DISTRICTS.filter((x) => x.slug !== d.slug).map((x, i, arr) => (
                <span key={x.slug}>
                  <Link href={`/stores/${x.slug}`} className="hover:text-[#0096D6]">HP World {x.name}</Link>
                  {i < arr.length - 1 && <span className="ml-2 text-[#0E1626]/30">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
