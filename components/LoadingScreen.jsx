import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[120] grid place-items-center bg-night"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="relative grid place-items-center">
        <motion.div
          className="absolute h-32 w-32 rounded-full border border-ambered/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-24 w-24 rounded-full border border-linen/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="font-display text-3xl font-semibold tracking-[0.18em] text-linen"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Pavani
        </motion.p>
      </div>
    </motion.div>
  );
}
