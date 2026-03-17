export default function PixelJanela({
  title,
  children,
  className = "",
  style = {},
  accentColor = "#8a5a7a",
  icon = null,
  compact = false
}) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(245, 238, 228, 0.96)',
        border: '2px solid #b8a090',
        boxShadow: '3px 3px 0px #9a8070, 0 8px 32px rgba(0,0,0,0.18)',
        borderRadius: '2px',
        backdropFilter: 'blur(10px)',
        ...style
      }}
    >
      {/* Title bar */}
      <div style={{
        background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
        padding: compact ? '5px 10px' : '7px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '2px solid rgba(0,0,0,0.15)',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          {icon && <span style={{ fontSize: 11, opacity: 0.9 }}>{icon}</span>}
          <span style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 10,
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            fontFamily: "'Courier New', monospace",
            textTransform: 'uppercase',
            textShadow: '1px 1px 0 rgba(0,0,0,0.25)'
          }}>
            {title}
          </span>
        </div>
        {/* Window controls */}
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {[
            { bg: '#d4a060', border: '#b08040' },
            { bg: '#80a870', border: '#608050' },
            { bg: '#c06058', border: '#a04038' }
          ].map((btn, i) => (
            <div key={i} style={{
              width: 9, height: 9,
              background: btn.bg,
              border: `1.5px solid ${btn.border}`,
              borderRadius: '1px'
            }} />
          ))}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: compact ? '12px' : '18px' }}>
        {children}
      </div>
    </div>
  );
}