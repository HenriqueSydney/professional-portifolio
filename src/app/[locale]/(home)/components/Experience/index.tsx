import { getTranslations } from "next-intl/server";

import { getExperience } from "@/services/notion/getExperience";

import { Experiences } from "./Experiences";

export async function Experience() {

  const [t, experienceResponse] = await Promise.all([
    getTranslations('homepage.experience'),
    getExperience()
  ])

  const [experienceError, experienceSuccess] = experienceResponse
  if (experienceError) return null



  return (
    <section id="experience" className="py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title.beforeHighlight')} <span className="bg-text-gradient bg-clip-text text-transparent">{t('title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Experiences experiences={experienceSuccess} />
        </div>
      </div>
    </section>
  );
}