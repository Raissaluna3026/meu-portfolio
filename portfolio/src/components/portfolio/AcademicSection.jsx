import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import { FileText, FolderOpen, Award } from "lucide-react";

const ITEMS = [
  {
    icon: FolderOpen,
    title: "Bacharelado em Ciência da Computação",
    subtitle: "Universidade Federal — 2020–2024",
    type: "formação",
  },
  {
    icon: Award,
    title: "Google Data Analytics Professional",
    subtitle: "Google — Coursera, 2023",
    type: "certificação",
  },
  {
    icon: FileText,
    title: "Python for Data Science",
    subtitle: "IBM — Coursera, 2023",
    type: "certificação",
  },
  {
    icon: Award,
    title: "AWS Cloud Practitioner",
    subtitle: "Amazon Web Services, 2024",
    type: "certificação",
  },
];

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
          <div className="space-y-0">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 py-3 border-b border-border last:border-0"
                >
                  <div className="mt-0.5 p-1.5 bg-secondary border border-border">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 bg-muted text-muted-foreground border border-border shrink-0">
                    {item.type}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </WindowCard>
      </div>
    </section>
  );
}