import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { articlesData } from "@/data/insights";
import campaignsDataRaw from "@/data/campaigns.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/brands`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/for-creators`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const brandRoutes: MetadataRoute.Sitemap = campaignsDataRaw.map((camp: { id: string }) => ({
    url: `${baseUrl}/brands/${camp.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(a.publishDate),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...brandRoutes, ...serviceRoutes, ...articleRoutes];
}
