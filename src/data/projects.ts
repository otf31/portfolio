export interface ProjectItem {
  name: string;
  slug: string;
  summary: string;
  overview: string;
  stack: string[];
  features: string[];
  learned: string[];
  codeNotes?: string[];
  highlights?: string[];
  aiHeavy?: boolean;
  aiUsage?: string[];
  repo?: string;
  private?: boolean;
  note?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "autofbpost",
    slug: "autofbpost",
    summary: "Aplicación de escritorio con interfaz TUI para automatizar publicaciones en múltiples grupos de Facebook.",
    overview:
      "autofbpost es una herramienta de automatización construida para agilizar la publicación de contenido en distintos grupos de Facebook. Combina una interfaz TUI con automatización de navegador para reducir trabajo repetitivo, con enfoque en usabilidad y empaquetado multiplataforma.",
    stack: ["Python", "Textual", "Playwright", "asyncio", "Nuitka"],
    features: [
      "Interfaz TUI interactiva con Textual",
      "Automatización de publicación en múltiples grupos",
      "Soporte para carga de imágenes",
      "Gestión de contenido y flujo de publicación",
      "Empaquetado multiplataforma como ejecutable con Nuitka"
    ],
    highlights: [
      "Automatización end-to-end con Playwright",
      "Empaquetado listo para distribución en Linux/Windows",
      "Enfoque en simplicidad para uso en escritorio"
    ],
    learned: [
      "Orquestación con Playwright para flujos complejos de navegador",
      "Construcción de TUI con Textual y gestión de estados",
      "Empaquetado y distribución con Nuitka",
      "Manejo de asincronía y errores en automatizaciones"
    ],
    codeNotes: [
      "Separación clara entre lógica de automatización y capa UI",
      "Control de flujos con validaciones para evitar errores en publicación",
      "Estructura pensada para extender a nuevos destinos"
    ],
    repo: "https://github.com/otf31/autofbpost",
    private: false
  },
  {
    name: "VideoGen",
    slug: "videogen",
    summary: "Generador automatizado de videos (tipo trivia/TikTok) con síntesis de voz con IA y pipeline de renderizado.",
    overview:
      "VideoGen es un generador automatizado de videos cortos. El proyecto fue mayoritariamente generado y estructurado con asistencia de IA (LLM) para acelerar el diseño del pipeline, la integración de componentes y la iteración rápida. Combina TTS con modelo ONNX (Kokoro), gestión de assets, audio y composición de video para producir contenido listo para redes verticales.",
    stack: ["Python", "Kokoro ONNX", "ONNX Runtime", "Procesamiento de video", "FFmpeg/edición", "Assets multimedia"],
    features: [
      "Generación automática de guiones/contenido para videos cortos",
      "Síntesis de voz con modelo Kokoro v1.0 en formato ONNX",
      "Pipeline completo: voz + imágenes/assets + timing + composición",
      "Orientado a formato vertical (TikTok/Shorts/Reels)",
      "Estructura modular para reutilizar componentes"
    ],
    highlights: [
      "Uso intensivo de IA para generar y estructurar el proyecto desde cero",
      "Integración de TTS local con modelos ONNX",
      "Pipeline automatizado de principio a fin",
      "Optimizado para generar contenido escalable sin grabación manual"
    ],
    aiHeavy: true,
    aiUsage: [
      "Generación del esqueleto del proyecto y arquitectura con asistencia de LLM",
      "Iteración y refactorización guiadas por IA para integrar Kokoro ONNX",
      "Ayuda en diseño del pipeline (audio, timing, composición) y resolución de problemas",
      "Asistencia en estructuración de módulos, configuración y flujo de datos"
    ],
    learned: [
      "Integración de modelos ONNX locales (Kokoro) y gestión de inferencia",
      "Sincronización de audio (TTS) con timelines para video",
      "Automatización de composición multimedia con enfoque en formato vertical",
      "Importancia del prompting efectivo y revisión crítica al usar IA para código",
      "Diseño de pipelines modulares para tareas de procesamiento pesado"
    ],
    codeNotes: [
      "Carga de voces/modelos ONNX desde archivos locales",
      "Gestión de assets (imágenes/fuentes/sonidos) organizada por carpetas",
      "Separación entre generación de audio, ensamblaje y render final",
      "Enfoque en ejecución local para mayor control sobre el proceso"
    ],
    private: true,
    note: "Proyecto local / privado"
  },
  {
    name: "fastsuo-mobile",
    slug: "fastsuo-mobile",
    summary: "Aplicación móvil desarrollada durante prácticas preprofesionales en Corporación Juñuy, relacionada a transferencias bancarias.",
    overview:
      "Aplicación móvil construida en el marco de prácticas preprofesionales en Corporación Juñuy. Orientada a flujos relacionados con transferencias bancarias, con énfasis en diseño de interfaces usables, integración con lógica de negocio y compilación para pruebas internas (APK).",
    stack: ["React Native", "TypeScript", "Expo", "Drizzle ORM", "React Navigation"],
    features: [
      "Flujos para transferencias bancarias",
      "Interfaces de usuario diseñadas y adaptadas para usabilidad",
      "Arquitectura reformulada en conjunto con el equipo",
      "Compilación y generación de APK para uso interno"
    ],
    highlights: [
      "Participación activa en diseño de arquitectura y mejoras",
      "Trabajo colaborativo en equipo técnico",
      "Despliegue interno mediante APK"
    ],
    learned: [
      "Desarrollo móvil con React Native + Expo",
      "Tipado con TypeScript aplicado a flujos de negocio",
      "Modelado de datos con Drizzle ORM",
      "Colaboración en revisión de arquitectura y toma de decisiones técnicas",
      "Generación de builds para pruebas internas"
    ],
    codeNotes: [
      "Estructura modular por pantallas/componentes",
      "Tipado estricto para reducir errores en flujos críticos",
      "Configuración con Expo para acelerar desarrollo y build"
    ],
    private: true,
    note: "Proyecto local / privado (prácticas)"
  }
];
