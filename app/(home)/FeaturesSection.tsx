import { Cloud, Code2, BookOpen, Target, Users, Brain } from 'lucide-react';
import SectionTitle from "./SectionTitle";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'pink' | 'cyan' | 'orange' | 'purple';
  number: string;
}

const gradientVariants = {
  pink: 'to-pink-400',
  cyan: 'to-cyan-400',
  orange: 'to-orange-400',
  purple: 'to-indigo-400',
}

const colorVariants = {
  pink: 'text-pink-500 dark:text-pink-400',
  cyan: 'text-cyan-500 dark:text-cyan-400',
  orange: 'text-orange-500 dark:text-orange-400',
  purple: 'text-indigo-500 dark:text-indigo-400',
}

const borderVariants = {
  pink: 'group-hover:border-pink-500/40',
  cyan: 'group-hover:border-cyan-500/40',
  orange: 'group-hover:border-orange-500/40',
  purple: 'group-hover:border-indigo-500/40',
}

function FeatureCard({ title, description, icon, color, number }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-opacity-40 transition-all duration-300">
      <div className="absolute -z-10 inset-0 bg-grid-dots-current group-hover:text-cyan-400/40 h-full w-full text-transparent duration-300" />
      <div className={`bg-gradient-to-b from-transparent via-transparent ${gradientVariants[color]} absolute inset-0 opacity-5 group-hover:opacity-20 duration-300`} />
      
      <div className="relative z-10">
        <div className={`mb-4 inline-block rounded-lg p-3 ${colorVariants[color]} transition-colors`}>
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3 font-mono">{title}</h3>
        <p className="text-fd-muted-foreground text-pretty">{description}</p>
        
        <div className={`absolute top-4 right-4 text-xl font-mono ${colorVariants[color]} opacity-50 group-hover:opacity-100 duration-300`}>
          [{number}]
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
    </div>
  );
}

export default function FeaturesSection() {
  const features: FeatureCardProps[] = [
    {
      title: "DevOps Tools",
      description: "Comprehensive coverage of Docker, Kubernetes, Jenkins, Git, and other essential DevOps tools.",
      icon: <Code2 className="h-6 w-6" />,
      color: "cyan" as const,
      number: "01"
    },
    {
      title: "Cloud Platforms",
      description: "In-depth questions on AWS, Azure, GCP, and cloud-native technologies.",
      icon: <Cloud className="h-6 w-6" />,
      color: "pink" as const,
      number: "02"
    },
    {
      title: "SRE Practices",
      description: "Site Reliability Engineering concepts, monitoring, observability, and incident management.",
      icon: <Target className="h-6 w-6" />,
      color: "orange" as const,
      number: "03"
    },
    {
      title: "Learning Resources",
      description: "Detailed explanations, best practices, and real-world examples for each answer.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "purple" as const,
      number: "04"
    },
    {
      title: "Interview Prep",
      description: "Role-specific questions for junior to senior positions, with practical scenarios.",
      icon: <Users className="h-6 w-6" />,
      color: "cyan" as const,
      number: "05"
    },
    {
      title: "Core Concepts",
      description: "Fundamental DevOps principles, CI/CD, automation, and infrastructure as code.",
      icon: <Brain className="h-6 w-6" />,
      color: "pink" as const,
      number: "06"
    }
  ];

  return (
    <section className="relative flex flex-col w-full max-w-fd-container mx-auto border-t border-dashed">
      <SectionTitle id="features" title="Everything You Need to Succeed" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
} 