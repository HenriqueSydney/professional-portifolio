import { Heart, Code, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              HSL.dev
            </div>
            <p className="text-muted-foreground">
              Desenvolvedor Fullstack & Especialista DevOps apaixonado por criar soluções inovadoras e escaláveis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {["Sobre", "Habilidades", "Experiência", "Projetos", "Blog", "Contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>henriquesydneylima@gmail.com</p>
              <p>(61) 99512-5151</p>
              <p>Águas Claras, Brasília - DF</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <Code className="h-4 w-4 text-primary" />
              <span>e muito</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>
            
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Henrique Sydney. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}