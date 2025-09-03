import { Card, CardContent } from "@/components/ui/card";
import { IconMap } from "@/mapper/IconMapper";
import { getProfileStats } from "@/services/notion/getProfileStats";
import { Briefcase, MapPin } from "lucide-react";
import { iconNames } from "lucide-react/dynamic";

export async function About() {
  const [statsError, statsSuccess] = await getProfileStats()




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
            {!statsError && statsSuccess.map((stat) => {
              const LucideIcon = IconMap[stat.iconName]
              const Icon = LucideIcon ? <LucideIcon className="h-8 w-8 text-primary mx-auto mb-2" /> : <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />

              return (
                <Card key={stat.id} className="hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    {Icon}
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}