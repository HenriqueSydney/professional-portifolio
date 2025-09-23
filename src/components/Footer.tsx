import { Code, Coffee, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { NavLinks } from "./NavLinks";
import { SocialMediaLinks } from "./SocialMediaLinks";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="mt-16 py-12 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              Henrique Lima.dev — {t("role")}
            </div>
            <p className="text-muted-foreground">
              {t("descriptionBeforeHighlight")}{" "}
              <strong className="text-foreground">
                {t("descriptionHighlight")}
              </strong>{" "}
              {t("descriptionAfterHighlight")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{t("navLink.title")}</h3>
            <nav className="flex flex-col items-start justify-start space-y-2">
              <NavLinks variant="footer" />
            </nav>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">{t("contact.title")}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>henriquesydneylima@gmail.com</p>
                <p>(61) 99512-5151</p>
                <p>{t("contact.locale")}</p>
              </div>
            </div>

            <SocialMediaLinks />
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{t("bottom.madeWith")}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <Code className="h-4 w-4 text-primary" />
              <span>{t("bottom.andMuch")}</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>

            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {t("bottom.copyright")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
