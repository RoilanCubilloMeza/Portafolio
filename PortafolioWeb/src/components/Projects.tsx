import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, memo } from 'react';
import { MapPin, Calendar, Building2, X, ExternalLink, ChevronRight, Star, Zap, Users, Globe } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project as ProjectType } from '../types';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

// Métricas de impacto por proyecto
const projectMetrics: Record<string, { icon: React.ReactNode; label: string; value: string }[]> = {
  '1': [
    { icon: <Users className="w-3.5 h-3.5" />, label: 'Usuarios', value: '200+' },
    { icon: <Globe className="w-3.5 h-3.5" />, label: 'En producción', value: 'Vercel' },
    { icon: <Zap className="w-3.5 h-3.5" />, label: 'Módulos', value: '4+' },
  ],
  '2': [
    { icon: <Globe className="w-3.5 h-3.5" />, label: 'Plataformas', value: 'Web + Móvil' },
    { icon: <Zap className="w-3.5 h-3.5" />, label: 'Tiempo real', value: 'WebSockets' },
    { icon: <Users className="w-3.5 h-3.5" />, label: 'AWS Services', value: '4+' },
  ],
  '3': [
    { icon: <Zap className="w-3.5 h-3.5" />, label: 'Motor IA', value: 'Python' },
    { icon: <Globe className="w-3.5 h-3.5" />, label: 'En producción', value: 'Render' },
    { icon: <Users className="w-3.5 h-3.5" />, label: 'Funciones IA', value: '3+' },
  ],
};

export const Projects = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-sm md:text-base font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Portafolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Cada proyecto es una solución real desplegada en producción — código que funciona, no solo demos.
          </p>
        </motion.div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isFeatured = !!project.demoUrl;
            const metrics = projectMetrics[project.id] || [];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative glass rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer border transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.25)] ${
                  isFeatured
                    ? 'border-blue-500/30 hover:border-blue-400/50 ring-1 ring-blue-500/10'
                    : 'border-slate-700/60 hover:border-blue-500/40'
                }`}
              >
                {/* Badge destacado */}
                {isFeatured && (
                  <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Destacado
                  </div>
                )}

                {/* Número de proyecto */}
                <span className="absolute top-5 right-6 text-6xl md:text-7xl font-black text-slate-800/60 select-none leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-50 mb-4 pr-14 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-slate-400">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
                      <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-blue-400/70" />
                      <span className="truncate">{project.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-purple-400/70" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-pink-400/70" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-slate-300/90 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Métricas de impacto */}
                  {metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 rounded-lg border border-slate-700/60 text-xs"
                        >
                          <span className="text-blue-400">{metric.icon}</span>
                          <span className="text-slate-500">{metric.label}:</span>
                          <span className="text-slate-200 font-bold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/60 text-slate-300 rounded-lg text-xs font-semibold border border-slate-600/40 group-hover:border-blue-600/30 group-hover:bg-blue-900/20 group-hover:text-blue-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-slate-700/40 text-slate-500 rounded-lg text-xs font-semibold">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Footer de la tarjeta */}
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                      Ver detalles
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    {project.demoUrl && (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400/80 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        En producción
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 md:mt-20 text-center"
        >
          <motion.a
            href="#skills"
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-semibold transition-colors text-sm md:text-base"
          >
            Conoce mis habilidades técnicas
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* ─── Modal de proyecto ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-7 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-slate-700/70 shadow-2xl"
            >
              {/* Cerrar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 hover:bg-slate-700/60 rounded-xl transition-colors z-10"
              >
                <X className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                {selectedProject.demoUrl && (
                  <span className="mt-1 flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shrink-0">
                    <Star className="w-3 h-3 fill-current" />
                    Destacado
                  </span>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-50 mb-5 pr-12 leading-tight">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-slate-400">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Building2 className="w-4 h-4 text-blue-400/70" />
                  <span>{selectedProject.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-purple-400/70" />
                  <span>{selectedProject.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-pink-400/70" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              {/* Métricas de impacto en modal */}
              {projectMetrics[selectedProject.id] && (
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {projectMetrics[selectedProject.id].map((metric, i) => (
                    <div key={i} className="bg-slate-800/80 rounded-xl p-3 text-center border border-slate-700/50">
                      <div className="text-blue-400 flex justify-center mb-1">{metric.icon}</div>
                      <div className="text-lg font-extrabold text-slate-100">{metric.value}</div>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Descripción */}
              <div className="mb-7">
                <h4 className="font-bold mb-2 text-slate-200 tracking-widest uppercase text-xs">
                  Descripción
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Logros */}
              <div className="mb-7">
                <h4 className="font-bold mb-3 text-slate-200 tracking-widest uppercase text-xs">
                  Logros Destacados
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm md:text-base text-slate-300">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologías */}
              <div className="mb-8">
                <h4 className="font-bold mb-3 text-slate-200 tracking-widest uppercase text-xs">
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg shadow-blue-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTÓN VER DEMO */}
              {selectedProject.demoUrl && (
                <motion.a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300 shimmer-btn relative overflow-hidden"
                >
                  <ExternalLink className="w-5 h-5" />
                  Ver Demo en Vivo
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
