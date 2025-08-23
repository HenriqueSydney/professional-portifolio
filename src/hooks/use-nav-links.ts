"use client";

import { usePathname } from "next/navigation";

export type NavItem = {
    href: string;
    label: string;
    type: "anchor" | "link";
};

export function useNavLinks(): NavItem[] {
    const pathName = usePathname();

    const navItemType = pathName === "/" ? "anchor" : "link";

    return [
        { href: "#about", label: "Sobre", type: navItemType },
        { href: "#skills", label: "Habilidades", type: navItemType },
        { href: "#projects", label: "Projetos", type: navItemType },
        { href: "blog", label: "Blog", type: "link" },
        { href: "#experience", label: "Experiência", type: navItemType },
        { href: "#contact", label: "Contato", type: navItemType },
    ];
}
