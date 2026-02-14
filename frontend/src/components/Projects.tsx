"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Lock, X } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "MuleSoft System API",
    category: "Integração",
    description: "API de nível empresarial conectando Salesforce a bancos de dados legacy SQL com 99.9% de uptime.",
    tech: ["Mule 4", "DataWeave", "RAML"],
    link: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Pipelines Azure DevOps",
    category: "DevOps",
    description: "Infraestrutura de CI/CD automatizada reduzindo o tempo de deploy em 60% usando templates YAML.",
    tech: ["Azure Pipelines", "Docker", "Bicep"],
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Microsserviços E-Commerce",
    category: "Arquitetura",
    description: "Arquitetura backend escalável suportando mais de 10k usuários simultâneos durante flash sales.",
    tech: ["Node.js", "Redis", "Kafka"],
    link: "#",
    color: "from-emerald-400 to-cyan-500"
  },
  {
    title: "Este Portfólio",
    category: "Frontend",
    description: "Demonstração de capacidades modernas de UI unindo Next.js e animações complexas.",
    tech: ["Next.js 14", "Framer Motion", "Tailwind"],
    link: "#",
    color: "from-white to-gray-400"
  }
];

export function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black/50 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter">
          Trabalhos <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Selecionados</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setShowModal(true)}
              className={`group relative p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden cursor-pointer ${
                i === 0 || i === 3 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`absolute top-0 right-0 p-32 opacity-20 blur-3xl bg-gradient-to-br ${project.color} group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/20 text-white/70">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-neon-cyan transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-white/50">#{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium Coming Soon Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-neon-purple/10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple" />
              
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/5">
                  <Lock className="w-8 h-8 text-neon-cyan" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Em Breve
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Os detalhes técnicos completos, código fonte e documentação de arquitetura deste projeto estão sendo finalizados para publicação pública.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
