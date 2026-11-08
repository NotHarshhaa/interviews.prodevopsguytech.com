import Link from "next/link"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { MonoLabel } from "@/components/docs/mono-label"
import { GraphCheck, GraphTimeline } from "@/components/graphs"
import { SiteContainer } from "@/components/site/container"
import { ProseLead } from "@/components/site/prose"
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <section>
      <SiteContainer
        borderTop={false}
        className="flex flex-col items-center gap-12 py-12 sm:py-16 md:gap-16 md:py-24"
      >
        <div className="flex max-w-3xl min-w-0 flex-col items-center gap-5 text-center">
          <h1 className="text-4xl font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            devops interview questions, answered properly
          </h1>
          <ProseLead>
            2,500+ questions and scenarios with model answers — core concepts,
            CI/CD, containers, cloud, infrastructure as code, Linux
            administration, version control, monitoring and networking — for
            your first DevOps role or your next senior one.
          </ProseLead>
          <Button
            className="mt-2 h-10 gap-2 px-4 text-sm"
            nativeButton={false}
            render={<Link href="/docs" />}
          >
            start learning
            <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} />
          </Button>
        </div>

        <HeroExample />
      </SiteContainer>
    </section>
  )
}

function HeroExample() {
  return (
    <div className="flex w-full max-w-4xl min-w-0 flex-col gap-4">
      <div className="grid min-w-0 gap-8 md:grid-cols-2 md:gap-6">
        <div className="flex min-w-0 flex-col gap-2">
          <MonoLabel>the path</MonoLabel>
          <div className="flex min-w-0 flex-1 items-center">
            <GraphTimeline
              events={[
                { date: "Week 1", label: "Core concepts and vocabulary" },
                { date: "Week 2-3", label: "CI/CD, containers, cloud", state: "now" },
                { date: "Week 4", label: "Advanced + mock interviews", state: "next" },
              ]}
              title="ROADMAP"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <MonoLabel>the standard</MonoLabel>
          <div className="flex min-w-0 flex-1 items-center">
            <GraphCheck
              items={[
                { label: "explain CI/CD without notes", done: true },
                { label: "debug a failed rollout out loud", done: true },
                { label: "defend an architecture trade-off", note: "practice" },
              ]}
              title="HIRED"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
