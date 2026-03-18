import { useState } from "react";
import PixelBackground from "../components/portfolio/PixelBackground";
import Navbar from "../components/portfolio/Navbar";
import TaskbarNav from "../components/portfolio/TaskbarNav";
import HeroSection from "../components/portfolio/HeroSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import AcademicSection from "../components/portfolio/AcademicSection";
import AboutSection from "../components/portfolio/AboutSection";
import ContactSection from "../components/portfolio/ContactSection";

export default function Portfolio() {
  const [useTaskbar, setUseTaskbar] = useState(true); // Mude para false para navbar normal

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-12">
      <PixelBackground />
      {useTaskbar ? <TaskbarNav /> : <Navbar />}
      <main>
        <HeroSection />
        <div id="projetos">
          <ProjectsSection />
        </div>
        <div id="formacao">
          <AcademicSection />
        </div>
        <div id="sobre">
          <AboutSection />
        </div>
        <div id="contato">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border py-6 text-center mb-12">
        <p className="text-xs text-muted-foreground">
          © 2026 — feito com <span className="text-primary">♦</span> e código
        </p>
      </footer>

      {/* Toggle navbar style (pode remover depois) */}
      <button
        onClick={() => setUseTaskbar(!useTaskbar)}
        className="fixed top-4 right-4 z-50 px-3 py-1.5 bg-card border-2 border-border
          text-xs text-muted-foreground hover:text-primary hover:border-primary/40 
          transition-all pixel-border"
      >
        {useTaskbar ? "Navbar normal" : "Taskbar"}
      </button>
    </div>
  );
}