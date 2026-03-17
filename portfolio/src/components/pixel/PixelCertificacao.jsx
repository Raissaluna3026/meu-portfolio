import { motion } from "framer-motion";
import { SectionHeader } from "./PixelProjects";

const education = [
  {
    title: "Ciência da Computação",
    institution: "Universidade Federal",
    period: "2019 — 2023",
    type: "Bacharelado",
    accent: "#6a4858"
  },
  {
    title: "Técnico em Informática",
    institution: "Instituto Federal",
    period: "2016 — 2018",
    type: "Técnico",
    accent: "#8a5a3a"
  }
];

const certifications = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024", color: "#8a5a3a" },
  { title: "Meta Front-End Developer Certificate", issuer: "Meta / Coursera", year: "2023", color: "#6a4858" },
  { title: "Google UX Design Professional", issuer: "Google / Coursera", year: "2023", color: "#4a5870" },
  { title: "Docker Certified Associate", issuer: "Docker Inc.", year: "2022", color: "#5a7040" },
  { title: "Data Analysis with Python", issuer: "freeCodeCamp", year: "2022", color: "#704858" },
];

export default function PixelCertificacao() {
  return (
    <section id="formacao" style={{ padding: '80px 24px', maxWidth: 1020, margin: '0 auto' }}>
      <SectionHeader label="formação" title="Educação & Certificações" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'start' }}>
        {/* Education */}
        <div>
          <FileGroupHeader label="educação/" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    background: 'rgba(245,238,228,0.95)',
                    border: '2px solid #b8a090',
                    boxShadow: '3px 3px 0 #9a8070',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  {/* Mini titlebar */}
                  <div style={{
                    background: item.accent,
                    padding: '5px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '2px solid rgba(0,0,0,0.12)'
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 9, fontFamily: "'Courier New', monospace", fontWeight: 'bold', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {item.type.toLowerCase()}.doc
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, fontFamily: "'Courier New', monospace" }}>
                      {item.period}
                    </span>
                  </div>
                  <div style={{ padding: '11px 12px' }}>
                    <div style={{ color: '#2d1f30', fontSize: 12, fontWeight: 'bold', fontFamily: "'Courier New', monospace", marginBottom: 3 }}>
                      {item.title}
                    </div>
                    <div style={{ color: '#7a5850', fontSize: 10, fontFamily: "'Courier New', monospace" }}>
                      {item.institution}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <FileGroupHeader label="certificações/" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <motion.div
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    background: 'rgba(245,238,228,0.95)',
                    border: '2px solid #b8a090',
                    boxShadow: '2px 2px 0 #9a8070',
                    borderRadius: 2,
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  {/* Left accent strip */}
                  <div style={{ width: 3, alignSelf: 'stretch', background: cert.color, borderRadius: 1, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#2d1f30', fontSize: 11, fontWeight: 'bold', fontFamily: "'Courier New', monospace", lineHeight: 1.3, marginBottom: 2 }}>
                      {cert.title}
                    </div>
                    <div style={{ color: '#7a5850', fontSize: 10, fontFamily: "'Courier New', monospace" }}>
                      {cert.issuer}
                    </div>
                  </div>
                  <div style={{
                    flexShrink: 0,
                    background: 'rgba(0,0,0,0.05)',
                    border: '1.5px solid #c0a888',
                    padding: '2px 7px',
                    borderRadius: 1
                  }}>
                    <span style={{ color: '#6a5040', fontSize: 9, fontWeight: 'bold', fontFamily: "'Courier New', monospace" }}>
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FileGroupHeader({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <FolderPixel />
      <span style={{
        color: '#f0e8d8',
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: "'Courier New', monospace",
        letterSpacing: '0.08em',
        textShadow: '1px 1px 0 rgba(0,0,0,0.3)'
      }}>
        {label}
      </span>
    </div>
  );
}

function FolderPixel() {
  return (
    <svg width="18" height="14" viewBox="0 0 5 4" style={{ imageRendering: 'pixelated' }}>
      <rect x="0" y="1" width="5" height="3" fill="#d4a060" />
      <rect x="0" y="0" width="2" height="1" fill="#d4a060" />
      <rect x="0" y="1" width="5" height="1" fill="#b08040" />
    </svg>
  );
}