import { useEffect, useRef } from "react";

/**
 * MouseSpotlight Component
 * Creates an elegant hover spotlight glow that tracks the user's cursor.
 * Uses vanilla DOM variable styling to bypass React re-renders, optimizing performance.
 */
export default function MouseSpotlight() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty("--mouse-x", `${clientX}px`);
      containerRef.current.style.setProperty("--mouse-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(200px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(59, 130, 246, 0.06), rgba(99, 102, 241, 0.03) 50%, transparent 80%)`,
      }}
    />
  );
}
