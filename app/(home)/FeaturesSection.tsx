import {
  Cloud,
  Code2,
  BookOpen,
  Target,
  Users,
  Brain,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/cn';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  featured?: boolean;
}

const features: Feature[] = [
  {
    title: 'DevOps Tools',
    description:
      'Comprehensive coverage of the essential toolchain — from containerization to delivery pipelines.',
    icon: Code2,
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Ansible'],
    featured: true,
  },
  {
    title: 'Cloud Platforms',
    description: 'In-depth questions on the big three and cloud-native technologies.',
    icon: Cloud,
    tags: ['AWS', 'Azure', 'GCP'],
  },
  {
    title: 'SRE Practices',
    description: 'Reliability engineering concepts and day-to-day operations.',
    icon: Target,
    tags: ['Monitoring', 'Observability', 'SLOs', 'Incident response'],
  },
  {
    title: 'Core Concepts',
    description: 'The fundamentals every interviewer expects you to know cold.',
    icon: Brain,
    tags: ['CI/CD', 'Automation', 'IaC'],
  },
  {
    title: 'Interview Prep',
    description: 'Role-specific questions with practical scenarios, junior to senior.',
    icon: Users,
    tags: ['Junior → Senior', 'Scenario-based'],
  },
  {
    title: 'Learning Resources',
    description: 'Every answer explains the reasoning, not just the definition.',
    icon: BookOpen,
    tags: ['Detailed answers', 'Best practices', 'Real-world examples'],
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-dashed border-fd-border/60 bg-fd-background/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fd-border hover:bg-fd-background/80 hover:shadow-xl hover:shadow-black/5 sm:p-7 dark:hover:shadow-black/30',
        feature.featured && 'lg:col-span-2',
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-0 transition-opacity duration-500 group-hover:opacity-15 dark:opacity-20" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-dashed border-fd-border/60 bg-fd-background text-fd-primary transition-all duration-300 group-hover:border-solid group-hover:border-fd-primary/40 group-hover:bg-fd-primary/10">
          <Icon className="h-5.5 w-5.5" />
        </div>
        <div className="flex h-8 w-8 translate-x-1 items-center justify-center rounded-full bg-fd-primary/10 text-fd-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-semibold tracking-tight text-fd-foreground">
        {feature.title}
      </h3>
      <p className="relative mt-2 flex-1 text-pretty leading-relaxed text-fd-muted-foreground">
        {feature.description}
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-1.5">
        {feature.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-dashed border-fd-border/60 bg-fd-background px-2 py-0.5 font-mono text-xs text-fd-muted-foreground transition-colors duration-300 group-hover:border-fd-primary/25 group-hover:text-fd-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative flex w-full flex-col border-t border-dashed border-fd-border/60 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-fd-container max-lg:px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-fd-foreground sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-3 text-pretty text-lg text-fd-muted-foreground">
              Comprehensive resources and tools to help you master DevOps concepts and
              ace your interviews.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={(i % 3) * 90}
              className={cn(feature.featured && 'lg:col-span-2')}
            >
              <FeatureCard feature={feature} />
            </Reveal>
          ))}

          {/* Grid filler with a real job: send the reader to the docs */}
          <Reveal delay={180} className="md:col-span-2">
            <Link
              href="/docs"
              className="group flex h-full min-h-44 flex-col justify-between gap-6 rounded-xl border border-dashed border-fd-primary/30 bg-fd-primary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-solid hover:bg-fd-primary/10 hover:shadow-xl hover:shadow-fd-primary/10 sm:p-7 md:flex-row md:items-center"
            >
              <p className="font-display text-xl font-semibold tracking-tight text-fd-foreground">
                <span className="text-fd-primary">9 tracks.</span> One path from
                fundamentals to offer.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-fd-primary">
                Browse all tracks
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
