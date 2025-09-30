import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ['Frontend', 'Backend', 'Móvil', 'Otros'];
  const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Móvil: 'from-orange-500 to-amber-500',
    Otros: 'from-purple-500 to-pink-500',
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          🛠️ Habilidades Técnicas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-6 text-slate-100">
                  {category}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-slate-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + index * 0.1,
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
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <div className="text-5xl mb-4">💡</div>
          <h3 className="text-2xl font-bold mb-3 gradient-text">
            Siempre Aprendiendo
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto font-medium">
            Me mantengo constantemente actualizado con las últimas tecnologías y mejores 
            prácticas en desarrollo de software. Mi objetivo es seguir creciendo como 
            desarrollador y especializarme en ciberseguridad e inteligencia artificial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
