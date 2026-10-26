import Link from "next/link";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 text-[0.9375rem] font-medium tracking-[0.01em] " +
  "transition-[background-color,color,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-luxe)]";

const variants: Record<Variant, string> = {
  primary: "bg-champagne-deep text-white hover:bg-espresso",
  secondary: "border border-espresso/80 text-espresso hover:bg-espresso hover:text-ivory",
  ghost: "min-h-0 px-0 text-espresso underline-offset-[6px] hover:underline decoration-champagne",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({ href, children, variant = "primary", arrow = variant === "primary", className = "", external, ...rest }: Props) {
  const isExternal = external ?? /^https?:/.test(href);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrow"
          className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-luxe)] group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      )}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
