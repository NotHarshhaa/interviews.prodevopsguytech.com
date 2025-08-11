import { Cloud, Code2, BookOpen, Target, Users, Brain } from 'lucide-react';
import SectionTitle from "./SectionTitle";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'pink' | 'cyan' | 'orange' | 'purple';
  number: string;
  style?: React.CSSProperties;
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

function FeatureCard({ title, description, icon, color, number, style }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-dashed border-fd-border/60 bg-fd-background/20 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1" style={{
      opacity: 1,
      transform: 'none',
      ...style
    }}>
      {/* Background effects */}
      <div className="absolute -z-10 inset-0 bg-grid-dots opacity-30 dark:opacity-20 group-hover:opacity-40 dark:group-hover:opacity-30 h-full w-full duration-500" />
      <div className={`bg-gradient-to-br from-transparent via-transparent ${gradientVariants[color]} absolute inset-0 opacity-0 group-hover:opacity-10 duration-500 blur-xl`} />
      
      {/* Content */}
      <div className="relative z-10 min-h-[16rem]">
        <div className="flex flex-col h-full">
          {/* Icon container with floating animation */}
          <div className={`mb-6 inline-flex items-center justify-center rounded-xl p-4 transition-all duration-500 group-hover:scale-110 animate-float bg-gradient-to-br from-cyan-500/10 to-cyan-400/5`}>
            <div className={`w-8 h-8 ${colorVariants[color]}`}>
              {icon}
            </div>
          </div>

          {/* Title and description */}
          <div className="space-y-3 pr-4">
            <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight transition-all duration-500 ${colorVariants[color]} group-hover:scale-[1.02]`}>
              {title}
            </h3>
            <p className="text-fd-muted-foreground/80 text-pretty leading-relaxed text-sm sm:text-base pb-12">
              {description}
            </p>
          </div>
        </div>
        
        {/* Number indicator */}
        <div className={`absolute top-4 right-4 font-mono text-sm ${colorVariants[color]} opacity-40 group-hover:opacity-100 duration-500 transition-all`}>
          <div className="relative">
            <span className="absolute inset-0 animate-pulse opacity-75">{number}</span>
            {number}
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center ${colorVariants[color]} hover:scale-110 transition-transform duration-300`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform translate-x-0.5 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M1 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add floating animation keyframe
const animations = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

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
    <section className="relative flex flex-col w-full max-w-fd-container mx-auto border-t border-dashed border-fd-border/60 py-16">
      <style dangerouslySetInnerHTML={{ __html: animations }} />
      
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-800 dark:from-cyan-400 dark:to-cyan-600 bg-clip-text text-transparent mb-4">
          Everything You Need to Succeed
        </h2>
        <p className="text-fd-muted-foreground/80 text-lg max-w-2xl mx-auto">
          Comprehensive resources and tools to help you master DevOps concepts and ace your interviews.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature}
            style={{
              animationDelay: `${index * 100}ms`,
              opacity: 0,
              animation: 'fadeIn 0.5s ease-out forwards',
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-fd-background via-fd-background/50 to-transparent pointer-events-none" />
    </section>
  );
} 