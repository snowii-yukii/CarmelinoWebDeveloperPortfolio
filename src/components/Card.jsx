import { motion } from "framer-motion";

/**
 * Reusable Monochromatic Card Component
 * Combines Framer Motion viewport reveal, tactile spring hover-lift,
 * subtle white border glassmorphism, and physical top-edge reflection.
 */
export default function Card({ children, className = "", delay = 0, hover = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      whileTap={hover ? { scale: 0.995 } : undefined}
      className={`bento-card relative overflow-hidden rounded-2xl p-6 ${className}`}
      {...props}
    >
      {/* Tactile top-edge reflection line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </motion.div>
  );
}
