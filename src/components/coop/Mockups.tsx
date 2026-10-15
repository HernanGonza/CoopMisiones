// Reusable SVG mockups for CoopMisiones. Pure SVG so it scales, prints crisp,
// and never depends on external images.
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
          <stop offset="0%" stopColor="oklch(0.99 0.005 100)" />
          <stop offset="100%" stopColor="oklch(0.96 0.02 100)" />
        </linearGradient>
        <linearGradient id="brand" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.386 0.107 135.9)" />
          <stop offset="100%" stopColor="oklch(0.52 0.16 38)" />
        </linearGradient>
        <linearGradient id="area1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.386 0.107 135.9)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.386 0.107 135.9)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="area2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.52 0.16 38)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="oklch(0.52 0.16 38)" stopOpacity="0" />
        </linearGradient>
        <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      {/* window */}
      <rect x="0" y="0" width="1200" height="780" rx="24" fill="url(#bg)" />
      <rect x="0" y="0" width="1200" height="52" rx="24" fill="oklch(0.98 0.005 100)" />
      <circle cx="24" cy="26" r="6" fill="oklch(0.85 0.06 50)" />
      <circle cx="46" cy="26" r="6" fill="oklch(0.88 0.08 100)" />
      <circle cx="68" cy="26" r="6" fill="oklch(0.78 0.17 130)" />
      <rect x="420" y="15" width="360" height="22" rx="11" fill="oklch(0.94 0.01 130)" />
      <text x="600" y="30" textAnchor="middle" fontSize="11" fill="oklch(0.5 0.02 130)">
        app.coopmisiones.gob.ar/panel
      </text>

      {/* sidebar */}
      <rect x="0" y="52" width="220" height="728" fill="oklch(0.985 0.005 100)" />
      <rect x="20" y="72" width="32" height="32" rx="10" fill="url(#brand)" />
      <text x="62" y="93" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 130)">
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
              <rect
                x="12"
                y={y - 18}
                width="196"
                height="32"
                rx="10"
                fill="oklch(0.945 0.035 125)"
              />
            )}
            <circle
              cx="30"
              cy={y - 2}
              r="4"
              fill={active ? "oklch(0.32 0.09 136)" : "oklch(0.7 0.02 130)"}
            />
            <text
              x="46"
              y={y + 2}
              fontSize="12"
              fill={active ? "oklch(0.2 0.035 135)" : "oklch(0.45 0.02 130)"}
              fontWeight={active ? 600 : 500}
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* main */}
      <text x="252" y="100" fontSize="22" fontWeight="700" fill="oklch(0.2 0.03 130)">
        Panel general
      </text>
      <text x="252" y="122" fontSize="12" fill="oklch(0.5 0.02 130)">
        Provincia de Misiones · Actualizado hace 4 minutos
      </text>
      <rect x="1020" y="80" width="150" height="36" rx="10" fill="oklch(0.386 0.107 135.9)" />
      <text x="1095" y="103" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">
        + Nueva cooperativa
      </text>

      {/* KPI cards */}
      {[
        {
          label: "Cooperativas activas",
          value: "1.284",
          delta: "+12,4 %",
          color: "oklch(0.386 0.107 135.9)",
        },
        { label: "En incubación", value: "213", delta: "+8,1 %", color: "oklch(0.52 0.16 38)" },
        {
          label: "Subsidios otorgados",
          value: "$ 842 M",
          delta: "+21 %",
          color: "oklch(0.55 0.14 133)",
        },
        {
          label: "Municipios integrados",
          value: "78 / 78",
          delta: "100 %",
          color: "oklch(0.78 0.17 130)",
        },
      ].map((k, i) => (
        <g key={k.label} transform={`translate(${252 + i * 232}, 152)`}>
          <rect width="212" height="104" rx="16" fill="white" stroke="oklch(0.93 0.01 130)" />
          <text x="20" y="30" fontSize="11" fill="oklch(0.5 0.02 130)" fontWeight="500">
            {k.label}
          </text>
          <text x="20" y="66" fontSize="26" fontWeight="700" fill="oklch(0.2 0.03 130)">
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
        <rect width="680" height="300" rx="16" fill="white" stroke="oklch(0.93 0.01 130)" />
        <text x="20" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 130)">
          Formalización de cooperativas
        </text>
        <text x="20" y="46" fontSize="11" fill="oklch(0.5 0.02 130)">
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
            stroke="oklch(0.94 0.01 130)"
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
          stroke="oklch(0.386 0.107 135.9)"
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
          stroke="oklch(0.52 0.16 38)"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
        {/* legend */}
        <g transform="translate(480,20)">
          <circle cx="0" cy="0" r="4" fill="oklch(0.386 0.107 135.9)" />
          <text x="10" y="4" fontSize="10" fill="oklch(0.35 0.02 130)">
            2025
          </text>
          <circle cx="60" cy="0" r="4" fill="oklch(0.52 0.16 38)" />
          <text x="70" y="4" fontSize="10" fill="oklch(0.35 0.02 130)">
            2024
          </text>
        </g>
      </g>

      {/* activity */}
      <g transform="translate(952, 280)">
        <rect width="220" height="300" rx="16" fill="white" stroke="oklch(0.93 0.01 130)" />
        <text x="18" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 130)">
          Actividad reciente
        </text>
        {[
          { c: "oklch(0.386 0.107 135.9)", t: "Coop. La Yerbatera", s: "Formalizada · Oberá" },
          { c: "oklch(0.52 0.16 38)", t: "Coop. Río Uruguay", s: "Subsidio aprobado" },
          { c: "oklch(0.78 0.17 130)", t: "Coop. Apícola Iguazú", s: "Nueva inscripción" },
          { c: "oklch(0.55 0.14 133)", t: "Coop. Textil Posadas", s: "Capacitación completada" },
          { c: "oklch(0.386 0.107 135.9)", t: "Coop. Frutihortícola", s: "Mentoría agendada" },
        ].map((r, i) => (
          <g key={i} transform={`translate(16, ${60 + i * 46})`}>
            <circle cx="10" cy="10" r="10" fill={r.c} opacity="0.18" />
            <circle cx="10" cy="10" r="4" fill={r.c} />
            <text x="28" y="8" fontSize="11" fontWeight="600" fill="oklch(0.2 0.03 130)">
              {r.t}
            </text>
            <text x="28" y="22" fontSize="10" fill="oklch(0.5 0.02 130)">
              {r.s}
            </text>
          </g>
        ))}
      </g>

      {/* map card */}
      <g transform="translate(252, 604)">
        <rect width="440" height="152" rx="16" fill="white" stroke="oklch(0.93 0.01 130)" />
        <text x="20" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 130)">
          Distribución territorial
        </text>
        <path
          d="M40 60 C 80 40, 120 90, 160 70 S 240 40, 280 70 S 360 100, 400 80 L 400 140 L 40 140 Z"
          fill="oklch(0.945 0.035 125)"
        />
        <path
          d="M40 60 C 80 40, 120 90, 160 70 S 240 40, 280 70 S 360 100, 400 80"
          stroke="oklch(0.386 0.107 135.9)"
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
            <circle cx={x} cy={y} r={r} fill="oklch(0.52 0.16 38)" opacity="0.18" />
            <circle cx={x} cy={y} r="3" fill="oklch(0.52 0.16 38)" />
          </g>
        ))}
      </g>

      {/* pipeline card */}
      <g transform="translate(712, 604)">
        <rect width="460" height="152" rx="16" fill="white" stroke="oklch(0.93 0.01 130)" />
        <text x="20" y="28" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 130)">
          Pipeline de incubación
        </text>
        {["Idea", "Diagnóstico", "Formación", "Constitución", "Graduación"].map((s, i) => (
          <g key={s} transform={`translate(${20 + i * 88}, 60)`}>
            <rect width="80" height="72" rx="10" fill="oklch(0.97 0.01 100)" />
            <rect width="80" height="4" rx="2" fill="url(#brand)" opacity={1 - i * 0.15} />
            <text
              x="40"
              y="30"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="oklch(0.25 0.03 130)"
            >
              {s}
            </text>
            <text
              x="40"
              y="52"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="oklch(0.2 0.03 130)"
            >
              {[62, 48, 34, 21, 9][i]}
            </text>
          </g>
        ))}
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
          <stop offset="0%" stopColor="oklch(0.386 0.107 135.9)" />
          <stop offset="100%" stopColor="oklch(0.52 0.16 38)" />
        </linearGradient>
      </defs>
      <rect width="820" height="500" rx="20" fill="white" stroke="oklch(0.93 0.01 130)" />
      <text x="30" y="42" fontSize="16" fontWeight="700" fill="oklch(0.2 0.03 130)">
        Observatorio Cooperativo
      </text>
      <text x="30" y="62" fontSize="11" fill="oklch(0.5 0.02 130)">
        Indicadores del ecosistema · Q3 2026
      </text>

      {/* bar chart */}
      <g transform="translate(30, 100)">
        <text fontSize="11" fontWeight="600" fill="oklch(0.3 0.03 130)">
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
        <line x1="0" x2="410" y1="202" y2="202" stroke="oklch(0.9 0.01 130)" />
      </g>

      {/* donut */}
      <g transform="translate(500, 130)">
        <text fontSize="11" fontWeight="600" fill="oklch(0.3 0.03 130)">
          Sectores productivos
        </text>
        <g transform="translate(140, 90)">
          <circle r="70" fill="oklch(0.96 0.01 100)" />
          <path d="M0 -70 A70 70 0 0 1 66.6 -21.6 L0 0 Z" fill="oklch(0.386 0.107 135.9)" />
          <path d="M66.6 -21.6 A70 70 0 0 1 20 66.5 L0 0 Z" fill="oklch(0.52 0.16 38)" />
          <path d="M20 66.5 A70 70 0 0 1 -60 36 L0 0 Z" fill="oklch(0.55 0.14 133)" />
          <path d="M-60 36 A70 70 0 0 1 0 -70 L0 0 Z" fill="oklch(0.78 0.17 130)" />
          <circle r="42" fill="white" />
          <text
            textAnchor="middle"
            y="-4"
            fontSize="20"
            fontWeight="700"
            fill="oklch(0.2 0.03 130)"
          >
            1.284
          </text>
          <text textAnchor="middle" y="14" fontSize="9" fill="oklch(0.5 0.02 130)">
            cooperativas
          </text>
        </g>
        {[
          ["Agro & Yerba", "oklch(0.386 0.107 135.9)", "38 %"],
          ["Servicios", "oklch(0.52 0.16 38)", "24 %"],
          ["Industrial", "oklch(0.55 0.14 133)", "22 %"],
          ["Trabajo", "oklch(0.78 0.17 130)", "16 %"],
        ].map((r, i) => (
          <g key={i} transform={`translate(0, ${190 + i * 22})`}>
            <rect width="10" height="10" rx="2" fill={r[1] as string} />
            <text x="18" y="9" fontSize="10" fill="oklch(0.3 0.03 130)">
              {r[0]}
            </text>
            <text
              x="240"
              y="9"
              fontSize="10"
              fontWeight="600"
              fill="oklch(0.2 0.03 130)"
              textAnchor="end"
            >
              {r[2]}
            </text>
          </g>
        ))}
      </g>

      {/* ranking */}
      <g transform="translate(30, 370)">
        <text fontSize="11" fontWeight="600" fill="oklch(0.3 0.03 130)">
          Ranking de municipios
        </text>
        {["Posadas", "Oberá", "Eldorado", "Puerto Iguazú", "Apóstoles"].map((m, i) => (
          <g key={m} transform={`translate(${i * 152}, 20)`}>
            <rect width="140" height="80" rx="10" fill="oklch(0.98 0.01 100)" />
            <text x="12" y="22" fontSize="10" fill="oklch(0.5 0.02 130)">
              #{i + 1}
            </text>
            <text x="12" y="42" fontSize="12" fontWeight="700" fill="oklch(0.2 0.03 130)">
              {m}
            </text>
            <rect x="12" y="54" width="116" height="6" rx="3" fill="oklch(0.945 0.035 125)" />
            <rect
              x="12"
              y="54"
              width={116 - i * 18}
              height="6"
              rx="3"
              fill="oklch(0.386 0.107 135.9)"
            />
            <text x="12" y="72" fontSize="10" fill="oklch(0.45 0.02 130)">
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
      <rect width="260" height="10" rx="3" fill="oklch(0.94 0.02 100)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${28 + i * 26})`}>
          <rect width="260" height="20" rx="6" fill="oklch(0.98 0.01 100)" />
          <circle cx="12" cy="10" r="5" fill="oklch(0.386 0.107 135.9)" opacity={0.4 + i * 0.15} />
          <rect x="26" y="6" width="120" height="8" rx="3" fill="oklch(0.85 0.01 130)" />
          <rect x="200" y="6" width="50" height="8" rx="3" fill="oklch(0.9 0.04 125)" />
        </g>
      ))}
    </g>,
    // chart
    <g key="c">
      <rect width="260" height="130" rx="8" fill="oklch(0.99 0.01 100)" />
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
          <stop offset="0%" stopColor="oklch(0.386 0.107 135.9)" />
          <stop offset="100%" stopColor="oklch(0.52 0.16 38)" />
        </linearGradient>
      </defs>
    </g>,
    // pipeline
    <g key="p">
      {["A", "B", "C", "D"].map((_, i) => (
        <g key={i} transform={`translate(${i * 66}, 20)`}>
          <rect width="58" height="90" rx="8" fill="oklch(0.98 0.01 100)" />
          <rect
            width="58"
            height="4"
            rx="2"
            fill="oklch(0.386 0.107 135.9)"
            opacity={1 - i * 0.2}
          />
          <rect x="8" y="16" width="30" height="6" rx="3" fill="oklch(0.85 0.01 130)" />
          {[0, 1, 2].map((j) => (
            <circle key={j} cx={16 + j * 12} cy="50" r="6" fill="oklch(0.945 0.035 125)" />
          ))}
        </g>
      ))}
    </g>,
    // map
    <g key="m">
      <rect width="260" height="130" rx="8" fill="oklch(0.96 0.02 100)" />
      <path
        d="M30 40 L80 20 L140 30 L200 50 L230 90 L180 120 L100 110 L40 90 Z"
        fill="oklch(0.945 0.035 125)"
        stroke="oklch(0.386 0.107 135.9)"
      />
      {[
        [70, 60],
        [110, 50],
        [150, 70],
        [180, 90],
        [130, 90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.52 0.16 38)" />
      ))}
    </g>,
    // form
    <g key="f">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${i * 30})`}>
          <rect width="80" height="8" rx="3" fill="oklch(0.85 0.01 130)" />
          <rect
            y="12"
            width="260"
            height="14"
            rx="4"
            fill="oklch(0.98 0.01 100)"
            stroke="oklch(0.92 0.01 130)"
          />
        </g>
      ))}
    </g>,
    // ia chat
    <g key="ia">
      <rect width="180" height="26" rx="12" fill="oklch(0.945 0.035 125)" />
      <rect
        x="0"
        y="4"
        width="140"
        height="6"
        rx="3"
        fill="oklch(0.386 0.107 135.9)"
        opacity="0.4"
        transform="translate(20 6)"
      />
      <rect x="80" y="40" width="180" height="26" rx="12" fill="oklch(0.955 0.03 60)" />
      <rect x="80" y="76" width="150" height="26" rx="12" fill="oklch(0.955 0.03 60)" />
      <rect
        x="0"
        y="112"
        width="260"
        height="18"
        rx="9"
        fill="oklch(0.98 0.01 100)"
        stroke="oklch(0.92 0.01 130)"
      />
    </g>,
  ];
  return (
    <svg viewBox="0 0 260 130" className="h-full w-full">
      {variants[variant % variants.length]}
    </svg>
  );
}
