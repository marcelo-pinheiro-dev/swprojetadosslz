import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...posts.map((post) => ({
      url: `${base}/inspiracao/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/termos-de-uso`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
