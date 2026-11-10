import TechIcon from "./TechIcon";

// Group 1: Core Web & Full Stack
const ROW_ONE = [
  { key: "nextjs", label: "Next.js" },
  { key: "react", label: "React 19" },
  { key: "typescript", label: "TypeScript" },
  { key: "tailwindcss", label: "Tailwind CSS v4" },
  { key: "supabase", label: "Supabase" },
  { key: "postgresql", label: "PostgreSQL" },
  { key: "nodejs", label: "Node.js" },
  { key: "express", label: "Express" },
  { key: "shadcn", label: "shadcn/ui" },
  { key: "restapi", label: "REST APIs" },
  { key: "mongodb", label: "MongoDB" },
  { key: "mysql", label: "MySQL" },
];

// Group 2: Systems, AI & Modern Engineering Tools
const ROW_TWO = [
  { key: "antigravity", label: "Google Antigravity" },
  { key: "claude", label: "Claude Code" },
  { key: "cursor", label: "Cursor AI" },
  { key: "gemini", label: "Gemini" },
  { key: "grok", label: "Grok" },
  { key: "openai", label: "OpenAI" },
  { key: "git", label: "Git" },
  { key: "github", label: "GitHub" },
  { key: "vscode", label: "VS Code" },
  { key: "javascript", label: "JavaScript ES6+" },
  { key: "html", label: "HTML5" },
  { key: "css", label: "CSS3" },
];

function MarqueeTrack({ items, reverse = false }) {
  // Duplicate array 3 times to ensure infinite seamless looping across all screen sizes
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex items-center gap-3.5 py-2 shrink-0 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {duplicated.map((tech, index) => (
          <div
            key={`${tech.key}-${index}`}
            className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900/70 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-all duration-300 cursor-default shadow-sm dark:shadow-none hover:shadow-md active:scale-95"
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0 opacity-95 group-hover:opacity-100 group-hover:scale-115 transition-transform duration-300">
              <TechIcon name={tech.key} className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors whitespace-nowrap">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechTicker() {
  return (
    <section className="relative py-14 overflow-hidden border-y border-neutral-200/80 dark:border-white/10 bg-neutral-50/60 dark:bg-black/40">
      {/* Background subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[120px] bg-neutral-200/40 dark:bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 font-medium">
          Technology & Tooling Arsenal
        </span>
      </div>

      <div className="space-y-3.5">
        {/* Row 1: Leftward scroll */}
        <MarqueeTrack items={ROW_ONE} reverse={false} />
        {/* Row 2: Rightward scroll */}
        <MarqueeTrack items={ROW_TWO} reverse={true} />
      </div>
    </section>
  );
}
