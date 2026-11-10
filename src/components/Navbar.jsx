import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Copy, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
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

      const sections = ["hero", "about", "projects", "timeline", "stack", "contact"];
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
          scrolled
            ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-200/80 dark:border-white/10 shadow-sm dark:shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-900 dark:text-white group-hover:border-neutral-400 dark:group-hover:border-white/30 transition-all duration-300 shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-sm tracking-tight text-neutral-900 dark:text-white flex items-center gap-1.5">
                Carms
                <span className="font-mono text-[10px] text-neutral-700 dark:text-neutral-300 font-semibold px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15">
                  dev
                </span>
              </span>
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                Carmelino Jadulco
              </span>
            </div>
          </a>

          {/* Center Pill: Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100/90 dark:bg-neutral-900/70 p-1.5 rounded-full border border-neutral-200/80 dark:border-white/10 backdrop-blur-md shadow-inner shadow-black/5 dark:shadow-white/5">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-neutral-950 dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-white/10 border border-neutral-300/80 dark:border-white/20 rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Area: Live Time, Email, Theme Switcher & Talk CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Davao City Time Badge */}
            {localTime && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900/70 border border-neutral-200 dark:border-white/10 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Davao, PH</span>
                <span className="text-neutral-400 dark:text-neutral-600">·</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-medium">{localTime}</span>
              </div>
            )}

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-neutral-500" />
                  <span>Email</span>
                </>
              )}
            </button>

            {/* Theme Toggle (Dark / Light Switcher) */}
            <ThemeToggle />

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white dark:text-black bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 rounded-full transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              Let's Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-none rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 active:scale-95 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 md:hidden bg-white/95 dark:bg-neutral-950/95 border-b border-neutral-200 dark:border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
                      className={`text-sm font-mono font-medium block py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer ${
                        isActive
                          ? "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/20 font-semibold"
                          : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white"
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
                  className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-white dark:text-black bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
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
