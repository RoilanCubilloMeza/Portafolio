import { motion } from 'framer-motion';
import { memo } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero = memo(() => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Fondo animado con círculos - Responsivo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 md:top-20 -left-10 md:left-10 w-48 h-48 md:w-96 md:h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 md:bottom-20 -right-10 md:right-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar - Responsivo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              duration: 1.2,
            }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="mb-6 md:mb-8"
          >
            <motion.div 
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/foto.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si la imagen no se carga, mostrar iniciales
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">${personalInfo.name.split(' ').map((n: string) => n[0]).join('')}</span>`;
                    }
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Nombre - Responsivo */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Título - Responsivo */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 md:mb-6 font-light px-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* Ubicación y Email - Responsivo */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-6 md:mb-8 px-4"
          >
            <motion.div 
              className="flex items-center justify-center gap-2 text-slate-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{personalInfo.location}</span>
            </motion.div>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{personalInfo.email}</span>
            </motion.a>
          </motion.div>

          {/* Botones de redes sociales - Responsivo */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4 mb-20 md:mb-28"
          >
            {personalInfo.github && (
              <motion.a
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center justify-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-slate-500/50 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">GitHub</span>
              </motion.a>
            )}
            {personalInfo.linkedin && (
              <motion.a
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            )}
          </motion.div>
        </div>
        </div>
    </section>
  );
});
