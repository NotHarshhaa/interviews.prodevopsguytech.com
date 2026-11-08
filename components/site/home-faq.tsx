"use client"

import { useState, type ReactNode } from "react"
import { Accordion } from "@base-ui/react/accordion"
import { Add01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { FrameBox } from "@/components/site/corners"
import { SiteContainer } from "@/components/site/container"
import { InlineCode, ProseMuted, ProseP, TextLink } from "@/components/site/prose"
import { GITHUB_URL } from "@/lib/github"
import { cn } from "@/lib/utils"

type FaqItem = {
  id: string
  title: string
  content: ReactNode
}

const faqItems: FaqItem[] = [
  {
    id: "what",
    title: "what is the interview hub?",
    content: (
      <ProseP>
        A curated set of 2,500+ DevOps interview questions and scenarios with model answers —
        written the way interviews actually go: reasoning, trade-offs and the
        follow-ups you should expect, not one-line definitions. Everything
        lives in <TextLink href={GITHUB_URL}>the repo</TextLink>, so it&apos;s
        fixable by pull request.
      </ProseP>
    ),
  },
  {
    id: "who",
    title: "who is it for?",
    content: (
      <ProseP>
        Anyone interviewing for DevOps, SRE or platform roles — your first job
        or your next senior one. Start at <InlineCode>Beginner Level</InlineCode>{" "}
        in any section; the advanced answers cover the architecture trade-offs
        and failure stories interviewers probe at the top end.
      </ProseP>
    ),
  },
  {
    id: "how",
    title: "how do i use it?",
    content: (
      <ProseP>
        Pick a section, cover the answer, speak for 60–90 seconds, then compare
        with the model answer and its follow-ups. The{" "}
        <TextLink href="/docs/getting-started">getting started</TextLink> page
        maps the whole path with a suggested order.
      </ProseP>
    ),
  },
  {
    id: "contribute",
    title: "can i contribute?",
    content: (
      <ProseP>
        Yes. The docs pages are plain markdown files in the repo — fix an
        answer, add a question, or propose a whole section with a pull request.
        Corrections and real interview experiences are the most welcome
        contributions of all.
      </ProseP>
    ),
  },
  {
    id: "mocks",
    title: "are the mock interviews different?",
    content: (
      <ProseP>
        They are scenario-based: a failed rollout, a surprise bill, a pager at
        2am. Each one gives you the situation, a worked answer, the follow-up
        questions, and the trap most candidates fall into — practice the
        conversation, not the facts.
      </ProseP>
    ),
  },
]

const defaultFaqId = faqItems[0]?.id ?? "what"

function HomeFaq() {
  const [open, setOpen] = useState(defaultFaqId)

  return (
    <section>
      <SiteContainer className="flex flex-col gap-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-balance">
              questions
            </h2>
            <ProseMuted>
              Short answers on what the hub covers, how to practice, and where
              the content lives. The <TextLink href="/docs">docs</TextLink>{" "}
              list every section.
            </ProseMuted>
          </div>

          <FrameBox className="min-w-0">
            <Accordion.Root
              className="flex min-w-0 flex-col"
              onValueChange={(next) => {
                if (next[0]) {
                  setOpen(next[0])
                }
              }}
              value={[open]}
            >
              {faqItems.map((item, index) => (
                <Accordion.Item
                  className={cn(
                    index > 0 && "border-t border-dashed border-graph-frame"
                  )}
                  key={item.id}
                  value={item.id}
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className={cn(
                        "relative flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5",
                        "text-muted-foreground hover:text-foreground",
                        "data-panel-open:text-foreground",
                        "focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none",
                        "data-panel-open:[&_svg]:rotate-45"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-1/2 pointer-fine:hidden"
                      />
                      <span className="min-w-0 font-medium text-pretty">
                        {item.title}
                      </span>
                      <HugeiconsIcon
                        className="size-4 shrink-0 text-graph-muted transition-transform duration-200 ease-out"
                        icon={Add01Icon}
                        size={16}
                        strokeWidth={1.5}
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel
                    className={cn(
                      "h-[var(--accordion-panel-height)] overflow-hidden",
                      "transition-[height] duration-200 ease-out",
                      "data-ending-style:h-0 data-starting-style:h-0"
                    )}
                  >
                    <div className="flex flex-col gap-3 px-4 pb-5 sm:px-5">
                      {item.content}
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </FrameBox>
        </div>
      </SiteContainer>
    </section>
  )
}

export { HomeFaq }
