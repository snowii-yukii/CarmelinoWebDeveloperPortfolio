import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting/gradient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-6 shadow-sm shadow-emerald-500/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Internship / Opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6"
        >
          Website Developer & <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-indigo-400">
            General SEO
          </span>
        </motion.h1>

        {/* Business-Focused Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-normal"
        >
          I build fast, responsive, and search-optimized web applications 
          that help businesses establish a powerful digital presence and 
          rank higher on Google.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-500/20 w-full sm:w-auto cursor-pointer"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500/30 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            <Mail className="h-4 w-4 text-blue-500" />
            Contact Me
          </a>

          <a
            href="/resume1.0.1.pdf"
            download="Carmelino_Jadulco_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3 text-slate-400 hover:text-white font-semibold text-sm transition-colors w-full sm:w-auto cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}