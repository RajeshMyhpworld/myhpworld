import Link from "next/link";
import { ArrowRight, Home, MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F6F2EA] flex items-center justify-center px-6 py-20">
      <div className="max-w-[560px] text-center">
        <div className="font-serif text-[140px] leading-none text-[#0096D6] italic font-light">
          404
        </div>
        <h1 className="font-serif font-normal text-[32px] leading-tight tracking-tight mt-4">
          This page wandered off to another store.
        </h1>
        <p className="mt-4 text-[14px] text-[#0E1626]/65 leading-[1.7]">
          The page you're looking for doesn't exist — maybe it was moved, renamed, or the URL has a typo.
          Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0A1F44] text-white text-[14px] font-semibold hover:bg-[#0096D6]">
            <Home className="w-4 h-4" /> Go home
          </Link>
          <Link href="/stores" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#0E1626]/20 text-[14px] font-medium hover:bg-white">
            <MapPin className="w-4 h-4" /> Find a store
          </Link>
          <a href={whatsappUrl(waMessages.general())} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-600 text-white text-[14px] font-semibold hover:bg-emerald-700">
            <MessageCircle className="w-4 h-4" /> WhatsApp us
          </a>
        </div>
      </div>
    </main>
  );
}
