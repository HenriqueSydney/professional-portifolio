import { About } from "@/app/[locale]/(home)/components/About";
import { Blog } from "@/app/[locale]/(home)/components/Blog";
import { Hero } from "@/app/[locale]/(home)/components/Hero";
import { Projects } from "@/app/[locale]/(home)/components/Projects";
import { Skills } from "@/app/[locale]/(home)/components/Skills";

import { Certifications } from "./components/Certifications/Certifications";
import { Experience } from "./components/Experience";

export default async function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Certifications />
      <Skills />
      <Experience />
    </main>
  );
}
