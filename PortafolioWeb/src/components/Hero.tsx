import { motion, useMotionValue, useTransform } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, ChevronDown, Sparkles, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const roles = [
  'Desarrollo Web Full-Stack',
  'Inteligencia Artificial',
  'Aplicaciones Móviles',
  'Ciberseguridad',
];

function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 40 : 70;

    if (!isDeleting && displayed === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? role.slice(0, displayed.length - 1) : role.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="text-blue-400">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[1em] bg-blue-400 ml-0.5 align-middle rounded-full"
      />
    </span>
  );
}

export const Hero = memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-30, 30]);
  const orbY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-30, 30]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Fondo con parallax sutil al mover el mouse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid decorativo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        {/* Partículas flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 16}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de disponibilidad */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
              Disponible para nuevos proyectos
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="mb-7 md:mb-8"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 tracking-tight"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Tagline impactante */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-2 font-medium max-w-2xl mx-auto"
          >
            Construyo experiencias digitales que transforman ideas en realidad
          </motion.p>

          {/* Typewriter con roles */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl mb-7 font-light h-8 sm:h-9"
          >
            <TypewriterText />
          </motion.div>

          {/* Ubicación y Email */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8"
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

          {/* CTAs duales */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6"
          >
            <motion.a
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="px-8 py-3.5 rounded-xl flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base font-bold shimmer-btn relative overflow-hidden"
            >
              <Sparkles className="w-5 h-5" />
              <span>Ver Mis Proyectos</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="px-8 py-3.5 rounded-xl flex items-center justify-center gap-2.5 bg-slate-800/80 text-slate-200 border border-slate-700/60 shadow-lg hover:shadow-xl hover:border-blue-500/40 hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base font-bold"
            >
              <Briefcase className="w-5 h-5" />
              <span>Contáctame</span>
            </motion.a>
          </motion.div>

          {/* Redes sociales compactas */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {personalInfo.github && (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/40 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {personalInfo.linkedin && (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/60 text-slate-400 hover:text-blue-400 border border-slate-700/40 hover:border-blue-500/40 hover:bg-blue-900/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
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
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors group"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
});
