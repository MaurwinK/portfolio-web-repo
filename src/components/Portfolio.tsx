import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Coffee, Plus, Container, Server, Trophy } from 'lucide-react';

const Portfolio = () => {
  const professionalExperiences = [
    {
      title: "DevOps Engineer",
      company: "Network Science",
      location: "India | UK",
      period: "Nov 2025 \u2013 Present",
      description: "Assisted in designing, provisioning, and maintaining multi-region AWS infrastructure (India, UK, UAE). Architected local\u2013global infrastructure including VPC peering.",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "Kafka"],
      features: [
        "Architected local\u2013global infrastructure model (VPC design, Peering)",
        "Built end-to-end CI/CD pipelines (Dev, QA, COE, Prod) for frequent releases",
        "Containerized Node.js microservices & utilized Docker Compose",
        "Deployed applications on AWS ECS (ECR, Task Definitions, ALB)",
        "Implemented ALB & Auto Scaling Groups (ASG) for high availability",
        "Set up centralized monitoring: Prometheus, Grafana, OpenTelemetry, SigNoz",
        "Extended observability to database workloads & compute layers",
        "Conducted security assessments (Acunetix, EC2 scanners) & resolved findings",
        "Contributed to FinOps initiatives (cost analysis & optimization)",
        "Provisioned & maintained QA/COE environments for experimentation",
        "Assisted in Kafka-based local\u2013global architecture design",
        "Deployed internal tools: Outline documentation, DeepWiki",
        "Created architecture diagrams, runbooks & cost reports",
        "Handled production deployments & ensured rollback readiness"
      ],
      icon: <Server className="h-8 w-8" />,
      status: "current"
    },
    {
      title: "Production Head & DevOps Team",
      company: "BunchUp",
      location: "",
      period: "2022-2024",
      description: "Led design, branding, and DevOps initiatives. meaningful collaboration across development and marketing teams.",
      technologies: ["CI/CD Automation", "Cloud Infrastructure", "Branding"],
      features: [
        "Led design, branding, and DevOps initiatives",
        "CI/CD automation & cloud infrastructure management",
        "Boosted digital engagement by 100% through creative content",
        "Collaboration across development and marketing teams"
      ],
      icon: <Database className="h-8 w-8" />,
      status: "completed"
    },
    {
      title: "E-Sports Ambassador",
      company: "The Esports Club",
      location: "",
      period: "2023-2025",
      description: "Planned, coordinated, and executed large-scale esports events for TEC Spartans, handling logistics, scheduling, and team coordination.",
      technologies: ["Event Management", "Community Engagement", "Logistics"],
      features: [
        "Planned & executed large-scale esports events for TEC Spartans",
        "Handled logistics, scheduling, and team coordination",
        "Engaged the gaming community boosting participation by 30%",
        "Enhanced the club\u2019s visibility"
      ],
      icon: <Trophy className="h-8 w-8" />,
      status: "completed"
    }
  ];

  const personalProjects = [
    {
      title: "DevOps Static Website Project",
      description: "A fast and lightweight personal website hosted on AWS S3 with HTML, CSS, and JavaScript.",
      technologies: ["AWS"],
      features: [
        "Responsive design using HTML, CSS, JS",
        "Fast loading with global delivery via AWS CloudFront",
        "Lightweight, no backend required"
      ],
      icon: <Coffee className="h-8 w-8" />,
      status: "completed"
    },
    {
      title: "Dockerized 3-Tier Web Application",
      description: "Automated and deployed a 3-tier 'My Notes' web app using Docker Compose with Nginx (frontend), Django (backend), and MySQL (database). Hosted on AWS EC2 with custom security groups for production-level deployment.",
      technologies: ["AWS", "Docker", "Nginx", "Django", "MySQL"],
      features: [
        "3-tier architecture with Docker Compose",
        "AWS EC2 production deployment",
        "Custom security groups",
        "Scalable containerization"
      ],
      icon: <Container className="h-8 w-8" />,
      status: "completed"
    },
    {
      title: "Kubernetes-Powered MERN Chat App",
      description: "Deployed a full-stack MERN chat app on a local Kubernetes cluster (Minikube). Managed frontend, Node.js, and MongoDB database using container orchestration.",
      technologies: ["Kubernetes", "Docker", "AWS", "Node.js", "MongoDB"],
      features: [
        "Minikube local cluster deployment",
        "Container orchestration",
        "Full-stack MERN management",
        "Automated scalable deployment"
      ],
      icon: <Server className="h-8 w-8" />,
      status: "completed"
    },
    {
      title: "Bank Management System",
      description: "A comprehensive banking application developed using JavaFX, JDBC, and MySQL. Features full CRUD operations for managing bank data, customer accounts, and transactions with a modern GUI interface.",
      technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
      features: [
        "Create, Read, Update, Delete operations",
        "Customer account management",
        "Transaction history tracking",
        "Secure data handling"
      ],
      icon: <Database className="h-8 w-8" />,
      status: "completed"
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group h-full flex flex-col">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
            {project.company && (
              <span className="text-xl text-primary font-medium">{project.company}</span>
            )}
          </div>
          {project.period && (
            <p className="text-sm text-foreground/80 mb-2 font-mono">
              {project.period} {project.location ? `| ${project.location}` : ''}
            </p>
          )}
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
        </div>
      </div>

      <div className="mb-6 flex-grow">
        <h4 className="font-semibold text-foreground mb-3">Key Responsibilities & Features:</h4>
        <ul className="space-y-2">
          {project.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Only show GitHub link if it is NOT an experience entry (identified by presence of company field for now, or just check 'status' logic) */}
      {!project.company && project.status === "completed" && (
        <div className="flex gap-3 mt-6">
          <a href="https://github.com/MaurwinK" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Code
            </Button>
          </a>
        </div>
      )}
    </Card>
  );

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my professional experience and technical projects.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 border-b border-border pb-4">Professional Experience</h3>
            <div className="grid lg:grid-cols-1 gap-8"> {/* Changed to 1 column for experience to give more space */}
              {professionalExperiences.map((experience, index) => (
                <ProjectCard key={index} project={experience} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 border-b border-border pb-4">Personal Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;