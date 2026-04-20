"use client";
import { MessageCircle } from "lucide-react";
import { whatsappUrl, waMessages } from "@/lib/whatsapp";

// A sticky button that appears bottom-right on every page
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(waMessages.general())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 h-14 pl-4 pr-5 rounded-full bg-emerald-600 text-white font-semibold text-[14px] shadow-lg hover:bg-emerald-700 hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
