import {
  Sprout,
  ClipboardList,
  Megaphone,
  Coins,
  Users,
  GraduationCap,
  FolderKanban,
  FileText,
  Building2,
  Map,
  BarChart3,
  Gauge,
  UserCog,
  Settings2,
  Sparkles,
  ScanSearch,
  Layers,
  Radar,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const problems: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: FileText,
    title: "Expedientes físicos",
    desc: "Carpetas que viajan entre oficinas, extravíos y demoras que frenan la formalización de nuevas cooperativas.",
  },
  {
    icon: Radar,
    title: "Seguimiento limitado",
    desc: "No se sabe qué cooperativas están activas, en riesgo o listas para escalar. La foto llega tarde.",
  },
  {
    icon: BarChart3,
    title: "Falta de indicadores",
    desc: "Sin datos vivos, la política pública se diseña a ciegas y el impacto real es imposible de medir.",
  },
  {
    icon: Layers,
    title: "Procesos dispersos",
    desc: "Cada área trabaja con su propia planilla. La información no conversa entre municipios ni ministerios.",
  },
];

export const principles: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "Institucional",
    desc: "Pensado bajo los estándares del Gobierno de Misiones.",
  },
  { icon: Zap, title: "Ágil", desc: "Trámites en minutos, no en meses." },
  { icon: Radar, title: "Transparente", desc: "Todo trazable, todo auditable." },
  {
    icon: Sparkles,
    title: "Inteligente",
    desc: "IA que asiste al funcionario y al ciudadano.",
  },
];

export const visionTags = [
  "Trazabilidad",
  "Interoperabilidad",
  "Datos en vivo",
  "Cero papel",
  "Federado",
];

export const ecoNodes: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "portal", label: "Portal Provincial", icon: Building2 },
  { id: "incubadora", label: "Incubadora", icon: Sprout },
  { id: "registro", label: "Registro", icon: ClipboardList },
  { id: "expedientes", label: "Expedientes", icon: FolderKanban },
  { id: "mentores", label: "Mentores", icon: Users },
  { id: "subsidios", label: "Subsidios", icon: Coins },
  { id: "capacitaciones", label: "Capacitaciones", icon: GraduationCap },
  { id: "municipios", label: "Municipios", icon: Building2 },
  { id: "mapa", label: "Mapa Cooperativo", icon: Map },
  { id: "observatorio", label: "Observatorio", icon: BarChart3 },
  { id: "ia", label: "Inteligencia Artificial", icon: Sparkles },
];

