import { motion } from "framer-motion";

const projects = [
  {
    title: "dashboard analytics",
    file: "dashboard.app",
    description: "Plataforma de visualização de dados em tempo real. Gráficos interativos, pipeline de ETL e relatórios exportáveis.",
    tags: ["React", "D3.js", "Python", "AWS"],
    accent: "#6a4858",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    year: "2024"
  },
  {
    title: "e-commerce platform",
    file: "store.app",
    description: "Loja completa com gestão de estoque, checkout otimizado e painel administrativo integrado.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    accent: "#8a5a3a",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    year: "2024"
  },
  {
    title: "nlp assistant",
    file: "assistant.py",
    description: "Assistente virtual com processamento de linguagem natural para triagem e atendimento automatizado.",
    tags: ["Python", "FastAPI", "Docker", "NLP"],
    accent: "#4a5870",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
    year: "2023"
  },
  {
    title: "finanças pessoais",
    file: "finance.mob",
    description: "Aplicativo mobile para controle financeiro com categorização inteligente e visualização mensal.",
    tags: ["React Native", "Firebase", "TypeScript"],
    accent: "#5a7040",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
    year: "2023"
  },
  {
    title: "ml pipeline",
    file: "model.ipynb",
    description: "Pipeline de machine learning para predição de churn com feature engineering e validação cruzada.",
    tags: ["Python", "Sklearn", "Pandas", "Jupyter"],
    accent: "#704858",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    year: "2023"
  },
  {
    title: "social scheduler",
    file: "scheduler.web",
    description: "Ferramenta de agendamento de conteúdo para múltiplas plataformas com métricas de engajamento.",
    tags: ["Vue.js", "Django", "Redis", "Celery"],
    accent: "#6a5838",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    year: "2022"
  }
];

export default function PixelProjetos() {
  return (
    <section id="projetos" style={{ padding: '80px 24px', maxWidth: 1020, margin: '0 auto' }}>
      <SectionHeader label="projetos" title="Trabalhos" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(295px, 1fr))', gap: 24 }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.file} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.18 }}
        style={{
          background: 'rgba(245,238,228,0.95)',
          border: '2px solid #b8a090',
          boxShadow: '3px 3px 0px #9a8070, 0 6px 24px rgba(0,0,0,0.14)',
          borderRadius: '2px',
          overflow: 'hidden',
          cursor: 'default',
          transition: 'box-shadow 0.18s'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '5px 5px 0px #9a8070, 0 12px 32px rgba(0,0,0,0.2)';
          e.currentTarget.style.borderColor = project.accent + '88';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '3px 3px 0px #9a8070, 0 6px 24px rgba(0,0,0,0.14)';
          e.currentTarget.style.borderColor = '#b8a090';
        }}
      >
        {/* Window titlebar */}
        <div style={{
          background: project.accent,
          padding: '6px 11px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid rgba(0,0,0,0.12)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9 }}>▸</span>
            <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: 10, fontWeight: 'bold', fontFamily: "'Courier New', monospace", letterSpacing: '0.08em' }}>
              {project.file}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: "'Courier New', monospace", marginRight: 4 }}>{project.year}</span>
            {[{ bg: '#d4a060', bd: '#b08040' }, { bg: '#80a870', bd: '#608050' }, { bg: '#c06058', bd: '#a04038' }].map((b, i) => (
              <div key={i} style={{ width: 8, height: 8, background: b.bg, border: `1.5px solid ${b.bd}`, borderRadius: 1 }} />
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={{ height: 150, overflow: 'hidden', position: 'relative' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, ${project.accent}22 0%, rgba(245,238,228,0.6) 100%)`
          }} />
        </div>

        {/* Body */}
        <div style={{ padding: '14px 14px 16px' }}>
          <h3 style={{
            margin: '0 0 8px',
            color: '#2d1f30',
            fontSize: 13,
            fontWeight: 'bold',
            fontFamily: "'Courier New', monospace",
            letterSpacing: '0.04em',
            textTransform: 'lowercase'
          }}>
            {project.title}
          </h3>
          <p style={{
            color: '#5a4850',
            fontSize: 11,
            lineHeight: 1.65,
            margin: '0 0 12px',
            fontFamily: "'Courier New', monospace"
          }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 14 }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                background: 'rgba(0,0,0,0.05)',
                border: '1.5px solid #c0a888',
                color: '#6a5040',
                fontSize: 9,
                fontWeight: 'bold',
                padding: '2px 8px',
                borderRadius: 1,
                fontFamily: "'Courier New', monospace",
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>{tag}</span>
            ))}
          </div>

          {/* Open button */}
          <button
            style={{
              width: '100%',
              padding: '7px 0',
              background: 'transparent',
              color: project.accent,
              border: `2px solid ${project.accent}`,
              boxShadow: `2px 2px 0 ${project.accent}66`,
              borderRadius: 1,
              fontSize: 10,
              fontWeight: 'bold',
              fontFamily: "'Courier New', monospace",
              cursor: 'pointer',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.15s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = project.accent;
              e.currentTarget.style.color = '#f0e8d8';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = project.accent;
            }}
          >
            abrir projeto
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <div style={{ height: 2, width: 20, background: '#c47a5a' }} />
        <span style={{
          color: '#9a7060',
          fontSize: 9,
          fontFamily: "'Courier New', monospace",
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}>
          {label}
        </span>
      </div>
      <h2 style={{
        color: '#f0e8d8',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: "'Courier New', monospace",
        margin: 0,
        letterSpacing: '0.03em',
        textShadow: '2px 2px 0 rgba(0,0,0,0.3)'
      }}>
        {title}
      </h2>
    </div>
  );
}