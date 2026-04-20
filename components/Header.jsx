"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, User, Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

export default function Header({ active }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/laptops/hp-pavilion-15", label: "Shop", key: "shop" },
    { href: "/business", label: "For business", key: "business" },
    { href: "/stores", label: "Stores", key: "stores" },
    { href: "#", label: "HP Care Pack", key: "care" },
    { href: "#", label: "Support", key: "support" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F2EA]/85 backdrop-blur-md border-b border-[#0E1626]/10">
      <div className="mx-auto max-w-[1400px] px-6 h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0096D6] flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">hp</span>
          </div>
          <div className="leading-tight">
            <div className="text-[18px] font-serif font-medium">HP World</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#0E1626]/60">
              Kerala · Authorised
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[14px]">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={active === l.key ? "text-[#0096D6] font-semibold" : "hover:text-[#0096D6] transition"}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(waMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-emerald-600 text-white text-[12.5px] font-semibold hover:bg-emerald-700"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <Link
            href="/stores"
            aria-label="Store locator"
            className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full hover:bg-white transition"
          >
            <MapPin className="w-[18px] h-[18px]" />
          </Link>
          <button
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full hover:bg-white transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[#0E1626]/10 px-6 py-4 bg-white space-y-3 text-[14px]">
          {links.map((l) => (
            <Link key={l.key} className="block py-1.5 border-b border-[#0E1626]/5 last:border-0" href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
