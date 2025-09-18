"use client";

import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { NavLinks } from "../NavLinks";

import { InternalizationToggle } from "./InternalizationToggle";
import { LoginDialog } from "./LoginDialog";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

export function Header() {
  const auth = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const session = auth.data;
  return (
    <header
      className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70  border-b border-border/50"
          : "bg-background/20 "
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
            Henrique Lima.dev
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <NavLinks
              variant="desktop"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </nav>

          <div className="flex items-center space-x-4">
            {!session && <LoginDialog />}
            {session && <UserMenu session={session} />}
            <ThemeToggle />
            <Suspense fallback={<></>}>
              <InternalizationToggle />
            </Suspense>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="xl:hidden bg-card/50 backdrop-blur-sm border-border/50"
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
          <nav className="xl:hidden mt-4 py-4 bg-card/80 backdrop-blur-md rounded-lg border border-border/50">
            <div className="flex flex-col space-y-4 px-4">
              <NavLinks
                variant="mobile"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
