import type { Metadata } from "next"

import { JsonLd } from "@/components/seo/json-ld"
import { Hero } from "@/components/site/hero"
import { HomeClientSections } from "@/components/site/home-client-sections"
import { HomeFaq } from "@/components/site/home-faq"
import { PracticeSection } from "@/components/site/practice-section"
import { pageMeta, websiteJsonLd } from "@/lib/seo"
import { SITE_DESCRIPTION } from "@/lib/site"

export const metadata: Metadata = pageMeta({
  description: SITE_DESCRIPTION,
  path: "/",
})

export default function Page() {
  return (
    // `data-wide-layout` widens every `site-width` block to the docs width
    // (96rem), header and footer rails included.
    <main id="main" data-wide-layout="">
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <HomeClientSections />
      <PracticeSection />
      <HomeFaq />
    </main>
  )
}
