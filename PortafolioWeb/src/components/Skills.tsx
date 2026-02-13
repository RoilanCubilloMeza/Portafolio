import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { skills } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const Skills = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  const categories = ['Frontend', 'Backend', 'Móvil', 'Otros'];
  const categoryIcons: Record<string, string> = {
    Frontend: '🎨',
    Backend: '⚙️',
    Móvil: '📱',
    Otros: '🧩',
  };
  const categoryColors: Record<string, string> = {
    Frontend: 'from-blue-500 to-cyan-400',
    Backend: 'from-emerald-500 to-teal-400',
    Móvil: 'from-orange-500 to-amber-400',
    Otros: 'from-purple-500 to-pink-400',
  };
  const categoryBorderColors: Record<string, string> = {
    Frontend: 'hover:border-blue-500/40',
    Backend: 'hover:border-emerald-500/40',
    Móvil: 'hover:border-orange-500/40',
    Otros: 'hover:border-purple-500/40',
  };

  return (
    <section id="skills" className="py-16 md:py-32 px-3 sm:px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/8 via-slate-900 to-slate-900" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 min-w-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 md:mb-20"
        >
          <span className="inline-block text-sm md:text-base font-semibold text-purple-400 tracking-widest uppercase mb-3">
            Stack Técnico
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
            Habilidades Técnicas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 min-w-0">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1, ease: 'easeOut' }}
                className={`glass rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 border border-slate-700/60 ${categoryBorderColors[category]} transition-all duration-500 hover:shadow-lg min-w-0 overflow-hidden`}
              >
                <div className="flex items-center gap-2.5 mb-5 md:mb-6 min-w-0">
                  <span className="text-xl md:text-2xl shrink-0">{categoryIcons[category]}</span>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-100 truncate">
                    {category}
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-5 min-w-0">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2 min-w-0">
                        <span className="font-semibold text-slate-300 text-sm min-w-0 truncate">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 font-semibold text-xs tabular-nums shrink-0 w-9 text-right">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden w-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + index * 0.06,
                            ease: 'easeOut',
                          }}
                          className={`h-full bg-gradient-to-r ${categoryColors[category]} rounded-full shadow-sm`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Card motivacional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 md:mt-16 glass rounded-2xl md:rounded-3xl p-6 md:p-10 text-center border border-slate-700/60"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">
            Siempre Aprendiendo
          </h3>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Me mantengo constantemente actualizado con las últimas tecnologías y mejores
            prácticas en desarrollo de software. Mi objetivo es seguir creciendo como
            desarrollador y especializarme en ciberseguridad e inteligencia artificial.
          </p>
          <motion.a
            href="#passions"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            Ver mis logros
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});
