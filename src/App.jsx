import Navbar from "./components/Navbar";
import MouseSpotlight from "./components/MouseSpotlight";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      {/* 
        React 19 Native SEO Hoisting:
        These tags will automatically move to the document <head> at runtime.
      */}
      <title>Carmelino Jadulco (Carms) — Frontend Developer & UI Craftsman</title>
      <meta 
        name="description" 
        content="Frontend developer based in Davao City, Philippines. Building fast, tactile, and responsive web applications with React 19, Tailwind CSS, and Framer Motion." 
      />
      <meta property="og:title" content="Carmelino Jadulco (Carms) — Frontend Developer & UI Craftsman" />
      <meta 
        property="og:description" 
        content="Frontend developer based in Davao City, Philippines. Building fast, tactile, and responsive web applications with React 19, Tailwind CSS, and Framer Motion." 
      />

      {/* Global interactive elements */}
      <MouseSpotlight />
      <Navbar />

      {/* Main Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}