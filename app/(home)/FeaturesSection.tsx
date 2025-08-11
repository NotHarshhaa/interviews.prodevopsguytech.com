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
    <div className="group relative overflow-hidden rounded-xl border bg-black/5 dark:bg-white/5 p-8 hover:border-opacity-50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1" style={{
      opacity: 1,
      transform: 'none',
      ...style
    }}>
      {/* Background effects */}
      <div className="absolute -z-10 inset-0 bg-grid-dots-current group-hover:text-cyan-400/30 h-full w-full text-transparent duration-500" />
      <div className={`bg-gradient-to-br from-transparent via-transparent ${gradientVariants[color]} absolute inset-0 opacity-5 group-hover:opacity-30 duration-500 blur-xl`} />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/5 dark:via-white/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon container with floating animation */}
        <div className={`mb-6 inline-flex items-center justify-center rounded-2xl p-4 ${colorVariants[color]} transition-all duration-500 group-hover:scale-110 animate-float bg-black/5 dark:bg-white/5`}>
          <div className="w-8 h-8">
            {icon}
          </div>
        </div>

        {/* Title and description */}
        <h3 className={`text-2xl font-bold mb-4 font-mono tracking-tight transition-all duration-500 ${colorVariants[color]} group-hover:scale-[1.02]`}>
          {title}
        </h3>
        <p className="text-muted-foreground text-pretty leading-relaxed">
          {description}
        </p>
        
        {/* Number indicator */}
        <div className={`absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center text-lg font-mono ${colorVariants[color]} opacity-40 group-hover:opacity-100 duration-500 rotate-12 group-hover:rotate-0 transition-all`}>
          <div className="relative">
            <span className="absolute inset-0 animate-ping opacity-75">[{number}]</span>
            [{number}]
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm" />
      
      {/* Border glow effect */}
      <div className={`absolute -inset-px rounded-xl bg-gradient-to-br from-transparent via-current to-transparent opacity-0 group-hover:opacity-10 duration-500 blur`} />
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
    <section className="relative flex flex-col w-full max-w-fd-container mx-auto border-t border-dashed py-16">
      <style dangerouslySetInnerHTML={{ __html: animations }} />
      <SectionTitle id="features" title="Everything You Need to Succeed" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature}
            // Add staggered animation delay
            style={{
              animationDelay: `${index * 100}ms`,
              opacity: 0,
              animation: 'fadeIn 0.5s ease-out forwards',
            }}
          />
        ))}
      </div>
    </section>
  );
} 