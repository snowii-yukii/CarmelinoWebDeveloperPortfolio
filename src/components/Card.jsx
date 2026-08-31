import { motion } from "framer-motion";

/**
 * Reusable Premium Card Component
 * Combines Framer Motion viewport reveal effects, a spring hover-lift animation,
 * glassmorphism borders, and a decorative overlay gradient.
 */
export default function Card({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-slate-800/40 p-6 backdrop-blur-md transition-colors duration-300 hover:border-blue-500/30 ${className}`}
      {...props}
    >
      {/* Dynamic ambient highlight glow inside card */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-opacity duration-300" />
      
      {children}
    </motion.div>
  );
}
