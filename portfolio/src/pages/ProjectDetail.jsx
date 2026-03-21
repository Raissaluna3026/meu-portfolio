import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../components/portfolio/ProjectsSection";
import WindowCard from "../components/portfolio/WindowCard";
import PixelBackground from "../components/portfolio/PixelBackground";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <PixelBackground />
        <WindowCard title="erro.log">
          <p className="text-muted-foreground">Projeto não encontrado</p>
          <Link to="/Portfolio" className="text-primary text-sm mt-4 inline-block hover:text-accent">
            ← Voltar
          </Link>
        </WindowCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <PixelBackground />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link to="/Portfolio#projetos">
          <motion.button
            whileHover={{ x: -2 }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos projetos
          </motion.button>
        </Link>

        {/* Project header */}
        <WindowCard title={project.file} accentColor>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">{project.name}</h1>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </WindowCard>

        {/* Project images */}
        <div className="mt-6 space-y-6">
          {project.images?.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <WindowCard title={`screenshot_${i + 1}.png`}>
                <img
                  src={img}
                  alt={`${project.name} - imagem ${i + 1}`}
                  className="w-full h-auto border-2 border-border"
                />
              </WindowCard>
            </motion.div>
          ))}
        </div>

        {/* Full description */}
        <div className="mt-6">
          <WindowCard title="descricao.md">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Sobre o projeto</h3>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              {(project.howItWasDoneTitle || project.howItWasDoneText) && (
                <div className="border-t border-border pt-4 space-y-3">
                  {project.howItWasDoneTitle && (
                    <h3 className="text-sm font-semibold text-foreground">{project.howItWasDoneTitle}</h3>
                  )}

                  {project.howItWasDoneText && (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {project.howItWasDoneText}
                    </p>
                  )}
                </div>
              )}

              {(project.etlProcess || project.textETL) && (
                <div className="border-t border-border pt-4 space-y-3">
                  {project.etlProcess && (
                    <h3 className="text-sm font-semibold text-foreground">{project.etlProcess}</h3>
                  )}

                  {project.textETL && (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {project.textETL}
                    </p>
                  )}

                  {project.howItWasDoneImage && (
                    <img
                      src={project.howItWasDoneImage}
                      alt={`${project.name} - diagrama de criação`}
                      className="w-full h-auto border-2 border-border"
                    />
                  )}
                </div>
              )}

              {project.features && (
                <div className="border-t border-border pt-4">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Principais funcionalidades</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </WindowCard>
        </div>
      </div>
    </div>
  );
}