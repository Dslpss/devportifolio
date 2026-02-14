"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Top Section: Massive CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/5 pb-20">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
            >
              Tem uma ideia? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                Vamos construir.
              </span>
            </motion.h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              Especialista em criar soluções robustas de backend de alta escala e interfaces frontend premiadas.
            </p>
          </div>

          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
          >
            <Link 
              href="mailto:dennisemannuel93@gmail.com" 
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neon-cyan hover:scale-105 transition-all duration-300"
            >
              <span>Iniciar Projeto</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">DEV.FULLSTACK</h3>
            <p className="text-gray-500 max-w-sm">
              Engenharia de software focada em performance, escalabilidade e design de ponta.
            </p>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">Navegação</h4>
             <ul className="space-y-4">
               <li><Link href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">Projetos</Link></li>
               <li><Link href="#stack" className="text-gray-400 hover:text-neon-purple transition-colors">Tech Stack</Link></li>
               <li><Link href="#architecture" className="text-gray-400 hover:text-white transition-colors">Arquitetura</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">Social</h4>
             <ul className="space-y-4">
               <li>
                 <a href="https://github.com/Dslpss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                   <Github className="w-4 h-4" /> <span>GitHub</span>
                 </a>
               </li>
               <li>
                 <a href="https://www.linkedin.com/in/dennis-emannuel-60b670283/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
                   <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
                 </a>
               </li>
               <li>
                 <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors group">
                   <Twitter className="w-4 h-4" /> <span>Twitter</span>
                 </a>
               </li>
             </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Time */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 border-t border-white/5 pt-8">
          <p>© {currentYear} Dennis Emannuel. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              São Paulo, BR
            </span>
            <span>Local Time: {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' })}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
