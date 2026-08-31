import { motion } from "framer-motion";
import { ListTodo, Milestone, FileCode, CheckSquare, Rocket } from "lucide-react";
import Card from "../components/Card";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Planning & Requirements",
    description: "Aligning on core objectives, mapping user flows, and conducting keyword research to design the layout structure.",
    icon: ListTodo,
  },
  {
    step: "02",
    title: "Wireframing & UI/UX Design",
    description: "Creating wireframe layouts to establish proper content hierarchies, responsive spacing, and user-centric flows.",
    icon: Milestone,
  },
  {
    step: "03",
    title: "Clean Frontend Coding",
    description: "Developing semantic HTML markup, custom Tailwind CSS utility styling, and responsive, componentized React logic.",
    icon: FileCode,
  },
  {
    step: "04",
    title: "Rigorous Audits & Testing",
    description: "Performing lint check passes, cross-browser layout audits, and Lighthouse audits to ensure 95+ speed scores.",
    icon: CheckSquare,
  },
  {
    step: "05",
    title: "SEO Launch & Deployment",
    description: "Setting up production builds, indexing tags, hosting pipelines (Vercel), and setting page caching rules.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-950/20 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            Workflow Method
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            How I Bring Ideas To Production
          </h3>
          <p className="text-sm text-slate-400 max-w-md mt-3 leading-relaxed font-normal">
            Following a systematic engineering cycle guarantees high-performance applications and clean releases.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Process Flow Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {PROCESS_STEPS.map((proc, index) => {
            const Icon = proc.icon;
            return (
              <Card
                key={proc.step}
                delay={index * 0.1}
                className="flex flex-col justify-between items-start p-6 group h-full relative"
              >
                {/* Connector Line (Desktop only, between items except last) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-6 h-[1px] bg-slate-800 z-20" />
                )}

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-300 font-heading">
                      {proc.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <h4 className="text-md font-bold text-white mb-2 leading-snug tracking-tight">
                    {proc.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {proc.description}
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
