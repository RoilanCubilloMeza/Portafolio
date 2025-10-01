import { motion } from 'framer-motion';
import { useRef, useState, memo } from 'react';
import { MapPin, Calendar, Building2, X } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project as ProjectType } from '../types';
import { useResponsiveInView } from '../hooks/useResponsiveInView';

export const Projects = memo(() => {
  const ref = useRef(null);
  const isInView = useResponsiveInView(ref);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center gradient-text"
        >
          💼 Proyectos Destacados
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1, 
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-xl md:rounded-2xl p-5 md:p-6 cursor-pointer card-hover"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">
                {project.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{project.company}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{project.period}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-300 mb-4 line-clamp-3 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 md:px-3 bg-blue-900/50 text-blue-300 rounded-full text-xs md:text-sm font-bold border border-blue-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-1 md:px-3 bg-slate-700 text-slate-300 rounded-full text-xs md:text-sm font-bold">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="mt-4 text-blue-400 font-semibold flex items-center gap-2 text-sm md:text-base group-hover:gap-3 transition-all">
                <span>Ver más</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje motivacional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm md:text-base mb-4 font-medium">
            🚀 Cada proyecto es una oportunidad de aprendizaje y crecimiento
          </p>
          <motion.a
            href="#skills"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Conoce mis habilidades técnicas
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal de proyecto */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-3xl max-h-[90vh] overflow-y-auto relative border border-slate-700 mx-4"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-slate-700 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 pr-10 md:pr-12">
              {selectedProject.title}
            </h3>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm md:text-base text-slate-400 font-medium">
                <Building2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>{selectedProject.company}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-slate-400 font-medium">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>{selectedProject.period}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-slate-400 font-medium">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>{selectedProject.location}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-slate-100">Descripción</h4>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                {selectedProject.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-slate-100">Logros Destacados</h4>
              <ul className="space-y-2">
                {selectedProject.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-slate-300 font-medium">
                    <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-slate-100">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs md:text-sm font-medium shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
});
