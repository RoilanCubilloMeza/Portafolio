import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, GraduationCap, Award, Github, Linkedin } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolio';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          📞 Contacto
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-100">
              Información de Contacto
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-xl hover:bg-blue-900/50 transition-colors group border border-blue-700/30"
              >
                <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-slate-400 font-bold">Email</p>
                  <p className="font-bold text-slate-200">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-purple-900/30 rounded-xl border border-purple-700/30">
                <MapPin className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-sm text-slate-400 font-bold">Ubicación</p>
                  <p className="font-bold text-slate-200">{personalInfo.location}</p>
                </div>
              </div>

              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group border border-slate-600/30"
                >
                  <Github className="w-6 h-6 text-slate-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-slate-400 font-bold">GitHub</p>
                    <p className="font-bold text-slate-200">Ver perfil</p>
                  </div>
                </a>
              )}

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-xl hover:bg-blue-900/50 transition-colors group border border-blue-700/30"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-slate-400 font-bold">LinkedIn</p>
                    <p className="font-bold text-slate-200">Conectar</p>
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
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-7 h-7" />
              Educación
            </h3>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-700/50">
              <h4 className="text-xl font-bold text-slate-100 mb-2">
                {education.degree}
              </h4>
              <p className="text-blue-400 font-bold mb-1">
                {education.institution}
              </p>
              <p className="text-slate-400 text-sm font-bold">
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
          <h3 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <Award className="w-7 h-7" />
            Certificaciones
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-6 border border-amber-700/50 hover:border-amber-600/70 transition-all"
              >
                <h4 className="text-lg font-bold text-slate-100 mb-2">
                  {cert.title}
                </h4>
                <p className="text-amber-400 font-bold mb-2">{cert.issuer}</p>
                <p className="text-slate-400 font-medium">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow"
          >
            ✉️ Enviar Mensaje
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
