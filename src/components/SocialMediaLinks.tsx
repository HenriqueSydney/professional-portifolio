import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export function SocialMediaLinks() {
    const socialLinks = [
        { icon: Github, href: "https://github.com/henriquesydney", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/henriquesydney", label: "LinkedIn" },
        { icon: Instagram, href: "https://instagram.com/henriquesydney", label: "Instagram" },
        { icon: Facebook, href: "https://facebook.com/henriquesydney", label: "Facebook" },
    ];

    return (
        <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social) => (
                <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                    asChild
                >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                    </a>
                </Button>
            ))}
        </div>
    )

}