export const ecoDetails: Record<string, { title: string; desc: string; points: string[] }> = {
  portal: {
    title: "Portal Provincial",
    desc: "Un solo inicio de sesión que enruta a cada cooperativa, mentor o funcionario hacia el módulo que necesita, sin pedir de nuevo los mismos datos.",
    points: [
      "Identidad única para todo el ecosistema",
      "Enruta cada trámite al módulo correcto",
      "Historial unificado por usuario",
    ],
  },
  incubadora: {
    title: "Incubadora",
    desc: "Cuando una cooperativa está lista, entrega el expediente ya validado al Registro y asigna un mentor según la etapa y el sector.",
    points: [
      "Alimenta al Registro sin duplicar datos",
      "Asigna mentores desde la red disponible",
      "Habilita la primera convocatoria elegible",
    ],
  },
  registro: {
    title: "Registro Provincial",
    desc: "El padrón que el resto del ecosistema consulta para saber si una cooperativa existe, está activa y en qué situación jurídica se encuentra.",
    points: [
      "Fuente única de verdad para Subsidios y Municipios",
      "Sincroniza estado jurídico con Expedientes",
      "Base de datos del Mapa y el Observatorio",
    ],
  },
  expedientes: {
    title: "Expedientes",
    desc: "El expediente digital acompaña a la cooperativa a través del Registro, Subsidios y Capacitaciones sin volver a imprimirse.",
    points: [
      "Firma y sellado compartidos entre módulos",
      "Mismo estado visible para todas las áreas",
      "Alimenta la trazabilidad del Observatorio",
    ],
  },
  mentores: {
    title: "Mentores",
    desc: "Cruza los datos de la Incubadora y el Registro para poner al referente correcto frente a la cooperativa correcta, en el momento correcto.",
    points: [
      "Se activa automáticamente desde la Incubadora",
      "Reporta horas de mentoría al Observatorio",
      "Visible para Municipios y el Ministerio",
    ],
  },
  subsidios: {
    title: "Subsidios",
    desc: "Cada convocatoria valida elegibilidad contra el Registro y deja huella en Expedientes y en el Observatorio.",
    points: [
      "Verifica elegibilidad contra el padrón",
      "Rendición vinculada al expediente digital",
      "Resultados nutren los indicadores provinciales",
    ],
  },
  capacitaciones: {
    title: "Capacitaciones",
    desc: "Las rutas formativas se sugieren según el sector y la etapa que marcan la Incubadora y el Registro, no un catálogo genérico.",
    points: [
      "Recomendaciones cruzadas con otros módulos",
      "Certificados quedan en el legajo de Expedientes",
      "Asistencia alimenta el Observatorio",
    ],
  },
  municipios: {
    title: "Municipios",
    desc: "Cada gobierno local ve un recorte de Registro, Mapa y Observatorio filtrado por su propio territorio, sobre la misma base de datos.",
    points: [
      "Tableros con permisos por municipio",
      "Convocatorias propias sin duplicar el padrón",
      "Coordinación directa con el Ministerio",
    ],
  },
  mapa: {
    title: "Mapa Cooperativo",
    desc: "Ubica en el territorio lo que Registro, Subsidios y Observatorio guardan en tablas: cada punto es un dato vivo, no una foto fija.",
    points: [
      "Se actualiza con cada alta del Registro",
      "Cruza capas de indicadores del Observatorio",
      "Compartido con Municipios y ciudadanos",
    ],
  },
  observatorio: {
    title: "Observatorio Cooperativo",
    desc: "Convierte en indicadores lo que ya sucede en Registro, Subsidios, Mentores y Capacitaciones, sin planillas manuales.",
    points: [
      "Se actualiza solo con cada módulo",
      "Compara municipios sobre la misma base",
      "Datos abiertos para investigadores y ciudadanos",
    ],
  },
  ia: {
    title: "Inteligencia Artificial",
    desc: "Lee de todos los módulos a la vez para resumir, alertar y sugerir antes de que alguien tenga que pedirlo.",
    points: [
      "Detecta expedientes trabados en cualquier módulo",
      "Sugiere mentores, cursos y convocatorias",
      "Responde en el Portal con contexto real",
    ],
  },
};

