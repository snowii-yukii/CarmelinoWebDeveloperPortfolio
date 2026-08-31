import Navbar from "./components/Navbar";
import MouseSpotlight from "./components/MouseSpotlight";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Timeline from "./sections/Timeline";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      {/* 
        React 19 Native SEO Hoisting:
        These tags will automatically move to the document <head> at runtime.
      */}
      <title>Carms | Web Developer & SEO Specialist Portfolio</title>
      <meta name="description" content="A premium web developer portfolio showcasing React projects, RESTful API integrations, custom CSS styling, and speed-optimized designs." />
      <meta property="og:title" content="Carms | Web Developer & SEO Specialist Portfolio" />
      <meta property="og:description" content="A premium web developer portfolio showcasing React projects, RESTful API integrations, custom CSS styling, and speed-optimized designs." />

      {/* Global interactive elements */}
      <MouseSpotlight />
      <Navbar />

      {/* Layout Grid */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Process />
        <Timeline />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}