import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de e-commerce completa com painel administrativo, pagamentos integrados e sistema de recomendação inteligente.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos e relatórios automatizados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "D3.js", "Python", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "App de Finanças",
    description: "Aplicativo mobile para controle financeiro pessoal com categorização automática e metas de economia.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    tags: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Manager",
    description: "Ferramenta de gerenciamento de redes sociais com agendamento de posts e análise de métricas de engajamento.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Vue.js", "Django", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function SecaoTrabalhos() {
  return (
    <section id="trabalhos" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400/60 text-sm font-mono tracking-widest uppercase">Portfólio</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Trabalhos em<br />
            <span className="text-gray-500">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}