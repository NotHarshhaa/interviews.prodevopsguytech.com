import { Container, Cloud, GitBranch, Terminal, Server, Settings } from 'lucide-react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TopicCard({ icon, title, description }: TopicCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-cyan-500/5 transition-colors">
      <div className="mt-1 rounded-full p-2 bg-cyan-500/10 text-cyan-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-fd-muted-foreground text-sm">{description}</p>
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
    <section className="py-16 relative">
      <div className="mx-auto max-w-4xl">
        {/* Mobile Device Frame */}
        <div className="relative mx-auto w-full max-w-[380px] rounded-[3rem] border-8 border-gray-900 bg-gray-900 dark:border-gray-700">
          <div className="absolute inset-x-0 top-0 z-10 h-[2rem] w-full bg-gray-900 dark:bg-gray-700">
            <div className="absolute left-1/2 top-1.5 h-2 w-16 -translate-x-1/2 rounded-full bg-gray-800 dark:bg-gray-600" />
          </div>
          
          {/* Content */}
          <div className="relative bg-white dark:bg-gray-900 h-[600px] overflow-hidden rounded-[2.5rem] shadow-xl">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-6">Popular Interview Topics</h2>
              <div className="space-y-2">
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