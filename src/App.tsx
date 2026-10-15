import { useState } from "react";
import {
  ArrowRight,
  Check,
  ExternalLink,
  FileCheck2,
  Globe,
  Info,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import {
  DashboardMockup,
  MapMockup,
  MiniMockup,
  ObservatorioMockup,
} from "@/components/coop/Mockups";
import {
  benefitGroups,
  ecoDetails,
  ecoNodes,
  flowSteps,
  iaCapabilities,
  iaMessages,
  layers,
  mapBullets,
  modules,
  observatorioBullets,
  phases,
  principles,
  problems,
  security,
  stack,
  stats,
  visionTags,
} from "@/components/coop/data";
import markUrl from "@/assets/tacuara-mark-bn-96.webp";

const SITE_URL = "https://www.tacuara.com.ar";
const SITE_LABEL = "www.tacuara.com.ar";
const EMAIL = "hola@tacuara.com.ar";
const MOCK_URL = "https://portal.coopmisiones.paralelo.tech";

const navigation = [
  { label: "Ecosistema", id: "ecosistema" },
  { label: "Módulos", id: "modulos" },
  { label: "Recorrido", id: "recorrido" },
  { label: "Roadmap", id: "roadmap" },
];

function Heading({
  eyebrow,
  children,
  aside,
}: {
  eyebrow: string;
  children: React.ReactNode;
  aside?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{children}</h2>
      </div>
      {aside && <p>{aside}</p>}
    </div>
  );
}

function Ecosystem() {
  const [active, setActive] = useState("portal");
  const d = ecoDetails[active]!;
  const variant = active.length % 6;
  return (
    <div className="eco-layout">
      <div className="eco-nodes" role="group" aria-label="Piezas del ecosistema">
        {ecoNodes.map((n) => (
          <button
            key={n.id}
            type="button"
            className="eco-node"
            aria-pressed={active === n.id}
            onClick={() => setActive(n.id)}
          >
            <n.icon size={22} strokeWidth={1.7} aria-hidden="true" />
            {n.label}
          </button>
        ))}
      </div>
      <div className="eco-detail" aria-live="polite">
        <div className="phase-label">Pieza seleccionada</div>
        <h3>{d.title}</h3>
        <p>{d.desc}</p>
        <ul className="check-list">
          {d.points.map((p) => (
            <li key={p}>
              <Check aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mockup-frame">
          <MiniMockup variant={variant} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const links = [...navigation, { id: "contacto", label: "Contacto" }];
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#inicio" aria-label="Tacuara · Propuesta CoopMisiones">
            <img className="brand-mark" src={markUrl} alt="" width={40} height={40} />
            <span className="brand-word">tacuara</span>
            <span className="brand-sub">
              Propuesta
              <br />
              CoopMisiones
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2">
              <a href="#contacto" className="nav-cta">
                Conversemos <ArrowRight />
              </a>
            </Button>
          </nav>
          <Button
            className="mobile-menu-button"
            variant="ghost"
            size="icon"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
        {menu && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {links.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenu(false)}>
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="site-container">
            <div className="hero-grid">
              <div className="reveal">
                <div className="eyebrow">Cooperativismo · Misiones</div>
                <h1>
                  CoopMisiones: más tecnología, más cooperación, <em>más desarrollo.</em>
                </h1>
                <p className="hero-copy">
                  Una plataforma digital para acompañar a cada cooperativa de la provincia a lo
                  largo de todo su ciclo de vida: incubación, formalización, capacitación,
                  financiamiento y transformación.
                </p>
                <div className="hero-actions">
                  <Button asChild size="proposal">
                    <a href={MOCK_URL} target="_blank" rel="noopener noreferrer">
                      <Play size={16} /> Ver maqueta en vivo
                    </a>
                  </Button>
                  <Button asChild variant="heroOutline" size="proposal">
                    <a href="#modulos">
                      Ver módulos <ArrowRight />
                    </a>
                  </Button>
                </div>
                <p className="hero-note">
                  <MapPin size={14} /> Pensada en Misiones, cerca de cada cooperativa
                </p>
              </div>
              <div className="hero-visual reveal">
                <span className="hero-shape-a" aria-hidden="true" />
                <div className="hero-frame">
                  <DashboardMockup className="hero-image-svg" />
                </div>
                <span className="hero-shape-b" aria-hidden="true" />
                <p className="hero-caption">Vista previa del panel · Datos ilustrativos</p>
              </div>
            </div>
            <dl className="hero-stats">
              {stats.map(([v, l]) => (
                <div key={l}>
                  <dt>{v}</dt>
                  <dd>{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="context-strip">
          <div className="site-container context-inner">
            <span className="context-label">Una propuesta para</span>
            <p className="context-title">
              Ministerio de Cooperativismo de la Provincia de Misiones
            </p>
            <span className="context-meta">
              <FileCheck2 size={16} /> Propuesta comercial · Octubre 2026
            </span>
          </div>
        </div>

        <section className="section" id="desafio">
          <div className="site-container">
            <Heading
              eyebrow="01 / El punto de partida"
              aside="La provincia tiene un movimiento cooperativo vibrante, pero la gestión pública lo acompaña con herramientas fragmentadas."
            >
              Procesos del siglo pasado.
              <br />
              <em>Un movimiento del futuro.</em>
            </Heading>
            <div className="grid-frame">
              <div className="four-grid">
                {problems.map((p) => (
                  <article className="feature-card challenge-card" key={p.title}>
                    <span className="feature-icon">
                      <p.icon size={24} strokeWidth={1.7} />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-solution" id="vision">
          <div className="site-container">
            <div className="split">
              <div>
                <div className="eyebrow">02 / La visión</div>
                <h2>
                  CoopMisiones no es un sistema.
                  <br />
                  <em>Es un ecosistema digital.</em>
                </h2>
                <p className="section-description">
                  Un solo lugar donde el Ministerio, los municipios, los mentores y las cooperativas
                  se encuentran para construir la economía real de Misiones. Cada trámite, cada
                  capacitación, cada subsidio y cada indicador quedan enhebrados en una misma
                  historia: la del desarrollo cooperativo de la provincia.
                </p>
                <ul className="tag-list">
                  {visionTags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="grid-frame alt">
                <div className="three-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  {principles.map((p) => (
                    <article className="feature-card" key={p.title}>
                      <span className="feature-icon">
                        <p.icon size={24} strokeWidth={1.7} />
                      </span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="ecosistema">
          <div className="site-container">
            <Heading
              eyebrow="03 / El ecosistema"
              aside="Cada componente resuelve una necesidad concreta, pero todos comparten un mismo modelo de datos, una misma identidad y una misma capa de seguridad."
            >
              Once piezas.
              <br />
              <em>Un mismo lenguaje.</em>
            </Heading>
            <div className="grid-frame">
              <Ecosystem />
            </div>
          </div>
        </section>

        <section className="section section-solution" id="modulos">
          <div className="site-container">
            <Heading
              eyebrow="04 / Los 15 módulos"
              aside="Cada módulo es un producto en sí mismo, diseñado con los mismos principios de claridad, trazabilidad y velocidad."
            >
              Todo lo que necesita el cooperativismo,
              <br />
              <em>en un solo lugar.</em>
            </Heading>
            <div className="grid-frame alt">
              <div className="module-grid">
                {modules.map((m) => (
                  <article className="feature-card module-card" key={m.name}>
                    <div className="module-thumb">
                      <MiniMockup variant={m.v} />
                    </div>
                    <div className="module-body">
                      <div className="module-head">
                        <span className="feature-icon">
                          <m.icon size={22} strokeWidth={1.7} />
                        </span>
                        <h3>{m.name}</h3>
                      </div>
                      <p>{m.desc}</p>
                      <ul className="mini-list">
                        {m.benefits.map((b) => (
                          <li key={b}>
                            <Check aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="mapa">
          <div className="site-container">
            <div className="split">
              <div>
                <div className="eyebrow">05 / Mapa Cooperativo</div>
                <h2>
                  La geografía del <em>cooperativismo misionero.</em>
                </h2>
                <p className="section-description">
                  Un mapa GIS interactivo con capas por sector, heatmaps de densidad y filtros por
                  indicadores. Cada punto es una cooperativa; cada capa, una decisión.
                </p>
                <ul className="check-list">
                  {mapBullets.map((b) => (
                    <li key={b}>
                      <Check aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid-frame alt">
                <div className="mockup-frame">
                  <MapMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-solution" id="observatorio">
          <div className="site-container">
            <div className="split reverse">
              <div>
                <div className="eyebrow">06 / Observatorio Cooperativo</div>
                <h2>
                  Indicadores vivos para <em>decidir con evidencia.</em>
                </h2>
                <p className="section-description">
                  Series de tiempo, rankings por municipio y composición sectorial. El observatorio
                  convierte los datos operativos en política pública.
                </p>
                <ul className="check-list">
                  {observatorioBullets.map((b) => (
                    <li key={b}>
                      <Check aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid-frame">
                <div className="mockup-frame">
                  <ObservatorioMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="ia">
          <div className="site-container">
            <div className="split">
              <div>
                <div className="eyebrow">07 / Inteligencia Artificial</div>
                <h2>
                  Un asistente que <em>entiende de cooperativismo.</em>
                </h2>
                <p className="section-description">
                  No es un chatbot genérico: la propuesta es entrenarlo sobre la normativa
                  provincial, el padrón cooperativo y la biblioteca del Ministerio, para asistir a
                  ciudadanos y funcionarios por igual.
                </p>
                <ul className="check-list">
                  {iaCapabilities.map((c) => (
                    <li key={c.title}>
                      <c.icon aria-hidden="true" />
                      <span>
                        <b>{c.title}.</b> {c.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid-frame alt">
                <div className="chat">
                  <div className="chat-head">
                    <div>
                      <b>Asistente CoopMisiones</b>
                      <small>Conversación de ejemplo</small>
                    </div>
                    <span className="status-chip">
                      <Sparkles size={14} aria-hidden="true" /> IA provincial
                    </span>
                  </div>
                  <div className="chat-msgs">
                    {iaMessages.map((m, i) => (
                      <p key={i} className={`bubble ${m.role === "user" ? "user" : ""}`}>
                        {m.text}
                      </p>
                    ))}
                  </div>
                  <div className="chat-input" aria-hidden="true">
                    <Lightbulb size={18} /> Preguntale al asistente…
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-solution" id="recorrido">
          <div className="site-container">
            <Heading
              eyebrow="08 / El recorrido completo"
              aside="Diez pasos dentro de la plataforma, cada uno resuelto por un módulo distinto. Nada se pierde, todo se puede medir."
            >
              De una idea a una
              <br />
              <em>cooperativa graduada.</em>
            </Heading>
            <div className="grid-frame alt">
              <ol className="steps">
                {flowSteps.map((s, i) => (
                  <li className="step" key={s.title}>
                    <span className="timeline-dot">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section" id="arquitectura">
          <div className="site-container">
            <Heading
              eyebrow="09 / Arquitectura"
              aside="Cada capa está diseñada para escalar con la provincia y para conversar con los sistemas nacionales existentes."
            >
              Propuesto sobre
              <br />
              <em>estándares abiertos.</em>
            </Heading>
            <div className="grid-frame">
              <div className="three-grid">
                {layers.map((l, i) => (
                  <article className="feature-card layer-card" key={l.title}>
                    <div className="phase-label">Capa 0{i + 1}</div>
                    <h3>{l.title}</h3>
                    <p>{l.desc}</p>
                    <ul className="tag-list">
                      {l.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <div className="panel-note">
              <div className="phase-label">Stack tecnológico</div>
              <h3>Sobre hombros de gigantes, con soberanía provincial.</h3>
              <div className="stack-line">
                {stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="panel-note">
              <div className="phase-label">
                <ShieldCheck size={14} aria-hidden="true" style={{ display: "inline" }} /> Seguridad
                y cumplimiento
              </div>
              <h3>Pensado para manejar datos sensibles con responsabilidad.</h3>
              <ul>
                {security.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section benefits-band" id="beneficios">
          <div className="site-container">
            <div className="eyebrow">10 / Beneficios</div>
            <h2>
              Un solo proyecto, <em>cuatro impactos.</em>
            </h2>
            <div className="grid-frame dark">
              <div className="benefit-groups">
                {benefitGroups.map((g) => (
                  <div key={g.title}>
                    <h3>{g.title}</h3>
                    <p>{g.desc}</p>
                    <ul>
                      {g.points.map((p) => (
                        <li key={p}>
                          <Check aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="site-container">
            <Heading
              eyebrow="11 / Roadmap"
              aside="Sin cronograma ni presupuesto cerrados todavía: este es el orden propuesto para construir el ecosistema sin perder de vista el conjunto."
            >
              Cinco etapas.
              <br />
              <em>Un mismo horizonte.</em>
            </Heading>
            <div className="grid-frame alt">
              <div className="phase-grid">
                {phases.map((p, i) => (
                  <article className="feature-card" key={p.title}>
                    <span className="feature-icon">
                      <p.icon size={24} strokeWidth={1.7} />
                    </span>
                    <div className="phase-label">
                      Fase {i + 1} · Etapa {i + 1} de {phases.length}
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="site-container">
            <div className="contact-card grid-frame alt">
              <div>
                <div className="eyebrow">12 / Conversemos</div>
                <h2>
                  Es hora de darle a las cooperativas <em>la plataforma que merecen.</em>
                </h2>
                <p className="section-description">
                  Esta propuesta está lista para discutirse, ajustarse y construirse junto a los
                  equipos del Ministerio y de los municipios.
                </p>
                <div className="contact-cta">
                  <ContactDialog>
                    <Button size="proposal">
                      Coordinar una reunión <ArrowRight />
                    </Button>
                  </ContactDialog>
                  <Button asChild variant="heroOutline" size="proposal">
                    <a href={MOCK_URL} target="_blank" rel="noopener noreferrer">
                      Maqueta en vivo <ExternalLink />
                    </a>
                  </Button>
                </div>
              </div>
              <ul className="contact-details">
                <li>
                  <a href={`mailto:${EMAIL}`}>
                    <Mail size={22} aria-hidden="true" />
                    <span>
                      <small>Correo</small>
                      {EMAIL}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={SITE_URL} target="_blank" rel="noreferrer">
                    <Globe size={22} aria-hidden="true" />
                    <span>
                      <small>Sitio web</small>
                      {SITE_LABEL}
                    </span>
                  </a>
                </li>
                <li>
                  <span className="contact-static">
                    <MapPin size={22} aria-hidden="true" />
                    <span>
                      <small>Desde</small>
                      Posadas, Misiones
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-top">
            <a
              className="footer-brand"
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Tacuara, sitio web"
            >
              <img src={markUrl} alt="" width={44} height={44} />
              <span>tacuara</span>
            </a>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={18} aria-hidden="true" /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={SITE_URL} target="_blank" rel="noreferrer">
                  <Globe size={18} aria-hidden="true" /> {SITE_LABEL}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Tacuara · Propuesta elaborada en Octubre 2026</span>
            <span>
              <Info size={14} aria-hidden="true" /> Propuesta de proveedor. No es un sitio oficial
              del Gobierno.
            </span>
          </div>
        </div>
        <p className="footer-wordmark" aria-hidden="true">
          tacuara
        </p>
      </footer>
    </>
  );
}
