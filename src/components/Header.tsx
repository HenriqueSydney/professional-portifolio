'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
            Henrique Lima.dev
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group font-bold"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-card/50 backdrop-blur-sm border-border/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-card/80 backdrop-blur-md rounded-lg border border-border/50">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}