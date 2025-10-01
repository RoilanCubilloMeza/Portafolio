import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { achievements, passions } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const Passions = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  return (
    <section id="passions" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Logros */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center gradient-text"
        >
          🏆 Logros Profesionales
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-12 md:mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-xl md:rounded-2xl p-5 md:p-6 card-hover"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{achievement.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pasiones */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center gradient-text"
        >
          ❤️ Mis Pasiones
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8, rotate: 2 }}
              className="glass rounded-xl md:rounded-2xl p-6 md:p-8 text-center card-hover"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="text-5xl md:text-6xl mb-3 md:mb-4"
              >
                {passion.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 md:mb-3">
                {passion.title}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                {passion.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA final para contacto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 md:mt-16 text-center glass rounded-xl md:rounded-2xl p-6 md:p-10"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl md:text-6xl mb-4"
          >
            🤝
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 gradient-text">
            ¿Trabajamos juntos?
          </h3>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6 md:mb-8 font-medium">
            Si tienes un proyecto en mente o quieres colaborar, no dudes en contactarme. 
            Estoy siempre abierto a nuevas oportunidades y desafíos.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-full text-base md:text-lg font-bold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 pulse-glow"
          >
            ¡Contáctame ahora!
            <motion.span
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});
