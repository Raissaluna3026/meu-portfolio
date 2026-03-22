import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const showImageAfterDescription = Boolean(project.imageAfterDescription);

  return (
    <WindowCard title={project.file} delay={index * 0.1}>
      <div className="space-y-3">
        {/* Project image */}
        {project.image && !showImageAfterDescription && (
          <div className="w-full h-40 bg-secondary border-2 border-border overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        )}

        <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>

        {project.image && showImageAfterDescription && (
          <div className="w-full h-40 bg-secondary border-2 border-border overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action */}
        <Link to={`/Project/${project.id}`}>
          <motion.button
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-accent transition-colors mt-2 cursor-pointer"
          >
            <ExternalLink className="w-3 h-3" />
            Ver projeto
          </motion.button>
        </Link>
      </div>
    </WindowCard>
  );
}