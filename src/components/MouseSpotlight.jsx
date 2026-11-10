import { useEffect, useRef } from "react";

/**
 * MouseSpotlight — theme-aware via CSS variable only, no React re-render on theme change.
 * The ThemeContext useEffect sets --spotlight-color on :root when theme toggles.
 */
export default function MouseSpotlight() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
      containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block spotlight-layer"
    />
  );
}
