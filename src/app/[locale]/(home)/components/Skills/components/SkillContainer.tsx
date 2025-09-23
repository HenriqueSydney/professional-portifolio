import { Code } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Skills } from "@/services/notion/getSkillsFromNotion";

import { IconMap } from "@/mappers/IconMapper";
import { skillLevelsMapper } from "@/mappers/skillsMapper";

interface ISkillContainer {
  category: Skills;
  index: number;
}

export function SkillContainer({ category, index }: ISkillContainer) {
  const LucideIcon = IconMap[category.iconName];
  const Icon = LucideIcon ? (
    <LucideIcon className="h-6 w-6 text-primary" />
  ) : (
    <Code className="h-6 w-6 text-primary" />
  );
  return (
    <Card
      key={category.category}
      className="hover:shadow-glow transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">{Icon}</div>
          <h3 className="text-xl font-semibold">{category.category}</h3>
        </div>

        <div className="space-y-4">
          {category.stack
            .sort((a, b) => {
              return b.level - a.level;
            })
            .map((skill) => {
              const levelInfo = skillLevelsMapper(skill.level);
              return (
                <div
                  key={skill.label}
                  className="flex items-center justify-between"
                >
                  <span className="font-medium">{skill.label}</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-medium ${levelInfo.color}`}>
                      {levelInfo.label}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            i < levelInfo.dots
                              ? levelInfo.color === "text-primary"
                                ? "bg-primary"
                                : levelInfo.color === "text-accent"
                                  ? "bg-accent"
                                  : "bg-muted-foreground-text"
                              : "bg-muted"
                          }`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </CardContent>
    </Card>
  );
}
