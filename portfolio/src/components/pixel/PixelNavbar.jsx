import { useState, useEffect } from "react";

const links = [
  { label: "início", href: "#hero" },
  { label: "projetos", href: "#projetos" },
  { label: "formação", href: "#formacao" },
  { label: "contato", href: "#contato" },
];

export default function PixelNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(32, 20, 44, 0.92)' : 'rgba(32, 20, 44, 0.75)',
      borderBottom: `2px solid ${scrolled ? '#5a3d6a' : '#3d2850'}`,
      backdropFilter: 'blur(12px)',
      transition: 'all 0.3s ease',
      fontFamily: "'Courier New', Courier, monospace"
    }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 28px', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <PixelIcon />
          <span style={{ fontWeight: 'bold', fontSize: 12, color: '#e0c8a8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            portfolio.exe
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 2 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              style={{
                fontSize: 11,
                color: active === l.href ? '#e0c8a8' : '#9080a0',
                background: active === l.href ? 'rgba(255,255,255,0.08)' : 'transparent',
                borderBottom: active === l.href ? '2px solid #c47a5a' : '2px solid transparent',
                padding: '14px 14px 12px',
                textDecoration: 'none',
                fontWeight: active === l.href ? 'bold' : 'normal',
                letterSpacing: '0.06em',
                transition: 'all 0.15s',
                cursor: 'pointer',
                display: 'inline-block'
              }}
              onMouseEnter={e => {
                if (active !== l.href) e.currentTarget.style.color = '#c8b898';
              }}
              onMouseLeave={e => {
                if (active !== l.href) e.currentTarget.style.color = '#9080a0';
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function PixelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 4 4" style={{ imageRendering: 'pixelated' }}>
      <rect x="0" y="0" width="2" height="2" fill="#c47a5a" />
      <rect x="2" y="0" width="2" height="2" fill="#8a5a7a" />
      <rect x="0" y="2" width="2" height="2" fill="#8a5a7a" />
      <rect x="2" y="2" width="2" height="2" fill="#c47a5a" />
    </svg>
  );
}