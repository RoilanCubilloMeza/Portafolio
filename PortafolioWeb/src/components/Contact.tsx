import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, GraduationCap, Award, Github, Linkedin } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolio';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center gradient-text"
        >
          📞 Contacto
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl md:rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-100">
              Información de Contacto
            </h3>

            <div className="space-y-3 md:space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-900/30 rounded-xl hover:bg-blue-900/50 transition-colors group border border-blue-700/30"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-slate-400 font-bold">Email</p>
                  <p className="font-bold text-slate-200 text-sm md:text-base truncate">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-purple-900/30 rounded-xl border border-purple-700/30">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-slate-400 font-bold">Ubicación</p>
                  <p className="font-bold text-slate-200 text-sm md:text-base">{personalInfo.location}</p>
                </div>
              </div>

              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group border border-slate-600/30"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-slate-400 font-bold">GitHub</p>
                    <p className="font-bold text-slate-200 text-sm md:text-base">Ver perfil</p>
                  </div>
                </a>
              )}

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-900/30 rounded-xl hover:bg-blue-900/50 transition-colors group border border-blue-700/30"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-slate-400 font-bold">LinkedIn</p>
                    <p className="font-bold text-slate-200 text-sm md:text-base">Conectar</p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-xl md:rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
              Educación
            </h3>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-5 md:p-6 border border-blue-700/50">
              <h4 className="text-lg md:text-xl font-bold text-slate-100 mb-2">
                {education.degree}
              </h4>
              <p className="text-blue-400 font-bold mb-1 text-sm md:text-base">
                {education.institution}
              </p>
              <p className="text-slate-400 text-xs md:text-sm font-bold">
                {education.period} • {education.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-100 flex items-center gap-2">
            <Award className="w-6 h-6 md:w-7 md:h-7" />
            Certificaciones
          </h3>

          <div className="space-y-3 md:space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 md:p-6 border border-amber-700/50 hover:border-amber-600/70 transition-all"
              >
                <h4 className="text-base md:text-lg font-bold text-slate-100 mb-1 md:mb-2">
                  {cert.title}
                </h4>
                <p className="text-amber-400 font-bold mb-1 md:mb-2 text-sm md:text-base">{cert.issuer}</p>
                <p className="text-slate-400 font-medium text-sm md:text-base">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final - Responsivo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 text-center px-4"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow"
          >
            ✉️ Enviar Mensaje
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
