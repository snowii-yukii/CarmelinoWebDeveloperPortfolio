import { motion } from "framer-motion";
import { GraduationCap, Code2, Compass, Lightbulb } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    year: "2026 · Q1",
    title: "Web Foundations & UI Engineering",
    description: "Mastered semantic HTML5, modern CSS layouts (Grid, Flexbox), and responsive UI patterns. Transitioned from static concepts to building and deploying production-ready client interfaces on Vercel.",
    icon: GraduationCap,
    index: "01",
  },
  {
    year: "2026 · Q2–Q3",
    title: "Full-Stack JavaScript & RESTful Services",
    description: "Built scalable full-stack apps using React, Node.js, Express, and MongoDB. Designed REST APIs, implemented JWT authentication, managed state with modern React hooks, and handled end-to-end CRUD operations.",
    icon: Lightbulb,
    index: "02",
  },
  {
    year: "2026 · Q4",
    title: "Next.js, PostgreSQL & System Architecture",
    description: "Engineering performant, production-grade systems with Next.js App Router, TypeScript, and relational PostgreSQL databases. Focused on Server Actions, SSR/SSG caching strategies, and robust data schema design.",
    icon: Code2,
    index: "03",
    isCurrent: true,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 relative border-t border-neutral-200/80 dark:border-white/8"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-300 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Learning Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
            Technical Journey.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-3 leading-relaxed">
            From a first HTML file to full-stack production systems — a years of building progressively harder things.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical rule */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-white/8" />

          <div className="space-y-2">
            {TIMELINE_EVENTS.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.08,
                  }}
                  className="relative flex items-start gap-5 pl-12"
                >
                  {/* Dot / Icon Marker */}
                  <div
                    className={`absolute left-0 top-3.5 w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                      event.isCurrent
                        ? "bg-neutral-950 dark:bg-white border-neutral-950 dark:border-white text-white dark:text-black"
                        : "bg-white dark:bg-neutral-950 border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full mb-2 p-5 rounded-2xl border transition-colors ${
                      event.isCurrent
                        ? "bg-neutral-50 dark:bg-neutral-900/60 border-neutral-300 dark:border-white/15"
                        : "bg-neutral-50/50 dark:bg-transparent border-neutral-200/80 dark:border-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 gap-3">
                      <span className="text-[10px] font-mono font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                        {event.year}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-300 dark:text-neutral-700">
                        {event.index}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-neutral-950 dark:text-white mb-1 leading-snug">
                      {event.title}
                      {event.isCurrent && (
                        <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold align-middle">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse inline-block" />
                          current
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
