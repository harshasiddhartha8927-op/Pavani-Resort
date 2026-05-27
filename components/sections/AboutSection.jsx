import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "../../animations/motion";
import SectionHeading from "../SectionHeading";

const markers = ["34 ocean villas", "7 private coves", "1 quiet coastline"];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-cocoa py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="image-wash parallax-image relative min-h-[520px] overflow-hidden rounded-none md:min-h-[650px]"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=84"
            alt="Luxury suite with ocean-facing bed"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="lg:pl-8">
          <SectionHeading
            eyebrow="The resort"
            title="Designed for unhurried days and theatrical nights."
            copy="Pavani Resorts pairs precise contemporary architecture with warm regional materials, coastal gardens, and a service rhythm that feels invisible until the exact moment you need it."
          />

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {markers.map((marker) => (
              <motion.div
                key={marker}
                variants={fadeUp}
                className="border-t border-linen/12 pt-4 text-sm uppercase tracking-[0.16em] text-champagne/64"
              >
                {marker}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="gsap-reveal mt-10 max-w-2xl text-xl leading-9 text-linen/82"
          >
            Each path, pool, and pavilion is composed as a sequence: arrival in
            shadow, release into sunlight, dinner under dark timber, then the
            soft theatre of the sea after midnight.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
