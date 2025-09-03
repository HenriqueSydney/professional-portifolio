import { Card, CardContent } from "@/components/ui/card"
import { IconMap } from "@/mapper/IconMapper"
import { Skills } from "@/services/notion/getSkills"
import { Code } from "lucide-react"

interface ISkillContainer {
    category: Skills
    index: number
}

export function SkillContainer({ category, index }: ISkillContainer) {

    const LucideIcon = IconMap[category.iconName]
    const Icon = LucideIcon ? <LucideIcon className="h-6 w-6 text-primary" /> : <Code className="h-6 w-6 text-primary" />
    return (
        <Card
            key={category.category}
            className="hover:shadow-glow transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        {Icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                    {category.stack.map((skill) => (
                        <div key={skill.id} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{skill.label}</span>

                            </div>
                            <div className="w-full bg-muted rounded-full h-2 flex justify-between items-center">
                                <div
                                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}