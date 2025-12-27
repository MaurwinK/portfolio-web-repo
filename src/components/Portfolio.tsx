import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Coffee, Plus, Container, Server } from 'lucide-react';

const Portfolio = () => {
  const professionalProjects = [
    // Empty for now as requested
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
    <Card className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
            {project.status === "completed" && (
              <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                Completed
              </span>
            )}
            {project.status === "planned" && (
              <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                In Progress
              </span>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {project.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.status === "completed" && (
        <div className="flex gap-3">
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work spanning Java applications, DevOps automation, and security tools
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 border-b border-border pb-4">Professional Projects</h3>
            {professionalProjects.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {professionalProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-secondary/10 rounded-lg border border-dashed border-border">
                <p className="text-muted-foreground">Professional projects coming soon...</p>
              </div>
            )}
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