export const modules: {
  icon: LucideIcon;
  name: string;
  desc: string;
  benefits: string[];
  v: number;
}[] = [
  {
    icon: Sprout,
    name: "Incubadora",
    desc: "Acompañamiento por etapas desde la idea hasta la constitución.",
    benefits: ["Pipeline visual", "Tareas y mentores", "Diagnóstico guiado"],
    v: 2,
  },
  {
    icon: ClipboardList,
    name: "Registro Provincial",
    desc: "Padrón único de cooperativas con estado jurídico en tiempo real.",
    benefits: ["Alta digital", "Historial normativo", "Interoperable"],
    v: 0,
  },
  {
    icon: Megaphone,
    name: "Convocatorias",
    desc: "Publica y gestiona convocatorias con reglas configurables.",
    benefits: ["Bases dinámicas", "Postulación online", "Evaluación colegiada"],
    v: 4,
  },
  {
    icon: Coins,
    name: "Subsidios",
    desc: "Desde la solicitud hasta la rendición, con trazabilidad completa.",
    benefits: ["Workflow por etapa", "Rendición digital", "Alertas de cumplimiento"],
    v: 1,
  },
  {
    icon: Users,
    name: "Mentores",
    desc: "Red de referentes con horas documentadas e indicadores de impacto.",
    benefits: ["Perfiles verificados", "Agenda integrada", "Reportes de impacto"],
    v: 0,
  },
  {
    icon: GraduationCap,
    name: "Capacitaciones",
    desc: "Catálogo formativo con certificados oficiales de la provincia.",
    benefits: ["Presencial y virtual", "Certificados digitales", "Ruta formativa"],
    v: 4,
  },
  {
    icon: FolderKanban,
    name: "Expedientes",
    desc: "Flujo digital, firma electrónica y auditoría de cada paso.",
    benefits: ["Firma digital", "Ruta configurable", "Cero papel"],
    v: 0,
  },
  {
    icon: FileText,
    name: "Gestión Documental",
    desc: "Repositorio único, versionado y buscable con IA.",
    benefits: ["Versionado", "Búsqueda semántica", "Permisos finos"],
    v: 0,
  },
  {
    icon: Building2,
    name: "Municipios",
    desc: "Tableros y coordinación entre el Ministerio y cada gobierno local.",
    benefits: ["Tableros locales", "Convocatorias propias", "Coordinación"],
    v: 1,
  },
  {
    icon: Map,
    name: "Mapa Cooperativo",
    desc: "Cartografía viva del cooperativismo misionero.",
    benefits: ["Capas por sector", "Heatmaps", "Filtros avanzados"],
    v: 3,
  },
  {
    icon: BarChart3,
    name: "Observatorio",
    desc: "Indicadores y series para diseñar política pública con evidencia.",
    benefits: ["Reportes automáticos", "Comparativas", "API pública"],
    v: 1,
  },
  {
    icon: Gauge,
    name: "Indicadores",
    desc: "KPIs vivos por cooperativa, sector, municipio y programa.",
    benefits: ["Alertas configurables", "Metas y resultados", "Explorador de datos"],
    v: 1,
  },
  {
    icon: UserCog,
    name: "Usuarios",
    desc: "Roles y permisos por área, municipio y programa.",
    benefits: ["RBAC", "Auditoría", "SSO provincial"],
    v: 4,
  },
  {
    icon: Settings2,
    name: "Administración",
    desc: "Configuración transversal del ecosistema, sin código.",
    benefits: ["Parametrización", "Workflows visuales", "Integraciones"],
    v: 4,
  },
  {
    icon: Sparkles,
    name: "Inteligencia Artificial",
    desc: "Asistente que orienta, resume y sugiere para todos los actores.",
    benefits: ["Búsqueda semántica", "Resúmenes", "Sugerencias"],
    v: 5,
  },
];

export const iaMessages = [
  { role: "user", text: "Quiero crear una cooperativa apícola en San Pedro." },
  {
    role: "ia",
    text: "Perfecto. Detecté 3 cooperativas apícolas cercanas y una convocatoria activa. Te preparé una ruta de 4 pasos y la documentación mínima requerida.",
  },
  { role: "user", text: "Resumime el expediente 2026-04-1187." },
  {
    role: "ia",
    text: "Se trata de una solicitud de subsidio por $ 4,8 M para maquinaria yerbatera. Falta el balance 2025 y la constancia AFIP. Está a 2 firmas de ser aprobado.",
  },
];

export const iaCapabilities: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ScanSearch,
    title: "Detecta documentación faltante",
    desc: "Antes de que el trámite se frene.",
  },
  { icon: FileText, title: "Resume expedientes", desc: "De 30 páginas a 3 párrafos claros." },
  { icon: GraduationCap, title: "Sugiere capacitaciones", desc: "Según el sector y la etapa." },
  { icon: BarChart3, title: "Genera informes", desc: "En lenguaje natural, con evidencia." },
];

