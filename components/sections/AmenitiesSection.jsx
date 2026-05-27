import { Dumbbell, Palmtree, Sparkles, Utensils, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { amenities } from "../../assets/resortData";
import { fadeUp, staggerContainer } from "../../animations/motion";
import SectionHeading from "../SectionHeading";

const iconMap = {
  Sparkles,
  Waves,
  Utensils,
  Palmtree,
  Dumbbell,
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-bark py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,10,8,0.75),rgba(52,36,27,0.78)),url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1800&q=78')] bg-cover bg-fixed bg-center" />
      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything is close, but nothing feels crowded."
          copy="Wellness, dining, movement, and water are arranged as quiet destinations around the resort."
        />

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
        >
          {amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon];
            return (
              <motion.article
                key={amenity.title}
                variants={fadeUp}
                className="glass-panel group min-h-[245px] p-5 transition duration-500 hover:-translate-y-2 hover:border-ambered/55"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full border border-ambered/30 bg-ambered/10 text-ambered transition group-hover:bg-ambered group-hover:text-night">
                  <Icon size={22} />
                </div>
                <h3 className="mt-8 font-display text-3xl text-linen">{amenity.title}</h3>
                <p className="mt-4 text-sm leading-7 text-champagne/62">{amenity.copy}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
