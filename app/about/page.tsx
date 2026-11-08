/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight02Icon,
  Github01Icon,
  TelegramIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { GraphCheck, GraphStat, Quote, GraphTimeline } from "@/components/graphs"
import { MonoLabel } from "@/components/docs/mono-label"
import { SiteContainer } from "@/components/site/container"
import { FrameBox } from "@/components/site/corners"
import { ProseLead, ProseMuted, ProseP, TextLink } from "@/components/site/prose"
import { Button } from "@/components/ui/button"
import { GITHUB_URL } from "@/lib/github"
import { pageMeta } from "@/lib/seo"
import {
  BLOG_URL,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  TELEGRAM_URL,
  UTM_PARAMS,
} from "@/lib/site"
import { addQueryParams } from "@/lib/url"

export const metadata: Metadata = pageMeta({
  title: "about",
  description:
    "What the DevOps Interview Hub is, who it is for, and how the 2,500+ question collection is built.",
  path: "/about",
})

function AboutPage() {
  return (
    <main id="main" data-wide-layout="">
      <SiteContainer
        borderTop={false}
        className="flex flex-col items-start gap-12 py-12 sm:py-16 md:py-20"
      >
        <div className="flex min-w-0 flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
            <div className="flex min-w-0 items-center gap-4">
              <img
                alt="HARSHHAA"
                className="size-16 shrink-0 rounded-full border border-graph-frame"
                height={64}
                src="https://avatars.githubusercontent.com/NotHarshhaa?s=128"
                width={64}
              />
              <div className="flex min-w-0 flex-col gap-1">
                <a
                  className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground hover:text-graph-accent"
                  href={addQueryParams(SITE_AUTHOR.url, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  HARSHHAA
                  <HugeiconsIcon
                    className="size-4 text-graph-muted"
                    icon={Github01Icon}
                    size={16}
                    strokeWidth={1.5}
                  />
                </a>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  AI Infrastructure | DevOps &amp; MLOps | AI Agents &amp; MCP |
                  LLMOps | Platform Engineering | Forward Deployed Engineering
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:ml-auto">
              <a
                className="inline-flex h-8 items-center gap-2 border border-transparent px-0 text-sm text-muted-foreground hover:text-foreground"
                href={addQueryParams(TELEGRAM_URL, UTM_PARAMS)}
                rel="noreferrer"
                target="_blank"
              >
                <HugeiconsIcon
                  className="size-4 text-graph-accent"
                  icon={TelegramIcon}
                  size={16}
                  strokeWidth={1.5}
                />
                telegram
              </a>
            </div>
          </div>
          <Quote by="HARSHHAA">
            Learn systems the way you run them — hands on, out loud, under
            pressure. Memorized answers die at the first follow-up;
            understanding doesn&apos;t.
          </Quote>
        </div>

        <div className="flex max-w-3xl min-w-0 flex-col gap-5">
          <MonoLabel>about</MonoLabel>
          <h1 className="text-4xl font-medium tracking-tighter text-balance sm:text-5xl">
            {SITE_NAME}
          </h1>
          <ProseLead>{SITE_DESCRIPTION}</ProseLead>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button
              className="h-10 gap-2 px-4 text-sm"
              nativeButton={false}
              render={<Link href="/docs" />}
            >
              start learning
              <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} />
            </Button>
            <Button
              className="h-10 gap-2 px-4 text-sm"
              nativeButton={false}
              variant="outline"
              render={
                <a href={addQueryParams(GITHUB_URL, UTM_PARAMS)} rel="noreferrer" target="_blank" />
              }
            >
              github repo
            </Button>
          </div>
        </div>

        <div className="grid min-w-0 w-full gap-8 lg:grid-cols-2">
          <GraphStat
            items={[
              { value: "2,500+", label: "questions" },
              { value: "12", label: "sections" },
              { value: "4", label: "levels", accent: true },
            ]}
            title="BY THE NUMBERS"
          />
          <GraphCheck
            items={[
              { label: "open source, PRs welcome", done: true },
              { label: "model answers, not definitions", done: true },
              { label: "follow-ups and traps, per question", note: "the real interview part" },
            ]}
            title="THE PROMISE"
          />
        </div>
      </SiteContainer>

      <section>
        <SiteContainer className="flex flex-col gap-6">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-balance">
              why this exists
            </h2>
            <ProseP>
              Most interview prep content stops at definitions. Real interviews
              don&apos;t — they push into trade-offs, failure stories, and the
              follow-up behind your first answer. This hub was built the way
              interviews actually run: every question has a model answer you can
              defend, the follow-ups an interviewer actually asks, and the trap
              most candidates fall into.
            </ProseP>
            <ProseP>
              It covers the full DevOps surface — core concepts, CI/CD,
              containers, cloud, infrastructure as code, Linux administration,
              version control, monitoring and networking — plus scenario-based{" "}
              <TextLink href="/docs/mock-interviews/getting-started">
                mock interviews
              </TextLink>{" "}
              for senior and SRE loops.
            </ProseP>
            <ProseMuted>
              Whoever you are — first job or principal role — start where you
              can answer without notes, then keep climbing.
            </ProseMuted>
          </div>

          <GraphTimeline
            events={[
              { date: "then", label: "Raw question banks open-sourced on GitHub" },
              {
                date: "now",
                label: "Model answers with follow-ups and traps, organized into levels",
                state: "now",
              },
              {
                date: "next",
                label: "More sections, more real interview loops, community contributions",
                state: "next",
              },
            ]}
            title="HOW IT GREW"
          />
        </SiteContainer>
      </section>

      <section>
        <SiteContainer className="flex flex-col gap-6">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-balance">
              how it&apos;s organized
            </h2>
            <ProseP>
              Twelve sections, four levels each — every section opens with a
              getting-started guide and closes with a{" "}
              <TextLink href="/docs/containers/master-collection">
                master collection
              </TextLink>{" "}
              holding the complete raw bank. The{" "}
              <TextLink href="/docs/getting-started">getting started</TextLink>{" "}
              page maps a suggested order through all of it.
            </ProseP>
          </div>
          <FrameBox className="min-w-0 p-6">
            <MonoLabel>the figures</MonoLabel>
            <ProseP>
              The illustrations across this site are drawn with text characters —
              timelines, checklists, tables and small charts. They render as live
              components here and stay readable as plain text anywhere else.
            </ProseP>
          </FrameBox>
        </SiteContainer>
      </section>

      <section>
        <SiteContainer className="flex flex-col gap-6">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-balance">
              who&apos;s behind it
            </h2>
            <ProseP>
              Built and maintained by{" "}
              <TextLink href={SITE_AUTHOR.url}>HARSHHAA</TextLink>, a
              DevOps engineer, with contributions from the community. The
              content is open source — fix an answer, add a question, or propose
              a whole section with a pull request.
            </ProseP>
          </div>
          <FrameBox className="min-w-0 p-6">
            <MonoLabel>community</MonoLabel>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2" role="list">
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground"
                  href={addQueryParams(GITHUB_URL, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground"
                  href={addQueryParams(TELEGRAM_URL, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  telegram community
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground"
                  href={addQueryParams(BLOG_URL, UTM_PARAMS)}
                  rel="noreferrer"
                  target="_blank"
                >
                  blog
                </a>
              </li>
            </ul>
          </FrameBox>
        </SiteContainer>
      </section>
    </main>
  )
}


export default AboutPage
