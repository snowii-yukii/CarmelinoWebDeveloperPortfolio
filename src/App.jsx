import Navbar from "./components/Navbar";
import MouseSpotlight from "./components/MouseSpotlight";
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

      {/* Global interactive elements */}
      <MouseSpotlight />
      <Navbar />

      {/* Main Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <TechStack />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}