import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2 } from 'lucide-react';
import { memo } from 'react';
import { personalInfo } from '../data/portfolio';

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const technologies = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind', color: 'from-cyan-500 to-teal-500' },
    { name: 'Framer Motion', color: 'from-purple-500 to-pink-500' },
  ];

  const stats = [
    { icon: '💼', label: 'Proyectos en Prod.', value: '3' },
    { icon: '🛠️', label: 'Tecnologías', value: '15+' },
    { icon: '🏆', label: 'Años Exp.', value: '2+' },
  ];

  return (
    <footer className="bg-slate-950 text-white py-16 md:py-20 px-4 sm:px-6 border-t border-slate-800/60 relative overflow-hidden">
      {/* Fondos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-14 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-4 md:p-6 text-center border border-slate-700/40"
            >
              <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-extrabold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10"
        >
          <div className="inline-block glass rounded-2xl p-6 md:p-8 border border-slate-700/40">
            <div className="text-3xl md:text-5xl font-extrabold gradient-text mb-2 flex items-center justify-center gap-3">
              <Code2 className="w-7 h-7 md:w-10 md:h-10" />
              {personalInfo.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <p className="text-slate-400 text-sm md:text-base font-semibold">
              {personalInfo.title}
            </p>
          </div>
        </motion.div>

        {/* Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-center text-slate-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Construido con
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                whileHover={{ y: -2 }}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} rounded-lg text-white font-semibold text-xs shadow-md`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-2">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>y mucho ☕</span>
          </div>
          <p className="text-slate-600 text-xs">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>

      {/* Botón volver arriba */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg flex items-center justify-center z-50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
});
