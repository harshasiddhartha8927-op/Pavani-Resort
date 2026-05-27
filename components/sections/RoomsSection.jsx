import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "../../assets/resortData";
import { fadeUp, staggerContainer } from "../../animations/motion";
import SectionHeading from "../SectionHeading";

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-night py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Suites and villas"
            title="Rooms with the hush of a private estate."
            copy="Layered textures, shaded terraces, and room plans made for long stays."
          />
          <p className="max-w-sm text-sm leading-7 text-champagne/56">
            Prices are nightly opening rates and include breakfast, airport
            transfers, and daily wellness programming.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
        >
          {rooms.map((room) => (
            <motion.article
              key={room.name}
              variants={fadeUp}
              className="group overflow-hidden border border-linen/10 bg-cocoa flex flex-col justify-between"
            >
              <div>
                <div className="image-wash aspect-[4/5] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl leading-none text-linen">
                      {room.name}
                    </h3>
                    <ArrowUpRight
                      size={22}
                      className="mt-1 text-ambered transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                    />
                  </div>
                  <p className="mt-5 text-sm leading-7 text-champagne/64">{room.detail}</p>
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <div className="flex items-center justify-between border-t border-linen/10 pt-5 text-sm">
                  <span className="uppercase tracking-[0.2em] text-champagne/42">
                    {room.size}
                  </span>
                  <span className="font-display text-3xl text-ambered">
                    {room.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
