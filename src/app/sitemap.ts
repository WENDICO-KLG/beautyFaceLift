import type { MetadataRoute } from "next";
import { SITE, NAV_LINKS } from "@/lib/site";
import { TREATMENTS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  });
  return [
    page("", 1),
    ...NAV_LINKS.filter((l) => l.href !== "/").map((l) => page(l.href, l.href === "/behandlungen" ? 0.9 : 0.7)),
    ...TREATMENTS.map((t) => page(`/behandlungen/${t.slug}`, 0.8)),
  ];
}
