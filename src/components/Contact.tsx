import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "maurwin2003@gmail.com",
      href: "mailto:maurwin2003@gmail.com"
    },

    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "maurwin-bhardwaj",
      href: "https://www.linkedin.com/in/maurwin-bhardwaj-a60629201/"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "MaurwinK",
      href: "https://github.com/MaurwinK"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss DevOps opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and innovation. Whether you're 
                  looking for a DevOps engineer, need technical consultation, or want to 
                  collaborate on a project, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-4 border-border hover:border-primary/50 transition-colors group">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 text-inherit hover:text-primary transition-colors"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{contact.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <Card className="p-6 border-border bg-card/50">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Location</div>
                    <div className="text-muted-foreground">Mumbai, Maharashtra, India</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Open to remote work and relocation opportunities
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Contact Card */}
            <div>
              <Card className="p-8 border-border">
                <h3 className="text-2xl font-semibold mb-6">Quick Connect</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Ready to Start a Conversation?</h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Click any of the contact methods to get in touch directly, 
                      or connect with me on LinkedIn for professional networking.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full"
                      size="lg"
                    >
                      <a href="mailto:maurwin2003@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full"
                      size="lg"
                    >
                      <a 
                        href="https://www.linkedin.com/in/maurwin-bhardwaj-a60629201/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Response Time:</strong> I typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;