interface StatCardProps {
  number: string;
  label: string;
  color: 'pink' | 'cyan' | 'orange' | 'purple';
}

const colorVariants = {
  pink: 'text-pink-500 dark:text-pink-400',
  cyan: 'text-cyan-500 dark:text-cyan-400',
  orange: 'text-orange-500 dark:text-orange-400',
  purple: 'text-indigo-500 dark:text-indigo-400',
}

const gradientVariants = {
  pink: 'from-pink-500/20 to-pink-400/0',
  cyan: 'from-cyan-500/20 to-cyan-400/0',
  orange: 'from-orange-500/20 to-orange-400/0',
  purple: 'from-indigo-500/20 to-indigo-400/0',
}

function StatCard({ number, label, color }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border p-8 hover:border-opacity-40 transition-all duration-300">
      <div className="absolute -z-10 inset-0 bg-grid-dots-current group-hover:text-cyan-400/40 h-full w-full text-transparent duration-300" />
      <div className={`bg-gradient-to-b ${gradientVariants[color]} absolute inset-0 opacity-0 group-hover:opacity-100 duration-300`} />
      
      <div className="relative z-10">
        <div className={`text-5xl font-bold font-mono mb-2 ${colorVariants[color]}`}>
          {number}
        </div>
        <div className="text-fd-muted-foreground text-lg">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats: StatCardProps[] = [
    {
      number: "550+",
      label: "Interview Questions",
      color: "cyan" as const
    },
    {
      number: "15+",
      label: "DevOps Tools Covered",
      color: "pink" as const
    },
    {
      number: "3",
      label: "Major Cloud Platforms",
      color: "orange" as const
    },
    {
      number: "100%",
      label: "Success Rate",
      color: "purple" as const
    }
  ];

  return (
    <section className="relative flex flex-col w-full max-w-fd-container mx-auto border-t border-dashed">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
} 