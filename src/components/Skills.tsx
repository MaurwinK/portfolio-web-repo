import { Card } from '@/components/ui/card';
import { Code, Database, Cloud, Terminal, Wrench, Box, Activity, Server, Network } from 'lucide-react';
import {
  SiLinux,
  SiGnubash,
  SiTerraform,
  SiAnsible,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiSpring,
  SiPrometheus,
  SiGrafana,
  SiOpentelemetry
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { MotionWrapper } from '@/components/MotionWrapper';

const Skills = () => {
  const skillCategories = [
    {
      title: "Foundation",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "Operating System", icon: <Server className="h-4 w-4" /> }, // Generic server icon for OS
        { name: "Linux", icon: <SiLinux className="h-4 w-4" /> },
        { name: "Computer Networks", icon: <Network className="h-4 w-4" /> },
        { name: "Shell Scripting", icon: <SiGnubash className="h-4 w-4" /> }
      ],
      color: "text-blue-400"
    },
    {
      title: "Infrastructure/Config",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", icon: <FaAws className="h-4 w-4" /> },
        { name: "Terraform", icon: <SiTerraform className="h-4 w-4" /> },
        { name: "Ansible", icon: <SiAnsible className="h-4 w-4" /> }
      ],
      color: "text-green-400"
    },
    {
      title: "CI/CD Automation",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "GitHub", icon: <SiGithub className="h-4 w-4" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="h-4 w-4" /> },
        { name: "Jenkins", icon: <SiJenkins className="h-4 w-4" /> }
      ],
      color: "text-primary"
    },
    {
      title: "Containerization",
      icon: <Box className="h-6 w-6" />,
      skills: [
        { name: "Docker", icon: <SiDocker className="h-4 w-4" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="h-4 w-4" /> }
      ],
      color: "text-purple-400"
    },

    {
      title: "Monitoring & Logging",
      icon: <Activity className="h-6 w-6" />,
      skills: [
        { name: "Prometheus", icon: <SiPrometheus className="h-4 w-4" /> },
        { name: "Grafana", icon: <SiGrafana className="h-4 w-4" /> },
        { name: "OpenTelemetry", icon: <SiOpentelemetry className="h-4 w-4" /> },
        { name: "SigNoz", icon: <Activity className="h-4 w-4" /> }
      ],
      color: "text-yellow-400"
    },
    {
      title: "Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", icon: <FaJava className="h-4 w-4" /> },
        { name: "MySQL", icon: <SiMysql className="h-4 w-4" /> },
        { name: "JDBC", icon: <Database className="h-4 w-4" /> },
        { name: "JavaFX", icon: <FaJava className="h-4 w-4" /> } // Reusing Java icon or generic
      ],
      color: "text-red-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Technical <span className="text-primary">Skills</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive skill set spanning development, DevOps, security, and beyond
              </p>
            </div>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Card className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group h-full">
                  <div className="mb-4">
                    <div className={`${category.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <div className="p-1 bg-secondary rounded-full text-primary">
                          {skill.icon}
                        </div>
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </MotionWrapper>
            ))}
          </div>

          {/* Skill Highlights */}
          <MotionWrapper delay={0.4}>
            <div className="mt-16 text-center">
              <Card className="p-8 border-border bg-card/50">
                <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <div className="text-primary font-semibold">Development</div>
                    <p className="text-sm text-muted-foreground">
                      Strong foundation in Java with experience in building enterprise applications
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-primary font-semibold">DevOps & Cloud</div>
                    <p className="text-sm text-muted-foreground">
                      AWS expertise with modern DevOps practices and automation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-primary font-semibold">Security Focus</div>
                    <p className="text-sm text-muted-foreground">
                      Specialized knowledge in cyber security and secure development practices
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Skills;