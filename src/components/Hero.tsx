import { Github, Linkedin, Instagram, Facebook, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/henriquesydney", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/henriquesydney", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/henriquesydney", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/henriquesydney", label: "Facebook" },
  ];

  const skills = ["DevOps", "Node.js", "Next.js", "Cloud", "Kubernetes", "Docker"];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="w-full hidden lg:block absolute rotate-y-180 left-10 top-0 bottom-0 bg-[url('/brush-stroke.png')] bg-no-repeat bg-center bg-cover pointer-events-none z-1 opacity-30" />
      
      <div className="hidden lg:block absolute right-0 top-18 bottom-0 w-250 bg-[url('/hl-image.png')] bg-no-repeat bg-center bg-cover pointer-events-none z-0" />
      
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                Disponível para novas oportunidades
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Olá, eu sou{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Henrique Sydney
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Desenvolvedor Fullstack & Especialista DevOps
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                8 anos de experiência transformando ideias em soluções robustas. 
                Especializado em Node.js, Next.js, DevOps e Cloud Computing. 
                Atualmente focado em certificação Multicloud (AWS, Azure, Google Cloud).
              </p>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-card hover:shadow-glow transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
         
          {/* Profile Images */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {/* <div className="relative">
            
              <div className="relative w-80 h-full md:w-96 md:h-96">
               
                <div className="absolute inset-0 overflow-hidden border-4 border-primary/30 shadow-glow-lg transition-opacity duration-500 hover:opacity-0 bg-card">
                  <Image
                    src="/hl-image.png"
                    alt="Henrique Sydney - Ilustração"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                
               
                <div className="absolute inset-0 overflow-hidden border-4 border-accent/30 shadow-glow-lg opacity-0 transition-opacity duration-500 hover:opacity-100 bg-card">
                  <Image
                    src="/eu.jpeg"
                    alt="Henrique Sydney"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

             
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}