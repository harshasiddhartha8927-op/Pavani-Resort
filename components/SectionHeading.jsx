import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/motion";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className = "",
}) {
  const centered = align === "center";

  return (
    <motion.div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
    >
      <motion.p
        className={`luxury-kicker ${centered ? "justify-center before:hidden" : ""}`}
        variants={fadeUp}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-linen md:text-7xl"
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {copy && (
        <motion.p
          className="mt-6 max-w-2xl text-base leading-8 text-champagne/68 md:text-lg"
          variants={fadeUp}
        >
          {copy}
        </motion.p>
      )}
    </motion.div>
  );
}
