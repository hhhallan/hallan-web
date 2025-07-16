import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // allow all crawlers
      allow: "/", // allow crawling all pages
    },
    sitemap: "https://hhhallan.fr",
  };
}
