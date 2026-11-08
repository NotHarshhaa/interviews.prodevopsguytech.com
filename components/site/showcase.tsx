"use client"

import { SiteContainer } from "@/components/site/container"
import {
  GraphCheck,
  GraphCompare,
  GraphSheet,
  GraphStat,
  GraphTimeline,
} from "@/components/graphs"

/**
 * The "what's inside" section — the interview-hub take on the old
 * component showcase: the same figure grid, showing the hub's structure.
 */
function ShowcaseSection() {
  return (
    <section>
      <SiteContainer className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[35ch] text-2xl font-semibold tracking-tight text-balance">
            what&apos;s inside
          </h2>
          <p className="max-w-[56ch] leading-relaxed text-pretty text-foreground/88">
            Twelve sections, four levels each. Every question has a model answer,
            the follow-ups an interviewer actually asks, and the trap most
            candidates fall into.
          </p>
        </div>

        <GraphSheet
          align={["left", "left", "left"]}
          headers={["Section", "Focus", "Levels"]}
          sections={[
            {
              title: "Foundations",
              rows: [
                ["Core Concepts", "culture, principles, the big picture", "4"],
                [
                  "Automation & Scripting",
                  "Bash, Python, YAML, Groovy",
                  "4",
                ],
              ],
            },
            {
              title: "Delivery",
              rows: [
                ["CI/CD", "pipelines, strategies, releases", "4"],
                ["Containers", "Docker, Kubernetes, orchestration", "4"],
              ],
            },
            {
              title: "Platform",
              rows: [
                ["Cloud", "AWS, Azure, GCP", "4"],
                ["Infrastructure as Code", "Terraform, drift, provisioning", "4"],
                ["Linux & System Administration", "kernel, systemd, storage, tuning", "4"],
                ["Version Control", "Git internals, branching, GitOps", "4"],
              ],
            },
            {
              title: "Operate",
              rows: [
                ["Monitoring & Logging", "metrics, logs, traces, alerts", "4"],
                ["Networking & Security", "networking, security practices", "4"],
              ],
            },
            {
              title: "Practice",
              rows: [
                ["Best Practices", "real-world patterns, case studies", "4"],
                ["Mock Interviews", "scenario-based practice", "4"],
              ],
            },
          ]}
          title="SECTIONS"
        />

        <div className="grid gap-8 lg:grid-cols-2">
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
              { label: "read the question", done: true },
              { label: "answer out loud, 60-90 seconds", done: true },
              { label: "compare with the model answer", note: "then the follow-ups" },
            ]}
            title="PREP LOOP"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <GraphCompare
            columns={["Junior", "Senior"]}
            rows={[
              { label: "Definitions", values: [true, true] },
              { label: "Hands-on tooling", values: [true, true] },
              { label: "Trade-offs and failure modes", values: [false, true] },
              { label: "Architecture stories", values: [false, true] },
            ]}
            title="DEPTH BY LEVEL"
          />
          <GraphTimeline
            events={[
              { date: "09:00", label: "warm up: core concepts" },
              { date: "10:00", label: "scenario: failed rollout", state: "now" },
              { date: "11:00", label: "deep dive: architecture", state: "next" },
            ]}
            title="MOCK DAY"
          />
        </div>
      </SiteContainer>
    </section>
  )
}

export { ShowcaseSection }
