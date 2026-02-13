import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { personalInfo } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const About = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  const highlights = [
    { icon: '🎓', label: 'Educación', value: 'Ing. Informática - UNA', color: 'from-blue-600/20 to-blue-500/10 border-blue-700/30 hover:border-blue-500/50' },
    { icon: '💼', label: 'Experiencia', value: '2+ años en desarrollo', color: 'from-purple-600/20 to-purple-500/10 border-purple-700/30 hover:border-purple-500/50' },
    { icon: '🚀', label: 'Proyectos', value: '10+ proyectos completados', color: 'from-pink-600/20 to-pink-500/10 border-pink-700/30 hover:border-pink-500/50' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900 to-slate-900" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass rounded-3xl p-8 sm:p-10 md:p-14 border border-slate-700/60"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-block text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
              Perfil
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
              Sobre Mí
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`bg-gradient-to-br ${item.color} p-5 md:p-6 rounded-2xl border transition-all duration-500 hover:shadow-lg`}
              >
                <div className="text-2xl md:text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-slate-200 mb-1 text-sm md:text-base">{item.label}</h3>
                <p className="text-xs md:text-sm text-slate-400">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 text-sm"
            >
              Ver mis proyectos
              <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
