import { AlertCircle, ExternalLink, Github } from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { getTranslations } from "next-intl/server";

import { Tooltip } from "@/components/Tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { githubRepositories } from "@/services/gitHub/githubRepositories";

import { Link } from "@/i18n/navigation";

import { ProjectModal } from "./ProjectModal";

const MAX_NUMBER_OF_FEATURES = 6;

export async function Projects() {
  const [t, projects] = await Promise.all([
    getTranslations("homepage.projects"),
    githubRepositories(),
  ]);

  if (projects === null) return null;

  const getIcon = (iconName: IconName) => (
    <DynamicIcon name={iconName} className="h-8 w-8 text-primary" />
  );

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title.beforeHighlight")}{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getIcon(project.icon);
            const slicedDescription = `${project.description.slice(0, 300)}...`;
            const numberOfFeatures = project.features.length;
            return (
              <Card
                key={index}
                className="h-full group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        {IconComponent}
                      </div>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="h-full space-y-6">
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex flex-col gap-8">
                        <p className="text-muted-foreground leading-relaxed">
                          {slicedDescription}
                          <Tooltip description={project.description}>
                            <AlertCircle className="inline ml-1 w-4 h-4 cursor-pointer text-gray-400" />
                          </Tooltip>
                        </p>
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                            {t("technologies.title")}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, i) => {
                              if (i >= MAX_NUMBER_OF_FEATURES) return null;

                              return (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  <span>
                                    {i === MAX_NUMBER_OF_FEATURES - 1 &&
                                    numberOfFeatures > MAX_NUMBER_OF_FEATURES
                                      ? t("features.more")
                                      : feature}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                            {t("technologies.title")}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="cursor-default text-xs py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-4 pt-4">
                        <Link href={project.link} target="_blank">
                          <Button
                            variant="default"
                            size="sm"
                            className="hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                            {t("buttons.code")}
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </Button>
                        </Link>
                        <ProjectModal projectInfo={project} />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        <div
          className="text-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Link href="https://github.com/HenriqueSydney" target="_blank">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              {t("buttons.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
