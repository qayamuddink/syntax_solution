import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syntaxlabsolutions.com";

  const publicRoutes = [
    "",
    "/home",
    "/work",
    "/solutions",
    "/process",
    "/about",
    "/contact",
    "/pricing",
    "/manifesto",
    "/featured-work",
  ];

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/home" ? "daily" : "weekly",
    priority: route === "" || route === "/home" ? 1.0 : 0.8,
  }));
}
