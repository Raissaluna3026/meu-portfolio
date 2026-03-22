import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import { Wrench } from "lucide-react";

export default function AcademicSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs text-muted-foreground mb-1">
            <span className="text-primary">~/acadêmico</span> $
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Formação & Certificações
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-2" />
        </div>

        <WindowCard title="certificados.log">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 py-3"
          >
            <div className="p-1.5 bg-secondary border border-border">
              <Wrench className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">Em construção</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Seção sendo construida.
              </p>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-muted text-muted-foreground border border-border shrink-0">
              status
            </span>
          </motion.div>
        </WindowCard>
      </div>
    </section>
  );
}