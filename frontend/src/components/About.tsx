"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Coffee, Cpu, Globe } from "lucide-react";

export function About() {
  return (
    <section className="py-24 px-6 relative bg-black/80">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="order-2 md:order-1"
        >
          <h2 className="text-4xl font-bold mb-6 tracking-tighter">
            Mais que <span className="text-neon-purple">Código</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Olá! Sou o Dennis. Minha paixão é conectar a complexidade do backend com a fluidez do frontend. Não vejo sistemas como caixas isoladas, mas como organismos vivos que precisam conversar perfeitamente.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Quando não estou desenhando arquiteturas no Azure ou integrando APIs no MuleSoft, estou explorando novas tecnologias de UI ou otimizando pipelines de CI/CD para economizar aqueles milissegundos preciosos.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Code2 className="text-neon-cyan" />
                <span className="text-sm font-medium">Clean Code</span>
             </div>
             <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Cpu className="text-neon-purple" />
                <span className="text-sm font-medium">Alta Performance</span>
             </div>
             <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Globe className="text-emerald-400" />
                <span className="text-sm font-medium">Escalabilidade</span>
             </div>
             <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Coffee className="text-yellow-400" />
                <span className="text-sm font-medium">Problem Solver</span>
             </div>
          </div>
        </motion.div>

        {/* Visual Side (Placeholder for Image/Avatar) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="order-1 md:order-2 relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center group shadow-2xl shadow-neon-purple/20"
        >
           {/* User Profile Image */}
           <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 opacity-50 group-hover:opacity-80 transition-opacity z-10" />
           <Image 
             src="/perfil.png"
             alt="Dennis Emannuel"
             fill
             className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
           />
        </motion.div>

      </div>
    </section>
  );
}
