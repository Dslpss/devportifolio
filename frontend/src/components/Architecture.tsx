"use client";

import { motion } from "framer-motion";
import { Database, Globe, Layers, Server, Workflow } from "lucide-react";

const nodes = [
  { id: "client", label: "Cliente", icon: Globe, color: "text-white" },
  { id: "cdn", label: "Azure CDN", icon: Layers, color: "text-blue-400" },
  { id: "frontend", label: "App Next.js", icon: Server, color: "text-neon-cyan" },
  { id: "mule", label: "API MuleSoft", icon: Workflow, color: "text-neon-purple" },
  { id: "db", label: "Banco de Dados Legacy", icon: Database, color: "text-emerald-400" },
];

export function Architecture() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          O <span className="text-white/30">&</span> <span className="text-neon-cyan">Invisível</span> Visível
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Este portfólio não é apenas um site estático. É uma prova de conceito viva conectando frontend moderno com padrões de integração enterprise.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto relative z-10">
        {nodes.map((node, i) => (
          <div key={node.id} className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              className={`w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${node.color} relative z-10 backdrop-blur-sm`}
            >
              <node.icon className="w-8 h-8" />
              
              {/* Pulse effect */}
              <div className={`absolute inset-0 rounded-2xl bg-current opacity-10 blur-xl animate-pulse`} />
            </motion.div>
            
            <span className="text-sm font-mono text-gray-500">{node.label}</span>

            {/* Connector Line (Horizontal for Desktop) */}
            {i < nodes.length - 1 && (
              <div className="hidden md:block absolute top-10 left-full w-12 h-[2px] bg-white/10 -z-10">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                  className={`w-full h-full bg-gradient-to-r from-transparent via-${i === 2 ? 'neon-purple' : 'neon-cyan'} to-transparent`}
                />
              </div>
            )}
             {/* Connector Line (Vertical for Mobile) */}
             {i < nodes.length - 1 && (
              <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-8 bg-white/10 -z-10">
                 <motion.div
                  initial={{ y: "-100%" }}
                  whileInView={{ y: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                  className={`w-full h-full bg-gradient-to-b from-transparent via-${i === 2 ? 'neon-purple' : 'neon-cyan'} to-transparent`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
