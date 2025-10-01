import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { skills } from '../data/portfolio';

export const Skills = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const categories = ['Frontend', 'Backend', 'Móvil', 'Otros'];
  const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Móvil: 'from-orange-500 to-amber-500',
    Otros: 'from-purple-500 to-pink-500',
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center gradient-text"
        >
          🛠️ Habilidades Técnicas
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.4, delay: catIndex * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-xl md:rounded-2xl p-5 md:p-6"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-100">
                  {category}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-slate-300 text-sm md:text-base">
                          {skill.name}
                        </span>
                        <span className="text-slate-400 font-bold text-sm md:text-base">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 md:h-3 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: catIndex * 0.08 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Card de motivación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 glass rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
        >
          <motion.div 
            className="text-4xl md:text-5xl mb-3 md:mb-4"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            💡
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 gradient-text">
            Siempre Aprendiendo
          </h3>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-medium mb-6">
            Me mantengo constantemente actualizado con las últimas tecnologías y mejores 
            prácticas en desarrollo de software. Mi objetivo es seguir creciendo como 
            desarrollador y especializarme en ciberseguridad e inteligencia artificial.
          </p>

          {/* CTA para ver logros */}
          <motion.a
            href="#passions"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm md:text-base font-bold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            Ver mis logros
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});
