import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Journey", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll depth for navbar background transition
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      sections.push("hero");

      let currentSection = "hero";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the middle of the viewport
          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F172A]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-heading font-bold text-xl tracking-tight text-white"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
            Carms<span className="text-blue-500 font-light font-sans text-sm">.dev</span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full block transition-colors duration-200 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-slate-900 border border-white/10 hover:border-blue-500/30 hover:bg-slate-800 rounded-full transition-all duration-300 shadow-sm"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4 text-blue-500" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-xl px-6 py-8"
          >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium block py-2 border-b border-white/5 transition-colors ${
                        isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all"
                >
                  Get In Touch
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
