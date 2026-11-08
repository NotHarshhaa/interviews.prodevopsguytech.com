import type { MetadataRoute } from "next"

import { docPages } from "@/lib/docs/content"
import { SITE_URL } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = [
    "/",
    "/about",
    ...(await docPages()).map((page) => `/docs/${page.slug}`),
  ]

  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString(),
  }))
}
