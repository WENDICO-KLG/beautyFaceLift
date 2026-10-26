/**
 * Brand card shape: rounded card with a stepped ("folder tab") top-right
 * corner and an optional stepped bottom-left corner for the caption.
 * Every card on the site uses this shape (see CLAUDE.md, "Karten-Form").
 *
 * `surface` must be the colour behind the card, the cut corners are painted
 * in that colour (see `.cut-tr` / `.cut-bl` in globals.css).
 */
type Corner = {
  children?: React.ReactNode;
  /** Size / padding of the corner block. Empty corners need an explicit size. */
  className?: string;
};

type Props = {
  children: React.ReactNode;
  surface?: string;
  className?: string;
  style?: React.CSSProperties;
  topRight?: Corner | false;
  bottomLeft?: Corner | false;
  reveal?: boolean;
  as?: "div" | "article" | "figure";
};

export function ShapedCard({
  children,
  surface = "var(--color-ivory)",
  className = "",
  style,
  topRight = {},
  bottomLeft = false,
  reveal = false,
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-media ${topRight ? "rounded-tr-none" : ""} ${bottomLeft ? "rounded-bl-none" : ""} ${className}`}
      style={{ "--cut-bg": surface, ...style } as React.CSSProperties}
      data-reveal={reveal ? "up" : undefined}
    >
      {children}
      {topRight && (
        <div className={`cut-tr ${topRight.className ?? (topRight.children ? "pb-2 pl-2" : "h-11 w-[34%]")}`}>
          {topRight.children}
        </div>
      )}
      {bottomLeft && <div className={`cut-bl ${bottomLeft.className ?? "pr-4 pt-4"}`}>{bottomLeft.children}</div>}
    </Tag>
  );
}

/** Round icon button that sits inside a cut corner. */
export function CornerButton({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="relative z-10 grid size-11 place-items-center rounded-full bg-espresso text-ivory transition-colors duration-[var(--duration-base)] ease-[var(--ease-luxe)] hover:bg-champagne-deep"
    >
      {children}
    </a>
  );
}
