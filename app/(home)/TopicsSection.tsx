import { Container, Cloud, GitBranch, Terminal, Server, Settings } from 'lucide-react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TopicCard({ icon, title, description }: TopicCardProps) {
  return (
    <div className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-cyan-400/5 hover:scale-[1.02]">
      <div className="mt-1 rounded-xl p-2.5 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 text-cyan-600 dark:text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:from-cyan-500/20 group-hover:to-cyan-400/10">
        {icon}
      </div>
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-fd-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
        <p className="text-fd-muted-foreground/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function TopicsSection() {
  const topics = [
    {
      icon: <Container className="h-5 w-5" />,
      title: "Containerization",
      description: "Docker, container orchestration, Kubernetes architecture, and deployment strategies"
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Cloud Services",
      description: "AWS, Azure, GCP core services, cloud architecture, and best practices"
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "Version Control",
      description: "Git workflows, branching strategies, CI/CD pipelines, and collaboration"
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      title: "Infrastructure as Code",
      description: "Terraform, Ansible, configuration management, and automation"
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "System Design",
      description: "Scalability, high availability, monitoring, and incident response"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "DevOps Practices",
      description: "Agile methodologies, SRE principles, and continuous improvement"
    }
  ];

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
          <div className="-z-10 bg-gradient-to-b from-cyan-500/10 via-cyan-400/5 to-transparent rounded-full w-full h-full blur-3xl opacity-30 dark:opacity-20" />
          <div className="absolute inset-0 bg-grid-dots opacity-30 dark:opacity-20" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl relative">
        {/* Section Title */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-800 dark:from-cyan-400 dark:to-cyan-600 bg-clip-text text-transparent mb-4">
            Popular Interview Topics
          </h2>
          <p className="text-fd-muted-foreground/80 text-lg max-w-2xl mx-auto">
            Master these essential DevOps topics to excel in your interviews
          </p>
        </div>

        {/* Mobile Device Frame */}
        <div className="relative mx-auto w-full max-w-[380px] rounded-[2.5rem] border-[6px] border-black/90 dark:border-neutral-800 bg-gradient-to-b from-fd-accent/10 via-white/95 to-white dark:from-fd-accent/5 dark:via-fd-card dark:to-fd-card shadow-2xl shadow-black/10 dark:shadow-black/30">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="w-[9rem] h-6 bg-black dark:bg-neutral-800 rounded-b-2xl flex items-end justify-center pb-0.5">
              <div className="w-16 h-[3px] rounded-full bg-neutral-600/50 dark:bg-neutral-500/50" />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative bg-white dark:bg-gray-900 h-[600px] overflow-hidden rounded-[2rem] shadow-inner">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/20 via-cyan-400/10 to-transparent blur-2xl animate-pulse-slow" />
            
            <div className="px-5 py-8">
              <div className="space-y-1">
                {topics.map((topic, index) => (
                  <TopicCard key={index} {...topic} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 