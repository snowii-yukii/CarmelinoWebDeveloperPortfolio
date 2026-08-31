import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import Card from "../components/Card";

export default function About() {
  const PILLARS = [
    {
      title: "Business Value First",
      description: "I focus on page speed, search visibility, and intuitive UI to convert visitors into customers.",
      icon: TrendingUp,
    },
    {
      title: "Clean, Maintainable Code",
      description: "Writing semantic HTML, responsive CSS, and modular React components that scale easily.",
      icon: CheckCircle2,
    },
    {
      title: "Rapid Execution & Adaptability",
      description: "Quick turnaround times, continuous iteration, and eager to master new engineering frameworks.",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Value Statement */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
            Building digital tools that address business challenges.
          </h3>
          <div className="h-1 w-12 bg-blue-500 rounded-full mb-6" />

          <p className="text-slate-300 leading-relaxed font-normal mb-4">
            I have been designing and building websites for over two years through hands-on practice,
            personal projects, and continuous learning.
          </p>
          <p className="text-slate-400 leading-relaxed font-normal mb-4">
            Instead of just writing markup, I focus on creating responsive, user-friendly layouts utilizing
            modern ecosystems like React, Node.js, Express, and Tailwind CSS.
          </p>
          <p className="text-slate-400 leading-relaxed font-normal">
            I am currently seeking developer opportunities where I can collaborate with senior engineers,
            contribute to real-world products, and add business value from day one.
          </p>
        </div>

        {/* Right Column: Professional Pillars list */}
        <div className="lg:col-span-6 flex flex-col gap-6 w-full">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} delay={i * 0.1} className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-1">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-white mb-1.5">{pillar.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
