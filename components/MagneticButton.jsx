import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  className = "",
  variant = "solid",
  type = "button",
  onClick,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });
  const sheenX = useTransform(springX, [-18, 18], ["-30%", "130%"]);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-7 text-sm font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer";
  const styles =
    variant === "outline"
      ? "border border-linen/25 bg-linen/5 text-linen hover:border-ambered/70"
      : "bg-ambered text-night hover:bg-linen";

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className={`${base} ${styles} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 w-16 -skew-x-12 bg-white/35 blur-sm"
        style={{ x: sheenX }}
      />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} aria-label={typeof children === "string" ? children : undefined} className="inline-block">
        {content}
      </a>
    );
  }

  return <button type={type} className="bg-transparent border-0 p-0 inline-block focus:outline-none">{content}</button>;
}
