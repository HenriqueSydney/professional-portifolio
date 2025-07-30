import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Monitor,
  Shield
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Python", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 90 },
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Google Cloud", level: 75 },
        { name: "Terraform", level: 70 },
        { name: "Ansible", level: 70 }
      ]
    },
    {
      title: "Bancos de Dados",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      title: "Monitoramento & CI/CD",
      icon: Monitor,
      skills: [
        { name: "GitHub Actions", level: 90 },
        { name: "GitLab CI", level: 85 },
        { name: "Grafana", level: 80 },
        { name: "Prometheus", level: 80 },
        { name: "Grafana Loki", level: 75 },
        { name: "Jenkins", level: 70 }
      ]
    }
  ];

  const certifications = [
    "IA para Devs - Rocketseat (30h)",
    "Secure Coding and DevSecOps - GoHacking (40h)",
    "Trilha NodeJS - Rocketseat (50h)",
    "Trilha ReactJS - Rocketseat (50h)",
    "Java Fundamentos - FIAP (60h)",
    "Python - FIAP (80h)",
    "Python para Análise de Dados - Data Science Academy (72h)",
    "Linux Fundamentos - FIAP (40h)"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="bg-text-gradient bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Card className="hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Certificações & Cursos</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}