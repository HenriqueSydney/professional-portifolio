const skillLevels = {
  expert: { label: "Expert", dots: 4, color: "text-primary" },
  advanced: { label: "Avançado", dots: 3, color: "text-accent" },
  intermediate: {
    label: "Intermediário",
    dots: 2,
    color: "text-muted-foreground",
  },
  beginner: { label: "Iniciante", dots: 1, color: "text-muted-foreground" },
} as const;

// Tipo para os valores do objeto skillLevels
type SkillLevel = (typeof skillLevels)[keyof typeof skillLevels];

export function skillLevelsMapper(value: number): SkillLevel {
  if (value < 0 || value > 100) {
    throw new Error("O valor precisa estar entre 0 e 100");
  }

  if (value <= 30) return skillLevels.beginner;
  if (value <= 70) return skillLevels.intermediate;
  if (value <= 90) return skillLevels.advanced;
  return skillLevels.expert;
}
