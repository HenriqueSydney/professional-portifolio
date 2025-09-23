import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Home, Mail, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IErrorScreen {
  error: string;
}

export function ErrorScreen({ error }: IErrorScreen) {
  return (
    <Card className="p-8 md:p-12 shadow-elegant border-0 bg-card backdrop-blur-sm text-center">
      <div className="mb-6">
        <Image
          src="/newsletter-error-image.jpg"
          alt="Erro na inscrição da newsletter"
          className="w-full max-w-sm mx-auto rounded-2xl shadow-md"
          height={500}
          width={500}
        />
      </div>

      <div className="mb-6">
        <div className="flex justify-center mb-4">
          <div className="bg-destructive/10 p-4 rounded-full">
            <AlertTriangle className="text-destructive" size={40} />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Oops! Algo deu errado 😅
        </h1>

        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Parece que tivemos um pequeno problema ao processar sua inscrição na
          newsletter. Não se preocupe, essas coisas acontecem até com os
          melhores sistemas!
        </p>
      </div>

      <div className="bg-muted/30 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Vamos tentar resolver isso:
        </h2>

        <div className="space-y-3 text-left">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">
              Tente novamente em alguns minutos
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">
              Se o problema persistir, entre em contato comigo diretamente
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Home size={20} />
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </Card>
  );
}
