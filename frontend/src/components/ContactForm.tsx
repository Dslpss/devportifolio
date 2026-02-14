"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
             Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Conversar?</span>
           </h2>
           <p className="text-gray-400">
             Preencha o formulário abaixo para enviar uma mensagem diretamente para minha API.
           </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Nome</label>
              <input 
                type="text" 
                id="name"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-400">Assunto</label>
            <input 
              type="text" 
              id="subject"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
              placeholder="Sobre o que vamos falar?"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-400">Mensagem</label>
            <textarea 
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
              placeholder="Conte-me mais sobre sua ideia..."
            />
          </div>

          <button 
            type="button" // Prevent submission for demo
            className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Enviar Mensagem</span>
            <Send className="w-5 h-5" />
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            * Este formulário simula uma chamada POST para a MuleSoft System API.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
