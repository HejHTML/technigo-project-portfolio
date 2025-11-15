import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Divider } from "./components/Divider";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ProjectsSection } from "./components/ProjectsSection";
import { Contact } from "./components/Contact";
import data from "./data.json";

export const App = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Divider />
      {/* Visa de 4 första projekten som Featured */}
      <FeaturedProjects projects={data.projects.slice(0, 4)} />
      {/* Visa alla projekt */}
      <ProjectsSection projects={data.projects} />
      <Contact />
    </main>
  );
};
