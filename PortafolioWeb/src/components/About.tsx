import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { personalInfo } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const About = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Efecto de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text"
          >
            👨‍💻 Sobre Mí
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-medium"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-5 md:p-6 rounded-xl md:rounded-2xl border border-blue-700/50 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🎓
              </motion.div>
              <h3 className="font-bold text-blue-300 mb-1 text-base md:text-lg">Educación</h3>
              <p className="text-sm text-slate-300 font-medium">Ing. Informática - UNA</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-5 md:p-6 rounded-xl md:rounded-2xl border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
              >
                💼
              </motion.div>
              <h3 className="font-bold text-purple-300 mb-1 text-base md:text-lg">Experiencia</h3>
              <p className="text-sm text-slate-300 font-medium">2+ años en desarrollo</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-pink-900/40 to-pink-800/40 p-5 md:p-6 rounded-xl md:rounded-2xl border border-pink-700/50 hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
              >
                🚀
              </motion.div>
              <h3 className="font-bold text-pink-300 mb-1 text-base md:text-lg">Proyectos</h3>
              <p className="text-sm text-slate-300 font-medium">10+ proyectos completados</p>
            </motion.div>
          </motion.div>

          {/* CTA para ver proyectos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300"
            >
              Ver mis proyectos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
