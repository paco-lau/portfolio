import type { MetadataRoute } from "next";

const site = "https://www.pacolau.com";

// Only pages with real content; unfinished /work/* pages show "coming soon" and stay out.
const paths = [
  "", "/about", "/data", "/design", "/photography", "/contact",
  "/photography/portrait", "/photography/urban-landscape", "/photography/graduation",
  "/work/02", "/work/05",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(path => ({ url: `${site}${path}` }));
}
