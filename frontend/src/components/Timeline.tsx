"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    year: "2026 - Presente",
    role: "Engenheiro de Integração",
    company: "Especialização em MuleSoft",
    description: "Iniciando a trajetória na construção de APIs enterprise e orquestração de integrações complexas com Anypoint Platform.",
    icon: Star,
    color: "neon-purple"
  },
  {
    year: "2025 - 2026",
    role: "Analista Cloud & DevOps",
    company: "Projetos Azure",
    description: "Gestão de APIs corporativas utilizando Azure API Management (APIM), além de automação de pipelines CI/CD e infraestrutura cloud.",
    icon: Briefcase,
    color: "blue-500"
  },
  {
    year: "2023 - 2024",
    role: "Desenvolvedor Fullstack",
    company: "Freelancer / Projetos",
    description: "Desenvolvimento de interfaces modernas e APIs performáticas, consolidando conhecimentos em React, Next.js e Node.js.",
    icon: Briefcase,
    color: "neon-cyan"
  },
  {
    year: "2021 - 2023",
    role: "Fundamentos & Lógica",
    company: "Início da Jornada",
    description: "Dedicação integral ao estudo de lógica de programação, estruturas de dados e bases da computação.",
    icon: GraduationCap,
    color: "emerald-400"
  }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tighter">
          Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Jornada</span>
        </h2>

        <div ref={containerRef} className="relative pl-8 md:pl-0">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
             <motion.div 
               style={{ height: lineHeight }}
               className="w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan shadow-[0_0_10px_#00f3ff]"
             />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/20 -translate-x-[calc(50%-1px)] z-10 flex items-center justify-center">
                   <div className={`w-2 h-2 rounded-full bg-${exp.color} animate-pulse shadow-[0_0_8px_currentColor] text-${exp.color}`} />
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0">
                   <div className={`p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-all group ${
                     i % 2 === 0 ? "md:text-left" : "md:text-right"
                   }`}>
                      <span className={`inline-block px-3 py-1 mb-4 text-xs font-mono rounded-full border border-white/10 text-${exp.color} bg-${exp.color}/10`}>
                        {exp.year}
                      </span>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                        {exp.role}
                      </h3>
                      
                      <h4 className="text-sm font-medium text-gray-400 mb-4">
                        {exp.company}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                   </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
