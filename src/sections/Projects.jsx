import { useState } from "react";
import { Github, ExternalLink, Monitor, Smartphone, Sparkles, Layers, CheckCircle2, ArrowRight } from "lucide-react";
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
    title: "WeatherPulse — Real-Time Weather & AQI Dashboard",
    category: "Web App",
    shortDesc: "A sleek, responsive meteorological dashboard delivering real-time weather analytics, 5-day predictive forecasts, and granular air quality indices across global locations.",
    desktopImage: weatherAppImg,
    mobileImage: weatherAppMobileImg,
    tags: ["React", "Tailwind CSS", "REST API", "Lucide Icons", "Responsive UI"],
    github: "https://github.com",
    demo: "https://your-weatherpulse-url.com",
    overview: "Built to deliver latency-free weather analytics and environmental health monitoring in an intuitive, modern dark-mode dashboard interface.",
    problem: "Many free weather platforms are overloaded with disruptive ads, slow response times, and disjointed interfaces that hide essential environmental data.",
    solution: "Designed a clean, single-screen dashboard combining instant city search, atmospheric telemetry (wind speed, humidity, pressure, visibility), and air quality indices with rapid metric unit conversion.",
    features: [
      "Instant city search with live weather data integration",
      "Air Quality Index (AQI) tracking for PM2.5, PM10, NO2, O3, and CO",
      "Hourly forecast breakdown and 5-day predictive weather models",
      "Seamless Celsius (°C) and Fahrenheit (°F) temperature toggle",
      "Fully responsive layout optimized for mobile, tablet, and desktop"
    ]
  },
  {
    id: "beats3-landing",
    title: "Beats 3 — High-Impact Audio Showcase Landing Page",
    category: "Landing Page",
    shortDesc: "A high-conversion commercial showcase crafted for Beats 3 headphones, blending luxury dark aesthetics, responsive typography, and strategic product presentation.",
    desktopImage: landingPageImg,
    mobileImage: landingPageMobileImg,
    tags: ["React", "Tailwind CSS", "Framer Motion", "SEO Architecture", "E-Commerce"],
    github: "https://github.com",
    demo: "https://your-beats3-landing-url.com",
    overview: "Designed and engineered to maximize e-commerce conversion rates through engaging product visuals, clear feature hierarchy, and seamless navigation.",
    problem: "Standard e-commerce landing pages frequently suffer from sluggish load times, heavy asset weights, and confusing layouts that reduce conversion on mobile.",
    solution: "Constructed a high-performance, mobile-first product landing page featuring lightweight assets, sharp visual hierarchy, interactive specifications, and optimized user flows.",
    features: [
      "Immersive dark-themed product hero section with high-converting CTA triggers",
      "Interactive product specifications, case details, and audio overview",
      "Integrated social proof & brand partner ecosystem",
      "Optimized Core Web Vitals and structured SEO metadata",
      "Silky smooth responsive layout tailored across all viewports"
    ]
  },
  {
    id: "observed",
    title: "Observed — Interactive Eye-Tracking Visual Experience",
    category: "Creative Dev",
    shortDesc: "An experimental interactive web canvas that translates cursor and pointer coordinates into lifelike ocular pupil dynamics and fluid micro-animations in real time.",
    desktopImage: observedImg,
    mobileImage: null,
    tags: ["JavaScript", "React", "Vector Graphics", "CSS Transforms", "Interaction Design"],
    github: "https://github.com",
    demo: "https://your-observed-url.com",
    overview: "An exploration into interactive human-computer interaction (HCI) and creative web development, bringing vector artwork to life through real-time mathematical calculations.",
    problem: "Static web graphics often fail to create memorable user experiences or showcase advanced client-side event tracking capabilities.",
    solution: "Implemented trigonometric coordinate tracking and CSS matrix transforms to smoothly orient and constrain pupil positions relative to mouse and touch movements.",
    features: [
      "Real-time cursor and touch pointer coordinate tracking physics",
      "Mathematical pupil boundary constraint algorithms",
      "Lightweight, zero-lag rendering pipeline maintaining constant 60 FPS",
      "Ambient eye states and interactive micro-responses",
      "Cross-browser and touch-screen compatibility"
    ]
  }
];

