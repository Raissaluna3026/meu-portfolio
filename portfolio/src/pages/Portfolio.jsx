import PixelNavbar from "../components/pixel/PixelNavbar";
import PixelHero from "../components/pixel/PixelHero";
import PixelProjects from "../components/pixel/PixelProjects";
import PixelCertifications from "../components/pixel/PixelCertifications";
import PixelContact from "../components/pixel/PixelContact";
import PixelBackground from "../components/pixel/PixelBackground";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
      <PixelBackground />
      <div className="relative z-10">
        <PixelNavbar />
        <PixelHero />
        <PixelProjects />
        <PixelCertifications />
        <PixelContact />
      </div>
    </div>
  );
}