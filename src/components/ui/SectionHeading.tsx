type Props = {
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Small label above the headline. Use on max. 1 of 3 sections (see skills.md). */
  eyebrow?: string;
  id?: string;
  className?: string;
};

/** Headline stacked over an optional lead. Left-aligned, one message per section. */
export function SectionHeading({ title, lead, eyebrow, id, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`} data-reveal="up">
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 id={id} className="text-h2 text-espresso">
        {title}
      </h2>
      {lead && <p className="mt-6 max-w-prose-narrow text-lead text-taupe">{lead}</p>}
    </div>
  );
}
