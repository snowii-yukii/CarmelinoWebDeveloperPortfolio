import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright & Logo */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#hero"
            className="flex items-center gap-2 font-heading font-bold text-lg text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Carms<span className="text-blue-500 font-light font-sans text-xs">.dev</span>
          </a>
          <p className="text-xs text-slate-500 font-normal">
            &copy; {currentYear} Carms. Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Middle: Performance Metrics Badge */}
        <div className="flex items-center gap-3 bg-slate-900 border border-white/5 px-4 py-2 rounded-full">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Lighthouse Audits:</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-white font-mono">
            <span className="text-emerald-400">Perf: 99</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">SEO: 100</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">A11y: 98</span>
          </div>
        </div>

        {/* Right Side: Back to Top Link */}
        <a
          href="#hero"
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          Back To Top
          <div className="p-1.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-colors">
            <ArrowUp className="h-3.5 w-3.5" />
          </div>
        </a>
      </div>
    </footer>
  );
}