const CATEGORIES = ["All", "Web App", "Landing Page", "Creative Dev"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Tab states for each project card ("overview", "problem", "features")
  const [activeTabs, setActiveTabs] = useState(
    PROJECTS_DATA.reduce((acc, p) => ({ ...acc, [p.id]: "overview" }), {})
  );

  // Device preview mode state for each project ("desktop" | "mobile")
  const [deviceModes, setDeviceModes] = useState(
    PROJECTS_DATA.reduce((acc, p) => ({ ...acc, [p.id]: "desktop" }), {})
  );

  const changeTab = (projectId, tab) => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  const toggleDeviceMode = (projectId, mode) => {
    setDeviceModes(prev => ({ ...prev, [projectId]: mode }));
  };

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Proof of Practical Capability
          </h2>
          
          <p className="text-base text-slate-400 max-w-2xl mt-4 leading-relaxed font-normal">
            Real-world applications and digital products engineered with clean architecture, responsive design, and search-optimized performance.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const currentTab = activeTabs[project.id] || "overview";
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
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="h-full flex"
                >
                  <Card className="flex flex-col h-full w-full justify-between p-6 sm:p-7 gap-6">
                    <div className="flex flex-col gap-5">
                      {/* Project Media Showcase Window */}
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950/80 group shadow-xl">
                        {/* Mock Browser Top Header Bar */}
                        <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10">
                          {/* Window Control Dots */}
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          </div>

                          {/* Category Badge & Simulated URL */}
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-slate-400 truncate max-w-[150px] sm:max-w-[200px]">
                              {project.id}.app
                            </span>
                          </div>

                          {/* Device Preview Mode Switch (if mobile view exists) */}
                          <div className="flex items-center gap-1">
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
                                  <Monitor className="w-3.5 h-3.5" />
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
                                  <Smartphone className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                {project.category}
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
                          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
                            <span className="text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
                              {currentDevice === "mobile" ? "Mobile View" : "Desktop View"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title, Category & Tags */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-3">
                          {project.title}
                        </h3>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content Navigation Tabs */}
                      <div className="flex border-b border-white/10 gap-6">
                        {[
                          { id: "overview", label: "Overview" },
                          {/*{ id: "problem", label: "Problem & Solution" },*/},
                          { id: "features", label: "Key Highlights" }
                        ].map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => changeTab(project.id, tab.id)}
                            className={`pb-2.5 text-xs font-semibold tracking-wide uppercase transition-colors relative cursor-pointer ${
                              currentTab === tab.id
                                ? "text-white font-bold"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {tab.label}
                            {currentTab === tab.id && (
                              <motion.div
                                layoutId={`tabIndicator-${project.id}`}
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                              />
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content Display Area */}
                      <div className="min-h-[110px] text-sm text-slate-300 leading-relaxed">
                        <AnimatePresence mode="wait">
                          {currentTab === "overview" && (
                            <motion.div
                              key="overview"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-2"
                            >
                              <p className="text-slate-300 font-normal">
                                {project.overview}
                              </p>
                              <p className="text-xs text-slate-400">
                                {project.shortDesc}
                              </p>
                            </motion.div>
                          )}
{/*
                          {currentTab === "problem" && (
                            <motion.div
                              key="problem"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-3"
                            >
                              <div className="bg-rose-500/5 border border-rose-500/15 p-3 rounded-lg">
                                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                                  The Problem
                                </span>
                                <p className="text-xs text-slate-300">
                                  {project.problem}
                                </p>
                              </div>
                              <div className="bg-emerald-500/5 border border-emerald-500/15 p-3 rounded-lg">
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                                  The Solution
                                </span>
                                <p className="text-xs text-slate-300">
                                  {project.solution}
                                </p>
                              </div>
                            </motion.div>
                          )}
*/}
                          {currentTab === "features" && (
                            <motion.ul
                              key="features"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-2"
                            >
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all duration-300 shadow-md shadow-blue-500/20 cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 font-semibold text-xs transition-all duration-300 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      </div>
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
