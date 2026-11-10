import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50/80 dark:bg-black border-t border-neutral-200/80 dark:border-white/8 py-14 relative transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Colophon info */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <a
            href="#hero"
            className="flex items-center gap-2 group font-heading font-bold text-sm tracking-tight text-neutral-950 dark:text-white cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white group-hover:scale-125 transition-transform" />
            Carms<span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-normal">.dev</span>
          </a>
          <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
            Davao City, Philippines · Full-Stack Web Development
          </p>
          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            &copy; {currentYear} Carmelino Jadulco.
          </p>
        </div>

        {/* Right Side: Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="flex items-center gap-2 text-xs font-mono text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer group active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="p-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 group-hover:border-neutral-400 dark:group-hover:border-white/30 text-neutral-700 dark:text-neutral-300 transition-all shadow-xs">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
