import { SITE } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/content";

type TrustItemProps = { icon: IconName; value: string; label: string };

export function TrustItem({ icon, value, label }: TrustItemProps) {
  return (
    <li className="flex items-center gap-4 lg:justify-center">
      <Icon name={icon} className="size-6 shrink-0 text-champagne" />
      <div className="leading-tight">
        <p className="font-serif text-[1.375rem] text-espresso">{value}</p>
        <p className="mt-1 text-[0.8125rem] text-taupe">{label}</p>
      </div>
    </li>
  );
}

const ITEMS: TrustItemProps[] = [
  { icon: "star", value: `${SITE.rating.value}/5`, label: `${SITE.rating.count}+ Bewertungen` },
  { icon: "calendar", value: `${SITE.owner.yearsExperience}+`, label: "Jahre Erfahrung" },
  { icon: "pin", value: SITE.address.city, label: SITE.address.street },
  { icon: "heart", value: "Persönlich", label: `Behandlung durch ${SITE.owner.firstName}` },
];

export function TrustBar() {
  return (
    <section aria-label="Warum Beauty Face Lift" className="border-y border-line bg-white/50">
      <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 lg:divide-x lg:divide-line lg:py-12">
        {ITEMS.map((item) => (
          <TrustItem key={item.value} {...item} />
        ))}
      </ul>
    </section>
  );
}
