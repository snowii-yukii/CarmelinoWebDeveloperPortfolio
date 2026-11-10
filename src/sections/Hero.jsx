import { useState } from "react";
import { ArrowUpRight, Download, Mail, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 overflow-hidden"
    >
      {/* Background Dot Matrix with radial fade mask */}
      <div className="absolute inset-0 bg-dot-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)] pointer-events-none -z-10" />

      {/* Subtle ambient center glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full bg-neutral-200/50 dark:bg-white/[0.03] blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center z-10">
        
        {/* Left Column: Concise Statement & Action */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-300 text-xs font-mono mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-900 dark:text-white font-medium">Available for web developer roles</span>
            <span className="text-neutral-400 dark:text-neutral-600 hidden sm:inline">·</span>
            <span className="text-neutral-500 dark:text-neutral-400 text-[11px] hidden sm:inline">Davao City, PH</span>
          </motion.div>

          {/* Punchy, Confident Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-neutral-950 dark:text-white mb-5"
          >
            Carmelino Jadulco.
            <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-bold">Web Developer.</span>
          </motion.h1>

          {/* Concise Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl mb-8 leading-relaxed font-normal"
          >
            I'm a 19-year-old self-taught developer from Davao City. I build web apps with AI being part of my development process.

          </motion.p>

          {/* Primary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300 dark:bg-neutral-900 dark:border-white/10 dark:text-neutral-200 dark:hover:border-white/30 dark:hover:text-white font-semibold text-sm transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              <Mail className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              <span>Let's Talk</span>
            </a>

            <a
              href="https://www.linkedin.com/in/carmelino-jadulco"
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white font-medium text-xs font-mono transition-colors active:scale-95 cursor-pointer"
              title="Download Resume PDF"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>Linkedin</span>
            </a>

            <a
              href="/https://github.com/snowii-yukii"
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white font-medium text-xs font-mono transition-colors active:scale-95 cursor-pointer"
              title="Download Resume PDF"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>Github</span>
            </a>
            
            <a
              href="/Carmelino_Jadulco_Resume.pdf"
              download="Carmelino_Jadulco_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white font-medium text-xs font-mono transition-colors active:scale-95 cursor-pointer"
              title="Download Resume PDF"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume.pdf</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
