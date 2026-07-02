import { Hero } from "@/components/sections/Hero";
import { Venture } from "@/components/sections/Venture";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col" style={{ gap: "var(--spacing-80)" }}>
      <Hero />
      <Venture />
      <Work />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}
