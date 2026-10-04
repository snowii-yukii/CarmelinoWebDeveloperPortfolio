import { motion } from "framer-motion";

/**
 * Reusable Premium Card Component
 * Combines Framer Motion viewport reveal effects, a spring hover-lift animation,
 * glassmorphism borders, and a decorative overlay gradient.
 */
export default function Card({ children, className = "", delay = 0, hover = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`bento-card relative overflow-hidden rounded-2xl p-6 ${className}`}
      {...props}
    >
      {/* Subtle top-edge light reflection for tactile physical feel */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      
      {children}
    </motion.div>
  );
}
