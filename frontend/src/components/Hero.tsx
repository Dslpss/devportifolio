"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] px-4 overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="z-10"
      >
        <h2 className="mb-4 text-sm font-semibold tracking-[0.2em] text-neon-cyan uppercase">
          Desenvolvedor Fullstack & DevOps
        </h2>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="z-10 text-5xl font-bold tracking-tighter md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        Construindo a <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
          Lógica Invisível
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="z-10 max-w-2xl mt-6 text-lg text-gray-400 md:text-xl"
      >
        De interfaces <span className="text-neon-cyan">modernas</span> a infraestrutura <span className="text-neon-purple">cloud</span> e sistemas <span className="text-white">integrados</span>.
      </motion.p>
      
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.8, duration: 0.8 }}
         className="z-10 mt-10 flex gap-4"
      >
        <button className="px-8 py-3 font-semibold text-black transition-transform bg-white rounded-full hover:scale-105 active:scale-95">
          Ver Projetos
        </button>
        <button className="px-8 py-3 font-semibold text-white transition-all border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40">
          Arquitetura
        </button>
      </motion.div>
    </section>
  );
}
