import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { achievements, passions } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const Passions = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  return (
    <section id="passions" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/8 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Logros */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-sm md:text-base font-semibold text-amber-400 tracking-widest uppercase mb-3">
            Trayectoria
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
            Logros Profesionales
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-20 md:mb-28">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 md:p-7 border border-slate-700/60 hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="text-3xl md:text-4xl mb-3">{achievement.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pasiones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-sm md:text-base font-semibold text-pink-400 tracking-widest uppercase mb-3">
            Motivación
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
            Mis Pasiones
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 md:p-8 text-center border border-slate-700/60 hover:border-pink-500/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="text-4xl md:text-5xl mb-4">{passion.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">
                {passion.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {passion.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center glass rounded-3xl p-8 md:p-12 border border-slate-700/60"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
            ¿Trabajamos juntos?
          </h3>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Si tienes un proyecto en mente o quieres colaborar, no dudes en contactarme.
            Estoy siempre abierto a nuevas oportunidades y desafíos.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-xl text-base md:text-lg font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            ¡Contáctame ahora!
            <span>👋</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});
