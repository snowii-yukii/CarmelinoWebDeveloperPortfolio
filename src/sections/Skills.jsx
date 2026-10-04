import { motion } from "framer-motion";
import Card from "../components/Card";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database Systems",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git & GitHub", "Antigravity", "npm", "Claude Code"],
  },
  {
    title: "Deployment & Systems",
    skills: ["Vercel Hosting", "Netlify Deploys", "Render"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            Technical Matrix
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Categorized Skill Summary
          </h3>
          <p className="text-sm text-slate-400 max-w-md mt-3 leading-relaxed font-normal">
            No subjective progress bars. Here is a definitive list of the development toolsets I utilize to build applications.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-start p-6">
                <h4 className="text-md font-bold text-white mb-4 border-b border-white/5 pb-3">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-slate-300 bg-slate-800/40 hover:bg-blue-500/10 hover:text-blue-400 border border-white/5 hover:border-blue-500/20 px-3 py-1.5 rounded-lg transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
