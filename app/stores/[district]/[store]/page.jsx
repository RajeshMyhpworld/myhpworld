import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowUpRight, MapPin, Phone, Clock, Check, ShieldCheck,
  Building2, Wrench, Coffee, Navigation, MessageCircle, Laptop, Monitor,
  Printer, Headphones, Package, ChevronRight, Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { STORES, getStore } from "@/data/stores";
import { DISTRICTS, getDistrict } from "@/data/districts";
import { SITE } from "@/data/site";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return STORES.map((s) => ({ district: s.district, store: s.slug }));
}

export async function generateMetadata({ params }) {
  const s = getStore(params.store);
  if (!s) return {};
  return {
    title: `${s.name}, ${s.city} — Directions, Hours & Contact`,
    description: `Visit ${s.name} at ${s.address}. ${s.hours}. Phone ${s.phone}. Authorised HP reseller with genuine products, warranty and service.`,
    alternates: { canonical: `/stores/${s.district}/${s.slug}` },
  };
}

export default function StorePage({ params }) {
  const s = getStore(params.store);
  const d = getDistrict(params.district);
  if (!s || !d || s.district !== params.district) notFound();

  const nearby = STORES.filter((x) => x.district === s.district && x.slug !== s.slug).slice(0, 3);
  const phoneClean = s.phone.replace(/\D/g, "");

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SITE.url}/stores/${s.district}/${s.slug}#store`,
    name: s.name,
    url: `${SITE.url}/stores/${s.district}/${s.slug}`,
    telephone: s.phone,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: s.address,
      addressLocality: s.city,
      addressRegion: "Kerala",
      postalCode: s.pin,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "21:00" },
    ],
    department: s.services.map((svc) => ({ "@type": "Store", name: `HP ${svc}` })),
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking, EMI",
    currenciesAccepted: "INR",
    areaServed: { "@type": "City", name: s.city },
    parentOrganization: { "@type": "Organization", name: SITE.businessName },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Stores", item: `${SITE.url}/stores` },
      { "@type": "ListItem", position: 3, name: `HP World ${d.name}`, item: `${SITE.url}/stores/${d.slug}` },
      { "@type": "ListItem", position: 4, name: s.name },
    ],
  };

  const features = [
    { Icon: Coffee, t: "Walk-ins welcome", s: "No appointment needed — just drop by during store hours" },
    { Icon: ShieldCheck, t: "Authorised HP warranty", s: "Every product carries full HP India warranty" },
    { Icon: Wrench, t: "Service support", s: "HP-certified technicians for repairs and Care Pack redemption" },
    { Icon: Building2, t: "Business & institutional", s: "Bulk pricing, GST invoicing, AMC contracts" },
  ];

  const available = [
    { Icon: Laptop, label: "HP Laptops", count: "Pavilion, Envy, EliteBook, Omen" },
    { Icon: Monitor, label: "HP Desktops", count: "Envy, EliteDesk, ProDesk" },
    { Icon: Printer, label: "HP Printers", count: "LaserJet, Smart Tank, DeskJet" },
    { Icon: Headphones, label: "Accessories", count: "Mice, keyboards, backpacks" },
    { Icon: Package, label: "Consumables", count: "Genuine HP ink & toner" },
    { Icon: ShieldCheck, label: "HP Care Pack", count: "All plans available" },
  ];

  return (
    <>
      <AnnouncementBar message={`Visit us · ${s.hours} · Call ${s.phone}`} />
      <Header active="stores" />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-[1400px] px-6 pt-6 text-[12px] text-[#0E1626]/60">
        <Link href="/" className="hover:text-[#0096D6]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/stores" className="hover:text-[#0096D6]">Stores</Link>
        <span className="mx-2">/</span>
        <Link href={`/stores/${d.slug}`} className="hover:text-[#0096D6]">{d.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-[#0E1626]">{s.name}</span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pt-8 pb-14 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-5 text-[12px] tracking-[0.2em] uppercase text-[#0E1626]/60">
            <MapPin className="w-3.5 h-3.5" />
            {s.city}, {d.name}
            <span className="text-[#0E1626]/30">·</span>
            <span className={`font-bold tracking-wider px-2 py-0.5 rounded-full text-[10px] ${
              s.type === "Flagship" ? "text-amber-700 bg-amber-100" : "text-[#0A1F44] bg-[#0A1F44]/10"
            }`}>{s.type}</span>
          </div>
          <h1 className="font-serif font-normal text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.02em]">
            {s.name.replace("HP World · ", "")}
            <br />
            <span className="italic text-[#0096D6]">HP World {d.name}.</span>
          </h1>
          <p className="mt-7 max-w-[540px] text-[15px] leading-[1.7] text-[#0E1626]/70">
            Authorised HP retail outlet at {s.address}, serving {s.city} and surrounding areas.
            {s.type === "Flagship" && " Our flagship outlet with demo zone, service centre and dedicated business desk."}
            Full HP range in stock, expert team, same-day setup.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={whatsappUrl(waMessages.storeEnquiry(s.name))} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-600 text-white text-[14px] font-semibold hover:bg-emerald-700">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href={`tel:${phoneClean}`}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-semibold hover:bg-[#0096D6]">
              <Phone className="w-4 h-4" /> {s.phone}
            </a>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(s.address + ", " + s.pin)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#0E1626]/20 text-[14px] font-medium hover:bg-white">
              <Navigation className="w-4 h-4" /> Directions <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-[#0A1F44] text-white relative overflow-hidden">
            <div className="flex items-center gap-2 mb-5 text-[11px] tracking-[0.2em] uppercase text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Open now
            </div>
            <div className="space-y-3.5 text-[13.5px]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
                <div>
                  <div className="text-white/60 text-[11px] uppercase tracking-wider">Address</div>
                  <div>{s.address}</div>
                  <div className="text-white/60">PIN {s.pin}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-white/60" />
                <div>
                  <div className="text-white/60 text-[11px] uppercase tracking-wider">Hours</div>
                  <div>Mon–Sat · {s.hours}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-white/60" />
                <div>
                  <div className="text-white/60 text-[11px] uppercase tracking-wider">Contact</div>
                  <div>{s.phone}</div>
                  <div className="text-white/60">{SITE.email}</div>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-1.5">
              {s.services.map((x) => (
                <span key={x} className="text-[10.5px] px-2 py-1 rounded-full bg-white/10 border border-white/10 inline-flex items-center gap-1">
                  <Check className="w-3 h-3" /> {x}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full bg-[#0096D6]/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-y border-[#0E1626]/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="max-w-[640px] mb-10">
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">What to expect</div>
            <h2 className="font-serif font-normal text-[36px] lg:text-[48px] leading-[1] tracking-[-0.02em]">
              More than a shop — <span className="italic text-[#0096D6]">an HP experience.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map(({ Icon, t, s: sub }) => (
              <div key={t} className="p-6 rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5">
                <Icon className="w-7 h-7 text-[#0A1F44] mb-3" strokeWidth={1.3} />
                <div className="text-[15.5px] font-semibold">{t}</div>
                <div className="text-[12.5px] text-[#0E1626]/65 mt-1 leading-[1.6]">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Available here</div>
          <h2 className="font-serif font-normal text-[36px] lg:text-[48px] leading-[1] tracking-[-0.02em] sticky top-[96px]">
            The complete HP catalogue,
            <br />
            <span className="italic text-[#0096D6]">under one roof.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
          {available.map(({ Icon, label, count }) => (
            <div key={label} className="p-5 rounded-2xl bg-white border border-[#0E1626]/10">
              <Icon className="w-8 h-8 text-[#0A1F44] mb-3" strokeWidth={1.3} />
              <div className="text-[16px] font-semibold">{label}</div>
              <div className="text-[12px] text-[#0E1626]/60 mt-0.5">{count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby */}
      {nearby.length > 0 && (
        <section className="bg-white border-y border-[#0E1626]/10">
          <div className="mx-auto max-w-[1400px] px-6 py-16">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
              <h2 className="font-serif font-normal text-[28px] lg:text-[36px] leading-[1.05] tracking-[-0.02em]">
                Other HP World stores near {s.city}
              </h2>
              <Link href={`/stores/${d.slug}`} className="text-[13px] font-medium hover:text-[#0096D6] inline-flex items-center gap-1.5">
                All {d.name} stores <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/stores/${n.district}/${n.slug}`}
                  className="p-5 rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5 hover:border-[#0096D6] transition group">
                  <div className="flex items-start justify-between mb-3">
                    <MapPin className="w-5 h-5 text-[#0A1F44]" />
                    <ArrowUpRight className="w-4 h-4 text-[#0E1626]/30 group-hover:text-[#0096D6] transition" />
                  </div>
                  <div className="font-serif text-[17px] font-medium">{n.name}</div>
                  <div className="text-[12px] text-[#0E1626]/60 mt-1">{n.address}</div>
                  <div className="text-[12px] text-[#0E1626]/60 mt-1 inline-flex items-center gap-1.5">
                    <Phone className="w-3 h-3" />{n.phone}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="rounded-[28px] bg-[#0A1F44] text-white p-10 md:p-14 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-[560px] mx-auto">
            <h2 className="font-serif font-normal text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]">
              See you at <span className="italic text-[#7CC3E8]">{s.city}.</span>
            </h2>
            <p className="mt-4 text-[14px] text-white/70 leading-[1.7]">
              Open today · {s.hours} · Walk-ins welcome
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <a href={whatsappUrl(waMessages.storeEnquiry(s.name))} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-500 text-white text-[13.5px] font-semibold hover:bg-emerald-600">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${phoneClean}`}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-[#0A1F44] text-[13.5px] font-semibold hover:bg-amber-300">
                <Phone className="w-4 h-4" /> {s.phone}
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(s.address + ", " + s.pin)}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/30 text-[13.5px] font-medium hover:bg-white/10">
                <Navigation className="w-4 h-4" /> Directions
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full bg-[#0096D6]/25 blur-3xl" />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
