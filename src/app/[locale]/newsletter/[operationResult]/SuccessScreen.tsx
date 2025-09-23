import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Code, Heart, Mail, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SuccessScreen() {
  return (
    <Card className="p-8 md:p-12 shadow-elegant border-0 bg-card backdrop-blur-sm">
      <div className="text-center mb-8">
        <div className="relative mb-6">
          <Image
            src="/newsletter-success-image.jpg"
            alt="Celebração de inscrição na newsletter"
            className="max-w-md mx-auto rounded-2xl shadow-glow"
            width={500}
            height={500}
          />
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-bounce">
            <CheckCircle size={32} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Parabéns! 🎉
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Sua inscrição foi confirmada com sucesso e você agora vai acompanhar
          minha jornada no mundo do desenvolvimento e DevOps. 🔧
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Code className="text-primary" />O que você pode esperar:
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>
                Minhas experiências reais com desenvolvimento e DevOps
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Aprendizados e erros que cometi pelo caminho</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Reviews honestas de ferramentas que uso no dia a dia</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Dicas práticas que realmente funcionaram para mim</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Projetos pessoais e experimentos que estou fazendo</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Rocket className="text-primary" />
            Próximos passos:
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">
                  Fique de olho na sua caixa de entrada
                </p>
                <p className="text-sm text-muted-foreground">
                  Compartilho conteúdo quando tenho algo interessante
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
              <Heart className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">
                  Adicione meu email aos seus contatos
                </p>
                <p className="text-sm text-muted-foreground">
                  Para não perder nenhum post
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
              <Users className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">Me siga nas redes sociais</p>
                <p className="text-sm text-muted-foreground">
                  Para atualizações mais frequentes e bastidores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-subtle p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          💡 Dica pessoal:
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Configure um filtro no seu email para marcar meus conteúdos como
          importantes. Assim você não vai perder aquela solução que pode te
          salvar em um projeto futuro (já aconteceu comigo várias vezes)!
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg mb-6 text-foreground">
          Muito obrigado por se interessar pelo meu trabalho! Espero que minha
          experiência possa te ajudar de alguma forma na sua jornada.
        </p>

        <Link href="/">
          <Button size="lg" className="shadow-glow">
            Voltar para o site
          </Button>
        </Link>
      </div>
    </Card>
  );
}
