'use client'

import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function SeeMoreCertifications() {
  const t = useTranslations('homepage.certifications')
  const [isOpen, setIsOpen] = useState(false)

  function handleSeeMoreCertifications() {
    const certificationContainer = document.querySelector('#certification_container')

    if (certificationContainer) {
      if (isOpen) {
        certificationContainer.classList.add('max-h-[500px]')
      } else {
        certificationContainer.classList.remove('max-h-[500px]')
      }

      setIsOpen(prevState => !prevState)
    }
  }

  return (
    <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <Button
        variant="default"
        size="lg"
        className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300"
        onClick={handleSeeMoreCertifications}
      >
        {!isOpen ? t('buttons.seeMore') : t('buttons.seeLess')}
      </Button>
    </div>
  )
}