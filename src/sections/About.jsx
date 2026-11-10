import { motion } from "framer-motion";
import { User, MapPin, Laptop } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-neutral-200/80 dark:border-white/8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-300 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
            Hey, I'm Carms.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-3 leading-relaxed">
            A self-taught full-stack developer from the Philippines, focused on building things that feel as good as they perform.
          </p>
        </div>

        {/* Two-column intro layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">

          {/* Left — Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              I started coding in 2026 out of curiosity — no bootcamp, no degree, just browser tabs and a lot of late nights. Within a year I went from writing HTML files to shipping full-stack applications with authentication, real-time databases, and production deployments.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              I'm drawn to the intersection of clean architecture and tactile design. I care about the small things: loading states that feel intentional, type-safe APIs that never surprise you, and interfaces that respond faster than you expect them to.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              Right now I'm building full-stack systems with <span className="text-neutral-950 dark:text-white font-semibold">Next.js</span>, <span className="text-neutral-950 dark:text-white font-semibold">Supabase</span>, and <span className="text-neutral-950 dark:text-white font-semibold">TypeScript</span> — and always looking for the next problem worth solving.
            </p>
          </motion.div>

          {/* Right — Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-3"
          >
            {/* Location */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/5">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5">Based in</div>
                <div className="text-sm font-semibold text-neutral-950 dark:text-white">Davao City, Philippines</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">UTC+8 · Available for remote work globally</div>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/5">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-xs">
                <Laptop className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5">Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Open to opportunities</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Freelance, contract, or full-time</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { value: "1", label: "Year coding" },
                { value: "5+", label: "Projects shipped" },
                { value: "∞", label: "Tabs open" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/5 text-center"
                >
                  <span className="text-xl font-extrabold text-neutral-950 dark:text-white tracking-tight">{value}</span>
                  <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
