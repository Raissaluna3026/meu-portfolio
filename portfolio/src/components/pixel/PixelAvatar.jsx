export default function PixelAvatar() {
  const u = 7;
  // Clean, neutral pixel character
  const pixels = [
    [0,0,1,1,1,1,1,0,0,0],
    [0,1,1,2,2,2,1,1,0,0],
    [0,1,2,3,2,2,3,2,1,0],
    [0,1,2,2,2,2,2,2,1,0],
    [0,1,2,2,4,2,2,2,1,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,5,5,5,5,5,5,0,0],
    [0,5,5,6,6,6,6,5,5,0],
    [0,5,6,6,6,6,6,6,5,0],
    [0,5,6,6,6,6,6,6,5,0],
    [0,0,5,5,5,5,5,5,0,0],
    [0,0,7,0,0,0,0,7,0,0],
    [0,0,7,0,0,0,0,7,0,0],
    [0,0,8,8,0,0,8,8,0,0],
  ];
  const colors = {
    0: 'transparent',
    1: '#8a6040',   // hair
    2: '#d4a878',   // skin
    3: '#3a2820',   // eyes
    4: '#c07060',   // subtle mouth
    5: '#8a5a7a',   // jacket
    6: '#a87898',   // shirt
    7: '#5a3848',   // trousers
    8: '#3a2830',   // shoes
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg
        width={10 * u}
        height={14 * u}
        style={{ imageRendering: 'pixelated', display: 'block' }}
      >
        {pixels.map((row, y) =>
          row.map((cell, x) =>
            cell !== 0 ? (
              <rect key={`${x}-${y}`} x={x * u} y={y * u} width={u} height={u} fill={colors[cell]} />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}