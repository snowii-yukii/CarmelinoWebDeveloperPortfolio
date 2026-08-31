import { motion } from "framer-motion";
import { Cpu, Layout, FileCode, Server, Database, GitBranch } from "lucide-react";

const TECHNOLOGIES = [
  {
    name: "React",
    category: "Frontend",
    description: "Component architecture & state management for responsive interfaces.",
    icon: Cpu,
    color: "text-blue-400 border-blue-500/20",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first design systems for fast loading speeds & easy scaling.",
    icon: Layout,
    color: "text-sky-400 border-sky-500/20",
  },
  {
    name: "JavaScript",
    category: "Language",
    description: "Modern ES6+ coding for reactive logic, API handling, & calculations.",
    icon: FileCode,
    color: "text-yellow-400 border-yellow-500/20",
  },
  {
    name: "Node & Express",
    category: "Backend",
    description: "Secure, performant REST APIs & server logic to handle business processes.",
    icon: Server,
    color: "text-green-400 border-green-500/20",
  },
  {
    name: "MongoDB & MySQL",
    category: "Database",
    description: "Structured relational & document schemas optimized for speed and consistency.",
    icon: Database,
    color: "text-emerald-400 border-emerald-500/20",
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    description: "Systematic release tracking, clean branches, and collaborative deploys.",
    icon: GitBranch,
    color: "text-orange-400 border-orange-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            Core Engine
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Production-Ready Technologies
          </h3>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECHNOLOGIES.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`bg-slate-900/60 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/30 group ${tech.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                    {tech.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
