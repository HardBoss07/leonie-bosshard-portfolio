import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leoniebosshard.m4tt3o.dev";

  const projectPaths = [
    "/projects/graphic-design",
    "/projects/photography",
    "/projects/ui-ux-interface",
    "/projects/analog-projects",
  ];

  const routes = ["", ...projectPaths].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
