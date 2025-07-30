import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Supervisor do Laboratório de Desburocratização e Inovação",
      company: "Receita Federal do Brasil",
      period: "Set/2020 - Atual",
      location: "Brasília, DF",
      type: "Tempo Integral",
      description: "Liderança de equipes e projetos de desburocratização e inovação na gestão de pessoas. Desenvolvimento de soluções tecnológicas para otimização de processos organizacionais.",
      achievements: [
        "Liderança de equipe multidisciplinar",
        "Implementação de projetos de inovação",
        "Desenvolvimento de sistemas de gestão",
        "Otimização de processos organizacionais"
      ]
    },
    {
      title: "Chefe de Divisão de Gestão de Pessoas",
      company: "Receita Federal do Brasil",
      period: "Dez/2018 - Ago/2020",
      location: "Brasília, DF",
      type: "Tempo Integral",
      description: "Gestão estratégica de recursos humanos, coordenação de políticas de pessoal e implementação de sistemas de gestão de pessoas.",
      achievements: [
        "Gestão estratégica de RH",
        "Coordenação de políticas de pessoal",
        "Implementação de sistemas de gestão",
        "Melhoria contínua de processos"
      ]
    },   
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="bg-text-gradient bg-clip-text text-transparent">Profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 8 anos de experiência em desenvolvimento e liderança de projetos inovadores
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                  {/* Content Card */}
                  <Card className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:ml-auto' : 'md:ml-8'
                  } md:w-1/2 hover:shadow-glow transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="default">{exp.type}</Badge>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Principais Responsabilidades:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}