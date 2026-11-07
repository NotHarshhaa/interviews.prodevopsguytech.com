import { CountUp } from '@/components/count-up';
import { Reveal } from '@/components/reveal';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 550, suffix: '+', label: 'Curated Questions' },
  { value: 15, suffix: '+', label: 'DevOps Tools Covered' },
  { value: 3, suffix: '', label: 'Major Cloud Platforms' },
  { value: 9, suffix: '', label: 'Topic Tracks' },
];

export default function StatsSection() {
  return (
    <section className="relative w-full max-w-fd-container mx-auto border-t border-dashed border-fd-border/60">
      <Reveal>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center gap-2 px-6 py-10 text-center transition-colors duration-300 hover:bg-fd-background/40 sm:py-12 ${
                i > 0 ? 'border-l border-dashed border-fd-border/60' : ''
              } ${i >= 2 ? 'max-lg:border-t max-lg:border-dashed max-lg:border-fd-border/60' : ''} ${
                i === 2 ? 'max-lg:border-l-0' : ''
              }`}
            >
              <dd className="font-display text-5xl font-bold tracking-tight text-fd-foreground sm:text-6xl">
                <CountUp value={stat.value} />
                <span className="text-fd-primary">{stat.suffix}</span>
              </dd>
              <dt className="text-sm font-medium text-fd-muted-foreground">
                {stat.label}
              </dt>
              <div className="absolute inset-x-8 bottom-0 h-px origin-center scale-x-0 bg-fd-primary/50 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
