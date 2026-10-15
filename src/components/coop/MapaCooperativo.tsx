import { useState } from "react";
import { Users } from "lucide-react";
import { MISIONES_PATH, projectMisiones } from "./misionesGeo";

type Estado = "Activa" | "En incubación" | "Formalizando";
type Coop = [name: string, sector: Sector, socios: number, estado: Estado];
type Sector = "Yerba" | "Té" | "Forestal" | "Turismo" | "Agroindustria" | "Servicios";

const SECTORS: Sector[] = ["Yerba", "Té", "Forestal", "Turismo", "Agroindustria", "Servicios"];

// Datos ilustrativos: localidades reales, cooperativas ficticias.
const TOWNS: {
  name: string;
  lng: number;
  lat: number;
  total: number;
  incub: number;
  coops: Coop[];
}[] = [
  {
    name: "Posadas",
    lng: -55.897,
    lat: -27.367,
    total: 46,
    incub: 6,
    coops: [
      ["Coop. Costanera Ltda.", "Servicios", 142, "Activa"],
      ["Coop. Tierra Colorada", "Agroindustria", 64, "Activa"],
      ["Coop. Mbareté", "Servicios", 23, "En incubación"],
    ],
  },
  {
    name: "Garupá",
    lng: -55.82,
    lat: -27.47,
    total: 9,
    incub: 1,
    coops: [
      ["Coop. Los Aromos", "Agroindustria", 31, "Activa"],
      ["Coop. Garupá Verde", "Servicios", 18, "Formalizando"],
    ],
  },
  {
    name: "Candelaria",
    lng: -55.74,
    lat: -27.46,
    total: 5,
    incub: 0,
    coops: [["Coop. Costa del Paraná", "Turismo", 27, "Activa"]],
  },
  {
    name: "Santa Ana",
    lng: -55.57,
    lat: -27.37,
    total: 4,
    incub: 1,
    coops: [["Coop. Ruinas Vivas", "Turismo", 19, "En incubación"]],
  },
  {
    name: "San José",
    lng: -55.78,
    lat: -27.77,
    total: 6,
    incub: 1,
    coops: [["Coop. Los Colonos", "Agroindustria", 52, "Activa"]],
  },
  {
    name: "Apóstoles",
    lng: -55.754,
    lat: -27.914,
    total: 21,
    incub: 3,
    coops: [
      ["Coop. Yerbatera Apóstoles", "Yerba", 380, "Activa"],
      ["Coop. Tealera del Sur", "Té", 96, "Activa"],
      ["Coop. Nuevo Amanecer", "Servicios", 21, "En incubación"],
    ],
  },
  {
    name: "Concepción de la Sierra",
    lng: -55.52,
    lat: -27.98,
    total: 5,
    incub: 0,
    coops: [["Coop. Sierra Grande", "Yerba", 74, "Activa"]],
  },
  {
    name: "San Javier",
    lng: -55.13,
    lat: -27.87,
    total: 4,
    incub: 1,
    coops: [["Coop. Río Uruguay", "Agroindustria", 33, "Formalizando"]],
  },
  {
    name: "Cerro Azul",
    lng: -55.43,
    lat: -27.63,
    total: 5,
    incub: 0,
    coops: [["Coop. Cerro Azul Ltda.", "Té", 58, "Activa"]],
  },
  {
    name: "Leandro N. Alem",
    lng: -55.325,
    lat: -27.603,
    total: 18,
    incub: 2,
    coops: [
      ["Coop. Agrícola Alem", "Yerba", 210, "Activa"],
      ["Coop. Productores Unidos", "Té", 87, "Activa"],
    ],
  },
  {
    name: "Oberá",
    lng: -55.12,
    lat: -27.487,
    total: 38,
    incub: 5,
    coops: [
      ["Coop. Agrícola Oberá", "Yerba", 460, "Activa"],
      ["Coop. Fiesta del Inmigrante", "Turismo", 45, "Activa"],
      ["Coop. Raíces Misioneras", "Agroindustria", 29, "En incubación"],
    ],
  },
  {
    name: "Campo Grande",
    lng: -54.97,
    lat: -27.2,
    total: 6,
    incub: 1,
    coops: [["Coop. Campo Grande Ltda.", "Forestal", 41, "Activa"]],
  },
  {
    name: "Jardín América",
    lng: -55.226,
    lat: -27.043,
    total: 17,
    incub: 2,
    coops: [
      ["Coop. Yerbatera La Ruta", "Yerba", 305, "Activa"],
      ["Coop. Té del Norte", "Té", 120, "Activa"],
    ],
  },
  {
    name: "Capioví",
    lng: -55.07,
    lat: -26.93,
    total: 5,
    incub: 0,
    coops: [["Coop. Maderera Capioví", "Forestal", 36, "Activa"]],
  },
  {
    name: "Puerto Rico",
    lng: -55.02,
    lat: -26.8,
    total: 11,
    incub: 2,
    coops: [
      ["Coop. Forestal Puerto Rico", "Forestal", 88, "Activa"],
      ["Coop. Costa Alta", "Turismo", 17, "En incubación"],
    ],
  },
  {
    name: "Montecarlo",
    lng: -54.76,
    lat: -26.57,
    total: 10,
    incub: 1,
    coops: [
      ["Coop. Montecarlo Ltda.", "Forestal", 102, "Activa"],
      ["Coop. Mujeres del Monte", "Agroindustria", 26, "Formalizando"],
    ],
  },
  {
    name: "San Vicente",
    lng: -54.48,
    lat: -26.62,
    total: 12,
    incub: 2,
    coops: [
      ["Coop. Sembrando Futuro", "Agroindustria", 60, "Activa"],
      ["Coop. Productores del Alto", "Yerba", 94, "Activa"],
    ],
  },
  {
    name: "San Pedro",
    lng: -54.11,
    lat: -26.62,
    total: 7,
    incub: 1,
    coops: [["Coop. Selva y Sierra", "Forestal", 48, "Activa"]],
  },
  {
    name: "El Soberbio",
    lng: -54.2,
    lat: -27.3,
    total: 6,
    incub: 1,
    coops: [["Coop. Saltos del Moconá", "Turismo", 39, "En incubación"]],
  },
  {
    name: "Eldorado",
    lng: -54.62,
    lat: -26.4,
    total: 29,
    incub: 4,
    coops: [
      ["Coop. Eldorado Ltda.", "Forestal", 230, "Activa"],
      ["Coop. Mate y Tradición", "Yerba", 118, "Activa"],
      ["Coop. Servicios del Norte", "Servicios", 34, "Formalizando"],
    ],
  },
  {
    name: "Bernardo de Irigoyen",
    lng: -53.65,
    lat: -26.25,
    total: 4,
    incub: 0,
    coops: [["Coop. Frontera Viva", "Servicios", 22, "Activa"]],
  },
  {
    name: "Puerto Esperanza",
    lng: -54.6,
    lat: -26.02,
    total: 8,
    incub: 1,
    coops: [["Coop. Papelera del Paraná", "Forestal", 71, "Activa"]],
  },
  {
    name: "Wanda",
    lng: -54.57,
    lat: -25.97,
    total: 5,
    incub: 0,
    coops: [["Coop. Piedras Preciosas", "Turismo", 24, "Activa"]],
  },
  {
    name: "Puerto Iguazú",
    lng: -54.574,
    lat: -25.599,
    total: 16,
    incub: 3,
    coops: [
      ["Coop. Cataratas Ltda.", "Turismo", 156, "Activa"],
      ["Coop. Artesanos de la Selva", "Servicios", 52, "Activa"],
      ["Coop. Yaguareté Verde", "Turismo", 20, "En incubación"],
    ],
  },
];

