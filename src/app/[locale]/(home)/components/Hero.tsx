"use client";

import { Download, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { httpClient } from "@/lib/httpClient";
import { downloadFileFromBlob } from "@/util/downloadFileFromBlob";
const baseUrl = "http://localhost:3000";

export function Hero() {
  const t = useTranslations("homepage.hero");

  const skills = [
    "DevOps",
    "Node.js",
    "Next.js",
    "Cloud",
    "Kubernetes",
    "Docker",
  ];

  async function handleDownloadResume() {
    const [error, blob] = await httpClient<Blob>(
      `${baseUrl}/api/resume`,
      {
        cache: "no-cache",
      },
      "blob"
    );

    if (error) {
      throw error;
    }

    downloadFileFromBlob(blob);
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute w-full inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div className="hidden lg:block absolute right-0 top-0 bottom-[-50px] w-200 group z-20">
        {/* Overlay invisível para capturar hover em toda a área */}
        <div className="absolute inset-0 bg-transparent cursor-pointer z-30"></div>

        <div className="absolute inset-0 bg-[url('/hl-image.png')] bg-no-repeat bg-center bg-contain z-10 pointer-events-none" />
        <div className="absolute right-0 top-18 w-200 h-full bg-[url('/eu.jpeg')] bg-no-repeat bg-center bg-cover z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                {/* {t("badge")} */}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t("greeting.beforeName")}{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  {t("greeting.name")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                {t("role")}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                {t("description")}
              </p>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {/* <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("contactButton")}
              </Button> */}
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="hover:bg-card hover:shadow-glow transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("downloadResumeButton")}
              </Button>
            </div>

            <SocialMediaLinks />
          </div>

          {/* Profile Images */}
          <div
            className="relative flex justify-center lg:justify-end animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
