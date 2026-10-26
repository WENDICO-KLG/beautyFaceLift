/**
 * Image placeholder with fixed aspect ratio (prevents CLS).
 * Replace 1:1 with next/image later: keep `ratio`, use `label` as alt text.
 */
type Props = {
  label: string;
  ratio?: string; // CSS aspect-ratio, e.g. "4 / 5"; omit to fill the parent
  tone?: "light" | "base" | "deep";
  className?: string;
  showTag?: boolean;
  reveal?: boolean;
  parallax?: boolean;
  rounded?: string;
};

const TONES = {
  light: "placeholder-surface--light",
  base: "placeholder-surface",
  deep: "placeholder-surface--deep",
};

export function ImagePlaceholder({
  label,
  ratio,
  tone = "base",
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
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${rounded} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div className={`absolute inset-0 ${TONES[tone]} ${parallax ? "parallax-media" : ""}`} />
      {showTag && (
        <p className="absolute left-5 right-5 top-5 max-w-[16rem] text-[0.6875rem] leading-snug text-espresso/50">
          <span className="block font-medium text-espresso/60">Bildplatzhalter</span>
          {label}
        </p>
      )}
    </div>
  );
}
