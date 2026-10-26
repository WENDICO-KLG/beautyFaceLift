import { Icon } from "./Icon";

export function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-champagne" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="m12 3.8 2.5 5.1 5.6.8-4 4 1 5.5-5.1-2.7-5 2.7 1-5.5-4.1-4 5.6-.8L12 3.8Z" />
        </svg>
      ))}
    </span>
  );
}

export function IconBadge({ name }: { name: Parameters<typeof Icon>[0]["name"] }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-champagne-deep ring-1 ring-line">
      <Icon name={name} className="size-5" />
    </span>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is generated from trusted local data only
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
