import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...TREATMENTS.map((t) => ({
      url: `${SITE.url}/behandlungen/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
