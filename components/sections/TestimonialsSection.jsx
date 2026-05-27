import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "../../assets/resortData";
import SectionHeading from "../SectionHeading";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4300);
    return () => window.clearTimeout(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="bg-warm-radial py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Guests"
          title="The quiet kind of luxury people remember."
          copy="A few words from travelers who came for the coastline and left with a new pace."
        />

        <div className="glass-panel relative min-h-[390px] overflow-hidden p-7 md:p-10 flex flex-col justify-between">
          <div>
            <Quote className="text-ambered/60" size={44} />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <p className="font-display text-4xl leading-tight text-linen md:text-5xl">
                  "{testimonial.quote}"
                </p>
                <div className="mt-10 border-t border-linen/10 pt-6">
                  <p className="text-lg font-semibold text-linen">{testimonial.name}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-champagne/42">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-7 right-7 flex gap-2 md:right-10 md:bottom-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index ? "w-6 bg-ambered" : "w-1.5 bg-linen/30"
                }`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
