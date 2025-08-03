import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Target } from 'lucide-react';

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

  const experience = [
    {
      role: "Event Manager",
      company: "The E-sports Club (TEC)",
      description: "Led event planning and execution for gaming tournaments and tech events",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      role: "Media Production Head",
      company: "BunchUp",
      description: "Managed media production and content creation initiatives",
      icon: <Briefcase className="h-5 w-5" />
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

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
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

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <Card key={index} className="p-6 border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">{exp.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{exp.role}</h4>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
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
                  Currently seeking a DevOps position where I can leverage my coding skills, 
                  cloud knowledge, and passion for automation. My unique background in event management 
                  and graphic design brings a fresh perspective to technical problem-solving, 
                  emphasizing both functionality and user experience.
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