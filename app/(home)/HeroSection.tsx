import { LargeSearchToggle } from '@/components/layout/search-toggle';
import { Reveal } from '@/components/reveal';
import { CountUp } from '@/components/count-up';
import VectorField from './VectorField';
import CTA from './CTA';
import SectionLink from './SectionLink';
import { Code2, GitBranch, MessageCircleMore, Server } from 'lucide-react';
import Link from 'next/link';

const quickProof = [
  {
    icon: Code2,
    title: (
      <>
        <CountUp value={550} />
        <span className="text-fd-primary">+</span> Questions
      </>
    ),
    description: 'Comprehensive coverage of DevOps concepts',
  },
  {
    icon: Server,
    title: 'Cloud Platforms',
    description: 'AWS, Azure, and GCP covered',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Modern deployment practices',
  },
];

const learningPath = [
  {
    step: '01',
    title: 'Core Concepts',
    description: 'Fundamentals first — principles, terminology, and mental models',
    href: '/docs/core-concepts/getting-started',
  },
  {
    step: '02',
    title: 'Hands-on Practice',
    description: 'Containers, CI/CD, and infrastructure as code, in real scenarios',
    href: '/docs/containers/getting-started',
  },
  {
    step: '03',
    title: 'Mock Interviews',
    description: 'Test yourself under pressure before the real thing',
    href: '/docs/mock-interviews/getting-started',
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col box-content overflow-clip min-h-[90vh]">
      <div className="flex flex-col gap-6 sm:gap-10 justify-center box-content h-full flex-1 pb-6 pt-16 sm:pb-28 sm:pt-24">
        {/* Background elements */}
        <div className="absolute -z-10 inset-0 w-full h-full overflow-x-clip [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center_top] [mask-composite:exclude] [mask-mode:alpha] [mask-origin:content-box] [mask-clip:content-box] [mask-border-mode:match-source] [mask-image:linear-gradient(to_bottom,red,transparent_88%)]">
          <div className="-z-10 bg-gradient-to-b from-white via-white/90 to-white/80 dark:from-neutral-800 dark:via-neutral-800/90 dark:to-neutral-800/80 rounded-full w-[55rem] h-[55rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border dark:blur-3xl animate-pulse-slow max-sm:scale-75" />
          <div className="bg-grid-dots opacity-70 dark:opacity-50 rounded-full w-[55rem] h-[55rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)] animate-float max-sm:scale-75" />
        </div>

        <VectorField />

        <SectionLink
          border
          className="z-30 hidden sm:block !relative max-lg:px-6"
          href="#"
          name="devops-interview-hub"
        />

        <div className="space-y-6 sm:space-y-8">
          {/* Headline */}
          <Reveal>
            <div className="border-y border-dashed border-fd-border/60 bg-fd-background/60 backdrop-blur py-10 sm:py-14">
              <h1 className="max-w-fd-container mx-auto max-lg:px-6 w-full font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-fd-foreground">
                Welcome to{' '}
                <span className="bg-fd-primary/10 dark:bg-fd-primary/15 box-decoration-clone rounded-lg px-3">
                  DevOps Interview Preparation Space
                </span>
              </h1>
            </div>
          </Reveal>

          {/* Intro */}
          <Reveal delay={90}>
            <div className="border-y border-dashed border-fd-border/60 relative py-6 sm:py-8">
              <div className="w-full max-w-fd-container mx-auto relative">
                <div className="max-w-[65ch] max-lg:px-6 space-y-3 sm:space-y-4">
                  <p className="text-fd-muted-foreground text-pretty text-base sm:text-lg leading-relaxed">
                    Your one-stop destination for mastering{' '}
                    <span className="font-medium text-fd-foreground">DevOps</span>,{' '}
                    <span className="font-medium text-fd-foreground">Cloud</span>, and{' '}
                    <span className="font-medium text-fd-foreground">SRE</span> interviews!
                  </p>
                  <p className="text-fd-muted-foreground text-pretty text-base sm:text-lg leading-relaxed">
                    Contains{' '}
                    <span className="font-semibold text-fd-foreground">550+</span>{' '}
                    carefully curated interview questions with detailed answers, covering
                    all major DevOps tools, cloud platforms, and best practices. Whether
                    you&apos;re a beginner preparing for your first DevOps job or an
                    experienced engineer aiming for top-tier roles, this resource will
                    help you understand core concepts, ace technical interviews, and
                    build confidence.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal delay={160}>
            <div className="border-y border-dashed border-fd-border/60 py-6 sm:py-8">
              <div className="w-full max-w-fd-container mx-auto flex flex-col sm:flex-row gap-4 max-lg:px-6">
                <CTA />
                <LargeSearchToggle
                  className="w-full max-w-none sm:max-w-[320px] h-11"
                  onHeroSection
                  hideIfDisabled
                />
              </div>
              <div className="w-full max-w-fd-container mx-auto max-lg:px-6 mt-4 font-mono text-xs text-fd-muted-foreground/70 tracking-wide">
                Free &amp; open — no signup. Pick a track below or search the docs.
              </div>
            </div>
          </Reveal>

          {/* Quick proof */}
          <Reveal delay={220}>
            <div className="border-y border-dashed border-fd-border/60 py-8 sm:py-10">
              <div className="w-full max-w-fd-container mx-auto grid grid-cols-1 sm:grid-cols-3 max-lg:px-6">
                {quickProof.map((item, i) => (
                  <div
                    key={i}
                    className={`group flex items-start gap-4 py-4 sm:py-6 sm:flex-col sm:items-start lg:flex-row lg:items-center lg:py-2 px-2 transition-transform duration-300 hover:-translate-y-0.5 ${
                      i > 0
                        ? 'border-t border-dashed border-fd-border/60 sm:border-t-0 sm:border-l'
                        : ''
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dashed border-fd-border/60 bg-fd-background/60 text-fd-primary transition-colors duration-300 group-hover:border-solid group-hover:border-fd-primary/40 group-hover:bg-fd-primary/10">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="sm:mt-0 lg:ml-2">
                      <h3 className="font-display text-lg font-semibold text-fd-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-fd-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Learning path */}
          <Reveal delay={120}>
            <div className="border-y border-dashed border-fd-border/60 py-10 sm:py-14">
              <div className="w-full max-w-fd-container mx-auto max-lg:px-6 grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
                <div className="space-y-5">
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fd-foreground">
                    A structured path, <span className="text-fd-primary">start to offer</span>
                  </h2>
                  <p className="text-fd-muted-foreground text-pretty leading-relaxed max-w-[52ch]">
                    Every track is ordered from fundamentals to advanced scenarios, so
                    you always know what to learn next — and each answer explains the
                    reasoning, not just the definition.
                  </p>
                  <a
                    href="https://t.me/prodevopsguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-dashed border-fd-border/60 bg-fd-background/60 px-4 py-3 text-sm font-medium text-fd-foreground transition-all duration-300 hover:border-solid hover:border-fd-primary/40 hover:bg-fd-primary/5"
                  >
                    <MessageCircleMore className="h-4.5 w-4.5 text-fd-primary" />
                    Join the learning community on Telegram
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M1 8h12M9 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                {/* Track index */}
                <div className="rounded-xl border border-dashed border-fd-border/60 bg-fd-background/60 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/20">
                  <div className="flex items-center justify-between border-b border-dashed border-fd-border/60 px-5 py-3">
                    <span className="font-mono text-xs tracking-widest text-fd-muted-foreground uppercase">
                      Index of tracks
                    </span>
                    <span className="font-mono text-xs text-fd-muted-foreground/60">
                      9 tracks
                    </span>
                  </div>
                  <ul>
                    {learningPath.map((item) => (
                      <li
                        key={item.step}
                        className="border-b border-dashed border-fd-border/60 last:border-b-0"
                      >
                        <Link
                          href={item.href}
                          className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-fd-primary/5"
                        >
                          <span className="font-mono text-sm font-semibold text-fd-primary/70 transition-colors group-hover:text-fd-primary">
                            {item.step}
                          </span>
                          <span className="flex-1">
                            <span className="block font-medium text-fd-foreground">
                              {item.title}
                            </span>
                            <span className="block text-sm text-fd-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="shrink-0 text-fd-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-fd-primary"
                          >
                            <path
                              d="M1 8h12M9 3l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 py-3">
                    <Link
                      href="/docs/getting-started"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary"
                    >
                      Start at the beginning
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        <path
                          d="M1 8h12M9 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
