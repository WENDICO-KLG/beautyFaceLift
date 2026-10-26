type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

/** Brand pattern: Eyebrow → gold rule → serif headline → optional lead. */
export function SectionHeading({ eyebrow, title, lead, align = "left", as: Tag = "h2", id, className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`} data-reveal="up">
      <p className="eyebrow">{eyebrow}</p>
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      <Tag id={id} className="mt-6 text-h2 text-espresso [&_em]:text-champagne-deep">
        {title}
      </Tag>
      {lead && <p className={`mt-6 text-lead text-taupe ${center ? "mx-auto" : ""} max-w-prose-narrow`}>{lead}</p>}
    </div>
  );
}
