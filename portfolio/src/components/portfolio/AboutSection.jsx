import WindowCard from "./WindowCard";

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs text-muted-foreground mb-1">
            <span className="text-primary">~/sobre</span> $
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Sobre mim
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-2" />
        </div>

        <WindowCard title="readme.md">
          <div className="space-y-4">
            <p className="text-sm text-foreground leading-relaxed">
              Olá! Sou analista de dados especializada em transformar dados brutos em insights estratégicos. Meu trabalho envolve extração, transformação e carga de dados (ETL), além da criação de dashboards e relatórios em Business Intelligence.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Domino Python para automação e análise, SQL para consultas complexas, e Power BI para visualizações que facilitam a tomada de decisão. Minha missão é tornar dados acessíveis e acionáveis.
            </p>

            {/* Skills */}
            <div className="border-t border-border pt-4 mt-4">
              <p className="text-xs text-muted-foreground mb-3">
                <span className="text-primary">$</span> cat habilidades.txt
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Power BI", "Pandas", "ETL", "DAX", "PostgreSQL", "MySQL", "Excel", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2 py-1 bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </WindowCard>
      </div>
    </section>
  );
}