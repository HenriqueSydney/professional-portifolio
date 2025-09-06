import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { auth } from "@/auth";

import { ContactForm } from "./ContactForm";

export async function Contact() {
  const [t, session] = await Promise.all([
    getTranslations('homepage.contact'),
    auth()
  ])

  const CONTACT_INFO = [
    {
      icon: Mail,
      label: t('contactInfo.email'),
      value: "henriquesydneylima@gmail.com",
      href: "mailto:henriquesydneylima@gmail.com"
    },
    {
      icon: Phone,
      label: t('contactInfo.phone'),
      value: "(61) 99512-5151",
      href: "tel:+5561995125151"
    },
    {
      icon: MapPin,
      label: t('contactInfo.location'),
      value: "Águas Claras, Brasília - DF",
      href: "#"
    }
  ] as const

  const SOCIAL_LINKS = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/henriquesydney",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/henriquesydney",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/henriquesydney",
      color: "hover:text-pink-600"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/henriquesydney",
      color: "hover:text-blue-500"
    }
  ] as const

  return (
    <section id="contact" className="py-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title.beforeHighlight')} <span className="bg-text-gradient bg-clip-text text-transparent">{t('title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm name={session?.user.name} email={session?.user.email} />

          <div className="flex flex-col justify-between animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle>{t('contactInfo.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {CONTACT_INFO.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href === "#" ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle>{t('socialMedia.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ${social.color}`}
                    >
                      <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Card className="max-w-2xl mx-auto bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-lg">{t('availability.title')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('availability.description')}
              </p>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-3">
                <Mail className="w-4 h-4 mr-2" />
                {t('availability.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}