import { absoluteUrl } from "@/utils/data/site-config";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
