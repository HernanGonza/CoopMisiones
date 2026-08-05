// Reusable SVG mockups for CoopMisiones. Pure SVG so it scales, prints crisp,
// and never depends on external images.
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.14 158)" />
          <stop offset="60%" stopColor="oklch(0.6 0.11 195)" />
          <stop offset="100%" stopColor="oklch(0.5 0.15 235)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#lm)" />
      <path
        d="M12 22c0-5 4-9 9-9 3 0 5.5 1.5 7 4-1-1-2.5-1.5-4-1.5-4 0-7 3-7 7 0 1.5.5 3 1.5 4-2.5-1.5-4-4-4-7z"
        fill="white"
        opacity="0.95"
      />
      <circle cx="26" cy="26" r="4" fill="white" opacity="0.9" />
    </svg>
  );
}

/* ---------- Big hero dashboard mockup ---------- */
export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 780"
      className={className}
      role="img"
      aria-label="Vista previa del panel CoopMisiones"
    >
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.99 0.005 200)" />
          <stop offset="100%" stopColor="oklch(0.96 0.02 200)" />
        </linearGradient>
        <linearGradient id="brand" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.14 158)" />
          <stop offset="100%" stopColor="oklch(0.5 0.15 235)" />
        </linearGradient>
        <linearGradient id="area1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.14 158)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 158)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="area2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.5 0.15 235)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="oklch(0.5 0.15 235)" stopOpacity="0" />
        </linearGradient>
        <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      {/* window */}
      <rect x="0" y="0" width="1200" height="780" rx="24" fill="url(#bg)" />
      <rect x="0" y="0" width="1200" height="52" rx="24" fill="oklch(0.98 0.005 200)" />
      <circle cx="24" cy="26" r="6" fill="oklch(0.85 0.03 30)" />
      <circle cx="46" cy="26" r="6" fill="oklch(0.86 0.06 90)" />
      <circle cx="68" cy="26" r="6" fill="oklch(0.75 0.11 155)" />
      <rect x="420" y="15" width="360" height="22" rx="11" fill="oklch(0.94 0.01 220)" />
      <text x="600" y="30" textAnchor="middle" fontSize="11" fill="oklch(0.5 0.02 220)">
        app.coopmisiones.gob.ar/panel
      </text>

      {/* sidebar */}
      <rect x="0" y="52" width="220" height="728" fill="oklch(0.985 0.005 200)" />
      <rect x="20" y="72" width="32" height="32" rx="10" fill="url(#brand)" />
      <text x="62" y="93" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 220)">
        CoopMisiones
      </text>
      {[
        "Panel general",
        "Cooperativas",
        "Incubadora",
        "Expedientes",
        "Subsidios",
        "Mentores",
        "Capacitaciones",
        "Mapa GIS",
        "Observatorio",
        "Municipios",
        "Usuarios",
      ].map((label, i) => {
        const y = 140 + i * 40;
        const active = i === 0;
        return (
          <g key={label}>
            {active && (
              <rect x="12" y={y - 18} width="196" height="32" rx="10" fill="oklch(0.94 0.06 160)" />
            )}
            <circle
              cx="30"
              cy={y - 2}
              r="4"
              fill={active ? "oklch(0.5 0.13 158)" : "oklch(0.7 0.02 220)"}
            />
            <text
              x="46"
              y={y + 2}
              fontSize="12"
              fill={active ? "oklch(0.28 0.08 158)" : "oklch(0.45 0.02 220)"}
              fontWeight={active ? 600 : 500}
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* main */}
      <text x="252" y="100" fontSize="22" fontWeight="700" fill="oklch(0.2 0.03 220)">
        Panel general
      </text>
      <text x="252" y="122" fontSize="12" fill="oklch(0.5 0.02 220)">
        Provincia de Misiones · Actualizado hace 4 minutos
      </text>
      <rect x="1020" y="80" width="150" height="36" rx="10" fill="oklch(0.55 0.13 158)" />
      <text x="1095" y="103" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">
        + Nueva cooperativa
      </text>

      {/* KPI cards */}
      {[
        {
          label: "Cooperativas activas",
          value: "1.284",
          delta: "+12,4 %",
          color: "oklch(0.55 0.14 158)",
        },
        { label: "En incubación", value: "213", delta: "+8,1 %", color: "oklch(0.5 0.15 235)" },
        {
          label: "Subsidios otorgados",
          value: "$ 842 M",
          delta: "+21 %",
          color: "oklch(0.65 0.11 195)",
        },
        {
          label: "Municipios integrados",
          value: "78 / 78",
          delta: "100 %",
          color: "oklch(0.72 0.14 55)",
        },
      ].map((k, i) => (
        <g key={k.label} transform={`translate(${252 + i * 232}, 152)`}>
          <rect width="212" height="104" rx="16" fill="white" stroke="oklch(0.93 0.01 220)" />
          <text x="20" y="30" fontSize="11" fill="oklch(0.5 0.02 220)" fontWeight="500">
            {k.label}
          </text>
          <text x="20" y="66" fontSize="26" fontWeight="700" fill="oklch(0.2 0.03 220)">
            {k.value}
          </text>
          <rect x="20" y="76" width="60" height="18" rx="9" fill={k.color} opacity="0.12" />
          <text x="50" y="89" textAnchor="middle" fontSize="10" fill={k.color} fontWeight="600">
            {k.delta}
          </text>
          <circle cx="184" cy="30" r="14" fill={k.color} opacity="0.14" />
          <circle cx="184" cy="30" r="5" fill={k.color} />
        </g>
      ))}

      {/* big chart */}
      <g transform="translate(252, 280)">
        <rect width="680" height="300" rx="16" fill="white" stroke="oklch(0.93 0.01 220)" />
        <text x="20" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 220)">
          Formalización de cooperativas
        </text>
        <text x="20" y="46" fontSize="11" fill="oklch(0.5 0.02 220)">
          Últimos 12 meses · comparado con período anterior
        </text>
        {/* grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="20"
            x2="660"
            y1={80 + i * 45}
            y2={80 + i * 45}
            stroke="oklch(0.94 0.01 220)"
          />
        ))}
        {/* area 1 */}
        <path
          d="M40 240 L100 210 L160 220 L220 180 L280 190 L340 150 L400 160 L460 120 L520 130 L580 90 L640 110 L640 260 L40 260 Z"
          fill="url(#area1)"
        />
        <path
          d="M40 240 L100 210 L160 220 L220 180 L280 190 L340 150 L400 160 L460 120 L520 130 L580 90 L640 110"
          fill="none"
          stroke="oklch(0.55 0.14 158)"
          strokeWidth="2.5"
        />
        {/* area 2 */}
        <path
          d="M40 250 L100 240 L160 230 L220 235 L280 220 L340 210 L400 200 L460 190 L520 175 L580 165 L640 155 L640 260 L40 260 Z"
          fill="url(#area2)"
        />
        <path
          d="M40 250 L100 240 L160 230 L220 235 L280 220 L340 210 L400 200 L460 190 L520 175 L580 165 L640 155"
          fill="none"
          stroke="oklch(0.5 0.15 235)"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
        {/* legend */}
        <g transform="translate(480,20)">
          <circle cx="0" cy="0" r="4" fill="oklch(0.55 0.14 158)" />
          <text x="10" y="4" fontSize="10" fill="oklch(0.35 0.02 220)">
            2025
          </text>
          <circle cx="60" cy="0" r="4" fill="oklch(0.5 0.15 235)" />
          <text x="70" y="4" fontSize="10" fill="oklch(0.35 0.02 220)">
            2024
          </text>
        </g>
      </g>

      {/* activity */}
      <g transform="translate(952, 280)">
        <rect width="220" height="300" rx="16" fill="white" stroke="oklch(0.93 0.01 220)" />
        <text x="18" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 220)">
          Actividad reciente
        </text>
        {[
          { c: "oklch(0.55 0.14 158)", t: "Coop. La Yerbatera", s: "Formalizada · Oberá" },
          { c: "oklch(0.5 0.15 235)", t: "Coop. Río Uruguay", s: "Subsidio aprobado" },
          { c: "oklch(0.72 0.14 55)", t: "Coop. Apícola Iguazú", s: "Nueva inscripción" },
          { c: "oklch(0.65 0.11 195)", t: "Coop. Textil Posadas", s: "Capacitación completada" },
          { c: "oklch(0.55 0.14 158)", t: "Coop. Frutihortícola", s: "Mentoría agendada" },
        ].map((r, i) => (
          <g key={i} transform={`translate(16, ${60 + i * 46})`}>
            <circle cx="10" cy="10" r="10" fill={r.c} opacity="0.18" />
            <circle cx="10" cy="10" r="4" fill={r.c} />
            <text x="28" y="8" fontSize="11" fontWeight="600" fill="oklch(0.2 0.03 220)">
              {r.t}
            </text>
            <text x="28" y="22" fontSize="10" fill="oklch(0.5 0.02 220)">
              {r.s}
            </text>
          </g>
        ))}
      </g>

      {/* map card */}
      <g transform="translate(252, 604)">
        <rect width="440" height="152" rx="16" fill="white" stroke="oklch(0.93 0.01 220)" />
        <text x="20" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 220)">
          Distribución territorial
        </text>
        <path
          d="M40 60 C 80 40, 120 90, 160 70 S 240 40, 280 70 S 360 100, 400 80 L 400 140 L 40 140 Z"
          fill="oklch(0.94 0.06 160)"
        />
        <path
          d="M40 60 C 80 40, 120 90, 160 70 S 240 40, 280 70 S 360 100, 400 80"
          stroke="oklch(0.55 0.14 158)"
          fill="none"
          strokeWidth="2"
        />
        {[
          [70, 90, 8],
          [140, 74, 12],
          [210, 82, 16],
          [280, 76, 10],
          [350, 92, 14],
          [390, 106, 6],
        ].map(([x, y, r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill="oklch(0.5 0.15 235)" opacity="0.18" />
            <circle cx={x} cy={y} r="3" fill="oklch(0.5 0.15 235)" />
          </g>
        ))}
      </g>

      {/* pipeline card */}
      <g transform="translate(712, 604)">
        <rect width="460" height="152" rx="16" fill="white" stroke="oklch(0.93 0.01 220)" />
        <text x="20" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 220)">
          Pipeline de incubación
        </text>
        {["Idea", "Diagnóstico", "Formación", "Constitución", "Graduación"].map((s, i) => (
          <g key={s} transform={`translate(${20 + i * 88}, 60)`}>
            <rect width="80" height="72" rx="10" fill="oklch(0.97 0.01 200)" />
            <rect width="80" height="4" rx="2" fill="url(#brand)" opacity={1 - i * 0.15} />
            <text
              x="40"
              y="30"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="oklch(0.25 0.03 220)"
            >
              {s}
            </text>
            <text
              x="40"
              y="52"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="oklch(0.2 0.03 220)"
            >
              {[62, 48, 34, 21, 9][i]}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Map mockup ---------- */
export function MapMockup({ className = "" }: { className?: string }) {
  const points = Array.from({ length: 34 }).map((_, i) => ({
    x: 60 + ((i * 73) % 720),
    y: 60 + ((i * 137) % 380),
    r: 4 + (i % 4) * 2,
  }));
  return (
    <svg viewBox="0 0 820 500" className={className} role="img" aria-label="Mapa cooperativo GIS">
      <defs>
        <linearGradient id="map-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.98 0.02 200)" />
          <stop offset="100%" stopColor="oklch(0.94 0.04 195)" />
        </linearGradient>
        <radialGradient id="heat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.72 0.14 55)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.72 0.14 55)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="820" height="500" rx="20" fill="url(#map-bg)" />
      {/* province outline (stylised Misiones-ish) */}
      <path
        d="M120 90 L230 60 L340 70 L440 110 L520 150 L600 210 L680 300 L650 400 L540 440 L420 430 L300 400 L200 350 L140 260 L110 180 Z"
        fill="oklch(0.94 0.06 160)"
        stroke="oklch(0.55 0.14 158)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      {/* rivers */}
      <path
        d="M140 240 C 220 260, 300 240, 380 280 S 560 320, 640 300"
        stroke="oklch(0.5 0.15 235)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      {/* heat blobs */}
      <circle cx="340" cy="220" r="90" fill="url(#heat)" />
      <circle cx="500" cy="300" r="110" fill="url(#heat)" />
      {/* dots */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.r + 4} fill="oklch(0.55 0.14 158)" opacity="0.18" />
          <circle cx={p.x} cy={p.y} r={p.r} fill="oklch(0.55 0.14 158)" />
        </g>
      ))}
      {/* selected pin */}
      <g transform="translate(430,240)">
        <circle r="26" fill="oklch(0.5 0.15 235)" opacity="0.18" />
        <circle r="10" fill="oklch(0.5 0.15 235)" />
        <circle r="4" fill="white" />
      </g>
      {/* floating card */}
      <g transform="translate(470,180)">
        <rect width="230" height="96" rx="12" fill="white" stroke="oklch(0.92 0.01 220)" />
        <text x="14" y="24" fontSize="11" fontWeight="700" fill="oklch(0.2 0.03 220)">
          Departamento Cainguás
        </text>
        <text x="14" y="42" fontSize="10" fill="oklch(0.5 0.02 220)">
          38 cooperativas · 4 en incubación
        </text>
        <rect x="14" y="54" width="200" height="6" rx="3" fill="oklch(0.94 0.06 160)" />
        <rect x="14" y="54" width="140" height="6" rx="3" fill="oklch(0.55 0.14 158)" />
        <text x="14" y="80" fontSize="10" fill="oklch(0.45 0.02 220)">
          Sectores: yerba, forestal, servicios
        </text>
      </g>
      {/* legend */}
      <g transform="translate(24,430)">
        <rect width="230" height="52" rx="10" fill="white" opacity="0.9" />
        <text x="14" y="20" fontSize="10" fontWeight="700" fill="oklch(0.25 0.03 220)">
          Densidad cooperativa
        </text>
        <rect x="14" y="28" width="200" height="8" rx="4" fill="url(#map-bg)" />
        <rect x="14" y="28" width="200" height="8" rx="4" fill="url(#lg-scale)" />
        <defs>
          <linearGradient id="lg-scale" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.94 0.06 160)" />
            <stop offset="50%" stopColor="oklch(0.55 0.14 158)" />
            <stop offset="100%" stopColor="oklch(0.5 0.15 235)" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

/* ---------- Observatorio mockup ---------- */
export function ObservatorioMockup({ className = "" }: { className?: string }) {
  const bars = [42, 58, 34, 71, 49, 63, 28, 55, 66, 40, 74, 51];
  return (
    <svg viewBox="0 0 820 500" className={className} role="img" aria-label="Observatorio">
      <defs>
        <linearGradient id="ob-bar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.14 158)" />
          <stop offset="100%" stopColor="oklch(0.5 0.15 235)" />
        </linearGradient>
      </defs>
      <rect width="820" height="500" rx="20" fill="white" stroke="oklch(0.93 0.01 220)" />
      <text x="30" y="42" fontSize="16" fontWeight="700" fill="oklch(0.2 0.03 220)">
        Observatorio Cooperativo
      </text>
      <text x="30" y="62" fontSize="11" fill="oklch(0.5 0.02 220)">
        Indicadores del ecosistema · Q3 2026
      </text>

      {/* bar chart */}
      <g transform="translate(30, 100)">
        <text fontSize="11" fontWeight="600" fill="oklch(0.3 0.03 220)">
          Nuevas cooperativas por mes
        </text>
        {bars.map((v, i) => (
          <rect
            key={i}
            x={i * 34}
            y={200 - v * 2.2}
            width="22"
            height={v * 2.2}
            rx="5"
            fill="url(#ob-bar)"
            opacity={0.7 + (i % 2) * 0.2}
          />
        ))}
        <line x1="0" x2="410" y1="202" y2="202" stroke="oklch(0.9 0.01 220)" />
      </g>

      {/* donut */}
      <g transform="translate(500, 130)">
        <text fontSize="11" fontWeight="600" fill="oklch(0.3 0.03 220)">
          Sectores productivos
        </text>
        <g transform="translate(140, 90)">
          <circle r="70" fill="oklch(0.96 0.01 200)" />
          <path d="M0 -70 A70 70 0 0 1 66.6 -21.6 L0 0 Z" fill="oklch(0.55 0.14 158)" />
          <path d="M66.6 -21.6 A70 70 0 0 1 20 66.5 L0 0 Z" fill="oklch(0.5 0.15 235)" />
          <path d="M20 66.5 A70 70 0 0 1 -60 36 L0 0 Z" fill="oklch(0.65 0.11 195)" />
          <path d="M-60 36 A70 70 0 0 1 0 -70 L0 0 Z" fill="oklch(0.72 0.14 55)" />
          <circle r="42" fill="white" />
          <text
            textAnchor="middle"
            y="-4"
            fontSize="20"
            fontWeight="700"
            fill="oklch(0.2 0.03 220)"
          >
            1.284
          </text>
          <text textAnchor="middle" y="14" fontSize="9" fill="oklch(0.5 0.02 220)">
            cooperativas
          </text>
        </g>
        {[
          ["Agro & Yerba", "oklch(0.55 0.14 158)", "38 %"],
          ["Servicios", "oklch(0.5 0.15 235)", "24 %"],
          ["Industrial", "oklch(0.65 0.11 195)", "22 %"],
          ["Trabajo", "oklch(0.72 0.14 55)", "16 %"],
        ].map((r, i) => (
          <g key={i} transform={`translate(0, ${190 + i * 22})`}>
            <rect width="10" height="10" rx="2" fill={r[1] as string} />
            <text x="18" y="9" fontSize="10" fill="oklch(0.3 0.03 220)">
              {r[0]}
            </text>
            <text
              x="240"
              y="9"
              fontSize="10"
              fontWeight="600"
              fill="oklch(0.2 0.03 220)"
              textAnchor="end"
            >
              {r[2]}
            </text>
          </g>
        ))}
      </g>

      {/* ranking */}
      <g transform="translate(30, 370)">
        <text fontSize="11" fontWeight="600" fill="oklch(0.3 0.03 220)">
          Ranking de municipios
        </text>
        {["Posadas", "Oberá", "Eldorado", "Puerto Iguazú", "Apóstoles"].map((m, i) => (
          <g key={m} transform={`translate(${i * 152}, 20)`}>
            <rect width="140" height="80" rx="10" fill="oklch(0.98 0.01 200)" />
            <text x="12" y="22" fontSize="10" fill="oklch(0.5 0.02 220)">
              #{i + 1}
            </text>
            <text x="12" y="42" fontSize="12" fontWeight="700" fill="oklch(0.2 0.03 220)">
              {m}
            </text>
            <rect x="12" y="54" width="116" height="6" rx="3" fill="oklch(0.94 0.06 160)" />
            <rect
              x="12"
              y="54"
              width={116 - i * 18}
              height="6"
              rx="3"
              fill="oklch(0.55 0.14 158)"
            />
            <text x="12" y="72" fontSize="10" fill="oklch(0.45 0.02 220)">
              {[214, 168, 132, 96, 74][i]} coop.
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Small module preview (used in module cards) ---------- */
export function MiniMockup({ variant }: { variant: number }) {
  const variants = [
    // list
    <g key="l">
      <rect width="260" height="10" rx="3" fill="oklch(0.94 0.02 200)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${28 + i * 26})`}>
          <rect width="260" height="20" rx="6" fill="oklch(0.98 0.01 200)" />
          <circle cx="12" cy="10" r="5" fill="oklch(0.55 0.14 158)" opacity={0.4 + i * 0.15} />
          <rect x="26" y="6" width="120" height="8" rx="3" fill="oklch(0.85 0.01 220)" />
          <rect x="200" y="6" width="50" height="8" rx="3" fill="oklch(0.9 0.03 160)" />
        </g>
      ))}
    </g>,
    // chart
    <g key="c">
      <rect width="260" height="130" rx="8" fill="oklch(0.99 0.01 200)" />
      {[40, 60, 30, 80, 55, 70, 45].map((v, i) => (
        <rect
          key={i}
          x={20 + i * 34}
          y={110 - v}
          width="20"
          height={v}
          rx="4"
          fill="url(#brand)"
          opacity={0.6 + (i % 2) * 0.3}
        />
      ))}
      <defs>
        <linearGradient id="brand" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.14 158)" />
          <stop offset="100%" stopColor="oklch(0.5 0.15 235)" />
        </linearGradient>
      </defs>
    </g>,
    // pipeline
    <g key="p">
      {["A", "B", "C", "D"].map((_, i) => (
        <g key={i} transform={`translate(${i * 66}, 20)`}>
          <rect width="58" height="90" rx="8" fill="oklch(0.98 0.01 200)" />
          <rect width="58" height="4" rx="2" fill="oklch(0.55 0.14 158)" opacity={1 - i * 0.2} />
          <rect x="8" y="16" width="30" height="6" rx="3" fill="oklch(0.85 0.01 220)" />
          {[0, 1, 2].map((j) => (
            <circle key={j} cx={16 + j * 12} cy="50" r="6" fill="oklch(0.94 0.06 160)" />
          ))}
        </g>
      ))}
    </g>,
    // map
    <g key="m">
      <rect width="260" height="130" rx="8" fill="oklch(0.96 0.02 200)" />
      <path
        d="M30 40 L80 20 L140 30 L200 50 L230 90 L180 120 L100 110 L40 90 Z"
        fill="oklch(0.94 0.06 160)"
        stroke="oklch(0.55 0.14 158)"
      />
      {[
        [70, 60],
        [110, 50],
        [150, 70],
        [180, 90],
        [130, 90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.5 0.15 235)" />
      ))}
    </g>,
    // form
    <g key="f">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${i * 30})`}>
          <rect width="80" height="8" rx="3" fill="oklch(0.85 0.01 220)" />
          <rect
            y="12"
            width="260"
            height="14"
            rx="4"
            fill="oklch(0.98 0.01 200)"
            stroke="oklch(0.92 0.01 220)"
          />
        </g>
      ))}
    </g>,
    // ia chat
    <g key="ia">
      <rect width="180" height="26" rx="12" fill="oklch(0.94 0.06 160)" />
      <rect
        x="0"
        y="4"
        width="140"
        height="6"
        rx="3"
        fill="oklch(0.55 0.14 158)"
        opacity="0.4"
        transform="translate(20 6)"
      />
      <rect x="80" y="40" width="180" height="26" rx="12" fill="oklch(0.93 0.04 230)" />
      <rect x="80" y="76" width="150" height="26" rx="12" fill="oklch(0.93 0.04 230)" />
      <rect
        x="0"
        y="112"
        width="260"
        height="18"
        rx="9"
        fill="oklch(0.98 0.01 200)"
        stroke="oklch(0.92 0.01 220)"
      />
    </g>,
  ];
  return (
    <svg viewBox="0 0 260 130" className="h-full w-full">
      {variants[variant % variants.length]}
    </svg>
  );
}
