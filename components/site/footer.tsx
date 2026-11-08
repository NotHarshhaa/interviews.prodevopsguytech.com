import type { ReactNode } from "react"
import Link from "next/link"

import { SiteContainer } from "@/components/site/container"
import { SiteCorners, SiteRule } from "@/components/site/corners"
import { cn } from "@/lib/utils"
import { Mark, MARK_THEME } from "@/lib/og/mark"
import { GITHUB_URL } from "@/lib/github"
import { addQueryParams } from "@/lib/url"
import {
  BLOG_URL,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_TWITTER,
  TELEGRAM_URL,
  UTM_PARAMS,
} from "@/lib/site"

const footerLinkClass =
  "inline-block py-1 text-muted-foreground hover:text-foreground"

const FOOTER_LINKS = [
  { href: "/docs", label: "docs" },
  { href: "/about", label: "about" },
  { href: GITHUB_URL, label: "github", external: true },
  { href: TELEGRAM_URL, label: "telegram", external: true },
  { href: BLOG_URL, label: "blog", external: true },
]

function FooterBlock({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16",
        className
      )}
      id={id}
    >
      <SiteRule className="top-0" />
      <SiteRule className="bottom-0" />
      <SiteCorners />
      {children}
    </div>
  )
}

function SiteFooter() {
  return (
    <footer>
      <SiteContainer
        className="py-0 sm:py-0"
        containerClassName="px-0 sm:px-0 lg:px-0"
        corners={[]}
      >
        <FooterBlock>
          <Link
            aria-label="Homepage"
            className="flex items-center gap-2.5 text-foreground"
            href="/"
          >
            <Mark className="size-4" palette={MARK_THEME} size={16} />
            {SITE_NAME_SHORT}
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1" role="list">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      className={footerLinkClass}
                      href={addQueryParams(item.href, UTM_PARAMS)}
                      rel="noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className={footerLinkClass}
                      href={item.href}
                      prefetch={false}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </FooterBlock>

        <FooterBlock id="about">
          <div className="flex flex-col gap-4">
            <p className="text-foreground">{SITE_NAME}</p>
            <p className="max-w-[62ch] text-pretty text-muted-foreground">
              {SITE_DESCRIPTION} Everything lives in the repo — pull requests
              and corrections are welcome.
            </p>
            <Link
              className="text-foreground underline-offset-4 hover:underline"
              href="/docs"
            >
              start with the docs
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground">community</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              <li>
                <a
                  className={footerLinkClass}
                  href={addQueryParams(GITHUB_URL, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  className={footerLinkClass}
                  href={addQueryParams(TELEGRAM_URL, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  telegram community
                </a>
              </li>
              <li>
                <a
                  className={footerLinkClass}
                  href={addQueryParams(BLOG_URL, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  blog
                </a>
              </li>
            </ul>
          </div>
        </FooterBlock>

        <FooterBlock>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-pretty text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <a
                className="text-foreground"
                href={addQueryParams(SITE_AUTHOR.url, UTM_PARAMS)}
                rel="noreferrer"
                target="_blank"
              >
                {SITE_AUTHOR.name}
              </a>
              . MIT license.
            </p>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-pretty text-muted-foreground">
              <a
                className="text-foreground"
                href={addQueryParams(SITE_AUTHOR.x, UTM_PARAMS)}
                rel="noreferrer"
                target="_blank"
              >
                {SITE_TWITTER}
              </a>
              <a
                className="text-foreground"
                href={addQueryParams(TELEGRAM_URL, UTM_PARAMS)}
                rel="noreferrer"
                target="_blank"
              >
                t.me/prodevopsguy
              </a>
            </p>
          </div>
        </FooterBlock>
      </SiteContainer>
    </footer>
  )
}

export { SiteFooter }
