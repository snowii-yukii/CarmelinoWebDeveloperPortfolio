import antigravitySvg from "@/assets/iconssvg/antigravity.svg";
import claudeSvg from "@/assets/iconssvg/claude.svg";
import cssSvg from "@/assets/iconssvg/css.svg";
import cursorSvg from "@/assets/iconssvg/cursor-ai.svg";
import expressSvg from "@/assets/iconssvg/express.svg";
import geminiSvg from "@/assets/iconssvg/gemini.svg";
import gitSvg from "@/assets/iconssvg/git.svg";
import githubSvg from "@/assets/iconssvg/github.svg";
import grokSvg from "@/assets/iconssvg/grok-light.svg";
import htmlSvg from "@/assets/iconssvg/html.svg";
import jsSvg from "@/assets/iconssvg/javascript.svg";
import mongodbSvg from "@/assets/iconssvg/mongodb.svg";
import mysqlSvg from "@/assets/iconssvg/mysql.svg";
import nextjsSvg from "@/assets/iconssvg/nextjs-fill.svg";
import nodejsSvg from "@/assets/iconssvg/nodejs-icon.svg";
import openaiSvg from "@/assets/iconssvg/openai-chatgpt.svg";
import postgresqlSvg from "@/assets/iconssvg/postgresql.svg";
import reactSvg from "@/assets/iconssvg/react.svg";
import restApiSvg from "@/assets/iconssvg/rest-api.svg";
import shadcnSvg from "@/assets/iconssvg/shadcn.svg";
import supabaseSvg from "@/assets/iconssvg/supabase.svg";
import tailwindSvg from "@/assets/iconssvg/tailwind-css.svg";
import typescriptSvg from "@/assets/iconssvg/typescript.svg";
import vscodeSvg from "@/assets/iconssvg/vscode.svg";

const TECH_ICONS_MAP = {
  nextjs: { name: "Next.js", src: nextjsSvg, isInverted: true },
  react: { name: "React 19", src: reactSvg, isInverted: false },
  typescript: { name: "TypeScript", src: typescriptSvg, isInverted: false },
  tailwindcss: { name: "Tailwind CSS", src: tailwindSvg, isInverted: false },
  supabase: { name: "Supabase", src: supabaseSvg, isInverted: false },
  postgresql: { name: "PostgreSQL", src: postgresqlSvg, isInverted: false },
  nodejs: { name: "Node.js", src: nodejsSvg, isInverted: false },
  express: { name: "Express.js", src: expressSvg, isInverted: true },
  mongodb: { name: "MongoDB", src: mongodbSvg, isInverted: false },
  mysql: { name: "MySQL", src: mysqlSvg, isInverted: false },
  git: { name: "Git", src: gitSvg, isInverted: false },
  github: { name: "GitHub", src: githubSvg, isInverted: true },
  shadcn: { name: "shadcn/ui", src: shadcnSvg, isInverted: true },
  restapi: { name: "REST APIs", src: restApiSvg, isInverted: true },
  cursor: { name: "Cursor", src: cursorSvg, isInverted: true },
  antigravity: { name: "Antigravity", src: antigravitySvg, isInverted: false },
  claude: { name: "Claude Code", src: claudeSvg, isInverted: false },
  gemini: { name: "Gemini", src: geminiSvg, isInverted: false },
  grok: { name: "Grok", src: grokSvg, isInverted: true },
  openai: { name: "OpenAI", src: openaiSvg, isInverted: false },
  vscode: { name: "VS Code", src: vscodeSvg, isInverted: false },
  javascript: { name: "JavaScript", src: jsSvg, isInverted: false },
  html: { name: "HTML5", src: htmlSvg, isInverted: false },
  css: { name: "CSS3", src: cssSvg, isInverted: false },
};

export default function TechIcon({ name, className = "w-5 h-5", alt }) {
  const iconKey = name?.toLowerCase().replace(/[\s./_-]/g, "");
  
  let match = TECH_ICONS_MAP[name] || TECH_ICONS_MAP[iconKey];
  if (!match) {
    const foundKey = Object.keys(TECH_ICONS_MAP).find(
      (k) => k.includes(iconKey) || iconKey.includes(k)
    );
    if (foundKey) match = TECH_ICONS_MAP[foundKey];
  }

  if (!match) {
    return null;
  }

  // Naturally black logos (Next.js, GitHub, shadcn, etc.) stay black in light mode and invert to white in dark mode.
  // All colored logos (React cyan, TypeScript blue, Supabase emerald, etc.) retain their full authentic colors in both modes!
  const filterClass = match.isInverted
    ? "dark:invert dark:brightness-200 dark:contrast-125"
    : "";

  return (
    <img
      src={match.src}
      alt={alt || match.name}
      loading="lazy"
      className={`${className} inline-block object-contain transition-transform duration-300 ${filterClass}`}
    />
  );
}
