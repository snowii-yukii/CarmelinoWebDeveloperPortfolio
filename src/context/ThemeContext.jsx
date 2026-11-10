import { useEffect, useState, startTransition } from "react";
import { ThemeContext } from "./themeContextDef";

// Apply theme class directly to DOM — zero React re-render, instant
function applyThemeToDom(theme) {
  const root = document.documentElement;
  // Block ALL CSS transitions for one frame while class switches
  root.classList.add("theme-switching");
  if (theme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
  }
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch { /* noop */ }
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", theme === "dark" ? "#09090b" : "#ffffff");
  }
  // Remove the transition-suppressing class after the browser has painted the new theme
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  });
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "dark" || saved === "light") return saved;
    }
    return "light";
  });

  // Sync DOM on initial mount only (SSR safety)
  useEffect(() => {
    applyThemeToDom(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    // 1. Apply DOM change immediately (zero-latency visual switch)
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyThemeToDom(next);
    // 2. Sync React state as a low-priority deferred update (doesn't block paint)
    startTransition(() => {
      setThemeState(next);
    });
  };

  const setTheme = (newTheme) => {
    const t = newTheme === "dark" ? "dark" : "light";
    applyThemeToDom(t);
    startTransition(() => {
      setThemeState(t);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
