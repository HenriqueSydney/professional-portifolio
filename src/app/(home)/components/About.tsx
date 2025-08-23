import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export function About() {
  const stats = [
    { label: "Anos de Experiência", value: "8+", icon: Briefcase },
    { label: "Projetos Concluídos", value: "50+", icon: Calendar },
    { label: "Tecnologias", value: "15+", icon: GraduationCap },
    { label: "Certificações e Cursos", value: "10+", icon: Badge },
  ];

  const education = [
    {
      title: "Pós-graduação em Engenharia DevOps",
      institution: "CEUB",
      period: "2024 - Jul/2025",
      status: "Em andamento"
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "CEUB",
      period: "2022 - Dez/2025",
      status: "4º semestre"
    },
    {
      title: "Pós-graduação em Gestão de Pessoas e Coaching",
      institution: "CEUB",
      period: "2015",
      status: "Concluído"
    },
    {
      title: "Graduação em Nutrição Clínica",
      institution: "CEUB",
      period: "2012",
      status: "Concluído"
    }
  ];

  return (
    <section id="about" className="py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="bg-text-gradient bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialista em DevOps e arquitetura de nuvem, transformando desafios complexos
            em soluções <strong className="text-foreground">simples e escaláveis</strong> que impulsionam a inovação e o crescimento do negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Minha jornada profissional começou como <strong className="text-foreground">desenvolvedor full-stack</strong>,
                onde construí uma base técnica sólida e prática.
                {' '}<strong className="text-foreground">Ao longo de 8 anos</strong>, atuei no ciclo completo de desenvolvimento,
                desde a concepção de ideias até a entrega final,
                {' '}<strong className="text-foreground">dominando tecnologias como DevOps e arquitetura de nuvem</strong>.
              </p>
              <p>
                Trabalho na <strong className="text-foreground">Governo Federal</strong> como Techlead do
                Laboratório de Desburocratização e Inovação de Gestão de Pessoas, onde lidero iniciativas de <strong className="text-foreground">modernização
                  e automatização de processos e fluxos críticos, <u>de forma estratégica</u></strong>.
              </p>
              <p>
                Minha experiência abrange o <strong className="text-foreground">provisionamento de aplicações</strong> em múltiplos
                provedores de nuvem <strong className="text-foreground">(AWS, Azure, Google Cloud e Digital Ocean)</strong> e em
                ambientes on-premise. Sou proficiente em <strong className="text-foreground">Infraestrutura
                  como Código (Terraform, Crossplane)</strong> e no uso de tecnologias modernas
                como <strong className="text-foreground">Kubernetes e Ansible</strong>,
                com o objetivo de entregar soluções que são, por design, <strong className="text-foreground">escaláveis, seguras e inovadoras</strong>.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Águas Claras, Brasília - DF</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Formação Acadêmica</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{edu.title}</h4>
                    <Badge variant={edu.status === "Em andamento" ? "default" : "secondary"}>
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}