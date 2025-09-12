import { GraduationCap, Shield } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

import { CertificationsBlockList } from "./CertificationsBlockList";
import { SeeMoreCertifications } from "./SeeMoreCertifications";
import { getCertifications } from "@/services/profileInformation/getCertifications";

export async function Certifications() {
  const [t, certificationResponse] = await Promise.all([
    getTranslations("homepage.certifications"),
    getCertifications(),
  ]);

  const [certificationsError, certificationsSuccess] = certificationResponse;

  if (certificationsError) return null;

  return (
    <section id="certifications" className="py-15 bg-muted/30">
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
        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Card
            id="certification_container"
            className="relative max-h-[500px] sm:max-h-[300px] hover:shadow-glow transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-8 overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <CertificationsBlockList
                  title={t("blocks.certifications")}
                  Icon={Shield}
                  list={certificationsSuccess.certifications}
                />
                <div className="w-px bg-border" />
                <CertificationsBlockList
                  title={t("blocks.courses")}
                  Icon={GraduationCap}
                  list={certificationsSuccess.courses}
                  numberOfColumns={2}
                  highlight={false}
                />
              </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm  pointer-events-none" />
          </Card>
          <SeeMoreCertifications />
        </div>
      </div>
    </section>
  );
}
