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
      {/* 4 first projects */}
      <FeaturedProjects projects={data.projects.slice(0, 4)} />
      {/* Show all projects*/}
      <ProjectsSection projects={data.projects} />
      <Contact />
    </main>
  );
};
