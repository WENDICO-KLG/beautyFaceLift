import Image from "next/image";

/**
 * Media surface with fixed aspect ratio (prevents CLS).
 * With `src` it renders an optimised next/image (AVIF/WebP, responsive, lazy by default);
 * without `src` it renders a labelled placeholder for photos that still have to be shot.
 */
type Props = {
  label: string;
  src?: string;
  /** next/image `sizes`, required for correct responsive selection */
  sizes?: string;
  priority?: boolean;
  /** CSS object-position, e.g. "70% 50%" to keep the subject in view when cropped */
  position?: string;
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
  src,
  sizes = "100vw",
  priority = false,
  position = "50% 50%",
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
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label}
      data-reveal={reveal ? "image" : undefined}
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${rounded} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {src ? (
        <div className={`absolute inset-0 ${TONES[tone]} ${parallax ? "parallax-media" : ""}`}>
          <Image
            src={src}
            alt={label}
            fill
            sizes={sizes}
            priority={priority}
            quality={85}
            className="object-cover"
            style={{ objectPosition: position }}
          />
        </div>
      ) : (
        <>
          <div className={`absolute inset-0 ${TONES[tone]} ${parallax ? "parallax-media" : ""}`} />
          {showTag && (
            <p className="absolute left-5 right-5 top-5 max-w-[16rem] text-[0.6875rem] leading-snug text-espresso/50">
              <span className="block font-medium text-espresso/60">Bildplatzhalter</span>
              {label}
            </p>
          )}
        </>
      )}
    </div>
  );
}
