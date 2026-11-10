import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import MouseSpotlight from "./components/MouseSpotlight";
import PixelBlast from "./components/PixelBlast";
import TechTicker from "./components/TechTicker";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { memo } from "react";

// Memoized so theme context re-renders don't cascade into static sections
const MemoHero = memo(Hero);
const MemoTechTicker = memo(TechTicker);
const MemoAbout = memo(About);
const MemoProjects = memo(Projects);
const MemoTimeline = memo(Timeline);
const MemoTechStack = memo(TechStack);
const MemoContact = memo(Contact);
const MemoFooter = memo(Footer);
const MemoNavbar = memo(Navbar);
const MemoMouseSpotlight = memo(MouseSpotlight);

// PixelBlast is always white/black particles — opacity is toggled via CSS .dark class
// No useTheme() needed here, eliminating the cascade to the whole tree on toggle.
function PortfolioContent() {
  return (
    <>
      <title>Carmelino Jadulco — Full-Stack Developer</title>
      <meta
        name="description"
        content="Full-stack developer building high-performance web applications with Next.js, Supabase, TypeScript, and React. Clean architecture and tactile interfaces."
      />
      <meta property="og:title" content="Carmelino Jadulco — Full-Stack Developer" />
      <meta
        property="og:description"
        content="Full-stack developer building high-performance web applications with Next.js, Supabase, TypeScript, and React."
      />

      {/* PixelBlast — opacity controlled purely by CSS dark class (no JS re-render) */}
      <div className="pixel-blast-wrapper fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          color="#888888"
          pixelSize={4}
          patternScale={2.5}
          patternDensity={0.35}
          speed={0.15}
          edgeFade={0.4}
          transparent={true}
          enableRipples={true}
          rippleSpeed={0.2}
          rippleThickness={0.06}
          rippleIntensityScale={0.5}
          pixelSizeJitter={0.25}
          autoPauseOffscreen={true}
        />
      </div>

      <MemoMouseSpotlight />
      <MemoNavbar />

      <main className="relative w-full min-h-screen overflow-x-hidden z-10">
        <MemoHero />
        <MemoTechTicker />
        <MemoAbout />
        <MemoProjects />
        <MemoTimeline />
        <MemoTechStack />
        <MemoContact />
      </main>

      <MemoFooter />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
