// app/sitemap.ts
import type { MetadataRoute } from "next";

const base = "https://serviplusultra.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/electricidad`, lastModified: new Date() },
    { url: `${base}/climatizacion`, lastModified: new Date() },
    { url: `${base}/reparaciones-manitas`, lastModified: new Date() },
    { url: `${base}/madrid`, lastModified: new Date() },
    { url: `${base}/barcelona`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
    { url: `${base}/urgencias`, lastModified: new Date() },
  ];
}
