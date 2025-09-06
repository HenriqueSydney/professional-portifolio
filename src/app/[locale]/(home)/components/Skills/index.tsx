
import { getTranslations } from "next-intl/server";

import { getSkills } from "@/services/notion/getSkills";

import { SkillContainer } from "./components/SkillContainer";

export async function Skills() {
  const [t, skillCategoriesResponse] = await Promise.all([
    getTranslations('homepage.skills'),
    getSkills()
  ])
  const [skillCategoriesError, skillCategories] = skillCategoriesResponse

  if (skillCategoriesError) return null

  return (
    <section id="skills" className="py-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title.beforeSpan')} <span className="bg-text-gradient bg-clip-text text-transparent">{t('title.span')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            {t('note')}
          </p>
        </div>

        <div className="space-y-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.slice(0, 2).map((category, index) => (
              <SkillContainer key={category.id} category={category} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillCategories.slice(2, 5).map((category, index) => (
              <SkillContainer key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}