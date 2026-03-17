import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionHeader } from "./PixelProjects";

export default function PixelContato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [termLines, setTermLines] = useState([
    "$ portfolio_contact v1.0",
    "$ aguardando entrada...",
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setTermLines(prev => [...prev, `$ enviando mensagem...`]);
    await new Promise(r => setTimeout(r, 1200));
    setTermLines(prev => [...prev, `$ ok — mensagem recebida.`, `$ responderei em breve.`]);
    toast.success("Mensagem enviada com sucesso.");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contato" style={{ padding: '80px 24px 120px', maxWidth: 1020, margin: '0 auto' }}>
      <SectionHeader label="contato" title="Fale Comigo" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24 }}>
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          {/* Info window */}
          <div style={{
            background: 'rgba(245,238,228,0.95)',
            border: '2px solid #b8a090',
            boxShadow: '3px 3px 0 #9a8070',
            borderRadius: 2,
            overflow: 'hidden'
          }}>
            <WindowBar title="info.txt" accent="#6a4858" />
            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '▸', label: 'email', value: 'seu@email.com', link: 'mailto:seu@email.com' },
                { icon: '▸', label: 'linkedin', value: '/in/seuperfil', link: '#' },
                { icon: '▸', label: 'github', value: '@seuusuario', link: '#' },
                { icon: '▸', label: 'localização', value: 'Brasil', link: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ color: '#c47a5a', fontSize: 9, fontFamily: "'Courier New', monospace", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: '#9a7060', fontSize: 10, fontFamily: "'Courier New', monospace", width: 72, flexShrink: 0, letterSpacing: '0.04em' }}>{item.label}:</span>
                  {item.link ? (
                    <a href={item.link} style={{ color: '#4a3040', fontSize: 10, fontFamily: "'Courier New', monospace", textDecoration: 'none', borderBottom: '1px solid #c0a090' }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: '#4a3040', fontSize: 10, fontFamily: "'Courier New', monospace" }}>{item.value}</span>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 4, paddingTop: 10, borderTop: '1px dashed #c0a888', display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 7, height: 7, background: '#78a860', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 5px #78a860', flexShrink: 0 }} />
                <span style={{ color: '#5a7040', fontSize: 9, fontWeight: 'bold', fontFamily: "'Courier New', monospace", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  online · disponível
                </span>
              </div>
            </div>
          </div>

          {/* Terminal window */}
          <div style={{
            background: '#1c1220',
            border: '2px solid #4a3050',
            boxShadow: '3px 3px 0 #2a1830',
            borderRadius: 2,
            overflow: 'hidden'
          }}>
            <WindowBar title="terminal" accent="#3a2040" textColor="rgba(220,200,240,0.8)" />
            <div style={{ padding: '12px 14px', fontFamily: "'Courier New', monospace", fontSize: 10, lineHeight: 1.9, minHeight: 100 }}>
              {termLines.map((line, i) => (
                <div key={i} style={{ color: line.startsWith('$') ? '#a0c880' : '#e0d0c0' }}>
                  {line}
                </div>
              ))}
              <span style={{ color: '#c898d0', animation: 'blink 1s step-end infinite' }}>█</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <div style={{
            background: 'rgba(245,238,228,0.95)',
            border: '2px solid #b8a090',
            boxShadow: '3px 3px 0 #9a8070',
            borderRadius: 2,
            overflow: 'hidden',
            height: '100%'
          }}>
            <WindowBar title="nova_mensagem.exe" accent="#8a5a3a" />
            <form onSubmit={handleSubmit} style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { key: 'name', label: 'nome', placeholder: 'seu nome', type: 'text' },
                { key: 'email', label: 'email', placeholder: 'seu@email.com', type: 'email' },
              ].map(f => (
                <div key={f.key}>
                  <FieldLabel>{f.label}</FieldLabel>
                  <input
                    type={f.type}
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    required
                    placeholder={f.placeholder}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <FieldLabel>mensagem</FieldLabel>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="descreva seu projeto ou proposta..."
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                style={{
                  padding: '9px 0',
                  background: sending ? '#9a8070' : '#6a4858',
                  color: '#f0e8d8',
                  border: '2px solid #3a2030',
                  boxShadow: '2px 2px 0 #3a2030',
                  borderRadius: 1,
                  fontSize: 10,
                  fontWeight: 'bold',
                  fontFamily: "'Courier New', monospace",
                  cursor: sending ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'all 0.15s'
                }}
              >
                {sending ? '— enviando...' : '▶ enviar mensagem'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: 72 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <div style={{ height: 1, width: 32, background: 'rgba(240,232,216,0.2)' }} />
          <span style={{ color: 'rgba(240,232,216,0.35)', fontSize: 10, fontFamily: "'Courier New', monospace", letterSpacing: '0.12em' }}>
            © {new Date().getFullYear()} · seu nome
          </span>
          <div style={{ height: 1, width: 32, background: 'rgba(240,232,216,0.2)' }} />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        input:focus, textarea:focus {
          border-color: #8a5a3a !important;
          outline: none;
          box-shadow: inset 1px 1px 0 rgba(0,0,0,0.05), 0 0 0 2px rgba(138,90,58,0.15) !important;
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  background: '#faf6f0',
  border: '2px solid #c0a888',
  boxShadow: 'inset 1px 1px 0 rgba(0,0,0,0.05)',
  borderRadius: 1,
  padding: '8px 10px',
  color: '#2d1f30',
  fontSize: 11,
  fontFamily: "'Courier New', monospace",
  outline: 'none',
  transition: 'border-color 0.15s'
};

function FieldLabel({ children }) {
  return (
    <label style={{
      display: 'block',
      color: '#7a5850',
      fontSize: 9,
      fontWeight: 'bold',
      fontFamily: "'Courier New', monospace",
      marginBottom: 5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }}>
      {children}
    </label>
  );
}

function WindowBar({ title, accent, textColor = "rgba(255,255,255,0.9)" }) {
  return (
    <div style={{
      background: accent,
      padding: '6px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '2px solid rgba(0,0,0,0.15)'
    }}>
      <span style={{ color: textColor, fontSize: 10, fontWeight: 'bold', fontFamily: "'Courier New', monospace", letterSpacing: '0.08em' }}>
        {title}
      </span>
      <div style={{ display: 'flex', gap: 4 }}>
        {[{ bg: '#d4a060', bd: '#b08040' }, { bg: '#80a870', bd: '#608050' }, { bg: '#c06058', bd: '#a04038' }].map((b, i) => (
          <div key={i} style={{ width: 8, height: 8, background: b.bg, border: `1.5px solid ${b.bd}`, borderRadius: 1 }} />
        ))}
      </div>
    </div>
  );
}