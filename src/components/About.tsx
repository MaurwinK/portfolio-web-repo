import { Card } from '@/components/ui/card';
import { GraduationCap, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      level: "Secondary School",
      score: "93% (CBSE, 10th)",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      level: "Higher Secondary School",
      score: "81.6% (CBSE, 12th)",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      level: "B.E. Computer Science & Engineering (Cyber Security)",
      score: "8.71 CGPA (2025)",
      institution: "Thakur College of Engineering and Technology, University of Mumbai",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];



  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Science graduate specializing in Cyber Security,
              with a strong foundation in DevOps practices and Java development.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.level}</h4>
                        <p className="text-primary font-medium mb-2">{edu.score}</p>
                        {edu.institution && (
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 border-border bg-card/50">
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Current Goals</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  DevOps and Cloud Engineer with hands-on experience building, deploying, and maintaining production-grade, multi-region AWS infrastructure for a B2B SaaS startup.
                  Strong background in CI/CD automation, containerization, infrastructure-as-code, monitoring, and cloud security.
                  Proven ability to handle real production deployments, environment isolation, and cost optimization in fast-paced startup environments.
                  I am always looking for growth and new opportunities to solve complex challenges.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;