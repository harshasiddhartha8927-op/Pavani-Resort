import { motion } from "framer-motion";
import { gallery } from "../../assets/resortData";
import { fadeUp, staggerContainer } from "../../animations/motion";
import SectionHeading from "../SectionHeading";

const sizeClass = {
  tall: "md:row-span-2 md:min-h-[540px]",
  wide: "md:col-span-2 md:min-h-[315px]",
  small: "md:min-h-[315px]",
};

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-night py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="A visual rhythm of water, stone, shade, and fire."
          copy="A portfolio of moments from arrival court to pool pavilion, composed with the restraint of a private coastal estate."
        />

        <motion.div
          className="mt-14 grid auto-rows-[280px] gap-4 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {gallery.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className={`group image-wash relative overflow-hidden ${sizeClass[item.size]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 translate-y-3 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-3xl text-linen">{item.title}</p>
                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-ambered">
                  Pavani Resorts
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
