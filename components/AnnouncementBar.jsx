import { Sparkles, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export default function AnnouncementBar({ message }) {
  return (
    <div className="bg-[#0A1F44] text-white text-[12px]">
      <div className="mx-auto max-w-[1400px] px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>
            {message || `Authorised HP World · ${SITE.delivery.kerala} on orders above ${SITE.delivery.freeThreshold}`}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-white/80">
          <a className="hover:text-white inline-flex items-center gap-1.5" href={`tel:${SITE.phoneClean}`}>
            <Phone className="w-3.5 h-3.5" /> {SITE.phone}
          </a>
          <a className="hover:text-white" href="/business">Business enquiry</a>
          <a className="hover:text-white" href="/stores">Store locator</a>
        </div>
      </div>
    </div>
  );
}
