'use client'

import { Button } from "@/components/ui/button"
import { Share2, Copy, MessageCircle, Mail, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function ShareButton() {
    const [showShareMenu, setShowShareMenu] = useState(false)
    const [copied, setCopied] = useState(false)
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(window.location.href)
        }
    }, [])

    const shareData = {
        title: "Artigo interessante que encontrei",
        text: "Confira este artigo muito interessante!",
        url
    }

    // Função principal de compartilhamento
    const handleShare = async () => {
        // Verifica se o navegador suporta Web Share API (principalmente mobile)
        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (error) {
                // Se o usuário cancelar ou ocorrer erro, mostra menu alternativo
                if (error instanceof Error && error.name !== 'AbortError') {
                    setShowShareMenu(true)
                }
            }
        } else {
            // Fallback para desktop - mostra menu de opções
            setShowShareMenu(true)
        }
    }

    // Copia o link para a área de transferência
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareData.url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            // Fallback para navegadores que não suportam clipboard API
            const textArea = document.createElement('textarea')
            textArea.value = shareData.url
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    // Compartilhamento via WhatsApp
    const shareWhatsApp = () => {
        const message = encodeURIComponent(`${shareData.text}\n${shareData.url}`)
        window.open(`https://wa.me/?text=${message}`, '_blank')
    }

    // Compartilhamento via Email
    const shareEmail = () => {
        const subject = encodeURIComponent(shareData.title)
        const body = encodeURIComponent(`${shareData.text}\n\n${shareData.url}`)
        window.open(`mailto:?subject=${subject}&body=${body}`)
    }

    // Compartilhamento via Twitter
    const shareTwitter = () => {
        const text = encodeURIComponent(`${shareData.text} ${shareData.url}`)
        window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
    }

    return (
        <div className="relative">
            {/* Botão principal */}
            <Button
                onClick={handleShare}
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
            </Button>


            {/* Menu de opções (fallback para desktop) */}
            {showShareMenu && (
                <>
                    {/* Overlay para fechar o menu */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowShareMenu(false)}
                    />

                    {/* Menu de compartilhamento */}
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 z-50 p-2">
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 px-3 py-2 border-b border-zinc-200 dark:border-zinc-700">
                            Compartilhar este artigo
                        </div>

                        {/* Copiar link */}
                        <button
                            onClick={copyToClipboard}
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors"
                        >
                            <Copy className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                {copied ? 'Link copiado!' : 'Copiar link'}
                            </span>
                        </button>

                        {/* WhatsApp */}
                        <button
                            onClick={shareWhatsApp}
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors"
                        >
                            <MessageCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                WhatsApp
                            </span>
                        </button>

                        {/* Email */}
                        <button
                            onClick={shareEmail}
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors"
                        >
                            <Mail className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                Email
                            </span>
                        </button>

                        {/* Twitter */}
                        <button
                            onClick={shareTwitter}
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors"
                        >
                            <ExternalLink className="h-4 w-4 text-sky-600" />
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                Twitter
                            </span>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

// Exemplo de uso completo em um artigo
export function ArticleWithShare() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 min-h-screen">
            <article className="prose dark:prose-invert max-w-none">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">
                        Como implementar compartilhamento em aplicações web
                    </h1>
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                            Publicado em 28 de agosto, 2025
                        </div>
                        <ShareButton />
                    </div>
                </header>

                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                    <p>
                        O compartilhamento de conteúdo é uma funcionalidade essencial para qualquer aplicação web moderna.
                        Com a Web Share API, podemos criar experiências nativas de compartilhamento que funcionam perfeitamente
                        tanto em desktop quanto em dispositivos móveis.
                    </p>

                    <p>
                        A implementação inteligente detecta automaticamente as capacidades do dispositivo e oferece a melhor
                        experiência possível: compartilhamento nativo no mobile e um menu customizado no desktop.
                    </p>

                    <p>
                        Esta solução inclui fallbacks para navegadores mais antigos e múltiplas opções de compartilhamento,
                        garantindo que todos os usuários possam compartilhar seu conteúdo facilmente.
                    </p>
                </div>
            </article>
        </div>
    )
}