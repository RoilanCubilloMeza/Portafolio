import { useInView } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Hook personalizado para detectar visibilidad de elementos
 * Optimizado para móviles - reduce el threshold en pantallas pequeñas
 */
export const useResponsiveInView = (ref: RefObject<Element | null>) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // En móviles: threshold más bajo (5%) y sin margin negativo
  // En desktop: threshold normal (10%) con margin
  const isInView = useInView(ref, {
    once: true,
    amount: isMobile ? 0.05 : 0.1,
    margin: isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px"
  });

  return isInView;
};
