'use client'

import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"



export function GoBackButton() {
    return (
        <Button asChild variant='outline' size="lg" className="group">
            <button onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Página Anterior
            </button>
        </Button>
    )
}