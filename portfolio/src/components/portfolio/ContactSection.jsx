import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import { Mail, Github, Linkedin } from "lucide-react";

const LINKS = [
  { icon: Mail, label: "email", value: "raissalunana@gmail.com", href: "mailto:seu@email.com" },
  { icon: Github, label: "github", value: "/raissaluna", href: "https://github.com/Raissaluna3026" },
  { icon: Linkedin, label: "linkedin", value: "/raissaluna-linkedin", href: "https://www.linkedin.com/in/raissa-luna-a0292b1a0/" },
];

export default function ContactSection() {
  return (
    <section className="py-20 px-4 pb-32">
      <div className="max-w-lg mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs text-muted-foreground mb-1">
            <span className="text-primary">~/contato</span> $
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Contato
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-2" />
        </div>

        <WindowCard title="terminal" accentColor>
          <div className="space-y-4">
            {/* Terminal prompt */}
            <div className="text-xs text-muted-foreground">
              <span className="text-primary">~$</span> echo "Vamos conversar?"
            </div>
            <p className="text-sm text-foreground">
            </p>
    
            {/* Links */}
            <div className="space-y-2 pt-2">
              {LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 py-2.5 px-3 bg-secondary border border-border
                      hover:border-primary/40 transition-all cursor-pointer group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs text-muted-foreground w-16">{link.label}:</span>
                    <span className="text-xs text-foreground">{link.value}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Status */}
            <div className="border-t border-border pt-3 mt-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 inline-block" />
                status: disponível
              </div>
            </div>
          </div>
        </WindowCard>
      </div>
    </section>
  );
}