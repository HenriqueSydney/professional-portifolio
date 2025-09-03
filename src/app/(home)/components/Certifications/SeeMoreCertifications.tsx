'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SeeMoreCertifications() {
    const [isOpen, setIsOpen] = useState(false)

    function handleSeeMoreCertifications() {
        const certificationContainer = document.querySelector('#certification_container')

        if (certificationContainer) {
            if (isOpen) {
                certificationContainer.classList.add('max-h-[300px]')
            } else {
                certificationContainer.classList.remove('max-h-[300px]')
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
                {!isOpen ? 'Veja mais' : 'Ver menos'}
            </Button>
        </div>
    )
}