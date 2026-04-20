"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, ShieldCheck, Truck, Award, MapPin, Star, Check,
  MessageCircle, Phone, Sparkles, Package, ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PRODUCTS } from "@/data/products";
import { findNearestStores } from "@/data/stores";
import { SITE } from "@/data/site";
import { inr } from "@/lib/format";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

export default function ProductDetail({ product: p }) {
  const [pin, setPin] = useState("");
  const [searched, setSearched] = useState(false);
  const [nearestStores, setNearestStores] = useState([]);

  const handleCheck = () => {
    if (pin.length !== 6) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }
    const results = findNearestStores(pin, 5);
    setNearestStores(results);
    setSearched(true);
  };

  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <AnnouncementBar
        message={`${SITE.delivery.kerala} · Chat on WhatsApp ${SITE.whatsapp}`}
      />
      <Header active="shop" />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 pt-6 text-[12px] text-[#0E1626]/60">
        <Link href="/" className="hover:text-[#0096D6]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/" className="hover:text-[#0096D6]">{p.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-[#0E1626]">{p.name}</span>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pt-8 pb-16 grid lg:grid-cols-12 gap-10">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <div className={`relative aspect-[4/3] rounded-[24px] border border-[#0E1626]/10 bg-gradient-to-br ${p.hue} overflow-hidden`}>
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white bg-[#0A1F44] px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-[75%]">
                <div className="aspect-[16/10] rounded-lg bg-white/80 border border-white shadow-2xl flex items-center justify-center">
                  <div className="w-[92%] aspect-[16/9] rounded-sm bg-gradient-to-br from-slate-200 via-sky-100 to-stone-100 flex items-center justify-center">
                    <span className={`${p.accent} text-xs tracking-[0.4em] font-bold`}>hp</span>
                  </div>
                </div>
                <div className="h-2 -mt-0.5 rounded-b-lg bg-white/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Buy box */}
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#0E1626]/60 mb-2">{p.series}</div>
          <h1 className="font-serif font-normal text-[36px] lg:text-[44px] leading-[1.02] tracking-[-0.02em]">
            {p.name}
            <br />
            <span className="italic text-[#0096D6] text-[26px] lg:text-[28px]">{p.tagline}</span>
          </h1>

          <div className="mt-4 flex items-center gap-4 text-[13px]">
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(p.rating) ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="font-semibold ml-1">{p.rating}</span>
              <span className="text-[#0E1626]/60 ml-1">({p.reviews} reviews)</span>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-white border border-[#0E1626]/10">
            <div className="flex items-baseline gap-3 flex-wrap">
              <div className="font-serif text-[36px] font-bold leading-none">{inr(p.price)}</div>
              <div className="text-[14px] text-[#0E1626]/50 line-through">{inr(p.mrp)}</div>
              <div className="text-[12px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Save {inr(p.mrp - p.price)}
              </div>
            </div>
            <div className="mt-1 text-[11.5px] text-[#0E1626]/60">Inclusive of all taxes · GST invoice available</div>
            {p.emi && (
              <div className="mt-3 pt-3 border-t border-[#0E1626]/10 text-[12.5px] text-[#0E1626]/70">
                No-cost EMI from <span className="font-semibold text-[#0E1626]">{inr(p.emi)}/month</span>
              </div>
            )}
          </div>

          {/* PIN code check — the core conversion flow */}
          <div className="mt-6 p-5 rounded-2xl bg-amber-50/80 border-2 border-dashed border-amber-300">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-amber-700" />
              <div className="font-semibold text-[15px]">Check availability near you</div>
            </div>
            <div className="text-[12.5px] text-[#0E1626]/70 mb-3 leading-[1.5]">
              Enter your PIN code — we'll show you the nearest HP World stores that can deliver or let you pick up today.
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                placeholder="6-digit PIN"
                className="flex-1 h-11 px-4 rounded-xl bg-white border border-[#0E1626]/15 outline-none focus:border-amber-500 text-[14px] tracking-wider"
              />
              <button
                onClick={handleCheck}
                className="h-11 px-5 rounded-xl bg-[#0A1F44] text-white text-[12.5px] font-semibold hover:bg-[#0096D6]"
              >
                Check
              </button>
            </div>

            {searched && nearestStores.length > 0 && (
              <div className="mt-4 space-y-2">
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#0E1626]/60">
                  Nearest stores for PIN {pin}
                </div>
                {nearestStores.map((s) => (
                  <div key={s.slug} className="p-3 rounded-xl bg-white border border-[#0E1626]/10 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-semibold truncate">{s.name}</div>
                      <div className="text-[11px] text-[#0E1626]/60 truncate">
                        {s.city} · {s.phone}
                      </div>
                    </div>
                    <a
                      href={whatsappUrl(waMessages.productEnquiry(p.name, pin, s.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 px-3 rounded-full bg-emerald-600 text-white text-[11.5px] font-semibold inline-flex items-center gap-1.5 hover:bg-emerald-700 shrink-0"
                    >
                      <MessageCircle className="w-3 h-3" /> WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTAs — WhatsApp first */}
          <div className="mt-4 grid grid-cols-1 gap-2">
            <a
              href={whatsappUrl(waMessages.productEnquiry(p.name, pin, ""))}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 rounded-full bg-emerald-600 text-white text-[14px] font-semibold hover:bg-emerald-700 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SITE.phoneClean}`}
                className="h-11 rounded-full border border-[#0A1F44] text-[#0A1F44] text-[13px] font-semibold hover:bg-[#0A1F44] hover:text-white transition inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call us
              </a>
              <Link
                href="/stores"
                className="h-11 rounded-full bg-[#0A1F44] text-white text-[13px] font-semibold hover:bg-[#0096D6] inline-flex items-center justify-center gap-2"
              >
                Visit a store <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-5 space-y-2.5 text-[13px]">
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#0096D6]" />
              <span className="text-[#0E1626]/80">{SITE.delivery.kerala} · Ships in 1 business day</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[#0E1626]/80">HP India warranty</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-[#0E1626]/80">Authorised HP reseller · Genuine product guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white border-y border-[#0E1626]/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Highlights</div>
            <h2 className="font-serif font-normal text-[32px] lg:text-[44px] leading-[1.02] tracking-[-0.02em] sticky top-[96px]">
              Built for real life.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 p-4 rounded-xl bg-[#F6F2EA] border border-[#0E1626]/5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-[1.6]">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <div>
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Full specifications</div>
            <h2 className="font-serif font-normal text-[32px] lg:text-[44px] leading-[1.02] tracking-[-0.02em]">
              Every detail, measured.
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-10 bg-white rounded-2xl border border-[#0E1626]/10 p-8">
          {Object.entries(p.specs).map(([k, v], i) => (
            <div key={k} className={`flex items-start gap-6 py-3.5 ${i !== 0 && i !== 1 ? "border-t border-[#0E1626]/8" : ""}`}>
              <div className="w-40 shrink-0 text-[12.5px] text-[#0E1626]/60">{k}</div>
              <div className="flex-1 text-[13.5px] leading-[1.6]">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="bg-white border-t border-[#0E1626]/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <h2 className="font-serif font-normal text-[28px] lg:text-[36px] leading-[1.05] tracking-[-0.02em] mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/laptops/${r.slug}`}
                className="group block rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5 overflow-hidden hover:-translate-y-0.5 transition">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${r.hue} p-5 flex items-center justify-center`}>
                  <div className="w-4/5 aspect-[16/10] rounded-md bg-white/70 border border-white flex items-center justify-center">
                    <span className={`text-[10px] tracking-[0.3em] ${r.accent} font-semibold`}>hp</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-[14.5px] font-semibold leading-tight">{r.name}</div>
                  <div className="text-[11.5px] text-[#0E1626]/60 mt-0.5">{r.sub}</div>
                  <div className="mt-2 text-[14.5px] font-bold">{inr(r.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
