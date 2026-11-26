import { projects, type ProjectItem } from '../data/projects';
import { experience, education, languages } from '../data/experience';
import { skillGroups } from '../data/skills';

export type Locale = 'es' | 'en';

export const ui = {
  es: {
    nav: { projects: 'Proyectos', experience: 'Experiencia', skills: 'Habilidades', contact: 'Contacto', theme: 'Cambiar tema', language: 'English' },
    hero: { eyebrow: 'Desarrollador · Cusco, Perú', intro: 'Soy', degree: 'bachiller en Ingeniería Informática y de Sistemas. Convierto procesos complejos en herramientas simples, desde automatización y apps de escritorio hasta productos full-stack.', projects: 'Explorar proyectos', talk: 'Hablemos', available: 'Disponible para nuevos retos', specialties: 'Python · TypeScript · Automatización · Producto', seeWork: 'Ver lo que hago' },
    projects: { kicker: '01 / Trabajo seleccionado', title: 'Proyectos que resuelven.', intro: 'Una selección de herramientas y productos que nacieron de problemas reales.', code: 'Código', private: 'Proyecto privado', caseStudy: 'Caso de estudio', explore: 'Explorar' },
    experience: { kicker: '02 / Trayectoria', title: 'Experiencia en práctica.' },
    skills: { kicker: '03 / Caja de herramientas', title: 'Tecnología con propósito.' },
    education: { kicker: 'Formación', title: 'Aprender, construir, compartir.', languages: 'Idiomas' },
    contact: { kicker: '04 / Siguiente paso', title: '¿Tienes un reto interesante?', intro: 'Me interesa colaborar en productos útiles, automatización y herramientas que hagan el trabajo diario más sencillo.', write: 'Escríbeme', copy: 'copiar' },
    detail: { back: 'Volver a proyectos', ai: 'Fuertemente asistido por IA', github: 'Ver código en GitHub', overview: 'Descripción general', stack: 'Tecnologías utilizadas', features: 'Características principales', architecture: 'Arquitectura', workflow: 'Flujo de trabajo', aiUsage: 'Uso de IA en el desarrollo', aiIntro: 'Este proyecto fue generado y estructurado con un uso intensivo de IA para acelerar el diseño, la integración y la iteración.', highlights: 'Aspectos destacados', learned: 'Lo que aprendí', codeNotes: 'Notas técnicas / implementación', snippets: 'Ejemplos de código', snippetsIntro: 'Snippets ilustrativos que reflejan la lógica y estructura implementada en el proyecto.' },
    footer: 'Hecho con intención · Cusco, Perú', copied: 'Correo copiado al portapapeles', backTop: 'Volver al inicio'
  },
  en: {
    nav: { projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact', theme: 'Toggle theme', language: 'Español' },
    hero: { eyebrow: 'Developer · Cusco, Peru', intro: "I'm", degree: 'a graduate in Computer and Systems Engineering. I turn complex processes into simple tools, from automation and desktop apps to full-stack products.', projects: 'Explore projects', talk: "Let's talk", available: 'Open to new opportunities', specialties: 'Python · TypeScript · Automation · Product', seeWork: 'See what I do' },
    projects: { kicker: '01 / Selected work', title: 'Projects that solve problems.', intro: 'A selection of tools and products built to address real-world problems.', code: 'Source code', private: 'Private project', caseStudy: 'Case study', explore: 'Explore' },
    experience: { kicker: '02 / Career', title: 'Experience in practice.' },
    skills: { kicker: '03 / Toolset', title: 'Technology with purpose.' },
    education: { kicker: 'Education', title: 'Learn, build, share.', languages: 'Languages' },
    contact: { kicker: '04 / Next step', title: 'Have an interesting challenge?', intro: "I'm interested in building useful products, automation, and tools that make everyday work easier.", write: 'Get in touch', copy: 'copy' },
    detail: { back: 'Back to projects', ai: 'Built with extensive AI assistance', github: 'View source on GitHub', overview: 'Overview', stack: 'Technology stack', features: 'Key features', architecture: 'Architecture', workflow: 'Workflow', aiUsage: 'How AI was used', aiIntro: 'This project was generated and structured with extensive AI assistance to speed up design, integration, and iteration.', highlights: 'Highlights', learned: 'What I learned', codeNotes: 'Technical notes / implementation', snippets: 'Code samples', snippetsIntro: 'Illustrative snippets that reflect the project’s implemented logic and structure.' },
    footer: 'Made with intention · Cusco, Peru', copied: 'Email copied to clipboard', backTop: 'Back to top'
  }
} as const;

const projectEnglish: Record<string, Partial<ProjectItem>> = {
  'fast-recharge': {
    summary: 'Android app for mobile top-ups and balance inquiries over USSD.',
    overview: 'FastRecharge brings together mobile top-ups, balance checks, and last top-up inquiries. The native Kotlin and Jetpack Compose version builds on a React Native implementation with Expo. Android handles communication with the carrier and displays its response.',
    features: [
      'Validated form with preset amounts and confirmation before submitting a top-up.',
      'Balance and last top-up inquiries, with call permission requested when an operation starts.',
      'Adaptive navigation for phones and larger screens, with light and dark themes.',
      'Encrypted storage for the operation PIN using Android Keystore.'
    ],
    learned: [
      'Porting a React Native interface to Jetpack Compose and adapting it to different screen sizes.',
      'Separating the UI from telephony operations and handling permissions and activity recreation.',
      'Distinguishing a submitted USSD request from carrier confirmation.'
    ],
    note: 'Private project'
  },
  autofbpost: {
    summary: 'Desktop application with a TUI for automating posts across multiple Facebook groups.',
    overview: 'autofbpost is an automation tool built to streamline publishing content to multiple Facebook groups. It combines a TUI with browser automation to reduce repetitive work, with a focus on usability and cross-platform packaging.',
    features: ['Interactive TUI built with Textual', 'Automated publishing across multiple groups', 'Image upload support', 'Content and publishing workflow management', 'Cross-platform executable packaging with Nuitka'],
    highlights: ['End-to-end automation with Playwright', 'Ready-to-distribute Linux and Windows packages', 'A straightforward desktop experience'],
    architecture: ['UI layer (Textual): components, screens, and TUI state handling', 'Automation layer (Playwright): navigation, DOM interaction, and file uploads', 'Configuration layer: groups, content, and image paths', 'Utilities layer: logging, validation, and workflow helpers'],
    workflow: ['Load configuration and target group list', 'Prepare post content (text and images)', 'Launch the browser with Playwright', 'Visit groups sequentially with validation', 'Publish with error handling and retries', 'Report live status in the TUI'],
    learned: ['Orchestrating complex browser flows with Playwright', 'Building TUI interfaces and managing state with Textual', 'Packaging and distribution with Nuitka', 'Handling async workflows and automation errors'],
    codeNotes: ['Clear separation between automation logic and UI', 'Flow validation to prevent publishing errors', 'Structure designed to support additional destinations'],
    note: 'Local / private project'
  },
  videogen: {
    summary: 'Automated video generator with AI voice synthesis and a rendering pipeline.',
    overview: 'VideoGen is an automated short-form video generator. The project was largely generated and structured with AI assistance to speed up pipeline design, component integration, and iteration. It combines ONNX text-to-speech (Kokoro), asset management, audio, and video composition to produce social-ready content.',
    stack: ['Python', 'Kokoro ONNX', 'ONNX Runtime', 'NumPy', 'Video processing', 'FFmpeg', 'Media assets'],
    features: ['Automatic short-form scripts and content generation', 'Local voice synthesis with the Kokoro v1.0 ONNX model', 'End-to-end pipeline: voice, images/assets, timing, and composition', 'Designed for vertical video (TikTok/Shorts/Reels)', 'Modular structure for reusable components'],
    highlights: ['Extensive AI assistance to generate and structure the project', 'Integration of local ONNX text-to-speech models', 'An end-to-end automated pipeline', 'Scalable content generation without manual recording'],
    architecture: ['Content/script module: generation or loading of questions and answers', 'TTS module (Kokoro ONNX): local synthesis with pretrained voices', 'Asset module: images, fonts, sounds, and resource management', 'Timeline/composition module: audio-to-frame synchronization', 'Render module: assembly and export to vertical video'],
    workflow: ['Load trivia or content data', 'Generate voice with Kokoro ONNX for each segment', 'Select and prepare visual assets', 'Calculate timing from audio duration', 'Compose clips with transitions and text', 'Render a vertical video ready to publish'],
    learned: ['Integrating local ONNX models and managing inference', 'Synchronizing generated audio with video timelines', 'Automating media composition for vertical formats', 'Effective prompting and critical review of AI-generated code', 'Designing modular pipelines for compute-heavy tasks', 'Optimizing local workflows without relying on external APIs'],
    codeNotes: ['Loading ONNX models and voices from local files', 'Organized asset folders for fonts, images, and sounds', 'Separation of audio generation, assembly, and rendering', 'Local-first execution for greater control'],
    aiUsage: ['Generated the project skeleton and architecture with LLM assistance', 'Used AI-guided iteration and refactoring to integrate Kokoro ONNX', 'Applied AI to pipeline design (audio, timing, composition) and debugging', 'Used AI to structure modules, configuration, data flow, and troubleshooting', 'Critically reviewed and adapted generated code to fit project needs'],
    note: 'Local / private project'
  },
  'fastsuo-mobile': {
    summary: 'Mobile app built during a pre-professional internship at Corporación Juñuy, focused on bank transfers.',
    overview: 'A mobile app built during a pre-professional internship at Corporación Juñuy. It supports banking transfer workflows, with an emphasis on usable interfaces, business logic integration, and internal APK builds for testing.',
    features: ['Bank transfer workflows', 'User interfaces designed and adapted for usability', 'Architecture reworked collaboratively with the team', 'APK builds for internal use'],
    highlights: ['Active contribution to architecture and improvements', 'Collaborative work with the engineering team', 'Internal distribution through APK builds'],
    architecture: ['Navigation: React Navigation for screen flows', 'UI: reusable components focused on usability', 'Data: Drizzle ORM for data modeling and access', 'Logic: strict TypeScript for critical workflows', 'Build: Expo/EAS configuration for testing builds'],
    workflow: ['Review requirements with the team', 'Design and adapt interfaces', 'Model entities with Drizzle', 'Implement transfer workflows', 'Review architecture and refactor collaboratively', 'Build APKs for internal testing'],
    learned: ['Mobile development with React Native and Expo', 'Applying TypeScript to business workflows', 'Data modeling with Drizzle ORM', 'Collaborative architecture reviews and decision-making', 'Generating builds for internal testing'],
    codeNotes: ['Modular structure organized by screens and components', 'Strict typing to reduce errors in critical workflows', 'Expo configuration for faster development and builds'],
    note: 'Local / private project (internship)'
  }
};

const snippetEnglish: Record<string, { title: string; description?: string }[]> = {
  'fast-recharge': [
    { title: 'Top-up confirmation in Compose', description: 'An illustrative UI that validates the amount and delegates submission after confirmation.' },
    { title: 'Distinguishing submission from the result', description: 'An illustrative model of the local USSD request status. Android displays the carrier response separately.' }
  ],
  autofbpost: [
    { title: 'Textual app skeleton', description: 'Application structure for coordinating the publishing workflow.' },
    { title: 'Playwright automation (illustrative flow)', description: 'A pattern for navigation, waiting, and file uploads.' }
  ],
  videogen: [
    { title: 'Loading the Kokoro ONNX model (illustrative)', description: 'A pattern for initializing an ONNX session and generating audio locally.' },
    { title: 'Video generation pipeline (conceptual flow)', description: 'A modular structure connecting TTS, assets, and composition for vertical video.' },
    { title: 'Audio-to-timeline synchronization (concept)', description: 'Calculate segment duration to align text and animation with generated audio.' }
  ],
  'fastsuo-mobile': [
    { title: 'Drizzle ORM schema (illustrative)', description: 'Modeling entities for a bank transfer workflow.' },
    { title: 'Typed form component (illustrative)', description: 'A React Native component with typed validation for a transfer flow.' }
  ]
};

export function getProjects(locale: Locale) {
  return projects.map((project) => {
    if (locale !== 'en') return project;
    const translated = { ...project, ...(projectEnglish[project.slug] ?? {}) };
    const snippets = snippetEnglish[project.slug];
    if (snippets && translated.codeSnippets) translated.codeSnippets = translated.codeSnippets.map((snippet, index) => ({ ...snippet, ...snippets[index] }));
    return translated;
  });
}

export function getExperience(locale: Locale) {
  if (locale === 'es') return experience;
  const highlights = [
    ['Built small desktop applications to automate workflows for local businesses.', 'Implemented information management and processing features, prioritizing usability and efficiency.', 'Gained full-stack development experience with a focus on user experience.'],
    ['Supported training, equipment testing, and project rollout activities.', 'Prepared, configured, and verified computer equipment.', 'Helped test and maintain technology resources.'],
    ['Trained and guided selected staff for census activities.', 'Led and supervised a four-person team, ensuring procedures and objectives were met.', 'Built Python and QGIS automation tools to streamline operational workflows.'],
    ['Developed a mobile application related to bank transfers.', 'Designed and adapted user interfaces for usability.', 'Participated in meetings to redesign the system architecture.', 'Compiled APK files for internal use.']
  ];
  return experience.map((item, index) => ({
    ...item,
    role: index === 0 ? 'Junior Developer, Freelance' : index === 3 ? 'Frontend Developer' : item.role,
    company: index === 0 ? 'Independent contractor' : item.company,
    period: item.period.replace('Actualidad', 'Present'),
    location: ({ 'Remoto': 'Remote', 'Locación de servicios': 'Service contract', 'Cusco, Perú': 'Cusco, Peru', 'Prácticas preprofesionales': 'Pre-professional internship' } as Record<string, string>)[item.location] ?? item.location,
    highlights: highlights[index]
  }));
}

export function getEducation(locale: Locale) {
  return locale === 'es' ? education : {
    ...education,
    title: "Bachelor's degree in Computer and Systems Engineering",
    location: 'Cusco, Peru',
    notes: 'Focused on software development, innovation, and process automation. Collaborated on group projects to build practical solutions.'
  };
}

export function getLanguages(locale: Locale) {
  if (locale === 'es') return languages;
  return languages.map((item) => ({
    name: item.name === 'Español' ? 'Spanish' : item.name === 'Ruso' ? 'Russian' : item.name,
    level: ({ Nativo: 'Native', Básico: 'Beginner', Intermedio: 'Intermediate' } as Record<string, string>)[item.level] ?? item.level
  }));
}

export function getSkillGroups(locale: Locale) {
  if (locale === 'es') return skillGroups;
  const titles = ['Programming tools', 'Systems & containers', 'Databases', 'Version control', 'Soft skills'];
  const translatedSoft = ['Teamwork', 'Problem solving', 'Communication', 'Adaptability', 'Innovation'];
  return skillGroups.map((group, index) => ({ title: titles[index], items: index === 4 ? translatedSoft : group.items }));
}
