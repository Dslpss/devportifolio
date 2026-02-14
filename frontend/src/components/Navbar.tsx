"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Projetos", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Arquitetura", href: "#architecture" }, 
  { name: "Contato", href: "#contact" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 pointer-events-none"
    >
      {/* Brand Identity - Force Refresh */}
      <div className="pointer-events-auto">
        <Link href="/" className="group flex items-center gap-3 px-2 pr-4 py-2 rounded-full border border-white/5 bg-black/20 backdrop-blur-md hover:bg-black/40 transition-colors">
          
          <div key="profile-avatar" className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-neon-cyan transition-colors">
            <Image 
              src="/perfil.png" 
              alt="Dennis Profile" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-xs text-gray-200 group-hover:text-white transition-colors leading-none">
              DEV.FULLSTACK
            </span>
            <span className="text-[10px] text-neon-cyan font-medium leading-none mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></span>
              Available
            </span>
          </div>
        </Link>
      </div>

      {/* 2. Center: Navigation Capsule with NEON GLOW */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_25px_rgba(189,0,255,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-shadow duration-500">
        {links.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white hover:text-glow"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div
                layoutId="navbar-hover"
                className="absolute inset-0 bg-white/10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* 3. Right: Socials & CTA */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1 px-2 py-1.5 rounded-full border border-white/5 bg-black/20 backdrop-blur-md">
           <a href="https://github.com/Dslpss" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
             <Github className="w-4 h-4" />
           </a>
           <a href="https://www.linkedin.com/in/dennis-emannuel-60b670283/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-full transition-all">
             <Linkedin className="w-4 h-4" />
           </a>
        </div>
        
        <Link href="mailto:dennisemannuel93@gmail.com" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
          <Mail className="w-4 h-4" />
          <span>Falar Comigo</span>
        </Link>
      </div>
    </motion.header>
  );
}
