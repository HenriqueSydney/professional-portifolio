
import { Hero } from "@/app/(home)/components/Hero";
import { About } from "@/app/(home)/components/About";
import { Skills } from "@/app/(home)/components/Skills";
import { Projects } from "@/app/(home)/components/Projects";
import { Blog } from "@/app/(home)/components/Blog";
import { Contact } from "@/app/(home)/components/contact/Contact";
import { Certifications } from "./components/Certifications/Certifications";
import { Experience } from "./components/Experience";

export default async function Home() {


  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
