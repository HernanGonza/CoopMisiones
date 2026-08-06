import { useState } from "react";
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
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ScanSearch,
  Layers,
  Radar,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { DashboardMockup, MapMockup, MiniMockup, ObservatorioMockup } from "./Mockups";

/* ============================== HERO ============================== */
export function Hero() {
  return (
    <section id="plataforma" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-card-soft backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-brand-green" />
            Ministerio de Cooperativismo · Provincia de Misiones
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-5xl font-semibold leading-[1.02] tracking-tight text-ink md:text-7xl">
            CoopMisiones
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-snug text-ink-soft md:text-2xl">
            Más tecnología, más cooperación,{" "}
            <span className="text-gradient-brand font-medium">más desarrollo</span>.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base text-ink-soft/80 md:text-lg">
            La propuesta de plataforma digital para acompañar a cada cooperativa de Misiones a lo
            largo de todo su ciclo de vida: incubación, formalización, capacitación, financiamiento
            y transformación.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#modulos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Conocer la plataforma
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#ecosistema"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white"
            >
              Ver módulos
            </a>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="rounded-[28px] border border-border bg-white/60 p-2 shadow-elevated backdrop-blur">
              <DashboardMockup className="w-full rounded-[22px]" />
            </div>
            <div className="pointer-events-none absolute -left-6 -top-6 hidden animate-float-slow rounded-2xl border border-border bg-white p-3 shadow-card-soft md:block">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-green-soft">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" />
                </span>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-ink">Cooperativa formalizada</div>
                  <div className="text-[10px] text-ink-soft">Coop. La Yerbatera · Oberá</div>
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute -right-4 top-1/3 hidden animate-float-slow rounded-2xl border border-border bg-white p-3 shadow-card-soft md:block"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue-soft">
                  <Sparkles className="h-4 w-4 text-brand-blue" />
                </span>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-ink">Asistente IA</div>
                  <div className="text-[10px] text-ink-soft">3 expedientes resumidos</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 md:grid-cols-4">
            {[
              ["79", "Municipios de la provincia"],
              ["11", "Piezas del ecosistema"],
              ["15", "Módulos propuestos"],
              ["5", "Fases de implementación"],
            ].map(([v, l]) => (
              <div key={l} className="text-center md:text-left">
                <div className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {v}
                </div>
                <div className="mt-1 text-xs text-ink-soft md:text-sm">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== PROBLEMS ============================== */
export function Problems() {
  const items = [
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
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>El punto de partida</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            El cooperativismo trabaja con procesos{" "}
            <span className="text-gradient-brand">del siglo pasado</span>.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            La provincia tiene un movimiento cooperativo vibrante, pero la gestión pública lo
            acompaña con herramientas fragmentadas. CoopMisiones nace para cerrar esa brecha.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={80 * i}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green-soft text-brand-green">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== VISION ============================== */
export function Vision() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[600px] -translate-y-1/2 bg-gradient-hero opacity-70" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionEyebrow>La visión</SectionEyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                CoopMisiones no es un sistema. <br />
                <span className="text-gradient-brand">Es un ecosistema digital.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  Un solo lugar donde el Ministerio, los municipios, los mentores y las cooperativas
                  se encuentran para construir la economía real de Misiones.
                </p>
                <p>
                  Cada trámite, cada capacitación, cada subsidio y cada indicador quedan enhebrados
                  en una misma historia: la del desarrollo cooperativo de la provincia.
                </p>
                <p>
                  Es la infraestructura invisible que convierte iniciativas dispersas en un
                  <span className="font-medium text-ink"> movimiento coordinado y medible</span>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Trazabilidad",
                  "Interoperabilidad",
                  "Datos en vivo",
                  "Cero papel",
                  "Federado",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-brand opacity-15 blur-3xl" />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    t: "Institucional",
                    d: "Pensado bajo los estándares del Gobierno de Misiones.",
                  },
                  { icon: Zap, t: "Ágil", d: "Trámites en minutos, no en meses." },
                  { icon: Radar, t: "Transparente", d: "Todo trazable, todo auditable." },
                  {
                    icon: Sparkles,
                    t: "Inteligente",
                    d: "IA que asiste al funcionario y al ciudadano.",
                  },
                ].map((it, i) => (
                  <div
                    key={it.t}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card-soft"
                    style={{ marginTop: i % 2 ? "1.5rem" : 0 }}
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue-soft text-brand-blue">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-base font-semibold text-ink">{it.t}</div>
                    <p className="mt-1 text-sm text-ink-soft">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== ECOSYSTEM DIAGRAM ============================== */
export function Ecosystem() {
  const nodes = [
    { id: "portal", label: "Portal Provincial", icon: Building2, color: "brand-green" },
    { id: "incubadora", label: "Incubadora", icon: Sprout, color: "brand-teal" },
    { id: "registro", label: "Registro", icon: ClipboardList, color: "brand-blue" },
    { id: "expedientes", label: "Expedientes", icon: FolderKanban, color: "brand-green" },
    { id: "mentores", label: "Mentores", icon: Users, color: "brand-teal" },
    { id: "subsidios", label: "Subsidios", icon: Coins, color: "brand-orange" },
    { id: "capacitaciones", label: "Capacitaciones", icon: GraduationCap, color: "brand-blue" },
    { id: "municipios", label: "Municipios", icon: Building2, color: "brand-green" },
    { id: "mapa", label: "Mapa Cooperativo", icon: Map, color: "brand-teal" },
    { id: "observatorio", label: "Observatorio", icon: BarChart3, color: "brand-blue" },
    { id: "ia", label: "Inteligencia Artificial", icon: Sparkles, color: "brand-orange" },
  ];
  const [active, setActive] = useState<string>("portal");
  const details: Record<string, { title: string; desc: string; points: string[] }> = {
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
  const d = details[active];

  return (
    <section id="ecosistema" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>El ecosistema</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Once piezas, un mismo lenguaje.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Cada componente del ecosistema resuelve una necesidad concreta, pero todos comparten un
            mismo modelo de datos, una misma identidad y una misma capa de seguridad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft dot-bg">
              <div className="grid grid-cols-3 gap-3">
                {nodes.map((n) => {
                  const on = active === n.id;
                  return (
                    <button
                      key={n.id}
                      onClick={() => setActive(n.id)}
                      className={`group flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all ${
                        on
                          ? "border-transparent bg-gradient-brand text-white shadow-glow"
                          : "border-border bg-white/80 text-ink hover:-translate-y-0.5 hover:shadow-card-soft"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl ${
                          on ? "bg-white/20" : "bg-brand-green-soft text-brand-green"
                        }`}
                      >
                        <n.icon className="h-5 w-5" />
                      </span>
                      <span
                        className={`text-[11px] font-medium leading-tight ${on ? "text-white" : "text-ink"}`}
                      >
                        {n.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-soft p-8 shadow-card-soft">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-green-soft blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-blue-soft blur-3xl" />
              <div className="relative">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-green">
                  Módulo seleccionado
                </div>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-ink">{d.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{d.desc}</p>
                <ul className="mt-6 space-y-2">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-border bg-white p-4 shadow-card-soft">
                  <div className="h-32">
                    <MiniMockup variant={active.length % 6} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== MODULES ============================== */
export function Modules() {
  const modules = [
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

  return (
    <section id="modulos" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>Los 15 módulos</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Todo lo que necesita el cooperativismo, en un solo lugar.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Cada módulo es un producto en sí mismo, diseñado con los mismos principios de claridad,
            trazabilidad y velocidad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-soft p-5">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="relative h-full w-full">
                    <MiniMockup variant={m.v} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green-soft text-brand-green">
                      <m.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{m.name}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{m.desc}</p>
                  <ul className="mt-5 space-y-1.5 border-t border-border pt-4">
                    {m.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-ink-soft">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== FEATURED MOCKUPS ============================== */
export function FeatureMockup({
  eyebrow,
  title,
  desc,
  bullets,
  mockup,
  reverse,
  id,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <Reveal>
            <div>
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{desc}</p>
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand-green-soft">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" />
                    </span>
                    <span className="text-base text-ink">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-brand opacity-15 blur-3xl" />
              <div className="rounded-3xl border border-border bg-white/70 p-2 shadow-elevated backdrop-blur">
                {mockup}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== IA ============================== */
export function IA() {
  const messages = [
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
  return (
    <section id="ia" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionEyebrow>Inteligencia Artificial</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Un asistente que{" "}
                <span className="text-gradient-brand">entiende de cooperativismo</span>.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                No es un chatbot genérico: la propuesta es entrenarlo sobre la normativa provincial,
                el padrón cooperativo y la biblioteca del Ministerio, para asistir a ciudadanos y
                funcionarios por igual.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ScanSearch,
                    t: "Detecta documentación faltante",
                    d: "Antes de que el trámite se frene.",
                  },
                  {
                    icon: FileText,
                    t: "Resume expedientes",
                    d: "De 30 páginas a 3 párrafos claros.",
                  },
                  {
                    icon: GraduationCap,
                    t: "Sugiere capacitaciones",
                    d: "Según el sector y la etapa.",
                  },
                  {
                    icon: BarChart3,
                    t: "Genera informes",
                    d: "En lenguaje natural, con evidencia.",
                  },
                ].map((it) => (
                  <div
                    key={it.t}
                    className="rounded-2xl border border-border bg-card p-4 shadow-card-soft"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue-soft text-brand-blue">
                      <it.icon className="h-4 w-4" />
                    </span>
                    <div className="mt-3 text-sm font-semibold text-ink">{it.t}</div>
                    <div className="text-xs text-ink-soft">{it.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-brand opacity-20 blur-3xl" />
              <div className="rounded-3xl border border-border bg-white/80 p-5 shadow-elevated backdrop-blur">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">Asistente CoopMisiones</div>
                      <div className="text-[10px] text-ink-soft">En línea · responde en 1,2 s</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-green-soft px-2 py-0.5 text-[10px] font-medium text-brand-green">
                    IA provincial
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          m.role === "user"
                            ? "bg-gradient-brand text-white"
                            : "border border-border bg-white text-ink"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2">
                  <Lightbulb className="h-4 w-4 text-brand-orange" />
                  <input
                    disabled
                    placeholder="Preguntale al asistente…"
                    className="w-full bg-transparent text-sm text-ink-soft outline-none"
                  />
                  <button className="rounded-lg bg-gradient-brand px-3 py-1.5 text-xs font-medium text-white">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== FLOW ============================== */
export function Flow() {
  const steps = [
    {
      t: "Idea",
      d: "Un grupo se acerca con una necesidad económica compartida.",
      icon: Lightbulb,
    },
    { t: "Portal", d: "Ingresa con su identidad digital provincial.", icon: Building2 },
    { t: "Incubadora", d: "Diagnóstico automatizado y plan de negocios.", icon: Sprout },
    { t: "Mentoría", d: "Un referente de la red acompaña cada etapa.", icon: Users },
    { t: "Evaluación", d: "El equipo técnico valida viabilidad.", icon: ScanSearch },
    { t: "Constitución", d: "Estatuto, matrícula y firma digital.", icon: FolderKanban },
    { t: "Capacitación", d: "Ruta formativa según sector y etapa.", icon: GraduationCap },
    { t: "Subsidio", d: "Postulación y evaluación colegiada.", icon: Coins },
    { t: "Seguimiento", d: "Indicadores vivos y mentoría continua.", icon: Gauge },
    { t: "Graduación", d: "Activa, visible en el Mapa y el Observatorio.", icon: Sparkles },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>El recorrido completo</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            De una idea a una cooperativa graduada.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Diez pasos dentro de la plataforma, cada uno resuelto por un módulo distinto. Nada se
            pierde, todo se puede medir.
          </p>
        </Reveal>

        <div className="relative mt-16 -mx-4 overflow-x-auto px-4 pb-2">
          <div className="relative min-w-[1180px]">
            <svg
              className="pointer-events-none absolute left-0 right-0 top-6 h-10 w-full"
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flow" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.14 158)" />
                  <stop offset="50%" stopColor="oklch(0.65 0.11 195)" />
                  <stop offset="100%" stopColor="oklch(0.5 0.15 235)" />
                </linearGradient>
              </defs>
              <path
                d="M20 20 L 980 20"
                stroke="url(#flow)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-flow-dash"
                fill="none"
              />
            </svg>
            <div className="grid grid-cols-10 gap-3">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 60}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <span
                        className="animate-pulse-ring grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-glow"
                        style={{ animationDelay: `${i * 0.25}s` }}
                      >
                        <s.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="mt-4 w-full rounded-2xl border border-border bg-card p-3 shadow-card-soft">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-green">
                        Paso {i + 1}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-ink">{s.t}</div>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== ARCHITECTURE ============================== */
export function Architecture() {
  const layers = [
    {
      t: "Frontend",
      d: "Portal ciudadano y consola de gestión.",
      tech: ["Next.js", "React", "MapLibre"],
    },
    {
      t: "API",
      d: "Capa de servicios y orquestación de negocio.",
      tech: ["NestJS", "GraphQL", "REST"],
    },
    {
      t: "Datos",
      d: "Postgres + PostGIS + almacenamiento documental.",
      tech: ["PostgreSQL", "PostGIS", "Supabase"],
    },
    {
      t: "GIS",
      d: "Cartografía provincial y análisis territorial.",
      tech: ["PostGIS", "MapLibre", "Leaflet"],
    },
    {
      t: "IA",
      d: "Búsqueda semántica, resúmenes y agentes.",
      tech: ["LLM autoalojado", "pgvector", "N8N"],
    },
    {
      t: "Integraciones",
      d: "INAES, AFIP, municipios y sistemas provinciales.",
      tech: ["Temporal", "N8N", "Webhooks"],
    },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>Arquitectura</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Propuesto sobre estándares abiertos.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Cada capa está diseñada para escalar con la provincia y para conversar con los sistemas
            nacionales existentes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((l, i) => (
            <Reveal key={l.t} delay={(i % 3) * 80}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-green">
                  Capa 0{i + 1}
                </div>
                <div className="mt-2 text-xl font-semibold text-ink">{l.t}</div>
                <p className="mt-2 text-sm text-ink-soft">{l.d}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {l.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white px-2 py-0.5 text-[11px] font-medium text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-3xl border border-border bg-gradient-soft p-8 shadow-card-soft">
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-blue">
              Stack tecnológico
            </div>
            <h3 className="mt-2 text-xl font-semibold text-ink">
              Sobre hombros de gigantes, con soberanía provincial.
            </h3>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
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
              ].map((t) => (
                <span key={t} className="text-sm font-semibold tracking-tight text-ink-soft">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-6 rounded-3xl border border-border bg-card p-8 shadow-card-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-green-soft text-brand-green">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-green">
                  Seguridad y cumplimiento
                </div>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  Pensado para manejar datos sensibles con responsabilidad.
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                  {[
                    "Alineado a la Ley de Protección de Datos Personales (Ley 25.326)",
                    "Datos alojados bajo criterios de soberanía provincial",
                    "Auditoría y trazabilidad de accesos por rol",
                  ].map((p) => (
                    <li
                      key={p}
                      className="rounded-xl border border-border bg-white px-3 py-2 text-xs font-medium text-ink"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== BENEFITS ============================== */
export function Benefits() {
  const groups = [
    {
      t: "Para el Ministerio",
      d: "Una foto viva del cooperativismo, con datos para decidir.",
      points: ["Indicadores en tiempo real", "Trazabilidad total", "Reportes automáticos"],
    },
    {
      t: "Para los Municipios",
      d: "Herramientas locales conectadas a la política provincial.",
      points: ["Tableros locales", "Coordinación federada", "Convocatorias propias"],
    },
    {
      t: "Para las Cooperativas",
      d: "Trámites en minutos, acompañamiento y financiamiento cerca.",
      points: ["Autogestión digital", "Mentoría y capacitación", "Acceso a subsidios"],
    },
    {
      t: "Para los Ciudadanos",
      d: "Un cooperativismo transparente, cercano y con impacto medible.",
      points: ["Portal público", "Datos abiertos", "Mapa cooperativo"],
    },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>Beneficios</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Un solo proyecto, cuatro impactos.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.t} delay={(i % 2) * 80}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-green-soft opacity-0 blur-3xl transition-opacity group-hover:opacity-70" />
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-green">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{g.t}</h3>
                <p className="mt-3 text-base text-ink-soft">{g.d}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {g.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-xl border border-border bg-white px-3 py-2 text-xs font-medium text-ink"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== ROADMAP ============================== */
export function Roadmap() {
  const phases = [
    {
      p: "Fase 1",
      t: "Incubadora",
      d: "Pipeline por etapas y red de mentores.",
      icon: Sprout,
    },
    {
      p: "Fase 2",
      t: "Registro",
      d: "Padrón único provincial con trazabilidad.",
      icon: ClipboardList,
    },
    {
      p: "Fase 3",
      t: "Subsidios",
      d: "Convocatorias, evaluación y rendición digital.",
      icon: Coins,
    },
    {
      p: "Fase 4",
      t: "Observatorio",
      d: "Indicadores vivos y datos abiertos.",
      icon: BarChart3,
    },
    {
      p: "Fase 5",
      t: "IA",
      d: "Asistente semántico y agentes especializados.",
      icon: Sparkles,
    },
  ];
  return (
    <section id="roadmap" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[500px] bg-gradient-hero opacity-50" />
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionEyebrow>Roadmap</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Cinco etapas, un mismo horizonte.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Sin cronograma ni presupuesto cerrados todavía: este es el orden propuesto para
            construir el ecosistema sin perder de vista el conjunto.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 opacity-40 lg:block"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--brand-green), var(--brand-teal), var(--brand-blue))",
            }}
          />
          <div className="space-y-8">
            {phases.map((ph, i) => (
              <Reveal key={ph.p} delay={i * 90}>
                <div
                  className={`grid items-center gap-4 lg:grid-cols-2 ${
                    i % 2 ? "lg:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-green-soft opacity-0 blur-3xl transition-opacity group-hover:opacity-70" />
                    <div className="relative flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                        <ph.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-green">
                          {ph.p} · Etapa {i + 1} de {phases.length}
                        </div>
                        <div className="text-2xl font-semibold text-ink">{ph.t}</div>
                      </div>
                    </div>
                    <p className="relative mt-3 text-sm text-ink-soft">{ph.d}</p>
                  </div>
                  <div className="hidden justify-center lg:flex">
                    <span className="relative grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-base font-semibold text-ink shadow-card-soft">
                      <span
                        className="animate-pulse-ring absolute inset-0 rounded-full"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                      {i + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== CTA + FOOTER ============================== */
export function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-brand p-12 text-white shadow-elevated md:p-16">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                Propuesta · Ministerio de Cooperativismo · Misiones
              </div>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Es hora de darle a las cooperativas la plataforma que merecen.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-white/85">
                Esta propuesta está lista para discutirse, ajustarse y construirse junto a los
                equipos del Ministerio y de los municipios.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-ink">CoopMisiones</div>
            <p className="mt-2 text-sm text-ink-soft">
              Más tecnología, más cooperación, más desarrollo.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Plataforma
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-ink">
              <li>
                <a href="#modulos" className="hover:text-brand-green">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#ecosistema" className="hover:text-brand-green">
                  Ecosistema
                </a>
              </li>
              <li>
                <a href="#ia" className="hover:text-brand-green">
                  Inteligencia Artificial
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-brand-green">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Institucional
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-ink">
              <li>Ministerio de Cooperativismo</li>
              <li>Provincia de Misiones</li>
              <li>Registro Provincial de Cooperativas</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Propuesta
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-ink">
              <li>Paralelo Software Studio</li>
              <li>
                <a
                  href="https://paralelo.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green"
                >
                  paralelo.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <div className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Propuesta de transformación digital para el cooperativismo
            de Misiones.
          </div>
          <div className="text-xs text-ink-soft">
            Documento confidencial · Desarrollo exclusivo — Paralelo Software Studio.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================== SHARED ============================== */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-green backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
      {children}
    </div>
  );
}

export { MapMockup, ObservatorioMockup };
