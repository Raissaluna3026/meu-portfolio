import ProjectsCarousel from "./ProjectCarousel";

// EDITE AQUI: Adicione seus projetos
export const PROJECTS = [
  {
    id: "dashboard-vendas",
    file: "dashboard_vendas.pbix",
    name: "Dashboard de Vendas",
    description: "Dashboard interativo em Power BI para análise de vendas com KPIs, gráficos dinâmicos e filtros por período.",
    tech: ["Power BI", "SQL", "DAX"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    // Detalhes para página individual
    fullDescription: "Dashboard completo desenvolvido em Power BI para análise de vendas da empresa. Inclui KPIs principais, análise temporal, segmentação por produto e região.",
    features: [
      "KPIs de vendas, ticket médio e conversão",
      "Análise temporal com drill-down",
      "Segmentação por produto, categoria e região",
      "Filtros interativos e slicers",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  {
    id: "pipeline-etl",
    file: "etl_pipeline.py",
    name: "Pipeline ETL Automatizado",
    description: "Pipeline de extração, transformação e carga de dados de múltiplas fontes para data warehouse usando Python.",
    tech: ["Python", "Pandas", "SQL", "Apache Airflow"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    fullDescription: "Sistema automatizado de ETL que coleta dados de APIs, arquivos CSV e bancos de dados, realiza transformações e carrega em data warehouse.",
    features: [
      "Extração de múltiplas fontes (APIs, CSV, DB)",
      "Transformações com Pandas",
      "Validação de qualidade dos dados",
      "Agendamento automático com Airflow",
    ],
    images: [
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    ],
  },
  {
    id: "relatorio-financeiro",
    file: "relatorio_financeiro.pbix",
    name: "Relatório Financeiro",
    description: "Relatório executivo com análise de receitas, despesas e projeções financeiras.",
    tech: ["Power BI", "SQL Server", "DAX"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    fullDescription: "Relatório financeiro executivo com análise detalhada de receitas, despesas, fluxo de caixa e projeções.",
    features: [
      "Análise de receitas e despesas",
      "Fluxo de caixa e projeções",
      "Comparativos mensais e anuais",
      "Drill-through para detalhes",
    ],
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    ],
  },
  {
    id: "analise-rh",
    file: "analise_rh.py",
    name: "Análise de RH",
    description: "Análise de dados de recursos humanos com métricas de turnover, performance e satisfação.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    fullDescription: "Análise exploratória de dados de RH incluindo turnover, performance, satisfação e correlações.",
    features: [
      "Análise de turnover e retenção",
      "Métricas de performance",
      "Correlações entre variáveis",
      "Visualizações estáticas e interativas",
    ],
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs text-muted-foreground mb-1">
            <span className="text-primary">~/projetos</span> $
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Projetos
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-2" />
        </div>

        {/* Projects carousel */}
        <ProjectsCarousel />
      </div>
    </section>
  );
}