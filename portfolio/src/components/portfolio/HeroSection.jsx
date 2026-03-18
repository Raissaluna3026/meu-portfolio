import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="animate-float">
        <WindowCard title="perfil.exe" accentColor className="max-w-xl w-full glow-subtle">
        <div className="space-y-4">
          {/* Status line */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 bg-green-400 inline-block" />
            <span>testando.</span>
          </div>

          {/* Name */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            &gt; 🎲 Raissa Luna
          </h1>

          {/* Role */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-primary/20 text-primary border border-primary/30">
              Analista de Dados
            </span>
            <span className="text-xs px-2 py-1 bg-accent/20 text-accent border border-accent/30">
              ETL
            </span>
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground border border-border">
              BI
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Analista de Dados especializada em extração ETL e desenvolvimento de dashboards em BI. Transformo dados brutos em insights acionáveis usando Python, SQL e Power BI.
          </p>

          {/* Terminal line */}
          <div className="bg-background border border-border p-3 mt-4">
            <code className="text-xs text-muted-foreground">
              <span className="text-primary">~$</span> cat sobre_mim.txt
              <span className="animate-blink ml-1 text-accent">▌</span>
            </code>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium
              hover:bg-primary/90 transition-colors cursor-pointer pixel-border-accent"
          >
            <span className="text-xs">▶</span> Ver projetos
          </motion.a>
        </div>
      </WindowCard>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-muted-foreground/40"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}