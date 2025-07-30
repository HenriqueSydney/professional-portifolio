import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Database, Cloud, Settings } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Plataforma de Desenvolvimento Interno (IDP)",
      description: "Plataforma completa para simplificar a disponibilização de recursos para deploy de aplicações e banco de dados em clusters Kubernetes.",
      icon: Cloud,
      technologies: ["Next.js", "Node.js", "Kubernetes", "Microsoft EntraID", "GitLab", "MinIO", "Kafka"],
      features: [
        "Integração com Microsoft EntraID",
        "Arquitetura de microsserviços",
        "Deploy automatizado em Kubernetes",
        "Gestão de recursos cloud"
      ],
      category: "DevOps Platform"
    },
    {
      title: "Sistema de Processamento DOU/BS",
      description: "Sistema automatizado para processamento de atos do Diário Oficial da União e Boletim de Serviço com integração ao InLabs e Microsoft SharePoint.",
      icon: Settings,
      technologies: ["Next.js", "Node.js", "Microsoft SharePoint", "InLabs API"],
      features: [
        "Processamento automatizado de documentos",
        "Integração com SharePoint",
        "Interface responsiva",
        "Monitoramento em tempo real"
      ],
      category: "Automation System"
    },
    {
      title: "Módulos de Gestão de Pessoas",
      description: "Suite completa de módulos para gestão de pessoas com automatização de cálculos, gestão de documentos e assinatura digital.",
      icon: Code2,
      technologies: ["PHP", "MySQL", "Assinador Serpro", "Sigepe API"],
      features: [
        "Programa de Gestão e Desenvolvimento",
        "Automatização de cálculos de pagamento",
        "Gestão de afastamentos no Sigepe",
        "Assinatura digital integrada"
      ],
      category: "HR Management"
    },
    {
      title: "Sistema de Monitoramento DevOps",
      description: "Solução completa de monitoramento com métricas, logs e alertas para infraestrutura Kubernetes usando stack moderna de observabilidade.",
      icon: Database,
      technologies: ["Grafana", "Prometheus", "Grafana Loki", "Promtail", "Kubernetes"],
      features: [
        "Monitoramento de métricas",
        "Centralização de logs",
        "Alertas inteligentes",
        "Dashboards customizados"
      ],
      category: "Monitoring"
    }
  ];

  const getIcon = (IconComponent: any) => IconComponent;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos <span className="bg-text-gradient bg-clip-text text-transparent">Relevantes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções inovadoras que desenvolvi para resolver problemas complexos e otimizar processos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getIcon(project.icon);
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Principais Funcionalidades</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 hover:shadow-glow transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300">
            <Github className="w-5 h-5 mr-2" />
            Ver Todos os Projetos no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}