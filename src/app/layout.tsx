import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { Header } from "@/components/Header";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique Lima | Professional Portfolio",
  description: "Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-BR" suppressHydrationWarning>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <div className="min-h-screen bg-background">
                <Header />
                {children}
                <Footer />
              </div>
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>

    </html>
  );
}