const LABELED = new Set(["Posadas", "Oberá", "Eldorado", "Puerto Iguazú"]);
const MAX_TOTAL = Math.max(...TOWNS.map((t) => t.total));
const OFFSET = { x: 105, y: 20 };

export function MapaCooperativo() {
  const [selected, setSelected] = useState("Oberá");
  const [sector, setSector] = useState<Sector | null>(null);
  const town = TOWNS.find((t) => t.name === selected)!;
  const matches = (t: (typeof TOWNS)[number]) => !sector || t.coops.some((c) => c[1] === sector);
  const visible = town.coops.filter((c) => !sector || c[1] === sector);

  return (
    <div className="map-card">
      <div className="map-filters" role="group" aria-label="Filtrar por sector">
        <button type="button" aria-pressed={sector === null} onClick={() => setSector(null)}>
          Todos
        </button>
        {SECTORS.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={sector === s}
            onClick={() => setSector(sector === s ? null : s)}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="map-stage">
        <svg
          viewBox="28 8 436 462"
          role="group"
          aria-label="Mapa cooperativo de la provincia de Misiones"
        >
          <defs>
            <radialGradient id="heat" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.78 0.17 130)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.78 0.17 130)" stopOpacity="0" />
            </radialGradient>
            <clipPath id="misiones-clip">
              <path d={MISIONES_PATH} />
            </clipPath>
            <linearGradient id="lg-scale" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.945 0.035 125)" />
              <stop offset="50%" stopColor="oklch(0.386 0.107 135.9)" />
              <stop offset="100%" stopColor="oklch(0.52 0.16 38)" />
            </linearGradient>
          </defs>
          <g transform={`translate(${OFFSET.x},${OFFSET.y})`}>
            <path d={MISIONES_PATH} fill="white" />
            <g clipPath="url(#misiones-clip)">
              {[
                [-55.9, -27.4, 70],
                [-55.1, -27.5, 80],
                [-54.62, -26.4, 75],
              ].map(([lng, lat, r]) => {
                const [x, y] = projectMisiones(lng!, lat!);
                return <circle key={`${lng}${lat}`} cx={x} cy={y} r={r} fill="url(#heat)" />;
              })}
            </g>
            <path
              d={MISIONES_PATH}
              fill="none"
              stroke="oklch(0.386 0.107 135.9)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {TOWNS.map((t) => {
              const [x, y] = projectMisiones(t.lng, t.lat);
              const r = 4 + (t.total / MAX_TOTAL) * 9;
              const active = t.name === selected;
              const on = matches(t);
              return (
                <g
                  key={t.name}
                  className="map-point"
                  data-active={active}
                  data-dim={!on}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active}
                  aria-label={`${t.name}: ${t.total} cooperativas`}
                  onClick={() => setSelected(t.name)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(t.name);
                    }
                  }}
                >
                  <circle cx={x} cy={y} r={Math.max(r + 8, 16)} fill="transparent" />
                  {active && (
                    <circle cx={x} cy={y} r={r + 9} fill="oklch(0.52 0.16 38)" opacity="0.2" />
                  )}
                  <circle cx={x} cy={y} r={r + 4} className="halo" />
                  <circle cx={x} cy={y} r={r} className="dot" />
                  {LABELED.has(t.name) && (
                    <text
                      x={x + (t.name === "Posadas" ? -r - 6 : r + 6)}
                      y={y + 4}
                      textAnchor={t.name === "Posadas" ? "end" : "start"}
                    >
                      {t.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
        <aside className="map-panel" aria-live="polite">
          <div className="phase-label">Localidad seleccionada</div>
          <h3>{town.name}</h3>
          <p className="map-summary">
            <Users size={14} aria-hidden="true" /> {town.total} cooperativas · {town.incub} en
            incubación
          </p>
          <div className="map-bar" aria-hidden="true">
            <span style={{ width: `${Math.round((town.total / MAX_TOTAL) * 100)}%` }} />
          </div>
          {visible.length ? (
            <ul className="map-coops">
              {visible.map((c) => (
                <li key={c[0]}>
                  <b>{c[0]}</b>
                  <span>
                    {c[1]} · {c[2]} socios
                  </span>
                  <em data-estado={c[3]}>{c[3]}</em>
                </li>
              ))}
            </ul>
          ) : (
            <p className="form-note">Sin cooperativas de {sector} en esta localidad.</p>
          )}
          <div className="map-legend" aria-hidden="true">
            <span>Menor densidad</span>
            <i />
            <span>Mayor</span>
          </div>
          <p className="map-disclaimer">Datos ilustrativos</p>
        </aside>
      </div>
    </div>
  );
}
