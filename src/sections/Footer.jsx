import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A11] border-t border-white/8 py-14 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Colophon info */}
        <div className="flex flex-col items-center md:items-start gap-2.5 text-center md:text-left">
          <a
            href="#hero"
            className="flex items-center gap-2 group font-heading font-extrabold text-base tracking-tight text-white cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            Carms<span className="font-mono text-xs text-blue-400 font-medium">.dev</span>
          </a>
          <p className="text-xs font-mono text-slate-400">
            Handcrafted with intention in Davao City, PH 🌴
          </p>
          <p className="text-[11px] font-mono text-slate-500">
            &copy; {currentYear} Carmelino Jadulco. Next.js · Supabase · TypeScript · React 19 · Tailwind v4.
          </p>
        </div>

        {/* Right Side: Back to Top & Quick Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          

          <a
            href="#hero"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
