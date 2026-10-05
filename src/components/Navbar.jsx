import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Copy, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Arsenal", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [copied, setCopied] = useState(false);

  // Live Philippine Local Time (Davao City, UTC+8)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Manila",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime("UTC+8");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["hero", "about", "projects", "services", "capabilities", "contact"];
      let current = "hero";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("carmelinojadulco@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-[#090D16]/85 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40" : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Mark with terminal vibe */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-500/10">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
                Carms
                <span className="font-mono text-[10px] text-blue-400 font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                  dev
                </span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                Carmelino Jadulco
              </span>
            </div>
          </a>

          {/* Center Pill: Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner shadow-white/5">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full -z-10 shadow-sm shadow-blue-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Area: Live Time & Quick Email Action */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Davao City Time Badge */}
            {localTime && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-white/5 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Davao, PH</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300 font-medium">{localTime}</span>
              </div>
            )}

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-slate-900 border border-white/10 hover:border-blue-500/30 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-blue-400" />
                  <span>carmelinojadulco@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Let's Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none rounded-lg bg-slate-900/60 border border-white/5"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 md:hidden bg-[#090D16]/98 border-b border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Davao City, PH
              </span>
              <span>{localTime}</span>
            </div>

            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold block py-2.5 px-3 rounded-xl transition-colors ${
                        isActive ? "bg-blue-600/15 text-blue-400 border border-blue-500/25" : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                >
                  Let's Connect
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
