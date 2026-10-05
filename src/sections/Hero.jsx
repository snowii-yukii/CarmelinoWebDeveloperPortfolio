import { useState } from "react";
import { ArrowRight, Download, Mail, CheckCircle2, Code2, Sparkles, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState("config");
  const [copiedCode, setCopiedCode] = useState(false);

  const configCode = `const developer = {
  name: "Carmelino Jadulco",
  handle: "Carms",
  role: "Full-Stack Developer",
  origin: "Davao City, PH",
  coreStack: ["Next.js", "Supabase", "TypeScript", "React 19", "Tailwind v4"],
  database: "PostgreSQL & Prisma",
  focus: "Full-stack apps with tactile UI & robust backends"
};`;

  const personalityCode = `{
  "fuel": "White Monster",
  "editor": "Antigravity",
  "focus": "Full-stack apps, realtime data & clean APIs",
  "soundtrack": "Synthwave & Lo-Fi Beats 🎧",
  "craft": ["Type safety", "Zero layout shift", "Sub-second response"],
  "status": "Available for full-stack engineering roles"
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeCodeTab === "config" ? configCode : personalityCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Dot Matrix with radial fade mask */}
      <div className="absolute inset-0 bg-dot-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none -z-10" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-blue-600/8 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] rounded-full bg-indigo-600/6 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Developer Story & Statement */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-mono mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for full-stack engineering roles</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">Davao City, PH</span>
          </motion.div>

          {/* Punchy, Confident Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6"
          >
            Building full-stack web applications with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              Next.js & Supabase.
            </span>
          </motion.h1>

          {/* Genuine Human Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal"
          >
            Hey, I'm <strong className="text-white font-semibold">Carmelino (Carms)</strong> — a full-stack developer engineering modern web apps with Next.js, Supabase, and TypeScript. Focused on scalable backends and reactive, tactile user experiences.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-blue-500/40 hover:bg-slate-850 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 cursor-pointer"
            >
              <Mail className="h-4 w-4 text-blue-400" />
              <span>Let's Talk</span>
            </a>

            <a
              href="/Carmelino_Jadulco_Resume.pdf"
              download="Carmelino_Jadulco_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-slate-400 hover:text-white font-medium text-xs font-mono transition-colors cursor-pointer"
              title="Download Resume PDF"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume.pdf</span>
            </a>
          </motion.div>

          {/* Quick Credibility Micro-Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-slate-400 border-t border-white/5 pt-6 w-full"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Next.js & React 19
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Supabase & PostgreSQL
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              TypeScript & Tailwind v4
            </span>
          </motion.div>
        </div>

        {/* Right Column: Interactive Code & Personality Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full"
        >
          <div className="bento-card rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            
            {/* Window Topbar with Interactive Tabs & Copy */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/8">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center bg-slate-950/80 p-0.5 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveCodeTab("config")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition cursor-pointer ${
                      activeCodeTab === "config"
                        ? "bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-blue-400" />
                    <span>config.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveCodeTab("personality")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition cursor-pointer ${
                      activeCodeTab === "personality"
                        ? "bg-purple-600/20 text-purple-300 font-semibold border border-purple-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>personality.json</span>
                  </button>
                </div>
              </div>

              {/* Copy Code Button */}
              <button
                onClick={handleCopyCode}
                title="Copy snippet"
                className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono text-slate-400 hover:text-white bg-slate-950/60 border border-white/5 hover:border-white/20 transition cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body Area */}
            <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 min-h-[220px]">
              <AnimatePresence mode="wait">
                {activeCodeTab === "config" ? (
                  <motion.div
                    key="config"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="text-slate-500 mb-2">// Developer Life</div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-400">"Carmelino Jadulco"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-emerald-400">"Full-Stack Developer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">origin:</span>{" "}
                      <span className="text-amber-400">"Davao City, PH 🌴"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-sky-300">"Next.js"</span>,{" "}
                      <span className="text-sky-300">"Supabase"</span>,{" "}
                      <span className="text-sky-300">"TypeScript"</span>,{" "}
                      <span className="text-sky-300">"React 19"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">database:</span>{" "}
                      <span className="text-emerald-400">"PostgreSQL & Prisma"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">focus:</span>{" "}
                      <span className="text-emerald-400">"Full-stack apps with tactile UI & robust backends"</span>
                    </div>
                    <div>&#125;;</div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="personality"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="text-slate-500 mb-2">// Reality Check</div>
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-purple-300">"fuel"</span>:{" "}
                      <span className="text-white-400">"White Monster"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">"editor"</span>:{" "}
                      <span className="text-blue-400">"Antigravity"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">"focus"</span>:{" "}
                      <span className="text-emerald-400">"Full-stack apps, realtime data & clean APIs"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">"soundtrack"</span>:{" "}
                      <span className="text-pink-400">"Synthwave & Lo-Fi Beats 🎧"</span>,
                    </div>
                    <div>&#125;</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Interactive Preview
                </span>
                <span className="text-slate-500 font-mono">
                  {activeCodeTab === "config" ? "TypeScript (Strict)" : "Valid JSON"}
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}