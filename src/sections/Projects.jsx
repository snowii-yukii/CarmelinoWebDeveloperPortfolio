import { useState } from "react";
import { Github, ExternalLink, Monitor, Smartphone, Sparkles, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";

import weatherAppImg from "../assets/weatherapp.png";
import weatherAppMobileImg from "../assets/weatherappmobile.png";
import landingPageImg from "../assets/landingpage.png";
import landingPageMobileImg from "../assets/landingpagemobile.png";
import observedImg from "../assets/observed.png";

const PROJECTS_DATA = [
  {
    id: "weatherpulse",
    title: "WeatherPulse",
    fullName: "Next.js & TypeScript Weather Intelligence",
    category: "Web App",
    badge: "Next.js App",
    summary: "Meteorological intelligence platform tracking real-time global atmospheric conditions, 5-day forecasts, and granular air quality indices.",
    engineeringHighlight: "Engineered with Next.js App Router and TypeScript. Employs server-side data fetching, client caching, and instantaneous unit calculations without redundant network overhead.",
    desktopImage: weatherAppImg,
    mobileImage: weatherAppMobileImg,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/snowii-yukii/weatherv2",
    demo: "https://weatherv2-inky.vercel.app",
    domain: "weatherv2.vercel.app"
  },
  {
    id: "beats3-landing",
    title: "Beats 3 Showcase",
    fullName: "Tactile Product Showcase Experience",
    category: "Web App",
    badge: "Interactive UI",
    summary: "Commercial product showcase engineered for audio hardware, pairing dark aesthetics with non-linear spring motion and fluid responsive media.",
    engineeringHighlight: "Responsive layout architecture with Framer Motion spring physics. Smooth gesture feedback, scroll reveals, and hardware-accelerated transforms.",
    desktopImage: landingPageImg,
    mobileImage: landingPageMobileImg,
    tags: ["React 19", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/snowii-yukii/Responsive-Landing-Page",
    demo: "https://snowii-yukii.github.io/Responsive-Landing-Page/",
    domain: "beats3-showcase.app"
  },
  {
    id: "observed",
    title: "Observed",
    fullName: "Interactive Eye-Tracking Canvas Physics",
    category: "Creative Dev",
    badge: "Math & Physics",
    summary: "Experimental human-computer interaction (HCI) translating cursor and touch coordinates into lifelike ocular pupil dynamics in real time.",
    engineeringHighlight: "Boundary-constrained trigonometry math (Math.atan2, Math.hypot) coupled with hardware-accelerated CSS transforms at a consistent 60 FPS.",
    desktopImage: observedImg,
    mobileImage: null,
    tags: ["React 19", "Trigonometry Math", "CSS Transforms", "Vector Graphics"],
    github: "https://github.com/snowii-yukii/Observed",
    demo: "https://observed-five.vercel.app",
    domain: "observed-lab.app"
  }
];

const CATEGORIES = ["All", "Web App", "Creative Dev"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Device preview mode state for each project ("desktop" | "mobile")
  const [deviceModes, setDeviceModes] = useState(
    PROJECTS_DATA.reduce((acc, p) => ({ ...acc, [p.id]: "desktop" }), {})
  );

  const toggleDeviceMode = (projectId, mode) => {
    setDeviceModes(prev => ({ ...prev, [projectId]: mode }));
  };

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Selected Work & Production Builds
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Real software deployed to production. Built with modern architecture, type-safe data flows, and responsive UI craft.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 p-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const currentDevice = deviceModes[project.id] || "desktop";
              const activeImage = currentDevice === "mobile" && project.mobileImage 
                ? project.mobileImage 
                : project.desktopImage;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="h-full flex"
                >
                  <Card className="flex flex-col h-full w-full justify-between p-5 sm:p-6 gap-5" hover={true}>
                    
                    <div className="flex flex-col gap-4">
                      {/* Project Media Showcase Window */}
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 group shadow-lg">
                        {/* Mock Browser Top Header Bar */}
                        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-white/10">
                          {/* Window Control Dots */}
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                          </div>

                          {/* Domain slug */}
                          <span className="text-[11px] font-mono text-slate-400 truncate max-w-[140px]">
                            {project.domain}
                          </span>

                          {/* Device Preview Mode Switch */}
                          <div>
                            {project.mobileImage ? (
                              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-white/10">
                                <button
                                  onClick={() => toggleDeviceMode(project.id, "desktop")}
                                  title="Desktop View"
                                  className={`p-1 rounded text-xs cursor-pointer transition ${
                                    currentDevice === "desktop"
                                      ? "bg-blue-600 text-white"
                                      : "text-slate-400 hover:text-white"
                                  }`}
                                >
                                  <Monitor className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => toggleDeviceMode(project.id, "mobile")}
                                  title="Mobile View"
                                  className={`p-1 rounded text-xs cursor-pointer transition ${
                                    currentDevice === "mobile"
                                      ? "bg-blue-600 text-white"
                                      : "text-slate-400 hover:text-white"
                                  }`}
                                >
                                  <Smartphone className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <span className="text-[9px] font-mono uppercase font-bold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                                {project.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Project Image Canvas */}
                        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                          <img
                            src={activeImage}
                            alt={project.title}
                            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                              currentDevice === "mobile" ? "object-contain py-2" : "object-cover object-top"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Title & Metadata */}
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            · {project.badge}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white leading-tight tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono mt-0.5 mb-2.5">
                          {project.fullName}
                        </p>

                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {project.summary}
                        </p>

                        {/* Engineering Highlight Box (The Technical Flex) */}
                        <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/15 mb-3">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 mb-1">
                            <Cpu className="w-3 h-3" />
                            <span>Engineering Feat</span>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            {project.engineeringHighlight}
                          </p>
                        </div>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-white/8"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3.5 border-t border-white/10 flex items-center gap-2.5">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 font-semibold text-xs transition-all cursor-pointer"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="sr-only sm:not-sr-only">Code</span>
                      </a>
                    </div>

                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

