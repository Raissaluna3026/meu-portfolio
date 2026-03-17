import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function CardProjeto({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
          
          {/* Overlay links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/8 text-cyan-300/70 border border-cyan-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}