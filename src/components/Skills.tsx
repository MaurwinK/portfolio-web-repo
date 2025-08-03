import { Card } from '@/components/ui/card';
import { Code, Database, Cloud, Terminal, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "Shell Scripting"],
      color: "text-blue-400"
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "Database Design", "JDBC", "SQL Optimization"],
      color: "text-green-400"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code"],
      color: "text-primary"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["JavaFX", "Git", "Linux", "Monitoring Tools"],
      color: "text-purple-400"
    },
    {
      title: "System Knowledge",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Operating Systems", "Networking", "Cyber Security", "System Administration"],
      color: "text-red-400"
    },
    {
      title: "Additional Skills",
      icon: <BookOpen className="h-6 w-6" />,
      skills: ["Event Management", "Graphic Design", "Technical Writing", "Project Management"],
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning development, DevOps, security, and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
                <div className="mb-4">
                  <div className={`${category.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skill Highlights */}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;