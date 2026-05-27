import { Camera, MessageCircle, Play, SendHorizontal } from "lucide-react";
import { navItems } from "../assets/resortData";

const social = [
  { icon: Camera, label: "Instagram" },
  { icon: MessageCircle, label: "Facebook" },
  { icon: Play, label: "YouTube" },
  { icon: SendHorizontal, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-linen/10 bg-night px-4 py-12 md:py-16">
      <div className="section-shell grid gap-10 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div>
          <p className="font-display text-4xl text-linen">Pavani Resorts</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-champagne/60">
            A coastal retreat designed for slow mornings, cinematic sunsets, and
            deeply personal hospitality.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm text-champagne/62">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ambered"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ambered">
            Follow the coast
          </p>
          <div className="mt-5 flex gap-3">
            {social.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-linen/12 text-linen/70 transition hover:border-ambered hover:bg-ambered hover:text-night"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-12 flex flex-col gap-3 border-t border-linen/10 pt-6 text-xs uppercase tracking-[0.2em] text-champagne/42 md:flex-row md:items-center md:justify-between">
        <span>&copy; 2026 Pavani Resorts</span>
        <span>Privacy / Terms / Concierge</span>
      </div>
    </footer>
  );
}
