"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search, MapPin, Phone, Clock, Filter, Navigation, ChevronRight, Check, MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { STORES } from "@/data/stores";
import { DISTRICTS } from "@/data/districts";
import { SITE } from "@/data/site";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

const TYPES = ["All", "Flagship", "Store"];
const SERVICE_FILTERS = ["All services", "Service", "Care Pack", "Business", "Demo Zone"];

export default function StoreLocator() {
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("All districts");
  const [type, setType] = useState("All");
  const [svc, setSvc] = useState("All services");
  const [selected, setSelected] = useState(STORES[10].slug); // Panampilly default

  const districtOptions = ["All districts", ...DISTRICTS.map((d) => d.name)];

  const filtered = useMemo(() => {
    return STORES.filter((s) => {
      const sDistrict = DISTRICTS.find((d) => d.slug === s.district)?.name;
      if (district !== "All districts" && sDistrict !== district) return false;
      if (type !== "All" && s.type !== type) return false;
      if (svc !== "All services" && !s.services.includes(svc)) return false;
      if (q) {
        const t = q.toLowerCase();
        return (
          s.name.toLowerCase().includes(t) ||
          s.city.toLowerCase().includes(t) ||
          sDistrict?.toLowerCase().includes(t) ||
          s.pin.includes(t) ||
          s.address.toLowerCase().includes(t)
        );
      }
      return true;
    });
  }, [q, district, type, svc]);

  const selectedStore = STORES.find((s) => s.slug === selected);

  return (
    <>
      <AnnouncementBar />
      <Header active="stores" />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 pt-6 text-[12px] text-[#0E1626]/60">
        <Link href="/" className="hover:text-[#0096D6]">Home</Link> <span className="mx-2">/</span> <span className="text-[#0E1626]">Store locator</span>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pt-8 pb-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Store locator</div>
            <h1 className="font-serif font-normal text-[48px] lg:text-[72px] leading-[0.98] tracking-[-0.02em]">
              Find your nearest
              <br />
              <span className="italic text-[#0096D6]">HP World.</span>
            </h1>
            <p className="mt-5 text-[15px] text-[#0E1626]/70 leading-[1.7] max-w-[540px]">
              {SITE.totalStores} authorised HP stores across all {SITE.totalDistricts} districts of Kerala.
              Touch the product, test the keyboard, get expert advice and walk out with same-day setup.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {[
              { k: SITE.totalStores, v: "Stores" },
              { k: SITE.totalDistricts, v: "Districts" },
              { k: STORES.filter((s) => s.type === "Flagship").length, v: "Flagships" },
            ].map((s) => (
              <div key={s.v} className="p-4 rounded-2xl bg-white border border-[#0E1626]/10">
                <div className="font-serif text-[36px] leading-none">{s.k}</div>
                <div className="text-[11.5px] text-[#0E1626]/60 mt-1.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mt-10 p-3 rounded-2xl bg-white border border-[#0E1626]/10 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-2 h-12 px-4 rounded-xl bg-[#F6F2EA]">
            <Search className="w-4 h-4 text-[#0E1626]/50" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by city, area, PIN code or store name"
              className="bg-transparent outline-none text-[14px] w-full placeholder:text-[#0E1626]/40"
            />
          </div>
          <a
            href={whatsappUrl(waMessages.general())}
            target="_blank" rel="noopener noreferrer"
            className="h-12 px-6 rounded-xl bg-emerald-600 text-white text-[13px] font-semibold hover:bg-emerald-700 inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp us
          </a>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 text-[12px] text-[#0E1626]/60 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter
          </div>
          <Select value={district} onChange={setDistrict} options={districtOptions} />
          <Select value={type} onChange={setType} options={TYPES} prefix="Type · " />
          <Select value={svc} onChange={setSvc} options={SERVICE_FILTERS} />
          {(district !== "All districts" || type !== "All" || svc !== "All services" || q) && (
            <button
              onClick={() => { setDistrict("All districts"); setType("All"); setSvc("All services"); setQ(""); }}
              className="h-9 px-3 rounded-full text-[12px] text-[#0096D6] hover:underline"
            >
              Clear all
            </button>
          )}
          <div className="ml-auto text-[12px] text-[#0E1626]/60">
            {filtered.length} of {STORES.length} stores
          </div>
        </div>
      </section>

      {/* Map + list */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-3 max-h-[780px] overflow-y-auto pr-2">
            {filtered.length === 0 && (
              <div className="p-10 text-center rounded-2xl bg-white border border-[#0E1626]/10">
                <div className="text-[15px] font-semibold mb-1">No stores match your filters</div>
                <div className="text-[13px] text-[#0E1626]/60">Try clearing filters or browse all {STORES.length} stores.</div>
              </div>
            )}
            {filtered.map((s) => {
              const districtName = DISTRICTS.find((d) => d.slug === s.district)?.name;
              return (
                <article
                  key={s.slug}
                  onClick={() => setSelected(s.slug)}
                  className={`group p-5 rounded-2xl bg-white border cursor-pointer transition ${
                    selected === s.slug ? "border-[#0096D6] ring-2 ring-[#0096D6]/20" : "border-[#0E1626]/10 hover:border-[#0E1626]/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <Link href={`/stores/${s.district}/${s.slug}`} className="font-serif text-[18px] font-medium hover:text-[#0096D6]">
                          {s.name}
                        </Link>
                        {s.type === "Flagship" && (
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">Flagship</span>
                        )}
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Open
                        </span>
                      </div>
                      <div className="text-[13px] text-[#0E1626]/70 mb-2">{s.address} · {s.pin} · {districtName}</div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {s.services.map((x) => (
                          <span key={x} className="text-[10.5px] px-2 py-0.5 rounded-full bg-[#F6F2EA] text-[#0E1626]/70 border border-[#0E1626]/10">
                            {x}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#0E1626]/60">
                        <a href={`tel:${s.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-[#0096D6]">
                          <Phone className="w-3.5 h-3.5" />{s.phone}
                        </a>
                        <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{s.hours}</span>
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-col gap-2">
                      <a
                        href={whatsappUrl(waMessages.storeEnquiry(s.name))}
                        target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center" title="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <Link href={`/stores/${s.district}/${s.slug}`} className="w-10 h-10 rounded-full bg-[#0A1F44] text-white hover:bg-[#0096D6] flex items-center justify-center" title="Details">
                        <Navigation className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Map + detail */}
          <div className="lg:col-span-5">
            <div className="sticky top-[96px] space-y-4">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#F6F2EA] to-white rounded-[24px] border border-[#0E1626]/10 overflow-hidden p-6">
                <div className="absolute top-4 left-5 text-[11px] uppercase tracking-[0.22em] text-[#0E1626]/50">
                  Kerala · {filtered.length} stores shown
                </div>
                <svg viewBox="0 0 400 520" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M210 20 C230 40 240 70 235 100 C245 130 260 150 270 180 C280 210 275 240 285 270 C295 300 300 330 290 360 C280 390 265 415 250 440 C240 465 220 485 195 495 C170 500 150 490 140 470 C125 445 115 420 110 395 C100 365 105 335 115 305 C125 275 135 245 140 215 C145 185 150 155 165 125 C180 95 195 65 210 20 Z"
                    fill="#0A1F44" fillOpacity="0.04" stroke="#0A1F44" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3"
                  />
                  {filtered.map((s) => (
                    <g key={s.slug} onClick={() => setSelected(s.slug)} style={{ cursor: "pointer" }}>
                      {selected === s.slug && (
                        <circle cx={s.mapX} cy={s.mapY} r="18" fill="#0096D6" fillOpacity="0.15">
                          <animate attributeName="r" values="14;24;14" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="fill-opacity" values="0.35;0;0.35" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle cx={s.mapX} cy={s.mapY} r={selected === s.slug ? 6 : s.type === "Flagship" ? 5 : 3.5}
                        fill={selected === s.slug ? "#0096D6" : s.type === "Flagship" ? "#B8935A" : "#0A1F44"} />
                    </g>
                  ))}
                </svg>
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-[10.5px] text-[#0E1626]/60">
                  <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0096D6]" /> Selected</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-700" /> Flagship</span>
                  <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0A1F44]" /> Store</span>
                </div>
              </div>

              {selectedStore && (
                <div className="p-5 rounded-2xl bg-[#0A1F44] text-white">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-amber-300">
                    {selectedStore.type === "Flagship" ? "Flagship store" : "HP World"}
                  </div>
                  <h3 className="font-serif text-[22px] mt-1 leading-tight font-medium">{selectedStore.name}</h3>
                  <div className="text-[13px] text-white/70 leading-relaxed mb-4 mt-2">
                    {selectedStore.address} · {selectedStore.pin}
                  </div>
                  <div className="space-y-1.5 text-[13px] mb-5">
                    <div className="inline-flex items-center gap-2"><Phone className="w-3.5 h-3.5 opacity-70" />{selectedStore.phone}</div>
                    <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-70" />{selectedStore.hours}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {selectedStore.services.map((x) => (
                      <span key={x} className="text-[10.5px] px-2 py-1 rounded-full bg-white/10 border border-white/10 inline-flex items-center gap-1">
                        <Check className="w-3 h-3" /> {x}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/stores/${selectedStore.district}/${selectedStore.slug}`}
                      className="flex-1 h-10 rounded-full bg-white text-[#0A1F44] text-[13px] font-semibold inline-flex items-center justify-center gap-1.5 hover:bg-amber-300">
                      View details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <a href={whatsappUrl(waMessages.storeEnquiry(selectedStore.name))} target="_blank" rel="noopener noreferrer"
                      className="flex-1 h-10 rounded-full bg-emerald-600 text-white text-[13px] font-semibold inline-flex items-center justify-center gap-1.5 hover:bg-emerald-700">
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Districts grid */}
      <section className="bg-white border-t border-[#0E1626]/10">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Browse by district</div>
          <h2 className="font-serif font-normal text-[36px] lg:text-[48px] leading-[1] tracking-[-0.02em] max-w-[700px]">
            HP World stores in <span className="italic text-[#0096D6]">every corner</span> of Kerala.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DISTRICTS.map((d) => {
              const count = STORES.filter((s) => s.district === d.slug).length;
              return (
                <Link key={d.slug} href={`/stores/${d.slug}`} className="group p-5 rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/10 hover:border-[#0096D6] transition">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[15px] font-semibold">{d.name}</div>
                    <ChevronRight className="w-4 h-4 text-[#0E1626]/30 group-hover:text-[#0096D6] group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="text-[12px] text-[#0E1626]/60">{count} {count === 1 ? "store" : "stores"}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function Select({ value, onChange, options, prefix = "" }) {
  return (
    <div className="relative">
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="h-9 pl-3 pr-8 rounded-full bg-white border border-[#0E1626]/15 text-[12.5px] font-medium appearance-none outline-none hover:border-[#0E1626]/30 cursor-pointer">
        {options.map((o) => <option key={o} value={o}>{prefix}{o}</option>)}
      </select>
      <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rotate-90 pointer-events-none text-[#0E1626]/50" />
    </div>
  );
}
