import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Layout, FileCode, Server, Database, GitBranch, Sparkles, Layers, Zap, Search,
  Globe, Bot, Terminal, MessageSquareCode, ChevronDown, ChevronUp 
} from "lucide-react";
import Card from "../components/Card";

const ARSENAL = [
  {
    name: "React 19",
    category: "Frontend",
    tag: "Core Framework",
    description: "Component hierarchies, reactive hook states, and rapid SPA rendering.",
    icon: Cpu,
  },
  {
    name: "Next.js",
    category: "Frontend",
    tag: "React Framework",
    description: "Server-side rendering, static generation, app router, and asset optimization.",
    icon: Globe,
  },
  {
    name: "Tailwind CSS v4",
    category: "Frontend",
    tag: "CSS Engine",
    description: "Modern CSS variables, fluid responsive breakpoints, and zero runtime overhead.",
    icon: Layout,
  },
  {
    name: "JavaScript (ESNext)",
    category: "Frontend",
    tag: "Core Language",
    description: "Modern ES6+ syntax, asynchronous pipelines, and canvas coordinate math.",
    icon: FileCode,
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    tag: "Physics & Motion",
    description: "Spring animations, layout transitions, and tactile micro-interactions.",
    icon: Zap,
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    tag: "Server & API",
    description: "REST endpoints, CORS configuration, payload validation, and clean routing.",
    icon: Server,
  },
  {
    name: "Supabase",
    category: "Backend",
    tag: "PostgreSQL BaaS",
    description: "Relational PostgreSQL, real-time database subscriptions, RLS, and auth.",
    icon: Database,
  },
  {
    name: "REST APIs & JSON",
    category: "Backend",
    tag: "Data Flow",
    description: "Live telemetry integration, error boundaries, debouncing, and client caching.",
    icon: Layers,
  },
  {
    name: "MongoDB & MySQL",
    category: "Backend",
    tag: "Data Storage",
    description: "Document models and relational table schemas for read/write consistency.",
    icon: Database,
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    tag: "Version Control",
    description: "Commit hygiene, feature branching, pull requests, and automated deploys.",
    icon: GitBranch,
  },
  {
    name: "Claude Code",
    category: "Tools",
    tag: "AI Engineering",
    description: "Architectural reasoning, refactoring passes, and algorithm verification.",
    icon: Bot,
  },
  {
    name: "ChatGPT",
    category: "Tools",
    tag: "AI Research",
    description: "API schema exploration, rapid prototyping, and syntax lookups.",
    icon: MessageSquareCode,
  },
  {
    name: "Antigravity",
    category: "Tools",
    tag: "Agentic IDE",
    description: "Agentic pair programming, multi-step orchestration, and automated test loops.",
    icon: Terminal,
  },
  {
    name: "General SEO & Vitals",
    category: "Architecture",
    tag: "Optimization",
    description: "Semantic HTML5, OpenGraph metadata, fast FCP, and 95+ Lighthouse scores.",
    icon: Search,
  },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Tools", "Architecture"];
const INITIAL_DISPLAY_COUNT = 6;

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredArsenal = activeCategory === "All"
    ? ARSENAL
    : ARSENAL.filter(item => item.category === activeCategory);

  const displayedArsenal = (activeCategory === "All" && !showAll)
    ? filteredArsenal.slice(0, INITIAL_DISPLAY_COUNT)
    : filteredArsenal;

  const remainingCount = filteredArsenal.length - INITIAL_DISPLAY_COUNT;

  return (
    <section id="capabilities" className="py-20 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Tools & Technologies
          </h2>

          <p className="text-slate-400 max-w-xl mt-2 text-sm leading-relaxed">
            The core frameworks, databases, and tooling I use to build fast, reliable web applications.
          </p>

        {/* Category Filter Pills with Item Counts */}
          <div className="flex flex-wrap gap-2 mt-6 p-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map(category => {
              const count = category === "All" 
                ? ARSENAL.length 
                : ARSENAL.filter(item => item.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === category 
                      ? "bg-blue-700/60 text-blue-100" 
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Arsenal Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedArsenal.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col justify-between p-5" hover={true}>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-900/80 border border-white/5">
                          {tech.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                        {tech.name}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Tactile Show More / Show Less Toggle Button */}
        {activeCategory === "All" && remainingCount > 0 && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-white/10 hover:border-blue-500/40 text-slate-200 hover:text-white text-xs font-mono font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/10"
            >
              <span>{showAll ? "Show Less" : `Show All Tools (+${remainingCount} more)`}</span>
              <div className="p-1 rounded-lg bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
}
