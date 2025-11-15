import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = ({ projects }) => {
    return (
        <section className="projects">
            <h2>All Projects</h2>

            <div className="grid">
                {projects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};
