import { useState, useEffect } from "react";
import { Folder, FileText, Mail, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Projetos", href: "#projetos", icon: Folder },
  { label: "Formação", href: "#formacao", icon: FileText },
  { label: "Sobre", href: "#sobre", icon: User },
  { label: "Contato", href: "#contato", icon: Mail },
];

export default function TaskbarNav() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t-2 border-border pixel-border">
      <div className="flex items-stretch h-12">
        {/* Start button */}
        <a
          href="#"
          className="flex items-center gap-2 px-4 bg-secondary border-r-2 border-border
            hover:bg-primary/10 transition-colors group"
        >
          <div className="w-4 h-4 bg-primary group-hover:bg-accent transition-colors" />
          <span className="text-xs font-bold text-foreground hidden sm:inline">Início</span>
        </a>

        {/* Nav items */}
        <div className="flex-1 flex items-center px-2 gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border
                  hover:bg-muted transition-all min-w-fit group"
              >
                <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs text-foreground hidden md:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* System tray */}
        <div className="flex items-center gap-3 px-4 bg-secondary border-l-2 border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-primary" />
            <div className="w-3 h-3 bg-accent" />
          </div>
          <div className="text-xs text-foreground font-mono tabular-nums">
            {formatTime(time)}
          </div>
        </div>
      </div>
    </div>
  );
}