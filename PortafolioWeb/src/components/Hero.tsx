import { motion } from 'framer-motion';
import { memo } from 'react';
import { Mail, MapPin, Github, Linkedin, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero = memo(() => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Fondo animado con orbes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid decorativo sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="mb-8 md:mb-10"
          >
            <motion.div
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(59,130,246,0.4)',
                  '0 0 50px rgba(168,85,247,0.4)',
                  '0 0 30px rgba(236,72,153,0.4)',
                  '0 0 50px rgba(59,130,246,0.4)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/foto.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
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

          {/* Nombre */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-5 tracking-tight"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Título */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-6 md:mb-8 font-light max-w-2xl mx-auto"
          >
            {personalInfo.title}
          </motion.p>

          {/* Ubicación y Email */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 md:mb-10"
          >
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm sm:text-base">
              <MapPin className="w-4 h-4 text-pink-400/70" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>
          </motion.div>

          {/* Botones de redes sociales */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-16 md:mb-20"
          >
            {personalInfo.github && (
              <motion.a
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl flex items-center justify-center gap-2.5 bg-slate-800/80 text-slate-200 border border-slate-700/60 shadow-lg hover:shadow-xl hover:border-slate-600 hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base"
              >
                <Github className="w-5 h-5" />
                <span className="font-semibold">GitHub</span>
              </motion.a>
            )}
            {personalInfo.linkedin && (
              <motion.a
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-semibold">LinkedIn</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
});
