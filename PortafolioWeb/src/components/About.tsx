import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { Code2, Rocket, Shield, Smartphone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const About = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  const highlights = [
    { icon: <Code2 className="w-5 h-5" />, label: 'Stack Principal', value: 'React · Next.js · Node.js', color: 'from-blue-600/20 to-blue-500/10 border-blue-700/30 hover:border-blue-500/50', iconColor: 'text-blue-400' },
    { icon: <Rocket className="w-5 h-5" />, label: 'Proyectos', value: '3 apps en producción', color: 'from-purple-600/20 to-purple-500/10 border-purple-700/30 hover:border-purple-500/50', iconColor: 'text-purple-400' },
    { icon: <Shield className="w-5 h-5" />, label: 'Interés', value: 'Ciberseguridad & IA', color: 'from-emerald-600/20 to-emerald-500/10 border-emerald-700/30 hover:border-emerald-500/50', iconColor: 'text-emerald-400' },
    { icon: <Smartphone className="w-5 h-5" />, label: 'Móvil', value: 'React Native · Flutter', color: 'from-pink-600/20 to-pink-500/10 border-pink-700/30 hover:border-pink-500/50', iconColor: 'text-pink-400' },
  ];

  const stats = [
    { value: '15+', label: 'Tecnologías' },
    { value: '2+', label: 'Años Exp.' },
    { value: '3', label: 'Apps en Prod.' },
    { value: '100%', label: 'Autodidacta' },
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

          {/* Stats rápidos — lo primero que un recruiter quiere ver */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className="text-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/40"
              >
                <div className="text-2xl md:text-3xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl border transition-all duration-500 hover:shadow-lg`}
              >
                <div className={`${item.iconColor} mb-2`}>{item.icon}</div>
                <h3 className="font-bold text-slate-200 mb-1 text-sm">{item.label}</h3>
                <p className="text-xs text-slate-400">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 text-sm shimmer-btn relative overflow-hidden"
            >
              Ver mis proyectos
              <span>→</span>
            </motion.a>
            <motion.a
              href="/cv-roilan-cubillo.pdf"
              target="_blank"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-xl font-bold shadow-lg hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 text-sm"
            >
              Descargar CV
              <span>📄</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
