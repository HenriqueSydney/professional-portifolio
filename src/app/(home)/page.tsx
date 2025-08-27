
import { Hero } from "@/app/(home)/components/Hero";
import { About } from "@/app/(home)/components/About";
import { Skills } from "@/app/(home)/components/Skills";
import { Experience } from "@/app/(home)/components/Experience";
import { Projects } from "@/app/(home)/components/Projects";
import { Blog } from "@/app/(home)/components/Blog";
import { Contact } from "@/app/(home)/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Experience />
      <Contact />
    </main>
  );
}
