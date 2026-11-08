import type { Metadata } from "next"

import { GITHUB_URL } from "@/lib/github"
import {
  SITE_ALTERNATE_NAMES,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_TWITTER,
  SITE_URL,
} from "@/lib/site"

export function pageMeta({
  title,
  description,
  path,
}: {
  title?: string
  description: string
  path: string
}): Metadata {
  const ogTitle = title ? `${title} · ${SITE_NAME_SHORT}` : SITE_TITLE

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "website",
      images: [SITE_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      site: SITE_TWITTER,
      creator: SITE_TWITTER,
      images: [SITE_OG_IMAGE],
    },
  }
}

const author = {
  "@type": "Person" as const,
  name: SITE_AUTHOR.name,
  url: SITE_AUTHOR.url,
  jobTitle: SITE_AUTHOR.jobTitle,
  description: SITE_DESCRIPTION,
  sameAs: [SITE_AUTHOR.url, SITE_AUTHOR.x],
}

function organizationNode() {
  return {
    "@type": "Organization" as const,
    name: SITE_AUTHOR.name,
    url: SITE_AUTHOR.url,
    logo: `${SITE_URL}/og.png`,
    sameAs: [SITE_AUTHOR.url, SITE_AUTHOR.x],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "WebSite",
        name: SITE_NAME,
        alternateName: [...SITE_ALTERNATE_NAMES],
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        keywords: SITE_KEYWORDS.join(", "),
        inLanguage: "en",
        author,
        publisher: author,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/docs?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        alternateName: [...SITE_ALTERNATE_NAMES],
        description: SITE_DESCRIPTION,
        keywords: SITE_KEYWORDS.join(", "),
        url: SITE_URL,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        license: `${GITHUB_URL}/blob/main/LICENSE`,
        author,
        sameAs: [GITHUB_URL],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareSourceCode",
        name: SITE_NAME_SHORT,
        alternateName: [...SITE_ALTERNATE_NAMES],
        description: SITE_DESCRIPTION,
        keywords: SITE_KEYWORDS.join(", "),
        url: SITE_URL,
        codeRepository: GITHUB_URL,
        license: `${GITHUB_URL}/blob/main/LICENSE`,
        programmingLanguage: "TypeScript",
        runtimePlatform: "React",
        author,
      },
    ],
  }
}
