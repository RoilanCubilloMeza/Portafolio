import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2, Sparkles, Rocket } from 'lucide-react';
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
    { icon: '💼', label: 'Proyectos', value: '10+' },
    { icon: '🛠️', label: 'Tecnologías', value: '15+' },
    { icon: '🏆', label: 'Años Exp.', value: '2+' },
  ];

  return (
    <footer className="bg-slate-950 text-white py-16 md:py-20 px-4 sm:px-6 border-t border-slate-800 relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
        
        {/* Círculos animados de fondo */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Estadísticas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: index * 0.3,
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-xl md:text-2xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo principal con efectos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            {/* Efecto de brillo detrás del logo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative glass rounded-2xl p-6 md:p-8">
              <motion.div 
                className="text-4xl md:text-6xl font-bold gradient-text mb-3 flex items-center justify-center gap-3"
              >
                <Code2 className="w-8 h-8 md:w-12 md:h-12" />
                {personalInfo.name.split(' ').map((n: string) => n[0]).join('')}
                <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
              </motion.div>
              
              <motion.p
                className="text-slate-300 text-base md:text-lg font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.p>
              <motion.p
                className="text-slate-400 text-sm md:text-base flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Rocket className="w-4 h-4" />
                {personalInfo.location}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tecnologías con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="text-slate-400 text-sm md:text-base font-bold">
              Construido con
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r ${tech.color} rounded-full text-white font-bold text-xs md:text-sm shadow-lg hover:shadow-2xl transition-shadow`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separador decorativo */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8"
        />

        {/* Copyright con estilo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm md:text-base mb-4">
            <span className="font-medium">Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </motion.div>
            <span className="font-medium">y mucho</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ☕
            </motion.div>
          </div>

          <p className="text-slate-500 text-xs md:text-sm mb-2">
            © {currentYear} {personalInfo.name}. 
          </p>
          
          <motion.p
            className="text-slate-600 text-xs flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            
          </motion.p>
        </motion.div>
      </div>

      {/* Botón flotante para volver arriba - Mejorado */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15, y: -8, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-blue-500/50 transition-all duration-300 group"
        aria-label="Volver arriba"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <ArrowUp className="w-6 h-6 md:w-7 md:h-7 relative z-10 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
});
