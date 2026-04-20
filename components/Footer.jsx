import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { SITE } from "@/data/site";
import { DISTRICTS } from "@/data/districts";

export default function Footer() {
  return (
    <footer className="bg-[#0A1626] text-white/80">
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#0096D6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">hp</span>
            </div>
            <div className="text-[20px] text-white font-serif font-medium">HP World Kerala</div>
          </div>
          <p className="text-[13px] leading-[1.7] text-white/60 max-w-[360px]">
            {SITE.tagline}. Genuine HP laptops, desktops, printers, accessories and
            consumables — with expert service across all {SITE.totalDistricts} districts.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: Facebook, href: SITE.social.facebook },
              { Icon: Instagram, href: SITE.social.instagram },
              { Icon: Youtube, href: SITE.social.youtube },
              { Icon: Twitter, href: SITE.social.twitter },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Shop</div>
          <ul className="space-y-2.5 text-[13px]">
            <li><Link href="/laptops/hp-pavilion-15" className="hover:text-white">Laptops</Link></li>
            <li><Link href="/laptops/hp-envy-desktop-te02" className="hover:text-white">Desktops</Link></li>
            <li><Link href="/laptops/hp-smart-tank-580" className="hover:text-white">Printers</Link></li>
            <li><Link href="/laptops/hp-280-toner" className="hover:text-white">Consumables</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Company</div>
          <ul className="space-y-2.5 text-[13px]">
            <li><Link href="/stores" className="hover:text-white">Store locator</Link></li>
            <li><Link href="/business" className="hover:text-white">Business enquiry</Link></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Reach us</div>
          <ul className="space-y-2.5 text-[13px]">
            <li className="inline-flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <a href={`tel:${SITE.phoneClean}`} className="hover:text-white">{SITE.phone}</a>
            </li>
            <li className="inline-flex items-start gap-2">
              <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>{SITE.headOffice.line1} · {SITE.headOffice.line2} · {SITE.headOffice.pin}</span>
            </li>
            <li className="inline-flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>{SITE.hours.notes}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SEO: district link bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">
            HP World stores across Kerala
          </div>
          <p className="text-[12.5px] leading-[1.9] text-white/50">
            {DISTRICTS.map((d, i) => (
              <span key={d.slug}>
                <Link href={`/stores/${d.slug}`} className="hover:text-white">
                  HP World {d.name}
                </Link>
                {i < DISTRICTS.length - 1 && " · "}
              </span>
            ))}
          </p>
          <p className="text-[12.5px] leading-[1.9] text-white/50 mt-6 max-w-[1000px]">
            Buy genuine HP laptops, desktops, printers, monitors, accessories and ink
            cartridges online or at any of our {SITE.totalStores} HP World stores across Kerala —
            Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Kannur and more.
            Authorised HP reseller with in-store demos, no-cost EMI, exchange offers,
            GST billing and pan-Kerala free delivery. Explore HP Pavilion, HP Omen,
            HP EliteBook, HP Spectre, HP OmniBook, HP Envy, HP LaserJet, HP Smart Tank
            and HP DeskJet — all backed by HP India warranty and HP Care Pack.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-[11.5px] text-white/50">
          <div>© {new Date().getFullYear()} {SITE.businessName} · {SITE.domain} · All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Shipping policy</a>
            <a href="#" className="hover:text-white">Refund policy</a>
          </div>
          <div className="text-white/40">
            HP, HP World and related marks are trademarks of HP Development Company, L.P.
          </div>
        </div>
      </div>
    </footer>
  );
}
