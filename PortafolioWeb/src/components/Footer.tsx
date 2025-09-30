import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 px-4 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="text-3xl font-bold gradient-text">ROILAN CUBILLO MEZA</span>
          </div>
          
          <p className="text-slate-400 mb-4">
            Estudiante de Informática | Desarrollo Web
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span>Desarrollado con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>usando React + Tailwind CSS</span>
          </div>

          <p className="text-slate-500 mt-4 text-sm">
            © {currentYear} Roilan Cubillo. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
