import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.advhq.com.au",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.advhq.com.au/privacy",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
