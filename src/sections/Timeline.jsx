import { motion } from "framer-motion";
import { GraduationCap, Code2, Server, Compass, Lightbulb } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    year: "2024 (Q1-Q2)",
    title: "HTML, CSS & Web Foundations",
    description: "Began with semantic HTML5, modern CSS3 layout (Grid, Flexbox), and responsive design principles. First real deployments to Vercel.",
    icon: GraduationCap,
  },
  {
    year: "2024 (Q3-Q4)",
    title: "JavaScript & Interactive Interfaces",
    description: "Moved into ES6+ JavaScript, DOM manipulation, and event-driven patterns. Built interactive UI components from scratch.",
    icon: Lightbulb,
  },
  {
    year: "2025 (Q1-Q2)",
    title: "React SPA & Component Architecture",
    description: "Adopted React — hooks, context, state management, Framer Motion animations, and reusable component systems with Tailwind CSS.",
    icon: Code2,
  },
  {
    year: "2025 (Q3-Q4)",
    title: "Backend & RESTful API Engineering",
    description: "Built production-grade REST APIs with Node.js, Express, PostgreSQL, Prisma, and JWT authentication. First full-stack deployments.",
    icon: Server,
  },
  {
    year: "2026 (Now)",
    title: "Next.js, Supabase & Full-Stack Systems",
    description: "Currently building full-stack apps with Next.js App Router, Supabase PostgreSQL & RLS, TypeScript, and AI-augmented engineering workflows.",
    icon: Compass,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Learning Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Technical Journey
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mt-2 leading-relaxed">
            From first HTML file to full-stack production deployments — two years of building progressively complex systems.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
          {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-800 -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Marker */}
                  <div className="absolute left-0 md:left-1/2 top-1.5 md:top-auto h-10 w-10 rounded-full border border-slate-800 bg-[#0F172A] flex items-center justify-center -translate-x-[20px] md:-translate-x-1/2 z-10 text-blue-500 group">
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  {/* Empty Spacer Column (Desktop) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-8 md:pl-12 md:pr-12"
                  >
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl relative">
                      {/* Triangle Pointer (Desktop only) */}
                      <div
                        className={`hidden md:block absolute top-[22px] w-0 h-0 border-y-8 border-y-transparent ${
                          isEven
                            ? "right-full border-r-[10px] border-r-slate-800/40"
                            : "left-full border-l-[10px] border-l-slate-800/40"
                        }`}
                      />

                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                        {event.year}
                      </span>
                      <h4 className="text-md font-bold text-white mb-2 leading-snug tracking-tight">
                        {event.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
