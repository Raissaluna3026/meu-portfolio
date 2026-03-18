import { motion } from "framer-motion";

export default function WindowCard({
  title = "untitled",
  children,
  className = "",
  accentColor = false,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`${accentColor ? "pixel-border-accent" : "pixel-border"} bg-card rounded-none ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-secondary border-b-2 border-border">
        <div className="flex gap-1.5">
          <span className="window-dot rounded-none bg-primary/60" />
          <span className="window-dot rounded-none bg-muted-foreground/40" />
          <span className="window-dot rounded-none bg-muted-foreground/20" />
        </div>
        <span className="text-xs text-muted-foreground tracking-wider uppercase ml-1">
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">{children}</div>
    </motion.div>
  );
}