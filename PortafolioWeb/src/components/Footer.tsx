import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white py-12 md:py-16 px-4 sm:px-6 border-t border-slate-800 relative overflow-hidden">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo y descripción */}
          <div className="text-center mb-8">
            <motion.div 
              className="text-3xl md:text-4xl font-bold gradient-text mb-3"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name.split(' ').map((n: string) => n[0]).join('')}
            </motion.div>
            
            <p className="text-slate-400 text-sm md:text-base mb-2">
              {personalInfo.title}
            </p>
            <p className="text-slate-500 text-xs md:text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Copyright y créditos */}
          <div className="text-center border-t border-slate-800 pt-6">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-3">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            </div>

            <p className="text-slate-500 text-xs md:text-sm mb-4">
              Desarrollado con React, TypeScript, Tailwind CSS.
            </p>

            <p className="text-slate-600 text-xs">
              © {currentYear} {personalInfo.name}.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Botón flotante para volver arriba */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-blue-500/50 transition-all duration-300 pulse-glow"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    </footer>
  );
};
