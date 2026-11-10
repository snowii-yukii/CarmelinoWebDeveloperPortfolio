import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import TechIcon from "../components/TechIcon";

const STACK_DATA = [
  // Frontend & Full Stack
  { name: "Next.js", iconKey: "nextjs", category: "Frontend & Full Stack", color: "#71717a", lightColor: "#52525b" },
  { name: "React 19", iconKey: "react", category: "Frontend & Full Stack", color: "#61DAFB", lightColor: "#0284c7" },
  { name: "TypeScript", iconKey: "typescript", category: "Frontend & Full Stack", color: "#3178C6", lightColor: "#2563eb" },
  { name: "Tailwind CSS v4", iconKey: "tailwindcss", category: "Frontend & Full Stack", color: "#38BDF8", lightColor: "#0284c7" },
  { name: "shadcn/ui", iconKey: "shadcn", category: "Frontend & Full Stack", color: "#a1a1aa", lightColor: "#52525b" },
  { name: "REST APIs", iconKey: "restapi", category: "Frontend & Full Stack", color: "#a1a1aa", lightColor: "#52525b" },
  { name: "JavaScript", iconKey: "javascript", category: "Frontend & Full Stack", color: "#F7DF1E", lightColor: "#ca8a04" },
  { name: "HTML5", iconKey: "html", category: "Frontend & Full Stack", color: "#E34F26", lightColor: "#dc2626" },
  { name: "CSS3", iconKey: "css", category: "Frontend & Full Stack", color: "#1572B6", lightColor: "#2563eb" },

  // Backend & Database
  { name: "Supabase", iconKey: "supabase", category: "Backend & Database", color: "#3ECF8E", lightColor: "#16a34a" },
  { name: "PostgreSQL", iconKey: "postgresql", category: "Backend & Database", color: "#4169E1", lightColor: "#2563eb" },
  { name: "Node.js", iconKey: "nodejs", category: "Backend & Database", color: "#5FA04E", lightColor: "#16a34a" },
  { name: "Express.js", iconKey: "express", category: "Backend & Database", color: "#71717a", lightColor: "#52525b" },
  { name: "MongoDB", iconKey: "mongodb", category: "Backend & Database", color: "#47A248", lightColor: "#16a34a" },
  { name: "MySQL", iconKey: "mysql", category: "Backend & Database", color: "#4479A1", lightColor: "#0284c7" },

  // Tools & AI
  { name: "Google Antigravity", iconKey: "antigravity", category: "Tools & AI", color: "#4285F4", lightColor: "#2563eb" },
  { name: "Claude Code", iconKey: "claude", category: "Tools & AI", color: "#D97706", lightColor: "#d97706" },
  { name: "Cursor AI", iconKey: "cursor", category: "Tools & AI", color: "#a1a1aa", lightColor: "#52525b" },
  { name: "Git", iconKey: "git", category: "Tools & AI", color: "#F05032", lightColor: "#dc2626" },
  { name: "GitHub", iconKey: "github", category: "Tools & AI", color: "#a1a1aa", lightColor: "#52525b" },
  { name: "Gemini", iconKey: "gemini", category: "Tools & AI", color: "#4E8BF5", lightColor: "#2563eb" },
  { name: "OpenAI", iconKey: "openai", category: "Tools & AI", color: "#10A37F", lightColor: "#0d9488" },
  { name: "VS Code", iconKey: "vscode", category: "Tools & AI", color: "#007ACC", lightColor: "#0284c7" },
];

const CATEGORIES = ["All", "Frontend & Full Stack", "Backend & Database", "Tools & AI"];

const TechStackPill = memo(function TechStackPill({ tech }) {
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseEnter = () => {
    // Read dark mode from DOM at interaction time — no React context subscription needed
    const isDark = document.documentElement.classList.contains("dark");
    const color = isDark ? tech.color : tech.lightColor;
    setGlowStyle({
      borderColor: color,
      boxShadow: `0 0 14px -2px ${color}${isDark ? "80" : "40"}`,
    });
  };

  const handleMouseLeave = () => {
    setGlowStyle({});
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={glowStyle}
      className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900/70 border border-neutral-200/90 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-colors duration-200 cursor-default shadow-sm dark:shadow-none active:scale-95"
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0 opacity-95 group-hover:opacity-100 group-hover:scale-115 transition-transform duration-300">
        <TechIcon name={tech.iconKey} className="w-4.5 h-4.5" />
      </div>
      <span className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
});

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? STACK_DATA
    : STACK_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="stack" className="py-24 relative border-t border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-300 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Architecture & Tooling</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
            Technical Arsenal
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-3 leading-relaxed">
            The full-stack frameworks, databases, and AI tooling I use to build web applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-7 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 backdrop-blur-md">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 active:scale-95 cursor-pointer ${
                  activeCategory === category
                    ? "bg-white text-neutral-950 shadow-sm font-semibold dark:bg-white dark:text-black"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-200/60 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills Cloud */}
        <div className="flex flex-wrap gap-3.5 items-center">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.015 }}
              >
                <TechStackPill tech={tech} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
