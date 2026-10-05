import { Globe, Database, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/Card";

const SERVICES = [
  {
    title: "Full-Stack Next.js Apps",
    description:
      "End-to-end application development with Next.js App Router — server components, streaming, server actions, and type-safe data fetching on the edge.",
    icon: Globe,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Supabase & Database Design",
    description:
      "PostgreSQL schema design, Row-Level Security policies, realtime subscriptions, Edge Functions, and automated Supabase migrations baked into CI/CD.",
    icon: Database,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Tactile UI & Component Systems",
    description:
      "Polished React 19 component libraries with Framer Motion spring physics, Tailwind CSS v4 design tokens, and sub-50ms interaction feedback.",
    icon: Zap,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    title: "API Architecture & Integration",
    description:
      "RESTful and webhook-driven backends with Node.js and Express, Prisma ORM, JWT auth, payload validation, and clean, documented API contracts.",
    icon: Layers,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
];



export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>What I Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Full-Stack Engineering Services
          </h2>
          <p className="text-slate-400 max-w-xl mt-2 text-sm leading-relaxed">
            From database schema to deployed UI — complete application builds with modern architecture and production-grade reliability.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                delay={index * 0.1}
                hover={true}
                className="flex flex-col items-start gap-4 p-6 sm:p-7"
              >
                <div className={`p-3 rounded-xl shrink-0 border ${service.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}