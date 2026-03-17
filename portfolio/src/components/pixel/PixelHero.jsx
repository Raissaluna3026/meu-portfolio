import { motion } from "framer-motion";
import PixelWindow from "./PixelWindow";
import PixelAvatar from "./PixelAvatar";

export default function PixelHero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 80,
      paddingBottom: 60,
      paddingLeft: 24,
      paddingRight: 24
    }}>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{ maxWidth: 580, width: '100%' }}
      >
        <PixelWindow title="index.exe" accentColor="#6a4858" icon="▸">
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <div style={{
                background: 'rgba(138,90,122,0.08)',
                border: '2px solid #c0a090',
                borderRadius: 2,
                padding: '12px 14px'
              }}>
                <PixelAvatar />
              </div>
              <StatusBadge />
            </div>

            {/* Text column */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{
                  color: '#9a7060',
                  fontSize: 10,
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: 6
                }}>
                  desenvolvedor · dados
                </div>
                <h1 style={{
                  fontSize: 26,
                  fontWeight: 'bold',
                  color: '#2d1f30',
                  margin: 0,
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '0.02em',
                  lineHeight: 1.2
                }}>
                  Seu Nome
                </h1>
              </div>

              <Divider />

              <p style={{
                color: '#5a4850',
                fontSize: 11,
                lineHeight: 1.8,
                margin: '14px 0',
                fontFamily: "'Courier New', monospace"
              }}>
                Transformo dados em produtos digitais coerentes.
                Trabalho na interseção entre engenharia, análise e
                design — com foco em clareza e resultado.
              </p>

              <Divider />

              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <PixelButton href="#projetos" primary>ver projetos</PixelButton>
                <PixelButton href="#contato">contato</PixelButton>
              </div>
            </div>
          </div>
        </PixelWindow>
      </motion.div>
    </section>
  );
}

function StatusBadge() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: 'rgba(245,238,228,0.9)',
      border: '2px solid #a89080',
      borderRadius: 2,
      padding: '3px 9px'
    }}>
      <span style={{
        width: 6, height: 6,
        background: '#78a860',
        borderRadius: '50%',
        display: 'inline-block',
        boxShadow: '0 0 5px #78a860'
      }} />
      <span style={{
        color: '#5a4040',
        fontSize: 9,
        fontFamily: "'Courier New', monospace",
        fontWeight: 'bold',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }}>
        disponível
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ height: 2, background: 'repeating-linear-gradient(90deg, #c0a090 0px, #c0a090 4px, transparent 4px, transparent 8px)', opacity: 0.5 }} />
  );
}

function PixelButton({ href, children, primary }) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        padding: '7px 18px',
        background: primary ? '#6a4858' : 'transparent',
        color: primary ? '#f0e8d8' : '#6a4858',
        border: primary ? '2px solid #4a2838' : '2px solid #b0908a',
        borderRadius: 2,
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: "'Courier New', monospace",
        textDecoration: 'none',
        boxShadow: primary ? '2px 2px 0 #3a1828' : '2px 2px 0 #b0908a',
        transition: 'all 0.1s',
        letterSpacing: '0.06em',
        cursor: 'pointer',
        textTransform: 'uppercase'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translate(-1px,-1px)';
        e.currentTarget.style.boxShadow = primary ? '3px 3px 0 #3a1828' : '3px 3px 0 #b0908a';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = primary ? '2px 2px 0 #3a1828' : '2px 2px 0 #b0908a';
      }}
    >
      {children}
    </a>
  );
}