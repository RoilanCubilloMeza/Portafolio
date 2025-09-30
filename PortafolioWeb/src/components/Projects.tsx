import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, Building2, X } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project as ProjectType } from '../types';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          💼 Proyectos Destacados
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-2xl p-6 cursor-pointer card-hover"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-3">
                {project.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                  <Building2 className="w-4 h-4" />
                  <span>{project.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </div>

              <p className="text-slate-300 mb-4 line-clamp-3 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-bold border border-blue-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm font-bold">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="mt-4 text-blue-400 font-semibold flex items-center gap-2">
                Ver más →
              </div>
            </motion.div>
          ))}
        </div>
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
            className="bg-slate-800 rounded-3xl p-8 max-w-3xl max-h-[90vh] overflow-y-auto relative border border-slate-700"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-300" />
            </button>

            <h3 className="text-3xl font-bold text-slate-100 mb-4 pr-12">
              {selectedProject.title}
            </h3>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <Building2 className="w-5 h-5" />
                <span>{selectedProject.company}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <Calendar className="w-5 h-5" />
                <span>{selectedProject.period}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <MapPin className="w-5 h-5" />
                <span>{selectedProject.location}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-3 text-slate-100">Descripción</h4>
              <p className="text-slate-300 leading-relaxed font-medium">
                {selectedProject.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-3 text-slate-100">Logros Destacados</h4>
              <ul className="space-y-2">
                {selectedProject.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 font-medium">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3 text-slate-100">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
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
};
