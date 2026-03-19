import ProjectsCarousel from "./ProjectCarousel";

// EDITE AQUI: Adicione seus projetos
export const PROJECTS = [
  {
    id: "dashboard-vendas",
    file: "dashboard_vendas.pbix",
    name: "Dashboard Financeiro",
    description: "Dashboard financeiro com monitoramento de KPIs e fluxo de caixa, incluindo simulador what-if para análise de cenários e apoio à tomada de decisão.",
    tech: ["Power BI", "SQL", "DAX"],
    image: "/projeto1/pag1.png",
    // Detalhes para página individual
    fullDescription: "A ideia do projeto foi criar um dashboard financeiro que centralizasse as principais informações e facilitasse a análise de KPIs, fluxo de caixa e cenários futuros. Desenvolvi o dashboard de ponta a ponta, passando pela extração e tratamento dos dados, modelagem, criação de métricas e construção dos visuais. Também incluí um simulador what-if para testar diferentes cenários e entender o impacto de decisões financeiras, além de automatizar a atualização dos dados para manter as análises sempre atualizadas. ",
    howItWasDoneTitle: "Desenvolvimento - Automatização",
    howItWasDoneText: "A atualização automática foi construída com integração das fontes de dados e fluxo de ETL para padronização e validação das informações antes da carga. Em seguida, foi configurado o agendamento de refresh no Power BI Service, com estratégia de atualização incremental para reduzir tempo de processamento e manter os indicadores sempre atualizados.",
    howItWasDoneImage: "/projeto1/pag4.png",
    features: [
      "Monitoramento de KPIs financeiros",
      "Análise de fluxo de caixa",
      "Simulador de cenários (what-if)",
      "Atualização automática de dados",
      "Integração e tratamento de dados (ETL)",
      "Visualizações interativas",
    ],
    images: [
      "/projeto1/pag1.png",
      "/projeto1/pag2.png",
      "/projeto1/pag3.png",
      "/projeto1/pag4.png",
    ],
  },
  {
    id: "pipeline-etl",
    file: "etl_pipeline.py",
    name: "Monitoramento de Preços de Combustível (ANP + WhatsApp)",
    description: "Bot automatizado que coleta dados da ANP, trata as informações e envia, via WhatsApp, os postos com gasolina mais barata em Salvador.",
    tech: ["Python", "Pandas", "SQL", "Apache Airflow"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    fullDescription: "A ideia do projeto foi automatizar a busca pelos postos com gasolina mais barata em Salvador, utilizando dados públicos da ANP. O processo começa com a coleta dos dados em CSV/Excel, seguido pelo tratamento e padronização das informações para garantir consistência. Em seguida, os dados são filtrados para identificar os menores preços por região. Por fim, as informações são enviadas automaticamente por meio de um bot no WhatsApp, permitindo acesso rápido e prático às melhores opções de abastecimento.",
    features: [
      "Coleta automatizada de dados da ANP",
      "Tratamento e limpeza de dados (CSV/Excel)",
      "Filtro por localização (Salvador)",
      "Envio automatizado de mensagens via WhatsApp",
      "Atualização periódica dos dados",
    ],
    images: [
      "/projeto1/botgasolina.jpeg",
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