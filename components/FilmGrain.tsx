export default function FilmGrain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.04] mix-blend-overlay">
      <svg className="absolute inset-0 w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
