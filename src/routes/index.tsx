import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/coop/Nav";
import {
  Hero,
  Problems,
  Vision,
  Ecosystem,
  Modules,
  FeatureMockup,
  IA,
  Flow,
  Architecture,
  Benefits,
  Roadmap,
  CTA,
  Footer,
  MapMockup,
  ObservatorioMockup,
} from "@/components/coop/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoopMisiones — Más tecnología, más cooperación, más desarrollo" },
      {
        name: "description",
        content:
          "Plataforma digital del Ministerio de Cooperativismo de Misiones. Un ecosistema integral para incubar, formalizar, capacitar y financiar cooperativas.",
      },
      { property: "og:title", content: "CoopMisiones — Ecosistema digital cooperativo" },
      {
        property: "og:description",
        content:
          "El proyecto de transformación digital del cooperativismo misionero: 15 módulos, mapa GIS, observatorio de indicadores e inteligencia artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Vision />
        <Ecosystem />
        <Modules />
        <FeatureMockup
          id="mapa"
          eyebrow="Mapa Cooperativo"
          title="La geografía del cooperativismo misionero."
          desc="Un mapa GIS interactivo con capas por sector, heatmaps de densidad y filtros por indicadores. Cada punto es una cooperativa; cada capa, una decisión."
          bullets={[
            "Filtros por sector, municipio y estado",
            "Capas de densidad y heatmaps",
            "Fichas territoriales al instante",
            "Datos exportables y API pública",
          ]}
          mockup={<MapMockup className="w-full rounded-2xl" />}
        />
        <FeatureMockup
          id="observatorio"
          eyebrow="Observatorio Cooperativo"
          title="Indicadores vivos para decidir con evidencia."
          desc="Series de tiempo, rankings por municipio y composición sectorial. El observatorio convierte los datos operativos en política pública."
          bullets={[
            "Reportes automáticos mensuales",
            "Comparativas históricas y territoriales",
            "Ranking dinámico de municipios",
            "Datos abiertos con licencia provincial",
          ]}
          mockup={<ObservatorioMockup className="w-full rounded-2xl" />}
          reverse
        />
        <IA />
        <Flow />
        <Architecture />
        <Benefits />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
