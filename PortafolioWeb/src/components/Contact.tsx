import { motion } from 'framer-motion';
import { useRef, memo } from 'react';
import { Mail, MapPin, GraduationCap, Award, Github, Linkedin } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolio';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const Contact = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-sm md:text-base font-semibold text-emerald-400 tracking-widest uppercase mb-3">
            Conectar
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
            Contacto
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 text-xs sm:text-sm font-semibold">Disponible — respondo en &lt;24h</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/60"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-slate-100">
              Información de Contacto
            </h3>

            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-blue-600/10 rounded-xl hover:bg-blue-600/15 transition-all duration-300 group border border-blue-700/20 hover:border-blue-600/40"
              >
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-semibold">Email</p>
                  <p className="font-semibold text-slate-200 text-sm truncate">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-purple-600/10 rounded-xl border border-purple-700/20">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Ubicación</p>
                  <p className="font-semibold text-slate-200 text-sm">{personalInfo.location}</p>
                </div>
              </div>

              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group border border-slate-600/20 hover:border-slate-500/40"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">GitHub</p>
                    <p className="font-semibold text-slate-200 text-sm">Ver perfil</p>
                  </div>
                </a>
              )}

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-600/10 rounded-xl hover:bg-blue-600/15 transition-all duration-300 group border border-blue-700/20 hover:border-blue-600/40"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">LinkedIn</p>
                    <p className="font-semibold text-slate-200 text-sm">Conectar</p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/60"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Educación
            </h3>

            <div className="bg-gradient-to-br from-blue-600/15 to-purple-600/10 rounded-2xl p-6 border border-blue-700/30">
              <h4 className="text-lg font-bold text-slate-100 mb-2">
                {education.degree}
              </h4>
              <p className="text-blue-400 font-semibold mb-1 text-sm">
                {education.institution}
              </p>
              <p className="text-slate-500 text-xs font-semibold">
                {education.period} • {education.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="glass rounded-2xl md:rounded-3xl p-7 md:p-8 border border-slate-700/60"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-5 text-slate-100 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Certificaciones
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="bg-gradient-to-r from-amber-600/10 to-orange-600/5 rounded-xl p-5 md:p-6 border border-amber-700/30 hover:border-amber-600/50 transition-all duration-500"
              >
                <h4 className="text-base md:text-lg font-bold text-slate-100 mb-1">
                  {cert.title}
                </h4>
                <p className="text-amber-400 font-semibold mb-2 text-sm">{cert.issuer}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-14 glass rounded-2xl md:rounded-3xl p-8 md:p-10 text-center border border-slate-700/60 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3">
            ¿Listo para crear algo increíble?
          </h3>
          <p className="text-sm text-slate-400 mb-6 max-w-lg mx-auto">
            Envíame un mensaje y empecemos a construir la solución que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-base md:text-lg font-bold shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 shimmer-btn relative overflow-hidden"
            >
              <Mail className="w-5 h-5" />
              Enviar Mensaje
            </motion.a>
            {personalInfo.linkedin && (
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 text-slate-200 border border-slate-700/60 px-8 py-4 rounded-xl text-base md:text-lg font-bold shadow-lg hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
});
