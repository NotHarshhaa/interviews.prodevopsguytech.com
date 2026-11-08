"use client"

import Link from "next/link"

import {
  GraphActivity,
  GraphBullet,
  GraphCalendar,
  GraphHeatmap,
  GraphKpi,
  GraphRank,
  GraphTimer,
  GraphUptime,
  GraphWaterfall,
} from "@/components/graphs"
import { AccentPicker } from "@/components/site/accent-picker"
import {
  FramePicker,
  SiteFrameProvider,
} from "@/components/site/display-controls"
import { SiteContainer } from "@/components/site/container"

function activityDays(start: string, length: number) {
  const [year, month, day] = start.split("-").map(Number)
  const origin = Date.UTC(year, (month ?? 1) - 1, day)
  return Array.from({ length }, (_, index) => {
    const time = origin + index * 86_400_000
    const date = new Date(time).toISOString().slice(0, 10)
    const dow = new Date(time).getUTCDay()
    const week = Math.floor(index / 7)
    let count = 0
    if (dow > 0 && dow < 6) {
      const pulse = (week + dow) % 9
      count =
        pulse === 0
          ? 12
          : pulse === 4
            ? 7
            : pulse % 3 === 0
              ? 3
              : index % 5 === 0
                ? 1
                : 0
    } else if (index % 13 === 0) {
      count = 2
    }
    return { date, count }
  })
}

const commits = activityDays("2025-09-01", 371)

const uptime = Array.from({ length: 90 }, (_, index) => {
  if (index === 41 || index === 42) {
    return "down" as const
  }
  if (index === 18 || index === 60 || index === 61) {
    return "degraded" as const
  }
  return "ok" as const
})

function HomeGraphDemos() {
  return (
    <section>
      <SiteContainer className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[35ch] text-2xl font-semibold tracking-tight text-balance">
            the topics, the way you meet them in production
          </h2>
          <p className="max-w-[56ch] leading-relaxed text-pretty text-foreground/88">
            The questions are grounded in real operations — pipelines, fleets,
            on-call, spend. Pick an accent and a frame below and every figure
            redraws with your theme.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <AccentPicker />
          <FramePicker />
        </div>
        <SiteFrameProvider>
          <GraphActivity days={commits} palette="multi" title="COMMITS" />
          <div className="grid gap-8 lg:grid-cols-2">
            <GraphWaterfall
              items={[
                { label: "Compute", value: 54 },
                { label: "Storage", value: 12 },
                { label: "Savings plan", value: -9 },
                { label: "Monthly", value: 57 },
              ]}
              palette="duo"
              ticks={18}
              title="CLOUD BILL"
            />
            <GraphBullet
              items={[
                { label: "CPU", value: 72, target: 80, max: 100 },
                { label: "RAM", value: 34, target: 64, max: 100 },
                { label: "Disk", value: 91, target: 90, max: 100 },
              ]}
              palette="duo"
              title="FLEET"
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <GraphCalendar
              marks={[12, 18]}
              month={8}
              palette="duo"
              today={27}
              year={2026}
            />
            <GraphUptime
              days={uptime}
              from="Jun 1"
              palette="duo"
              title="PROD API"
              to="Aug 29"
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <GraphHeatmap
              columns={["0", "4", "8", "12", "16", "20"]}
              palette="multi"
              rows={[
                { label: "Mon", values: [0, 1, 4, 8, 6, 1] },
                { label: "Tue", values: [0, 0, 5, 9, 4, 2] },
                { label: "Wed", values: [1, 0, 6, 12, 5, 1] },
                { label: "Thu", values: [0, 2, 4, 7, 8, 3] },
                { label: "Fri", values: [0, 1, 3, 5, 2, 0] },
              ]}
              title="DEPLOYS BY HOUR"
            />
            <GraphRank
              items={[
                { label: "core concepts", value: 120 },
                { label: "ci/cd", value: 96 },
                { label: "containers", value: 84 },
                { label: "cloud", value: 78 },
              ]}
              palette="duo"
              title="QUESTIONS BY TOPIC"
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <GraphKpi
              data={[4, 5, 5, 6, 8, 7, 9, 8, 11, 10, 12, 14]}
              hint="12 sections"
              label="curated"
              palette="duo"
              title="QUESTIONS"
              value="2,500+"
            />
            <GraphTimer
              at="2026-08-01T00:00:00Z"
              caption="last incident"
              kind="elapsed"
              palette="duo"
              title="UPTIME"
            />
          </div>
        </SiteFrameProvider>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            className="text-foreground underline-offset-4 hover:underline"
            href="/docs"
          >
            browse the docs
          </Link>
        </div>
      </SiteContainer>
    </section>
  )
}

export { HomeGraphDemos }
