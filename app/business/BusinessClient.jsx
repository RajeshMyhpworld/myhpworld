"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Building2, Check, Mail, Phone, Clock,
  Briefcase, Stethoscope, GraduationCap, Landmark, Factory, Users,
  FileText, Handshake, Wrench, ShieldCheck, TrendingUp, Award,
  Sparkles, Laptop, Monitor, Printer, MessageCircle, ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/data/site";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

export default function BusinessClient() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", city: "",
    industry: "", category: "", quantity: "", message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill in Name, Email and Phone.");
      return;
    }
    // Opens WhatsApp with a pre-filled, formatted enquiry
    window.open(whatsappUrl(waMessages.business(form)), "_blank");
  };

  return (
    <>
      <AnnouncementBar message="Dedicated B2B desk · GST invoicing · Pan-Kerala service · GeM listed" />
      <Header active="business" />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 pt-6 text-[12px] text-[#0E1626]/60">
        <Link href="/" className="hover:text-[#0096D6]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[#0E1626]">For business</span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-16 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#0E1626]/60 mb-6">
            <Building2 className="w-3.5 h-3.5" /> HP World for business · Kerala
          </div>
          <h1 className="font-serif font-normal text-[52px] sm:text-[72px] lg:text-[88px] leading-[0.93] tracking-[-0.02em]">
            Equip your
            <br />
            workforce.
            <br />
            <span className="italic text-[#0096D6]">Scale your ambition.</span>
          </h1>
          <p className="mt-8 max-w-[560px] text-[16px] leading-[1.7] text-[#0E1626]/70">
            From Infopark startups to Kerala's largest hospitals and government departments — we supply,
            install, service and maintain HP technology across every district. One point of contact,
            {SITE.totalStores} stores to back it up.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#enquiry"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-semibold hover:bg-[#0096D6]">
              Request a business quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href={whatsappUrl("Hi HP World Business team, I'd like to discuss a business requirement. Please share your details.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-600 text-white text-[14px] font-semibold hover:bg-emerald-700">
              <MessageCircle className="w-4 h-4" /> WhatsApp business team
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[640px]">
            {[
              { k: "500+", v: "Business clients" },
              { k: `${SITE.yearsInBusiness} yrs`, v: "Enterprise experience" },
              { k: "GeM", v: "Listed supplier" },
              { k: "48 hr", v: "Pan-Kerala delivery" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-[32px] leading-none">{s.k}</div>
                <div className="mt-1.5 text-[11.5px] text-[#0E1626]/60 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#0A1F44] p-8">
            <div className="text-white">
              <div className="text-[10px] tracking-[0.22em] uppercase text-amber-300 mb-2">Enterprise spotlight</div>
              <div className="font-serif text-[28px] leading-[1.05]">HP EliteBook 840 G11</div>
              <div className="text-[12px] text-white/60 mt-1">Intel Core Ultra vPro · AI-ready</div>
            </div>
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 aspect-[16/10] rounded-md bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
              <span className="text-white/80 text-xs tracking-[0.3em]">hp</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white grid grid-cols-3 gap-2 text-[11px]">
              {[
                { k: "3 yr", v: "Warranty" },
                { k: "vPro", v: "Security" },
                { k: "AI", v: "Accelerated" },
              ].map((x) => (
                <div key={x.v} className="p-2.5 rounded-lg bg-white/10 border border-white/15">
                  <div className="font-bold text-[15px]">{x.k}</div>
                  <div className="text-white/60">{x.v}</div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-[260px] h-[260px] rounded-full bg-[#0096D6]/20 blur-3xl" />
          </div>
          <div className="absolute -top-4 -left-4 bg-amber-300 rounded-2xl px-4 py-3 shadow-sm">
            <div className="text-[10px] tracking-[0.2em] uppercase text-amber-900 font-bold">GeM listed</div>
            <div className="text-[13px] font-bold text-[#0A1F44] mt-0.5">Govt tenders welcome</div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-[#0E1626]/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="max-w-[640px] mb-10">
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Industries we serve</div>
            <h2 className="font-serif font-normal text-[36px] lg:text-[52px] leading-[1] tracking-[-0.02em]">
              Every sector. <span className="italic text-[#0096D6]">Every scale.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { Icon: Briefcase, t: "IT & ITES", s: "Serving Infopark, Technopark and SmartCity tenants across Kerala." },
              { Icon: Stethoscope, t: "Healthcare", s: "Hospital IT infrastructure, medical workstations and secure printers." },
              { Icon: GraduationCap, t: "Education", s: "Computer labs for schools, colleges and universities with bulk pricing." },
              { Icon: Landmark, t: "Government", s: "GeM-listed supplier for state departments, PSUs and local bodies." },
              { Icon: Factory, t: "Manufacturing & trade", s: "Ruggedised devices for shop floors, print infrastructure, AMC-backed." },
              { Icon: Users, t: "SMB & startups", s: "Starter kits for early-stage teams — zero-cost EMI and free setup." },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="p-6 rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5 hover:border-[#0096D6]/30 transition">
                <Icon className="w-8 h-8 text-[#0A1F44] mb-4" strokeWidth={1.3} />
                <div className="font-serif text-[17px] font-semibold mb-1.5">{t}</div>
                <div className="text-[13px] text-[#0E1626]/70 leading-[1.65]">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-10">
          <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">Commercial catalogue</div>
          <h2 className="font-serif font-normal text-[36px] lg:text-[52px] leading-[1] tracking-[-0.02em]">
            HP's commercial range
            <br />
            <span className="italic text-[#0096D6]">built for business.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            {
              Icon: Laptop, cat: "Business laptops",
              series: ["HP EliteBook series", "HP ProBook series", "HP ZBook workstations", "HP Dragonfly"],
              desc: "vPro-enabled, self-healing BIOS, 3-year warranty standard.",
              hue: "from-sky-50 to-slate-100", accent: "text-sky-900",
            },
            {
              Icon: Monitor, cat: "Desktops & workstations",
              series: ["HP EliteDesk & ProDesk", "HP Z Workstations", "HP Thin Clients", "HP EliteOne AIO"],
              desc: "Certified for CAD, rendering, data science workloads.",
              hue: "from-slate-100 to-stone-50", accent: "text-slate-900",
            },
            {
              Icon: Printer, cat: "Print infrastructure",
              series: ["HP LaserJet Enterprise", "HP Color LaserJet MFP", "HP PageWide Pro", "HP OfficeJet Pro"],
              desc: "Fleet-manageable, secure print, TCO-optimised.",
              hue: "from-emerald-50 to-stone-50", accent: "text-emerald-900",
            },
          ].map(({ Icon, cat, series, desc, hue, accent }) => (
            <div key={cat} className="rounded-2xl bg-white border border-[#0E1626]/10 overflow-hidden">
              <div className={`relative aspect-[16/9] bg-gradient-to-br ${hue} p-6 flex items-end`}>
                <Icon className="w-10 h-10 text-[#0A1F44]" strokeWidth={1.2} />
                <div className="absolute top-5 right-5 w-20 h-14 rounded bg-white/70 border border-white flex items-center justify-center">
                  <span className={`text-[10px] tracking-[0.3em] ${accent} font-bold`}>hp</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[20px] font-medium">{cat}</h3>
                <p className="text-[13px] text-[#0E1626]/65 mt-2 leading-[1.65]">{desc}</p>
                <ul className="mt-4 space-y-1.5 text-[12.5px]">
                  {series.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white border-y border-[#0E1626]/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="max-w-[640px] mb-10">
            <div className="text-[12px] tracking-[0.22em] uppercase text-[#0E1626]/60 mb-3">B2B services</div>
            <h2 className="font-serif font-normal text-[36px] lg:text-[52px] leading-[1] tracking-[-0.02em]">
              We don't just sell. <span className="italic text-[#0096D6]">We support.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { Icon: FileText, t: "GST invoicing", s: "Proper GST invoices · input credit ready" },
              { Icon: Handshake, t: "Volume pricing", s: "Tiered discounts from 10 units upwards" },
              { Icon: Wrench, t: "On-site installation", s: "Engineers deploy and image across Kerala" },
              { Icon: ShieldCheck, t: "AMC contracts", s: "Annual maintenance with SLA-backed response" },
              { Icon: TrendingUp, t: "Leasing & buybacks", s: "OPEX-friendly options for corporates" },
              { Icon: Award, t: "HP Care Pack", s: "Extended warranty with on-site repair" },
              { Icon: Landmark, t: "GeM & tender support", s: "GeM-listed · GFR compliance in-house" },
              { Icon: Building2, t: "Account manager", s: "One named contact, start to finish" },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="p-5 rounded-2xl bg-[#F6F2EA] border border-[#0E1626]/5">
                <Icon className="w-6 h-6 text-[#0A1F44] mb-3" strokeWidth={1.3} />
                <div className="text-[14.5px] font-semibold">{t}</div>
                <div className="text-[12px] text-[#0E1626]/65 mt-1 leading-[1.55]">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="enquiry" className="bg-[#0A1F44] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[12px] tracking-[0.22em] uppercase text-amber-300 mb-3">Get a business quote</div>
            <h2 className="font-serif font-normal text-[40px] lg:text-[56px] leading-[1] tracking-[-0.02em] text-white">
              Tell us what you need.
              <br />
              <span className="italic text-[#7CC3E8]">We reply on WhatsApp.</span>
            </h2>
            <p className="mt-6 text-[14.5px] text-white/70 leading-[1.7]">
              Fill in the form — tapping Submit will open WhatsApp with your details pre-filled.
              Our B2B team will respond with a formal GST-compliant quote within 4 hours (business hours).
            </p>
            <div className="mt-10 space-y-4 text-[13.5px] text-white/80">
              {[
                { Icon: Clock, t: "4-hour response", s: "On all enquiries during business hours" },
                { Icon: FileText, t: "Formal GST quote", s: "Tender-ready PDF document" },
                { Icon: Handshake, t: "Dedicated account manager", s: "One named contact, start to finish" },
              ].map(({ Icon, t, s }) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t}</div>
                    <div className="text-white/60 text-[12.5px]">{s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-3">Prefer to talk?</div>
              <div className="space-y-2.5 text-[13.5px]">
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-white/60" /> {SITE.phone}</div>
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-white/60" /> {SITE.email}</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-white/60" /> Mon–Sat · {SITE.hours.weekday}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 lg:p-8 rounded-[24px] bg-white text-[#0E1626]">
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Your name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Full name" />
                <Field label="Company / organisation *" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Company name" />
                <Field label="Work email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="name@company.com" />
                <Field label="Mobile number *" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+91" />
                <Field label="City / district" value={form.city} onChange={(v) => setForm({ ...form, city: v })} placeholder="e.g. Kochi" />
                <SelectField label="Industry" value={form.industry} onChange={(v) => setForm({ ...form, industry: v })}
                  options={["Select industry", "IT & ITES", "Healthcare", "Education", "Government / PSU", "Manufacturing", "Retail", "Startup / SMB", "Other"]} />
                <SelectField label="Product category *" value={form.category} onChange={(v) => setForm({ ...form, category: v })}
                  options={["Select category", "Business laptops", "Desktops & workstations", "Printers & MFPs", "Mixed deployment", "AMC / service only"]} />
                <SelectField label="Approximate quantity *" value={form.quantity} onChange={(v) => setForm({ ...form, quantity: v })}
                  options={["Select quantity", "Under 10 units", "10 – 25 units", "25 – 100 units", "100 – 500 units", "500+ units"]} />
                <div className="sm:col-span-2">
                  <label className="text-[11.5px] uppercase tracking-[0.15em] text-[#0E1626]/60 font-medium">Additional details</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Anything specific? Timeline, AMC requirements, deployment location, budget range, tender reference…"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl bg-[#F6F2EA] border border-[#0E1626]/10 outline-none focus:border-[#0096D6] text-[14px] resize-none" />
                </div>
              </div>

              <button type="button" onClick={handleSubmit}
                className="mt-6 w-full h-12 rounded-full bg-emerald-600 text-white text-[14px] font-semibold hover:bg-emerald-700 inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> Submit & continue on WhatsApp
              </button>
              <p className="mt-3 text-[11px] text-[#0E1626]/55 text-center">
                Tapping Submit opens WhatsApp with your details. No email or phone verification needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="text-[11.5px] uppercase tracking-[0.15em] text-[#0E1626]/60 font-medium">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="mt-1.5 w-full h-11 px-4 rounded-xl bg-[#F6F2EA] border border-[#0E1626]/10 outline-none focus:border-[#0096D6] text-[14px]" />
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-[11.5px] uppercase tracking-[0.15em] text-[#0E1626]/60 font-medium">{label}</label>
      <div className="mt-1.5 relative">
        <select value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 px-4 pr-10 rounded-xl bg-[#F6F2EA] border border-[#0E1626]/10 outline-none focus:border-[#0096D6] text-[14px] appearance-none cursor-pointer">
          {options.map((o, i) => <option key={o} value={i === 0 ? "" : o} disabled={i === 0}>{o}</option>)}
        </select>
        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 pointer-events-none text-[#0E1626]/50" />
      </div>
    </div>
  );
}
