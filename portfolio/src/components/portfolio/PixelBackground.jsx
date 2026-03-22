import { useEffect, useMemo, useRef } from "react";

const STAR_COUNT = 40;
const SHAPE_COUNT = 22;

export default function PixelBackground() {
  const starsRef = useRef(null);
  const shapes = useMemo(
    () =>
      Array.from({ length: SHAPE_COUNT }).map((_, i) => {
        const size = 16 + Math.random() * 36;
        const duration = 18 + Math.random() * 26;
        const delay = -Math.random() * 20;
        const top = 8 + Math.random() * 80;
        const opacity = 0.16 + Math.random() * 0.2;
        const travel = 28 + Math.random() * 25;
        const rotate = Math.random() * 360;
        const variant = i % 3;

        return {
          id: i,
          size,
          duration,
          delay,
          top,
          opacity,
          travel,
          rotate,
          variant,
        };
      }),
    []
  );

  useEffect(() => {
    if (!starsRef.current) return;
    const stars = starsRef.current.children;
    for (let i = 0; i < stars.length; i++) {
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      stars[i].style.animationDelay = `${delay}s`;
      stars[i].style.animationDuration = `${duration}s`;
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient sky - dark tech aesthetic */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            hsl(220 30% 6%) 0%,
            hsl(220 25% 9%) 30%,
            hsl(215 20% 11%) 60%,
            hsl(210 18% 13%) 80%,
            hsl(205 15% 14%) 100%
          )`,
        }}
      />

      {/* Pixel grid overlay */}
      <div className="absolute inset-0 pixel-grid opacity-40" />

      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0">
        {Array.from({ length: STAR_COUNT }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-foreground/60"
            style={{
              width: i % 5 === 0 ? "3px" : "2px",
              height: i % 5 === 0 ? "3px" : "2px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animation: "twinkle 3s ease-in-out infinite",
              imageRendering: "pixelated",
            }}
          />
        ))}
      </div>

      {/* Pixel clouds - subtle */}
      <div className="absolute bottom-[25%] left-[10%] opacity-[0.04]">
        <PixelCloud width={120} />
      </div>
      <div className="absolute bottom-[35%] right-[15%] opacity-[0.03]">
        <PixelCloud width={80} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`moving-shape shape-${shape.variant}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              top: `${shape.top}%`,
              left: `-${shape.size + 24}px`,
              opacity: shape.opacity,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
              ["--travel-vh"]: `${shape.travel}vh`,
              ["--base-rotate"]: `${shape.rotate}deg`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PixelCloud({ width }) {
  const h = width * 0.4;
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ imageRendering: "pixelated" }}>
      <rect x={width * 0.2} y={0} width={width * 0.6} height={h * 0.5} fill="hsl(250 20% 80%)" />
      <rect x={0} y={h * 0.3} width={width} height={h * 0.5} fill="hsl(250 20% 80%)" />
      <rect x={width * 0.1} y={h * 0.6} width={width * 0.8} height={h * 0.4} fill="hsl(250 20% 80%)" />
    </svg>
  );
}