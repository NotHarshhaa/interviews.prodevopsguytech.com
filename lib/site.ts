export const SITE_HOST = "interviews.prodevopsguytech.com"
export const SITE_URL = `https://${SITE_HOST}`
export const REGISTRY_SCOPE = "@mdxcn"

export function scopedRegistryInstall(name: string) {
  return `pnpm dlx shadcn@latest add ${REGISTRY_SCOPE}/${name}`
}
export const SITE_NAME = "DevOps Interview Hub"
export const SITE_NAME_SHORT = "interview hub"
/** Browser / OG homepage title — what people search for. */
export const SITE_TITLE =
  "DevOps Interview Hub: 2,500+ interview questions & answers"
export const SITE_OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "DevOps Interview Hub: curated interview questions with detailed answers",
}
export const SITE_KEYWORDS = [
  "devops interview questions",
  "devops interview questions and answers",
  "devops interview",
  "ci cd interview questions",
  "kubernetes interview questions",
  "terraform interview questions",
  "docker interview questions",
  "aws devops interview questions",
  "monitoring and logging interview questions",
  "devops mock interview",
  "sre interview questions",
] as const
export const SITE_DESCRIPTION =
  "2,500+ curated DevOps interview questions and scenarios with detailed answers — core concepts, CI/CD, containers, cloud, infrastructure as code, Linux administration, version control, monitoring, networking and mock interviews."
export const SITE_ALTERNATE_NAMES = [
  "interviews.prodevopsguytech.com",
  "devops interview hub",
  "prodevopsguy",
] as const
export const DOCS_DESCRIPTION =
  "Every DevOps interview topic, beginner to advanced: core concepts, CI/CD, containers, cloud, infrastructure as code, monitoring, networking and mock interviews."
export const SITE_NAV = [
  { href: "/docs", label: "docs" },
  { href: "/about", label: "about" },
] as const
export const SITE_TWITTER = "@NotHarshhaa"
export const SITE_AUTHOR = {
  name: "NotHarshhaa",
  url: "https://github.com/NotHarshhaa",
  x: "https://x.com/NotHarshhaa",
  jobTitle: "DevOps Engineer",
}

/** Community links — GitHub repo, Telegram, blog. */
export const TELEGRAM_URL = "https://t.me/prodevopsguy"
export const BLOG_URL = "https://blog.prodevopsguy.xyz"

export const UTM_PARAMS = {
  utm_source: SITE_HOST,
}
