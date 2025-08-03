import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/pfp.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary text-lg font-medium tracking-wide">Hello! I'm Maurwin.</p>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Designing</span>{' '}
                  <span className="text-primary">digital</span>{' '}
                  <span className="text-foreground">solutions with emphasis on</span>{' '}
                  <span className="text-muted-foreground">DevOps & Security</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                A multidisciplinary Computer Science graduate combining DevOps expertise, 
                Java development, and event management to achieve exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="group">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <a href='/Resume-August.pdf' download="Maurwin_Resume.pdf">
                  <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                  <img
                    src={profileImage}
                    alt="Maurwin S Bhardwaj"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;