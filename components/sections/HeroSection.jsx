import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { heroSlides } from "../../assets/resortData";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22 });
  const imageX = useTransform(smoothX, [-0.5, 0.5], ["-1.6%", "1.6%"]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], ["-1.2%", "1.2%"]);
  const frameX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const frameY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-night"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={heroSlides[active].image}
          className="absolute inset-0 scale-[1.04] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroSlides[active].image})`,
            x: imageX,
            y: imageY,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.04 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label={heroSlides[active].title}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.78),rgba(12,10,8,0.3)_48%,rgba(12,10,8,0.74)),linear-gradient(180deg,rgba(12,10,8,0.22),rgba(12,10,8,0.86))]" />

      <motion.div
        className="pointer-events-none absolute right-[10vw] top-[22vh] hidden h-52 w-52 border border-linen/18 md:block"
        style={{ x: frameX, y: frameY }}
      >
        <div className="absolute -bottom-5 -left-5 h-20 w-20 border-b border-l border-ambered/70" />
        <div className="absolute -right-5 -top-5 h-20 w-20 border-r border-t border-ambered/70" />
      </motion.div>

      <div className="section-shell relative z-10 flex min-h-screen items-end pb-10 pt-32 md:items-center md:pb-0">
        <div className="max-w-5xl">
          <motion.p
            className="luxury-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Private coastal sanctuary
          </motion.p>

          <h1 className="mt-6 max-w-5xl font-display text-[18vw] font-semibold leading-[0.78] text-linen md:text-[12vw] lg:text-[9.5rem]">
            <AnimatedText text="Pavani Resorts" />
          </h1>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-champagne/78 md:text-2xl md:leading-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
          >
            A warm, cinematic retreat where ocean villas, quiet rituals, and
            intuitive service unfold along a secluded shoreline.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
          >
            <MagneticButton href="#booking">Book the coast</MagneticButton>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-linen/75 transition hover:text-ambered"
            >
              Explore
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#booking"
        className="glass-panel absolute bottom-7 right-4 z-20 hidden rounded-full px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] text-linen transition hover:border-ambered/60 hover:text-ambered md:inline-flex lg:right-10"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.7 }}
      >
        Book Now
      </motion.a>

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 gap-2 md:flex">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show ${slide.title}`}
            className={`h-[2px] w-12 transition ${
              active === index ? "bg-ambered" : "bg-linen/30"
            }`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
