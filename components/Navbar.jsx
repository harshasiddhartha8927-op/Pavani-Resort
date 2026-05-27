import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "../assets/resortData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-linen/10 bg-night/78 py-3 shadow-glass backdrop-blur-2xl"
            : "py-5"
        }`}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between">
          <a href="#home" className="group flex items-center gap-3" onClick={close}>
            <span className="grid h-9 w-9 place-items-center border border-ambered/50 bg-linen/5 font-display text-xl text-ambered transition-colors group-hover:bg-ambered group-hover:text-night">
              P
            </span>
            <span className="font-display text-2xl font-semibold text-linen">Pavani</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-xs font-bold uppercase tracking-[0.22em] text-linen/62 transition-colors hover:text-ambered"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#booking"
              className="rounded-full border border-linen/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-linen transition hover:border-ambered/70 hover:text-ambered"
            >
              Reserve
            </a>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-linen/15 text-linen lg:hidden focus:outline-none"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] bg-night/96 px-5 py-5 backdrop-blur-2xl lg:hidden flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-linen">Pavani Resorts</span>
                <button
                  className="grid h-11 w-11 place-items-center rounded-full border border-linen/15 text-linen"
                  type="button"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <X size={20} />
                </button>
              </div>
              <motion.nav
                className="mt-16 grid gap-5"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.08 } },
                  closed: {},
                }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="border-b border-linen/10 pb-4 font-display text-5xl text-linen block"
                    variants={{
                      closed: { opacity: 0, y: 20 },
                      open: { opacity: 1, y: 0 },
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </div>
            <div className="pb-6">
              <a
                href="#booking"
                onClick={close}
                className="w-full text-center block rounded-full border border-ambered/50 bg-ambered/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ambered transition hover:bg-ambered hover:text-night"
              >
                Book Your Stay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
