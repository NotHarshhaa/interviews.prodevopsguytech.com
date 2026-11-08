import type { Metadata } from "next"

import { DocsLink, ErrorFrame, HomeLink } from "@/components/site/error-frame"

export const metadata: Metadata = {
  title: "not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <ErrorFrame
      action={
        <>
          <DocsLink />
          <HomeLink />
        </>
      }
      body="There's no page at this address. It may have moved, or the link may have a typo. The docs list every section."
      code="404"
      title="not found"
    />
  )
}
