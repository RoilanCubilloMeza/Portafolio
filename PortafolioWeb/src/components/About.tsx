import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-slate-900" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            👨‍💻 Sobre Mí
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-2xl border border-blue-700/50 hover:border-blue-600/70 transition-all">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="font-bold text-blue-300 mb-1 text-lg">Educación</h3>
              <p className="text-sm text-slate-300 font-medium">Ing. Informática - UNA</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-6 rounded-2xl border border-purple-700/50 hover:border-purple-600/70 transition-all">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="font-bold text-purple-300 mb-1 text-lg">Experiencia</h3>
              <p className="text-sm text-slate-300 font-medium">2+ años en desarrollo</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/40 p-6 rounded-2xl border border-pink-700/50 hover:border-pink-600/70 transition-all">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-pink-300 mb-1 text-lg">Proyectos</h3>
              <p className="text-sm text-slate-300 font-medium">10+ proyectos completados</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
