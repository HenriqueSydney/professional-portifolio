import { getTranslations } from "next-intl/server";

import { RelatedPost } from "./RelatedPost";

export async function RelatedPostsContainer() {
  const t = await getTranslations('blog.post')

  const relatedPosts = [
    {
      id: 2,
      slug: "monitoramento-grafana-prometheus",
      title: "Monitoramento de Aplicações com Grafana e Prometheus",
      category: "Monitoring",
      readTime: "12 min",
      date: "10 Jan 2025"
    },
    {
      id: 4,
      slug: "seguranca-devsecops-pratica",
      title: "Segurança em DevOps: DevSecOps na Prática",
      category: "Security",
      readTime: "10 min",
      date: "01 Jan 2025"
    },
    {
      id: 5,
      slug: "terraform-infrastructure-as-code",
      title: "Terraform e Infrastructure as Code",
      category: "Infrastructure",
      readTime: "14 min",
      date: "28 Dez 2024"
    }
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('relatedPosts.titleBeforeHighlight')}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              {' '}{t('relatedPosts.titleHightLight')}
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <RelatedPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}