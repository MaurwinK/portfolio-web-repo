import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/MaurwinK",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/maurwin-bhardwaj-a60629201/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:maurwin2003@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="text-foreground">Maurwin</span>
                <span className="text-primary">.</span>
              </div>
              <p className="text-muted-foreground">
                DevOps enthusiast and Java developer passionate about creating 
                secure, scalable digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Open to opportunities and collaborations
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Maurwin S Bhardwaj. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>using React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;