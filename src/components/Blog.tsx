import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      title: "Implementando CI/CD com GitHub Actions e Kubernetes",
      excerpt: "Guia completo para configurar pipelines de CI/CD eficientes usando GitHub Actions para deploy automatizado em clusters Kubernetes.",
      category: "DevOps",
      readTime: "8 min",
      date: "15 Jan 2025",
      featured: true
    },
    {
      title: "Monitoramento de Aplicações com Grafana e Prometheus",
      excerpt: "Como configurar uma stack completa de observabilidade para suas aplicações Node.js usando ferramentas open-source.",
      category: "Monitoring",
      readTime: "12 min",
      date: "10 Jan 2025",
      featured: true
    },
    {
      title: "Arquitetura de Microsserviços com Node.js e Docker",
      excerpt: "Boas práticas para design e implementação de microsserviços escaláveis usando Node.js, Docker e orquestração Kubernetes.",
      category: "Architecture",
      readTime: "15 min",
      date: "05 Jan 2025",
      featured: false
    },
    {
      title: "Segurança em DevOps: DevSecOps na Prática",
      excerpt: "Integrando segurança em todas as etapas do pipeline de desenvolvimento e deployment, com foco em automação e boas práticas.",
      category: "Security",
      readTime: "10 min",
      date: "01 Jan 2025",
      featured: false
    },
    {
      title: "Terraform e Infrastructure as Code",
      excerpt: "Gerenciando infraestrutura cloud de forma declarativa e versionada usando Terraform para múltiplos provedores de nuvem.",
      category: "Infrastructure",
      readTime: "14 min",
      date: "28 Dez 2024",
      featured: false
    },
    {
      title: "Next.js 15: Novidades e Performance",
      excerpt: "Explorando as novas funcionalidades do Next.js 15 e como elas podem melhorar a performance e experiência do desenvolvedor.",
      category: "Frontend",
      readTime: "6 min",
      date: "25 Dez 2024",
      featured: false
    }
  ];

  const categories = ["Todos", "DevOps", "Monitoring", "Architecture", "Security", "Infrastructure", "Frontend"];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog & <span className="bg-text-gradient bg-clip-text text-transparent">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compartilhando conhecimento sobre desenvolvimento, DevOps e tecnologias modernas
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Artigos em Destaque
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="default">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Últimos artigos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge variant="default" className="text-xs">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                  >
                    Ler mais
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-2xl mx-auto bg-card/50 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Quer ser notificado sobre novos artigos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Receba em primeira mão os novos conteúdos sobre DevOps, desenvolvimento e tecnologias modernas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="hover:shadow-glow transition-all duration-300">
                  Inscrever-se
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}