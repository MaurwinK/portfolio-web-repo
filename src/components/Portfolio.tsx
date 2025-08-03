import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Coffee, Plus } from 'lucide-react';

const Portfolio = () => {
  const projects = [
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
    },
    {
      title: "DevOps Static Website Project",
      description: "Coming soon - A fast and lightweight personal website hosted on AWS S3 with HTML, CSS, and JavaScript.",
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
      title: "Cloud Web App (Dynamic)",
      description: "A full-stack web application hosted on AWS using EC2, API Gateway, and a backend server for dynamic content delivery.",
      technologies: ["AWS"],
      features: [
        "Live data handling",
        "Integrated with AWS RDS/DynamoDB for storage",
        "CI/CD with GitHub Actions or AWS CodePipeline",
        "Hosted on AWS EC2 / Lambda for backend processing"
      ],
      icon: <Coffee className="h-8 w-8" />,
      status: "planned"
    }
  ];

  const placeholderProjects = [
    { title: "Project Slot 4", status: "available" },
    { title: "Project Slot 5", status: "available" }
  ];

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

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
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
                    {project.features.map((feature, featureIndex) => (
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
                    {project.technologies.map((tech, techIndex) => (
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
            ))}
          </div>

          {/* Placeholder for future projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {placeholderProjects.map((project, index) => (
              <Card key={index} className="p-8 border-dashed border-border hover:border-primary/50 transition-colors group">
                <div className="text-center">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors mb-4">
                    <Plus className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Space reserved for upcoming projects and collaborations
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;