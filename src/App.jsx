import Navbar from "./components/Navbar";
import MouseSpotlight from "./components/MouseSpotlight";
import PixelBlast from "./components/PixelBlast";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import TechStack from "./sections/TechStack";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      {/* 
        React 19 Native SEO Hoisting:
        These tags will automatically move to the document <head> at runtime.
      */}
      <title>Carmelino Jadulco — Full-Stack Developer | Next.js & Supabase</title>
      <meta 
        name="description" 
        content="Full-stack developer building modern web applications with Next.js, Supabase, TypeScript, and React. Clean architecture and tactile interfaces." 
      />
      <meta property="og:title" content="Carmelino Jadulco — Full-Stack Developer | Next.js & Supabase" />
      <meta 
        property="og:description" 
        content="Full-stack developer building modern web applications with Next.js, Supabase, TypeScript, and React." 
      />

      {/* PixelBlast — Fixed full-viewport interactive background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          color="#3B82F6"
          pixelSize={4}
          patternScale={2.5}
          patternDensity={0.55}
          speed={0.18}
          edgeFade={0.35}
          transparent={true}
          enableRipples={true}
          rippleSpeed={0.25}
          rippleThickness={0.08}
          rippleIntensityScale={0.7}
          pixelSizeJitter={0.3}
          autoPauseOffscreen={true}
        />
      </div>

      {/* Global interactive elements */}
      <MouseSpotlight />
      <Navbar />

      {/* Main Flow */}
      <main className="relative w-full min-h-screen overflow-x-hidden z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}