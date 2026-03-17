export default function PixelFundo() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Warm neutral sky */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #2d1f3d 0%, #4a2c5a 20%, #7a4a6a 42%, #c47a5a 65%, #e8a878 82%, #f0c898 100%)'
      }} />

      {/* Subtle stars — fewer, more deliberate */}
      {[
        { x: 8, y: 6 }, { x: 23, y: 11 }, { x: 41, y: 4 }, { x: 57, y: 9 },
        { x: 72, y: 5 }, { x: 88, y: 13 }, { x: 15, y: 18 }, { x: 34, y: 15 },
        { x: 63, y: 17 }, { x: 79, y: 8 }, { x: 92, y: 20 }, { x: 48, y: 22 }
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: i % 4 === 0 ? 3 : 2,
          height: i % 4 === 0 ? 3 : 2,
          background: i % 4 === 0 ? '#f0e8d8' : '#d8cfc0',
          top: `${s.y}%`,
          left: `${s.x}%`,
          imageRendering: 'pixelated',
          opacity: 0.6,
          animation: `twinkle ${2 + (i % 3) * 0.7}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.25}s`
        }} />
      ))}

      {/* Minimal clouds */}
      <PixelCloud style={{ top: '10%', left: '6%', opacity: 0.45 }} scale={1.1} color="#c4a090" />
      <PixelCloud style={{ top: '7%', right: '12%', opacity: 0.35 }} scale={0.75} color="#b89080" />
      <PixelCloud style={{ top: '18%', left: '42%', opacity: 0.3 }} scale={0.6} color="#c4a090" />

      {/* Horizon line */}
      <div style={{
        position: 'absolute', bottom: 80, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, #c47a5a88, transparent)'
      }} />

      {/* Ground */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 82,
        background: 'linear-gradient(180deg, #6b5040 0%, #4a3828 100%)'
      }} />
      <div style={{
        position: 'absolute', bottom: 80, left: 0, right: 0, height: 3,
        background: '#8a6450'
      }} />

      <style>{`
        @keyframes twinkle {
          from { opacity: 0.25; }
          to { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

function PixelCloud({ style, scale = 1, color = "#c4a090" }) {
  const u = Math.round(9 * scale);
  const blocks = [
    { x: 2, y: 1, w: 4, h: 1 },
    { x: 1, y: 2, w: 6, h: 1 },
    { x: 0, y: 3, w: 8, h: 2 },
  ];
  return (
    <div style={{ position: 'absolute', ...style }}>
      <svg width={8 * u} height={5 * u} style={{ imageRendering: 'pixelated' }}>
        {blocks.map((b, i) => (
          <rect key={i} x={b.x * u} y={b.y * u} width={b.w * u} height={b.h * u} fill={color} />
        ))}
      </svg>
    </div>
  );
}