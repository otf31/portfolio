export interface CodeSnippet {
  title: string;
  language: string;
  description?: string;
  code: string;
}

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
  architecture?: string[];
  workflow?: string[];
  codeSnippets?: CodeSnippet[];
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
    architecture: [
      "Capa UI (Textual): Componentes, pantallas y manejo de estado de la TUI",
      "Capa de automatización (Playwright): Navegación, interacción con DOM y subida de archivos",
      "Capa de configuración: Gestión de grupos, contenido, rutas de imágenes",
      "Capa de utilidades: Logging, validaciones y helpers para el flujo"
    ],
    workflow: [
      "Carga de configuración y lista de grupos objetivo",
      "Preparación del contenido (texto e imágenes)",
      "Inicialización del navegador con Playwright",
      "Navegación secuencial por grupos con validaciones",
      "Publicación con manejo de errores y reintentos",
      "Reporte de estado en tiempo real en la TUI"
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
    codeSnippets: [
      {
        title: "Estructura base con Textual",
        language: "python",
        description: "Esqueleto de la aplicación TUI para orquestar el flujo de publicación.",
        code: `from textual.app import App, ComposeResult
from textual.containers import Vertical
from textual.widgets import Header, Footer, Button, Input, TextLog

class AutoFBPostApp(App[None]):
    CSS_PATH = "styles.tcss"
    BINDINGS = [("q", "quit", "Salir")]

    def compose(self) -> ComposeResult:
        yield Header()
        yield Vertical(
            Input(placeholder="Texto de publicación"),
            Button("Iniciar publicación", id="start"),
            TextLog(id="log"),
        )
        yield Footer()

    async def on_button_pressed(self, event: Button.Pressed) -> None:
        if event.button.id == "start":
            self.query_one(TextLog).write("Iniciando automatización...")
            # Lógica delegada al servicio de Playwright
`
      },
      {
        title: "Automatización con Playwright (flujo ilustrativo)",
        language: "python",
        description: "Patrón usado para navegar y publicar, con manejo de espera y subida de archivos.",
        code: `from playwright.async_api import async_playwright

async def publish_to_group(page, text: str, images: list[str]):
    # Navegación al grupo
    await page.wait_for_selector('div[role="textbox"]', timeout=15000)
    editor = page.locator('div[role="textbox"]').first
    await editor.click()
    await editor.type(text)

    # Subida de imágenes si existen
    if images:
        file_input = page.locator('input[type="file"]').first
        await file_input.set_input_files(images)

    # Publicación
    post_btn = page.get_by_role("button", name="Publicar")
    await post_btn.click()
    await page.wait_for_timeout(2000)
`
      }
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
    stack: ["Python", "Kokoro ONNX", "ONNX Runtime", "NumPy", "Procesamiento de video", "FFmpeg", "Assets multimedia"],
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
      "Asistencia en estructuración de módulos, configuración, flujo de datos y depuración",
      "Revisión crítica y adaptación del código generado a mis necesidades"
    ],
    architecture: [
      "Módulo de contenido/guion: Generación o carga de preguntas/respuestas",
      "Módulo TTS (Kokoro ONNX): Síntesis de voz local con voces preentrenadas",
      "Módulo de assets: Gestión de imágenes, fuentes, sonidos y recursos",
      "Módulo de timeline/composición: Sincronización de audio con frames",
      "Módulo de render: Ensamblaje final y exportación a formato vertical"
    ],
    workflow: [
      "Carga de datos de trivia/contenido",
      "Generación de voz con Kokoro ONNX por segmento",
      "Selección y preparación de assets visuales",
      "Cálculo de timing basado en duración de audio",
      "Composición de clips con transiciones/texto",
      "Render final en formato vertical listo para publicación"
    ],
    learned: [
      "Integración de modelos ONNX locales (Kokoro) y gestión de inferencia",
      "Sincronización de audio (TTS) con timelines para video",
      "Automatización de composición multimedia con enfoque en formato vertical",
      "Importancia del prompting efectivo y revisión crítica al usar IA para código",
      "Diseño de pipelines modulares para tareas de procesamiento pesado",
      "Optimización de flujo local sin depender de APIs externas"
    ],
    codeNotes: [
      "Carga de voces/modelos ONNX desde archivos locales",
      "Gestión de assets (imágenes/fuentes/sonidos) organizada por carpetas",
      "Separación entre generación de audio, ensamblaje y render final",
      "Enfoque en ejecución local para mayor control sobre el proceso"
    ],
    codeSnippets: [
      {
        title: "Carga de modelo Kokoro ONNX (ilustrativo)",
        language: "python",
        description: "Patrón para inicializar sesión ONNX con voces y generar audio localmente.",
        code: `import onnxruntime as ort
import numpy as np

# Carga de sesión ONNX (modelo + voces)
session = ort.InferenceSession("kokoro-v1.0.onnx")
voices = np.load("voices-v1.0.bin")  # vocab/embeddings de voces

def synthesize(text: str, voice_id: int = 0, speed: float = 1.0) -> np.ndarray:
    # Preparación de inputs según el formato del modelo
    inputs = {
        "text": np.array([text], dtype=object),
        "voice": voices[voice_id:voice_id+1],
        "speed": np.array([speed], dtype=np.float32),
    }
    outputs = session.run(None, inputs)
    # Retorna waveform para posterior mezcla/render
    return outputs[0]
`
      },
      {
        title: "Pipeline de generación de video (flujo conceptual)",
        language: "python",
        description: "Estructura modular que une TTS, assets y composición para formato vertical.",
        code: `class VideoGenPipeline:
    def __init__(self, tts, assets, composer, renderer):
        self.tts = tts
        self.assets = assets
        self.composer = composer
        self.renderer = renderer

    def generate(self, items: list[dict]) -> str:
        clips = []
        for item in items:
            audio = self.tts.synthesize(item["question"])
            visual = self.assets.pick_for_topic(item["topic"])
            clip = self.composer.build_clip(visual, audio, item)
            clips.append(clip)
        return self.renderer.export_vertical(clips, fps=30, size=(1080, 1920))
`
      },
      {
        title: "Sincronización audio-timeline (idea)",
        language: "python",
        description: "Cálculo de duración por segmento para alinear texto/animación con el audio generado.",
        code: `import wave
import contextlib

def get_duration_seconds(path: str) -> float:
    with contextlib.closing(wave.open(path, 'r')) as f:
        frames = f.getnframes()
        rate = f.getframerate()
        return frames / float(rate)

# Uso: ajustar transiciones según duración real del TTS
duration = get_duration_seconds("segment_01.wav")
timeline.add_slide(duration=duration, text=question)
`
      }
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
    architecture: [
      "Navegación: React Navigation para flujos entre pantallas",
      "UI: Componentes reutilizables con enfoque en usabilidad",
      "Datos: Drizzle ORM para modelado y acceso a datos",
      "Lógica: Tipado estricto con TypeScript para flujos críticos",
      "Build: Configuración con Expo/EAS para pruebas internas"
    ],
    workflow: [
      "Análisis de requerimientos con el equipo",
      "Diseño y adaptación de interfaces",
      "Modelado de entidades con Drizzle",
      "Implementación de flujos de transferencia",
      "Revisión de arquitectura y refactorización conjunta",
      "Compilación de APK para pruebas internas"
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
    codeSnippets: [
      {
        title: "Esquema con Drizzle ORM (ilustrativo)",
        language: "typescript",
        description: "Modelado de entidades para un flujo de transferencias bancarias.",
        code: `import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const accounts = sqliteTable("accounts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  accountNumber: text("account_number").notNull().unique(),
  ownerName: text("owner_name").notNull(),
  balance: real("balance").notNull().default(0),
});

export const transfers = sqliteTable("transfers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fromAccountId: integer("from_account_id").notNull().references(() => accounts.id),
  toAccountId: integer("to_account_id").notNull().references(() => accounts.id),
  amount: real("amount").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: integer("created_at").notNull(),
});
`
      },
      {
        title: "Componente de formulario con tipado (ilustrativo)",
        language: "typescript",
        description: "Componente React Native con validación tipada para flujo de transferencia.",
        code: `import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

type TransferForm = {
  toAccount: string;
  amount: string;
};

export const TransferForm = ({ onSubmit }: { onSubmit: (data: TransferForm) => void }) => {
  const [form, setForm] = useState<TransferForm>({ toAccount: "", amount: "" });

  const handleSubmit = () => {
    const amountNum = parseFloat(form.amount);
    if (!form.toAccount || isNaN(amountNum) || amountNum <= 0) {
      Alert.alert("Error", "Datos de transferencia inválidos");
      return;
    }
    onSubmit(form);
  };

  return (
    <View>
      <TextInput placeholder="Cuenta destino" value={form.toAccount} onChangeText={(v) => setForm({ ...form, toAccount: v })} />
      <TextInput placeholder="Monto" keyboardType="numeric" value={form.amount} onChangeText={(v) => setForm({ ...form, amount: v })} />
      <Button title="Transferir" onPress={handleSubmit} />
    </View>
  );
};
`
      }
    ],
    private: true,
    note: "Proyecto local / privado (prácticas)"
  }
];
