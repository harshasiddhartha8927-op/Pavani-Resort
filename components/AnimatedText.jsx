import { motion } from "framer-motion";
import { revealWord, staggerContainer } from "../animations/motion";

export default function AnimatedText({ text, className = "" }) {
  return (
    <motion.span
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {text.split(" ").map((word, idx) => (
        <span className="split-word mr-[0.17em]" key={`${word}-${idx}`}>
          <motion.span variants={revealWord}>{word}</motion.span>
        </span>
      ))}
    </motion.span>
  );
}
