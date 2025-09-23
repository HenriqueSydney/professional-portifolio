import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Coffee, Heart, Home, Users } from "lucide-react";
import Link from "next/link";

export function UnsubscribeScreen() {
  return (
    <Card className="p-8 md:p-12 shadow-elegant border-0 bg-card backdrop-blur-sm">
      <div className="text-center mb-8">
        <div className="mb-6">
          <img
            src="/newsletter-unsubscribe-image.jpg"
            alt="Despedida da newsletter com porta aberta"
            className="w-full max-w-md mx-auto rounded-2xl shadow-glow"
            height={500}
            width={500}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Até mais! 👋
        </h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Sua inscrição foi cancelada com sucesso. Obrigado por ter me
          acompanhado até aqui na jornada do desenvolvimento e DevOps! 💙
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="text-primary" />
            Foi um prazer ter você:
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Compartilhando experiências e aprendizados</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Explorando o mundo do desenvolvimento juntos</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Trocando conhecimento sobre DevOps e ferramentas</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span>Fazendo parte desta comunidade incrível</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Coffee className="text-primary" />A porta sempre estará aberta:
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
              <Code className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">Quer voltar?</p>
                <p className="text-sm text-muted-foreground">
                  É só se inscrever novamente quando quiser
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
              <Users className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">Redes sociais</p>
                <p className="text-sm text-muted-foreground">
                  Continue me seguindo para updates casuais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-subtle p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          💭 Reflexão final:
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Entendo que às vezes precisamos dar uma pausa ou seguir caminhos
          diferentes. Isso faz parte da jornada! Se um dia quiser voltar,
          estarei aqui com os mesmos aprendizados, experiências e aquela vontade
          de compartilhar conhecimento. Sucesso na sua caminhada! 🚀
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg mb-6 text-foreground">
          Obrigado por ter feito parte desta jornada! Desejo muito sucesso em
          todos os seus projetos futuros.
        </p>

        <Link href="/">
          <Button size="lg" className="shadow-glow">
            <Home size={20} className="mr-2" />
            Voltar para o site
          </Button>
        </Link>
      </div>
    </Card>
  );
}