export const flowSteps: { title: string; desc: string }[] = [
  { title: "Idea", desc: "Un grupo se acerca con una necesidad económica compartida." },
  { title: "Portal", desc: "Ingresa con su identidad digital provincial." },
  { title: "Incubadora", desc: "Diagnóstico automatizado y plan de negocios." },
  { title: "Mentoría", desc: "Un referente de la red acompaña cada etapa." },
  { title: "Evaluación", desc: "El equipo técnico valida viabilidad." },
  { title: "Constitución", desc: "Estatuto, matrícula y firma digital." },
  { title: "Capacitación", desc: "Ruta formativa según sector y etapa." },
  { title: "Subsidio", desc: "Postulación y evaluación colegiada." },
  { title: "Seguimiento", desc: "Indicadores vivos y mentoría continua." },
  { title: "Graduación", desc: "Activa, visible en el Mapa y el Observatorio." },
];

export const layers = [
  {
    title: "Frontend",
    desc: "Portal ciudadano y consola de gestión.",
    tech: ["Next.js", "React", "MapLibre"],
  },
  {
    title: "API",
    desc: "Capa de servicios y orquestación de negocio.",
    tech: ["NestJS", "GraphQL", "REST"],
  },
  {
    title: "Datos",
    desc: "Postgres + PostGIS + almacenamiento documental.",
    tech: ["PostgreSQL", "PostGIS", "Supabase"],
  },
  {
    title: "GIS",
    desc: "Cartografía provincial y análisis territorial.",
    tech: ["PostGIS", "MapLibre", "Leaflet"],
  },
  {
    title: "IA",
    desc: "Búsqueda semántica, resúmenes y agentes.",
    tech: ["LLM autoalojado", "pgvector", "N8N"],
  },
  {
    title: "Integraciones",
    desc: "INAES, AFIP, municipios y sistemas provinciales.",
    tech: ["Temporal", "N8N", "Webhooks"],
  },
];

export const stack = [
  "Next.js",
  "React",
  "NestJS",
  "Supabase",
  "PostgreSQL",
  "PostGIS",
  "Docker",
  "Temporal",
  "N8N",
  "LLM autoalojado",
  "Leaflet",
  "MapLibre",
  "Cloudflare",
];

export const security = [
  "Alineado a la Ley de Protección de Datos Personales (Ley 25.326)",
  "Datos alojados bajo criterios de soberanía provincial",
  "Auditoría y trazabilidad de accesos por rol",
];

export const benefitGroups = [
  {
    title: "Para el Ministerio",
    desc: "Una foto viva del cooperativismo, con datos para decidir.",
    points: ["Indicadores en tiempo real", "Trazabilidad total", "Reportes automáticos"],
  },
  {
    title: "Para los Municipios",
    desc: "Herramientas locales conectadas a la política provincial.",
    points: ["Tableros locales", "Coordinación federada", "Convocatorias propias"],
  },
  {
    title: "Para las Cooperativas",
    desc: "Trámites en minutos, acompañamiento y financiamiento cerca.",
    points: ["Autogestión digital", "Mentoría y capacitación", "Acceso a subsidios"],
  },
  {
    title: "Para los Ciudadanos",
    desc: "Un cooperativismo transparente, cercano y con impacto medible.",
    points: ["Portal público", "Datos abiertos", "Mapa cooperativo"],
  },
];

export const phases: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Sprout, title: "Incubadora", desc: "Pipeline por etapas y red de mentores." },
  { icon: ClipboardList, title: "Registro", desc: "Padrón único provincial con trazabilidad." },
  { icon: Coins, title: "Subsidios", desc: "Convocatorias, evaluación y rendición digital." },
  { icon: BarChart3, title: "Observatorio", desc: "Indicadores vivos y datos abiertos." },
  { icon: Sparkles, title: "IA", desc: "Asistente semántico y agentes especializados." },
];

export const stats: [string, string][] = [
  ["79", "Municipios de la provincia"],
  ["11", "Piezas del ecosistema"],
  ["15", "Módulos propuestos"],
  ["5", "Fases de implementación"],
];

export const mapBullets = [
  "Filtros por sector, municipio y estado",
  "Capas de densidad y heatmaps",
  "Fichas territoriales al instante",
  "Datos exportables y API pública",
];

export const observatorioBullets = [
  "Reportes automáticos mensuales",
  "Comparativas históricas y territoriales",
  "Ranking dinámico de municipios",
  "Datos abiertos con licencia provincial",
];
