import { useState, useEffect } from "react";
import { ExternalLink, Layers, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import TechIcon from "../components/TechIcon";

import weatherAppImg from "../assets/weatherapp.png";
import landingPageImg from "../assets/landingpage.png";
import observedImg from "../assets/observed.png";

const PROJECTS_DATA = [
  {
    id: "weatherpulse",
    title: "WeatherPulse",
    category: "Web App",
    description: "Weather app providing real-time local conditions, 5-day forecasts, and air quality metrics.",
    image: weatherAppImg, CSS,
    github: "https://github.com/snowii-yukii/weatherv2",
    demo: "https://weatherv2-inky.vercel.app",
    domain: "weatherv2.vercel.app"
  },
  {
    id: "beats3-landing",
    title: "Beats 3 Showcase",
    category: "Web App",
    description: "Responsive product landing page showcasing audio headphones with smooth interactive animations.",
    features: [
      "Interactive 360° product presentation",
      "Smooth spring scroll animations",
      "Audio specs & feature breakdown",
      "Fully responsive mobile layout",
    ],
    image: landingPageImg,
    github: "https://github.com/snowii-yukii/Responsive-Landing-Page",
    demo: "https://snowii-yukii.github.io/Responsive-Landing-Page/",
    domain: "beats3-showcase.app"
  },
  {
    id: "observed",
    title: "Observed",
    category: "Creative Dev",
    description: "Interactive eyeball canvas animation that tracks the user's cursor or touch position in real time.",
    image: observedImg,
    github: "https://github.com/snowii-yukii/Observed",
    demo: "https://observed-five.vercel.app",
    domain: "observed-lab.app"
  }
];

export default function Projects() {
  const [zoomModal, setZoomModal] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setZoomModal(null);
    };
    if (zoomModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [zoomModal]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-300 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Projects</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
            Selected Work
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-3 leading-relaxed">
            A small collection of web applications and interactive experiments I've built and deployed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          <AnimatePresence mode="popLayout">
            {PROJECTS_DATA.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="h-full flex"
              >
                <Card className="flex flex-col h-full w-full justify-between p-5 gap-4" hover={true}>
                  
                  <div className="flex flex-col gap-4">
                    {/* Project Preview Window */}
                    <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-950 group shadow-xs">
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between px-3 py-2 bg-neutral-100/90 dark:bg-neutral-900/90 border-b border-neutral-200 dark:border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[150px]">
                          {project.domain}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Image Preview with Zoom */}
                      <div
                        onClick={() => setZoomModal(project)}
                        className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center cursor-zoom-in"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 dark:bg-black/70 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div>
                      {/* Title */}
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white leading-tight tracking-tight mb-1.5">
                        {project.title}
                      </h3>

                      {/* Plain, clear summary */}
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3.5">
                        {project.description}
                      </p>

                    </div>
                  </div>

                  {/* Clean Action Buttons */}
                  <div className="pt-3 border-t border-neutral-200/80 dark:border-white/8 flex items-center gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-semibold text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:border-white/10 text-xs font-semibold transition-all active:scale-95 cursor-pointer shadow-xs"
                      title="GitHub Repository"
                    >
                      <TechIcon name="github" className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>

                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {zoomModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/85 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-neutral-800 dark:text-neutral-300 ml-2 font-semibold">
                    {zoomModal.title} · {zoomModal.domain}
                  </span>
                </div>
                <button
                  onClick={() => setZoomModal(null)}
                  className="p-1 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="max-h-[70vh] overflow-auto bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center p-2">
                <img
                  src={zoomModal.image}
                  alt={zoomModal.title}
                  className="w-full h-auto max-h-[68vh] object-contain rounded-lg"
                />
              </div>

              {/* Modal Bottom Actions */}
              <div className="px-5 py-3.5 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-neutral-600 dark:text-neutral-400 truncate hidden sm:inline">
                  {zoomModal.description}
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={zoomModal.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-semibold text-xs transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>Launch Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={zoomModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:border-white/10 text-xs font-semibold transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    <TechIcon name="github" className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
