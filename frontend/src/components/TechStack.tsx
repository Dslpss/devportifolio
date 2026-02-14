"use client";

import { cn } from "@/lib/utils";

const techs = [
  "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "MuleSoft", "Azure DevOps", "Docker", "Kubernetes",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"
];

export function TechStack() {
  return (
    <section id="stack" className="py-20 relative overflow-hidden bg-black border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      <div className="flex relative overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 py-4">
          {techs.map((tech, i) => (
             <span key={i} className="text-4xl md:text-6xl font-bold text-white/10 uppercase tracking-tighter hover:text-neon-cyan/50 transition-colors cursor-default">
               {tech}
             </span>
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 py-4 px-16">
          {techs.map((tech, i) => (
             <span key={`dup-${i}`} className="text-4xl md:text-6xl font-bold text-white/10 uppercase tracking-tighter hover:text-neon-cyan/50 transition-colors cursor-default">
               {tech}
             </span>
          ))}
        </div>
      </div>
    </section>
  );
}
