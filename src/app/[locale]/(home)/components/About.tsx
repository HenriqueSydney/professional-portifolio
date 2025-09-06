import { Briefcase, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

import { getProfileStats } from "@/services/notion/getProfileStats";

import { IconMap } from "@/mapper/IconMapper";

export async function About() {

  const [t, statsResponse] = await Promise.all([
    getTranslations('homepage.about'),
    getProfileStats()
  ])
  const [statsError, statsSuccess] = statsResponse

  return (
    <section id="about" className="py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title.beforeHighlight')} <span className="bg-text-gradient bg-clip-text text-transparent">{t('title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('intro.part1')} <strong className="text-foreground">{t('intro.highlight')}</strong> {t('intro.part2')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">{t('journey.title')}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('journey.paragraphs.p1.part1')} <strong className="text-foreground">{t('journey.paragraphs.p1.highlight1')}</strong>,
                {' '}{t('journey.paragraphs.p1.part2')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p1.highlight2')}</strong>{t('journey.paragraphs.p1.part3')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p1.highlight3')}</strong>.
              </p>
              <p>
                {t('journey.paragraphs.p2.part1')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p2.highlight1')}</strong>
                {' '}{t('journey.paragraphs.p2.part2')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p2.highlight2')}
                  {' '}<u>{t('journey.paragraphs.p2.underline')}</u>
                </strong>.
              </p>
              <p>
                {t('journey.paragraphs.p3.part1')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p3.highlight1')}</strong>
                {' '}{t('journey.paragraphs.p3.part2')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p3.highlight2')} </strong>
                {' '}{t('journey.paragraphs.p3.part3')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p3.highlight3')}</strong>
                {' '}{t('journey.paragraphs.p3.part4')}
                {' '}<strong className="text-foreground"> {t('journey.paragraphs.p3.highlight4')} </strong>,
                {' '}{t('journey.paragraphs.p3.part5')}
                {' '}<strong className="text-foreground">{t('journey.paragraphs.p3.highlight5')} </strong>.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span> {t('journey.location')}</span>
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