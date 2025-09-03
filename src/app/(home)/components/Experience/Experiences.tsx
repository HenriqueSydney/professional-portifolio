'use client'
import { AnimatedCollapseDiv } from "@/components/AnimatedCollapseDiv";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/services/notion/getExperience";
import { AnimatePresence } from "framer-motion";
import { Building, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface IExperience {
    experiences: Experience[]
}

export function Experiences({ experiences }: IExperience) {
    const [isFullyOpen, setIsFullyOpen] = useState(false)
    const [experiencesToShow, setExperienceToShow] = useState<Experience[]>([])

    function handleToogleExperience() {
        setIsFullyOpen(prevState => !prevState)
    }

    useEffect(() => {
        const experiencesToShow = isFullyOpen
            ? [...experiences]
            : experiences.slice(0, 2)

        setExperienceToShow(experiencesToShow)
    }, [isFullyOpen, experiences])

    // Inicializar com as primeiras 2 experiências
    useEffect(() => {
        if (experiences.length > 0 && experiencesToShow.length === 0) {
            setExperienceToShow(experiences.slice(0, 2))
        }
    }, [experiences, experiencesToShow.length])

    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-12">
                <AnimatePresence>
                    {experiencesToShow.map((exp, index) => (
                        <AnimatedCollapseDiv key={index}>
                            <div
                                className={`relative flex items-center`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                                {/* Content Card */}
                                <Card className={`ml-16  hover:shadow-glow transition-all duration-300`}>
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <Badge variant="outline" className="text-xs">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {exp.period}
                                            </Badge>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>

                                        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                                            <Building className="w-4 h-4" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>

                                        <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>

                                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Principais Responsabilidades:</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                        <span>{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedCollapseDiv>
                    ))}
                </AnimatePresence>
            </div>

            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Button
                    variant="default"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300"
                    onClick={handleToogleExperience}
                >
                    {isFullyOpen ? 'Veja menos' : 'Veja mais'}
                </Button>
            </div>
        </div>
    )
}