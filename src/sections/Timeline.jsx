import { motion } from "framer-motion";
import { GraduationCap, Code2, Server, Compass, Lightbulb } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    year: "2024 (Q1-Q2)",
    title: "Foundations of Web Development",
    description: "Began journey by mastering HTML5 structure, modern CSS3 layout strategies (Grid, Flexbox), and browser compliance rules.",
    icon: GraduationCap,
  },
  {
    year: "2024 (Q3-Q4)",
    title: "Static Projects & Responsive Layouts",
    description: "Built clean responsive mockups, static business landing pages, and learned SEO principles and web accessibility (WCAG).",
    icon: Lightbulb,
  },
  {
    year: "2025 (Q1-Q2)",
    title: "Interactive Client-Side Apps (React)",
    description: "Transitioned to building SPA layouts using React. Mastered state management, Vite builders, Framer Motion, and component reuse.",
    icon: Code2,
  },
  {
    year: "2025 (Q3-Q4)",
    title: "Full-Stack Data Engineering",
    description: "Expanded skills to the backend. Created secure RESTful APIs using Node, Express, MongoDB, SQL, and integrated JWT authentication.",
    icon: Server,
  },
  {
    year: "2026 (Present)",
    title: "System Performance & Architecture",
    description: "Currently researching server-side performance caching, web vitals optimization (Lighthouse 95+), and automated CI/CD tooling.",
    icon: Compass,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            Career Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Learning Journey & Technical Milestones
          </h3>
          <p className="text-sm text-slate-400 max-w-md mt-3 leading-relaxed font-normal">
            A transparent timeline of hands-on technical acquisition, building progressively complex software models.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-4" />
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
