import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 170, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 170, damping: 22 });

  useEffect(() => {
    const handleMove = (event) => {
      x.set(event.clientX - 9);
      y.set(event.clientY - 9);
      dotX.set(event.clientX - 2.5);
      dotY.set(event.clientY - 2.5);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [dotX, dotY, x, y]);

  return (
    <>
      <motion.div className="cursor-follower animate-pulse duration-1000" style={{ x: smoothX, y: smoothY }} />
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
    </>
  );
}
