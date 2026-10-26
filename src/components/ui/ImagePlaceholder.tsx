/**
 * Elegant image placeholder with fixed aspect ratio (prevents CLS).
 * Replace 1:1 with next/image later – keep the same `ratio` and `alt` (= label).
 */
type Props = {
  label: string;
  ratio?: string; // CSS aspect-ratio, e.g. "4 / 5"
  tone?: "light" | "deep";
  className?: string;
  showTag?: boolean;
  reveal?: boolean;
  parallax?: boolean;
  rounded?: string;
};

export function ImagePlaceholder({
  label,
  ratio = "4 / 5",
  tone = "light",
  className = "",
  showTag = true,
  reveal = true,
  parallax = false,
  rounded = "rounded-media",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      data-reveal={reveal ? "image" : undefined}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div
        className={`absolute inset-0 ${tone === "deep" ? "placeholder-surface--deep" : "placeholder-surface"} ${parallax ? "parallax-media" : ""}`}
      />
      {/* Monogram watermark */}
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-auto w-[22%] max-w-24 -translate-x-1/2 -translate-y-1/2 text-white/70"
        aria-hidden="true"
      >
        <text x="50" y="66" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="58" fill="currentColor">
          BF
        </text>
      </svg>
      {showTag && (
        <>
          <span className="absolute inset-x-4 top-4 text-[0.6875rem] uppercase leading-snug tracking-[0.14em] text-espresso/55">
            {label}
          </span>
          <span className="absolute bottom-4 right-4 text-[0.625rem] uppercase tracking-[0.18em] text-espresso/40">
            Image Placeholder
          </span>
        </>
      )}
    </div>
  );
}
