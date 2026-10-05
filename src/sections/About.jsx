import { Sparkles, MapPin, Zap, Database, CheckCircle2, Compass, Terminal, Clock, ShieldCheck, Server } from "lucide-react";
import Card from "../components/Card";

export default function About() {
  return (
    <section id="about" className="py-20 relative border-y border-white/5 bg-[#080C14]/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Stack Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Engineered end-to-end. Polished to the pixel.
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base leading-relaxed">
            Bridging resilient database design and server-side logic with reactive, tactile user interfaces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bento Card 1: Core Profile (Col span 7) */}
          <Card className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between" delay={0.1}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  Full-Stack Engineering
                </span>
                <span className="text-[11px] font-mono text-slate-500">01 // Profile</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                Building modern web apps with Next.js, Supabase, and TypeScript.
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                I build end-to-end web applications where server performance, data integrity, and fluid frontend UX work in complete harmony. From schema design to interactive component state, I treat every layer with equal rigor.
              </p>

              {/* 3 Core Strengths */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Server className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Server-Driven Next.js:</strong> App Router, Server Components, and streaming responses for fast initial loads without heavy bundle bloat.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Database className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Supabase & PostgreSQL:</strong> Relational modeling, Row-Level Security (RLS), automated migrations, and realtime subscriptions.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Zap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Tactile Frontend Polish:</strong> Micro-interactions with Framer Motion spring physics, Tailwind CSS v4, and accessible layouts.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                #NextJS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                #Supabase
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                #TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                #PostgreSQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                #React19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                #Tailwindv4
              </span>
            </div>
          </Card>

          {/* Bento Card 2: Geo & Remote Availability (Col span 5) */}
          <Card className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between" delay={0.2}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Base & Timezone
                </span>
                <span className="text-[11px] font-mono text-slate-500">02 // Remote</span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Davao City, Philippines
              </h4>
              <p className="text-xs font-mono text-slate-400 mb-4">
                UTC+8 · Ready for global asynchronous teams
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Work Mode:</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Remote Available
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Languages:</span>
                  <span className="text-slate-200">English (Conversational), Filipino</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Response Time:</span>
                  <span className="text-blue-400 font-semibold">&lt; 24h Guaranteed</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Overlap:</span>
                  <span className="text-slate-200">Flexible for US / EU / APAC</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Async Communicator</div>
                <div className="text-[11px] text-slate-400">Concise documentation, clear PRs, and fast turnarounds.</div>
              </div>
            </div>
          </Card>

          {/* Bento Card 3: Engineering Standards (Col span 6) */}
          <Card className="md:col-span-6 p-6" delay={0.3}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Quality Standards
              </span>
              <span className="text-[11px] font-mono text-slate-500">03 // Standards</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white mb-3">
              What I prioritize on every build
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-xs font-bold text-white mb-0.5 flex items-center gap-1.5">
                  <span className="text-blue-400 font-mono">01.</span> End-to-End Type Safety
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Strict TypeScript contracts connecting database schemas directly to client UI.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-xs font-bold text-white mb-0.5 flex items-center gap-1.5">
                  <span className="text-blue-400 font-mono">02.</span> Secure Data & Auth
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Supabase RLS policies and server-side validation protecting every mutation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-xs font-bold text-white mb-0.5 flex items-center gap-1.5">
                  <span className="text-blue-400 font-mono">03.</span> Instant UI Feedback
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Optimistic updates, smooth transitions, and tactile feedback under 50ms.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-xs font-bold text-white mb-0.5 flex items-center gap-1.5">
                  <span className="text-blue-400 font-mono">04.</span> Lean Bundles
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Server components and efficient tree-shaking keeping client JS lightweight.
                </p>
              </div>
            </div>
          </Card>

          {/* Bento Card 4: Now / Current Focus (Col span 6) */}
          <Card className="md:col-span-6 p-6" delay={0.4}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                Current Focus
              </span>
              <span className="text-[11px] font-mono text-slate-500">04 // /now</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white mb-3">
              What I'm building & mastering right now
            </h4>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-slate-200">Next.js App Router, Server Actions & Streaming</span>
                </div>
                <span className="text-[10px] text-blue-400 font-semibold uppercase">Framework</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Supabase: PostgreSQL RLS, Realtime & Edge Functions</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold uppercase">Database</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span className="text-slate-200">TypeScript & Tailwind CSS v4 Architecture</span>
                </div>
                <span className="text-[10px] text-sky-400 font-semibold uppercase">Core</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-slate-200">AI-Augmented Engineering (Antigravity & Claude Code)</span>
                </div>
                <span className="text-[10px] text-purple-400 font-semibold uppercase">Tooling</span>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}

