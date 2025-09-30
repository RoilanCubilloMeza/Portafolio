import type { PersonalInfo, Project, Skill, Achievement, Certification, Passion } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'ROILAN CUBILLO MEZA',
  title: 'Estudiante de Ingeniería en Sistemas | Desarrollo Web',
  email: 'andreycubillo69@gmail.com',
  location: 'Pérez Zeledón, Costa Rica',
  bio: 'Estudiante de Ingeniería en Sistemas con conocimientos en desarrollo web y desarrollo móvil. Motivada para aplicar habilidades técnicas en proyectos reales y contribuir a la creación de soluciones digitales. Aspira a convertirse en experto en seguridad informática y Inteligencia artificial.',
  github: 'https://github.com/roilancubillo',
  linkedin: 'https://www.linkedin.com/in/roilan-cubillo-717983253/',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema web para matrícula – Escuela Cerros',
    company: 'Escuela Cerros',
    period: '03/2023 - 06/2024',
    location: 'Quepos, Costa Rica',
    description: 'Sistema web completo para la Escuela Cerros, ubicada en Quepos, con el objetivo de permitir a la institución llevar un control eficiente de matrículas, notas estudiantiles y eventos escolares.',
    technologies: ['JavaScript', 'Express.js', 'React', 'MySQL', 'Bootstrap', 'CSS'],
    achievements: [
      'Diseñé y desarrollé la solución web desde cero, aplicando principios de desarrollo fullstack',
      'Implementé funcionalidades para el manejo de estudiantes, asignaturas, notas y eventos escolares',
      'Utilicé Express.js para construir la API backend, gestionando rutas, controladores y conexión a la base de datos',
      'Construí una interfaz amigable y responsiva con React y Bootstrap, enfocada en la usabilidad para administrativos',
      'Optimicé el rendimiento y seguridad del sistema, mejorando la velocidad de carga y reduciendo vulnerabilidades comunes',
      'Colaboré con otros compañeros para la planificación y validación del sistema, respetando los tiempos y objetivos del proyecto',
    ],
  },
  {
    id: '2',
    title: 'Mini Red Social de Fotografías Geolocalizadas: "GeoNature"',
    company: 'Universidad Nacional de Costa Rica',
    period: '06/2024 - 06/2024',
    location: 'Pérez Zeledón, Costa Rica',
    description: 'Aplicación web y móvil para compartir fotografías geolocalizadas de paisajes, con actualización en tiempo real y funcionalidades exclusivas para usuarios plus.',
    technologies: ['Next.js', 'React Native', 'Expo', 'AWS S3', 'AWS Lambda', 'ElastiCache Redis', 'Google Maps', 'WebSockets'],
    achievements: [
      'Desarrollé una plataforma en tiempo real para compartir fotografías de paisajes con geolocalización',
      'Implementé subida de imágenes con coordenadas GPS, almacenamiento en S3 y visualización en mapa',
      'Integración de AWS Lambda y ElastiCache (Redis) para lógica backend sin servidor',
      'Aplicación móvil sincronizada en tiempo real con la web (WebSockets + scroll infinito)',
      'Desplegado con AWS Amplify. Control de versiones limpio con Git y GitHub',
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'TypeScript', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Bootstrap', level: 80, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express.js', level: 90, category: 'Backend' },
  { name: 'Prisma', level: 95, category: 'Backend' },
  { name: 'MySQL', level: 80, category: 'Backend' },
  { name: 'AWS', level: 80, category: 'Backend' },
  { name: 'JWT/OAuth', level: 85, category: 'Backend' },
  
  // Mobile
  { name: 'React Native', level: 80, category: 'Móvil' },
  { name: 'Expo', level: 75, category: 'Móvil' },
  { name: 'Flutter', level: 85, category: 'Móvil' },
  
  // Other
  { name: 'Python', level: 70, category: 'Otros' },
  { name: 'Ciberseguridad', level: 65, category: 'Otros' },
  { name: 'Git/GitHub', level: 85, category: 'Otros' },
  { name: 'UiPath RPA', level: 70, category: 'Otros' },
];

export const achievements: Achievement[] = [
  {
    title: 'Desarrollo de APIs REST',
    description: 'He creado múltiples APIs utilizando Node.js, Express, conectando bases de datos con Prisma y optimizando rutas para mayor rendimiento.',
    icon: '🚀',
  },
  {
    title: 'Exploración de tecnologías modernas',
    description: 'Me mantengo actualizado aprendiendo herramientas como TypeScript, Next.js, Prisma y autenticación con JWT y OAuth.',
    icon: '💡',
  },
  {
    title: 'Proyectos backend personales',
    description: 'He desarrollado y documentado proyectos como sistemas de gestión de usuarios, tareas y autenticación, enfocándome en buenas prácticas y escalabilidad.',
    icon: '⚙️',
  },
  {
    title: 'Autoformación constante',
    description: 'Completo cursos y documentación oficial sobre patrones de diseño backend, controladores, middlewares y arquitectura en capas.',
    icon: '📚',
  },
];

export const certifications: Certification[] = [
  {
    title: 'UiPath RPA Automation Semester Course Completion',
    issuer: 'UiPath',
    description: 'Desarrollo de robots en UiPath Studio. Automatización de tareas con Excel, correo, PDFs, web scraping. Gestión de flujos, condicionales y manejo de excepciones.',
  },
];

export const passions: Passion[] = [
  {
    title: 'Ciberseguridad',
    description: 'Apasionada por proteger los sistemas informáticos de amenazas cibernéticas y aprender continuamente sobre nuevas tecnologías.',
    icon: '🔒',
  },
  {
    title: 'Desarrollo Web',
    description: 'Interesada en la creación de soluciones web innovadoras que sean accesibles y seguras para todos los usuarios.',
    icon: '💻',
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Explorando el futuro de la tecnología a través del machine learning y la IA.',
    icon: '🤖',
  },
];

export const education = {
  degree: 'Pregrado en Ingeniería Informática',
  institution: 'Universidad Nacional de Costa Rica',
  period: '02/2019 - 2026',
  location: 'Pérez Zeledón, Costa Rica',
};
