"use client";

import { Copy, ExternalLink,Mail, MessageCircle, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ShareButton() {
  const t = useTranslations("blog.post.socialAction");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const shareData = {
    title: t("shareButton.shareData.title"),
    text: t("shareButton.shareData.text"),
    url,
  };

  // Função principal de compartilhamento
  const handleShare = async () => {
    // Verifica se o navegador suporta Web Share API (principalmente mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // Se o usuário cancelar ou ocorrer erro, mostra menu alternativo
        if (error instanceof Error && error.name !== "AbortError") {
          setShowShareMenu(true);
        }
      }
    } else {
      // Fallback para desktop - mostra menu de opções
      setShowShareMenu(true);
    }
  };

  // Copia o link para a área de transferência
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback para navegadores que não suportam clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = shareData.url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Compartilhamento via WhatsApp
  const shareWhatsApp = () => {
    const message = encodeURIComponent(`${shareData.text}\n${shareData.url}`);
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  // Compartilhamento via Email
  const shareEmail = () => {
    const subject = encodeURIComponent(shareData.title);
    const body = encodeURIComponent(`${shareData.text}\n\n${shareData.url}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  // Compartilhamento via Twitter
  const shareTwitter = () => {
    const text = encodeURIComponent(`${shareData.text} ${shareData.url}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const shareOptions = [
    {
      id: "copy",
      label: t("shareButton.menu.copyLink"),
      labelSuccess: t("shareButton.menu.copyLinkSuccess"),
      icon: Copy,
      iconColor: "text-zinc-600 dark:text-zinc-400",
      handler: copyToClipboard,
      hasSuccessState: true,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      iconColor: "text-green-600",
      handler: shareWhatsApp,
      hasSuccessState: false,
    },
    {
      id: "email",
      label: "Email",
      icon: Mail,
      iconColor: "text-blue-600",
      handler: shareEmail,
      hasSuccessState: false,
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: ExternalLink,
      iconColor: "text-sky-600",
      handler: shareTwitter,
      hasSuccessState: false,
    },
  ];

  return (
    <div className="relative">
      {/* Botão principal */}
      <Button
        onClick={handleShare}
        variant="outline"
        className="gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
      >
        <Share2 className="w-4 h-4 mr-2" />
        {t("shareButton.button.text")}
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
              {t("shareButton.menu.title")}
            </div>

            {shareOptions.map((option) => {
              const IconComponent = option.icon;

              return (
                <button
                  key={option.id}
                  onClick={option.handler}
                  className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-colors"
                >
                  <IconComponent className={`h-4 w-4 ${option.iconColor}`} />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    {option.hasSuccessState && option.id === "copy"
                      ? copied
                        ? option.labelSuccess
                        : option.label
                      : option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
