import Link from "next/link";
import {
  ArrowUpRight, ArrowRight, ChevronRight, MapPin, ShieldCheck, Truck,
  Award, Clock, Laptop, Monitor, Printer, Headphones, Package, Sparkles,
  Building2, Star, Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/data/site";
import { DISTRICTS } from "@/data/districts";
import { STORES } from "@/data/stores";
import { PRODUCTS } from "@/data/products";
import { inr } from "@/lib/format";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 6);
  const categories = [
    { name: "Laptops", Icon: Laptop, count: "120+ models", href: "/laptops/hp-pavilion-15" },
    { name: "Desktops", Icon: Monitor, count: "45+ models", href: "/laptops/hp-envy-desktop-te02" },
    { name: "Printers", Icon: Printer, count: "80+ models", href: "/laptops/hp-smart-tank-580" },
    { name: "Accessories", Icon: Headphones, count: "200+ items", href: "#" },
    { name: "Consumables", Icon: Package, count: "Inks & toners", href: "/laptops/hp-280-toner" },
    { name: "Care Pack", Icon: ShieldCheck, count: "Extended warranty", href: "#" },
  ];

  return (
    <>
      <AnnouncementBar />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#0E1626]/60 mb-6">
              <span className="w-8 h-px bg-[#0E1626]/40" />
              Kerala's largest HP network · since 2004
            </div>
            <h1 className="font-serif font-normal text-[56px] sm:text-[72px] lg:text-[96px] leading-[0.95] tracking-[-0.02em]">
              Genuine HP.
              <br />
              <span className="italic text-[#0A1F44]">Right around</span>
              <br />
              <span className="text-[#0096D6]">the corner.</span>
            </h1>
            <p className="mt-7 max-w-[520px] text-[16px] leading-[1.7] text-[#0E1626]/70">
              Thirty-plus HP World stores from Thiruvananthapuram to Kasaragod.
              Touch the product before you buy, walk out with same-day setup,
              or chat with us on WhatsApp — all with authorised HP warranty
              and expert in-store advice.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/stores"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-medium hover:bg-[#0096D6] transition"
              >
                <MapPin className="w-4 h-4" />
                Find your nearest store
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </Link>
              <Link
                href="/laptops/hp-pavilion-15"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#0E1626]/20 text-[14px] font-medium hover:bg-white transition"
              >
                Browse products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-[520px]">
              {[
                { k: `${SITE.totalStores}+`, v: "Stores across Kerala" },
                { k: `${SITE.totalDistricts}`, v: "Districts covered" },
                { k: `${SITE.yearsInBusiness} yrs`, v: "Authorised reseller" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-serif text-[32px] leading-none">{s.k}</div>
                  <div className="mt-1.5 text-[12px] text-[#0E1626]/60 leading-snug">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0A1F44] to-[#0096D6] p-8 flex flex-col justify-between">
              <div className="flex items-start justify-between text-white">
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-white/60">Featured</div>
                  <div className="mt-2 font-serif text-[28px] leading-[1.05]">
                    OmniBook
                    <br />
                    Ultra 14
                  </div>
                </div>
                <div className="bg-amber-300 text-[#0A1F44] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  AI PC
                </div>
              </div>

              <div className="relative flex items-center justify-center my-4">
                <div className="relative w-[82%] aspect-[16/10]">
                  <div className="absolute inset-0 rounded-t-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-sm" />
                  <div className="absolute inset-3 rounded-md bg-gradient-to-br from-[#0096D6]/40 to-[#0A1F44]/80 border border-white/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 text-xs tracking-[0.3em]">hp</div>
                </div>
                <div className="absolute -bottom-1 w-[90%] h-2 rounded-b-xl bg-white/15 border-t border-white/20" />
              </div>

              <div className="flex items-end justify-between text-white">
                <div>
                  <div className="text-[11px] text-white/60 uppercase tracking-wider">From</div>
                  <div className="font-serif text-[32px] leading-none">₹ 1,29,990</div>
                  <div className="text-[11px] text-white/60 mt-1">or ₹ 10,832/mo · No-cost EMI</div>
                </div>
                <Link
                  href="/laptops/hp-omnibook-ultra-14"
                  className="w-12 h-12 rounded-full bg-white text-[#0A1F44] flex items-center justify-center hover:scale-105 transition"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-[#F6F2EA] rounded-2xl border border-[#0E1626]/10 px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-semibold">Genuine HP</div>
                  <div className="text-[#0E1626]/60">Warranty assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0096D6]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-amber-200/30 blur-3xl" />
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[#0E1626]/10 bg-white/60">
        <div className="mx-auto max-w-[1400px] px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]">
          {[
            { Icon: ShieldCheck, t: "Authorised HP reseller", s: "100% genuine products" },
            { Icon: Truck, t: "Free Kerala delivery", s: `On orders above ${SITE.delivery.freeThreshold}` },
            { Icon: Award, t: "Expert in-store advice", s: "HP-certified staff" },
            { Icon: Clock, t: "Same-day setup", s: "Pick up & go" },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A1F44]/5 flex items-center justify-center shrink-0">
                <Icon className="w-[18px] h-[18px] text-[#0A1F44]" />
              </div>
              <div>
                <div className="font-semibold leading-tight">{t}</div>
                <div className="text-[#0E1626]/60">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">
              Shop by category
            </div>
            <h2 className="font-serif font-normal text-[40px] lg:text-[56px] leading-[1] tracking-[-0.02em]">
              The full HP catalogue,
              <br />
              <span className="italic text-[#0096D6]">stocked in Kerala.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map(({ name, Icon, count, href }, i) => (
            <Link
              key={name}
              href={href}
              className="group relative p-6 rounded-2xl bg-white border border-[#0E1626]/10 hover:border-[#0096D6] hover:-translate-y-1 transition-all duration-300 aspect-[1/1.15] flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-[10px] text-[#0E1626]/40">0{i + 1}</div>
              <Icon className="w-8 h-8 text-[#0A1F44] group-hover:text-[#0096D6] transition" strokeWidth={1.3} />
              <div>
                <div className="font-serif text-[18px] leading-tight font-medium">{name}</div>
                <div className="text-[11px] text-[#0E1626]/60 mt-1">{count}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">
                In-store & online
              </div>
              <h2 className="font-serif font-normal text-[40px] lg:text-[56px] leading-[1] tracking-[-0.02em]">
                Featured this week
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/laptops/${p.slug}`}
                className="group rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5 overflow-hidden hover:-translate-y-1 transition-transform duration-300 block"
              >
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.hue} p-6 flex items-center justify-center`}>
                  <div className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.18em] uppercase text-[#0A1F44] bg-white/80 backdrop-blur px-2.5 py-1 rounded-full">
                    {p.tag}
                  </div>
                  <div className="relative w-4/5">
                    <div className="aspect-[16/10] rounded-md bg-white/70 border border-white shadow-sm flex items-center justify-center">
                      <span className={`text-xs tracking-[0.3em] ${p.accent} font-semibold`}>hp</span>
                    </div>
                    <div className="h-1.5 -mt-0.5 rounded-b-md bg-white/40" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[20px] leading-tight font-medium">{p.name}</h3>
                  <p className="mt-1.5 text-[12.5px] text-[#0E1626]/60">{p.sub}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-[18px] font-semibold">{inr(p.price)}</div>
                      <div className="text-[11px] text-[#0E1626]/50 line-through">MRP {inr(p.mrp)}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#0A1F44] text-white flex items-center justify-center group-hover:bg-[#0096D6] transition">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
        <div className="relative rounded-[32px] overflow-hidden bg-[#0A1F44] text-white p-8 md:p-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-amber-300 mb-6">
              <Building2 className="w-4 h-4" /> For business
            </div>
            <h2 className="font-serif font-normal text-[40px] lg:text-[64px] leading-[1] tracking-[-0.02em] text-white">
              Equip your office.
              <br />
              <span className="italic text-[#7CC3E8]">Scale your startup.</span>
            </h2>
            <p className="mt-7 max-w-[520px] text-[15px] leading-[1.7] text-white/70">
              Dedicated B2B team for Kerala's SMBs, hospitals, colleges, IT parks and
              government institutions. Volume pricing, GST invoicing, on-site installation,
              AMC contracts and pan-Kerala service support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/business"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-[#0A1F44] text-[14px] font-semibold hover:bg-amber-300 transition"
              >
                Request business quote <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative z-10 space-y-3">
            {[
              { t: "HP EliteBook & ProBook", s: "Commercial-grade laptops with Intel vPro and 3-year warranty." },
              { t: "HP LaserJet for enterprise", s: "Print infrastructure for teams of 10 to 10,000." },
              { t: "AMC & managed services", s: `Annual maintenance contracts across all ${SITE.totalDistricts} districts.` },
              { t: "Bulk institutional orders", s: "Schools, hospitals, government tenders — GeM listed." },
            ].map((x) => (
              <div key={x.t} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="font-semibold text-[15px]">{x.t}</div>
                <div className="text-[13px] text-white/60 mt-1">{x.s}</div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#0096D6]/20 blur-3xl" />
        </div>
      </section>

      {/* STORE NETWORK */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">
              Store network
            </div>
            <h2 className="font-serif font-normal text-[40px] lg:text-[56px] leading-[1] tracking-[-0.02em]">
              From the capital
              <br />
              to the <span className="italic text-[#0096D6]">coast.</span>
            </h2>
            <p className="mt-6 text-[15px] text-[#0E1626]/70 leading-[1.7] max-w-[440px]">
              Walk into any of our {SITE.totalStores} HP World stores across Kerala. See the
              product, feel the keyboard, test the print quality — and leave
              with expert setup, not just a box.
            </p>
            <Link
              href="/stores"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-semibold hover:bg-[#0096D6]"
            >
              Browse all stores <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-[#F6F2EA] to-white rounded-[28px] border border-[#0E1626]/10 overflow-hidden p-8">
              <div className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.22em] text-[#0E1626]/50">
                Kerala · {SITE.totalDistricts} districts
              </div>
              <svg viewBox="0 0 400 520" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M210 20 C230 40 240 70 235 100 C245 130 260 150 270 180 C280 210 275 240 285 270 C295 300 300 330 290 360 C280 390 265 415 250 440 C240 465 220 485 195 495 C170 500 150 490 140 470 C125 445 115 420 110 395 C100 365 105 335 115 305 C125 275 135 245 140 215 C145 185 150 155 165 125 C180 95 195 65 210 20 Z"
                  fill="#0A1F44" fillOpacity="0.04" stroke="#0A1F44" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3"
                />
                {STORES.map((s) => (
                  <g key={s.slug}>
                    {s.type === "Flagship" && (
                      <circle cx={s.mapX} cy={s.mapY} r="14" fill="#0096D6" fillOpacity="0.12">
                        <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.25;0;0.25" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle cx={s.mapX} cy={s.mapY} r={s.type === "Flagship" ? 5 : 3.5} fill={s.type === "Flagship" ? "#0096D6" : "#0A1F44"} />
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] text-[#0E1626]/60">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0096D6]" /> Flagship store
                </div>
                <div className="font-semibold text-[#0E1626]">{SITE.totalStores} locations</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {DISTRICTS.map((d) => (
                <Link
                  key={d.slug}
                  href={`/stores/${d.slug}`}
                  className="text-[11.5px] px-3 py-1.5 rounded-full bg-[#F6F2EA] border border-[#0E1626]/10 text-[#0E1626]/70 hover:border-[#0096D6] hover:text-[#0096D6] transition"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0A1F44] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
          <div className="max-w-[680px] mb-14">
            <div className="text-[12px] tracking-[0.22em] uppercase text-amber-300 mb-3">
              Trusted across Kerala
            </div>
            <h2 className="font-serif font-normal text-[40px] lg:text-[56px] leading-[1] tracking-[-0.02em]">
              Twenty years.
              <br />
              <span className="italic text-[#7CC3E8]">Lakhs of happy customers.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                q: "Bought our entire IT lab from HP World Ernakulam. Delivery, setup, AMC — handled end to end. Best B2B partner we've worked with.",
                n: "Ashwin Menon",
                r: "IT Head · Rajagiri School of Engineering",
              },
              {
                q: "Walked in confused, walked out with the perfect laptop for my design work. The team actually listens before selling.",
                n: "Fathima Rasheed",
                r: "Freelance designer, Kozhikode",
              },
              {
                q: "Printer stopped working on a Sunday. Service engineer was at my clinic the next morning. Care Pack is worth every rupee.",
                n: "Dr. Suresh Nair",
                r: "Dental practice, Trivandrum",
              },
            ].map((t) => (
              <figure key={t.n} className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="flex gap-0.5 mb-5 text-amber-300">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="font-serif text-[18px] leading-[1.5] text-white/90">"{t.q}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-semibold text-[14px]">{t.n}</div>
                  <div className="text-[12px] text-white/60 mt-0.5">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-amber-100 via-[#F6F2EA] to-stone-100 border border-[#0E1626]/10 p-10 md:p-16">
          <div className="relative z-10 max-w-[720px]">
            <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-[#0A1F44] font-bold mb-5">
              <Sparkles className="w-4 h-4" /> Festive season deals
            </div>
            <h2 className="font-serif font-normal text-[40px] lg:text-[64px] leading-[1] tracking-[-0.02em]">
              Up to <span className="italic text-[#0096D6]">₹ 18,000 off</span>
              <br />
              on HP laptops this season.
            </h2>
            <p className="mt-6 text-[15px] text-[#0E1626]/70 leading-[1.7] max-w-[540px]">
              No-cost EMI starting ₹ 3,499/month · Free HP backpack and antivirus
              · Exchange your old laptop and save up to ₹ 20,000 more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(waMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-semibold hover:bg-[#0096D6]"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/stores"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#0E1626]/30 text-[14px] font-medium hover:bg-white"
              >
                Visit a store
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute top-10 right-10 font-serif text-[160px] md:text-[240px] leading-none opacity-10">%</div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
