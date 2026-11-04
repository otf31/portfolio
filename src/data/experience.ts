export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Desarrollador Junior, Freelance",
    company: "Trabajador independiente",
    period: "2025 - Actualidad",
    location: "Remoto",
    highlights: [
      "Desarrollé aplicaciones de escritorio a pequeña escala para automatización de negocios locales.",
      "Implementé funcionalidades de gestión y procesamiento de información, priorizando la usabilidad y eficiencia.",
      "Adquirí experiencia en desarrollo full-stack con enfoque en la experiencia del usuario."
    ]
  },
  {
    role: "Operador informático",
    company: "Universidad ESAN",
    period: "2025",
    location: "Locación de servicios",
    highlights: [
      "Asistí a actividades como capacitación, prueba de equipos y aplicación del proyecto.",
      "Preparación, configuración y verificación de equipos informáticos.",
      "Colaboración en pruebas y mantenimiento de los recursos tecnológicos."
    ]
  },
  {
    role: "Jefe de Sección Censal",
    company: "Instituto Nacional de Estadística e Informática (INEI)",
    period: "2025",
    location: "Cusco, Perú",
    highlights: [
      "Capacité y orienté al personal seleccionado para el desarrollo de las actividades censales.",
      "Lideré y supervisé un equipo de cuatro personas, garantizando el cumplimiento de procedimientos y objetivos.",
      "Desarrollé herramientas de automatización utilizando Python y QGIS para optimizar procesos operativos."
    ]
  },
  {
    role: "Desarrollador frontend",
    company: "Corporación Juñuy",
    period: "2023",
    location: "Prácticas preprofesionales",
    highlights: [
      "Desarrollé un aplicativo móvil relacionado a transferencias bancarias.",
      "Diseñé y adapté las interfaces de usuario para usabilidad.",
      "Participé en reuniones para reformar la arquitectura del sistema.",
      "Compilé y generé archivos APK para uso interno."
    ]
  }
];

export const education = {
  title: "Grado de bachiller en Ingeniería Informática y de Sistemas",
  institution: "Universidad Nacional de San Antonio Abad del Cusco",
  period: "2018 - 2024",
  location: "Cusco, Perú",
  notes: "Enfocado en el desarrollo de software, innovación y la automatización de procesos. Participación en proyectos grupales para desarrollar soluciones prácticas."
};

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Quechua", level: "Básico" },
  { name: "English", level: "Intermedio" },
  { name: "Ruso", level: "Básico" }
];
