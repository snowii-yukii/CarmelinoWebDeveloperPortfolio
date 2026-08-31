import { Smartphone, Monitor, Database, Search } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/Card";

const SERVICES = [
  {
    title: "Responsive Web Development",
    description: "Creating mobile-first interfaces that scale seamlessly across devices. Ensures high visitor retention and professional presentation.",
    icon: Smartphone,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    title: "Frontend Engineering",
    description: "Developing complex client-side applications using React, Vite, and Framer Motion. Smooth page transitions and state synchronization.",
    icon: Monitor,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Backend API Integration",
    description: "Designing RESTful APIs and server architectures with Node.js and Express. Relational & non-relational database management (MongoDB, MySQL).",
    icon: Database,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "SEO & Page Optimization",
    description: "Configuring schema markup, semantic headings, meta-tags, and asset compression for top Google scores and 95+ Lighthouse audits.",
    icon: Search,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            What I Can Do
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Services Built to Scale Businesses
          </h3>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                delay={index * 0.1}
                className="flex flex-col items-start gap-4 p-8"
              >
                <div className={`p-3.5 rounded-2xl shrink-0 ${service.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}