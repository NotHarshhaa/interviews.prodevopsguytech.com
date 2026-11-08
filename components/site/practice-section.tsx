import Link from "next/link"

import { PracticeFlowDemo } from "@/components/site/practice-flow-demo"
import { SiteContainer } from "@/components/site/container"
import {
  InlineCode,
  ProseMuted,
  ProseP,
  TextLink,
} from "@/components/site/prose"

function PracticeSection() {
  return (
    <section>
      <SiteContainer className="flex flex-col gap-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_2fr] lg:items-start">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-balance">
                practice like it&apos;s the real interview
              </h2>
              <ProseP>
                Every entry in the{" "}
                <TextLink href="/docs/mock-interviews/getting-started">
                  mock interviews
                </TextLink>{" "}
                section works the same way: the question, a model answer, the
                follow-ups an interviewer actually asks, and the trap most
                candidates fall into. No flashcards — full reasoning you can
                defend, with the <InlineCode>why</InlineCode> behind every step.
              </ProseP>
              <ProseMuted>
                Cover the answer, speak for 60–90 seconds, then compare. If you
                can survive the follow-ups, you&apos;re ready.
              </ProseMuted>
            </div>
            <Link
              className="text-foreground underline-offset-4 hover:text-foreground/80 hover:underline"
              href="/docs/mock-interviews/getting-started"
            >
              start a mock interview
            </Link>
          </div>

          <PracticeFlowDemo />
        </div>
      </SiteContainer>
    </section>
  )
}

export { PracticeSection }
