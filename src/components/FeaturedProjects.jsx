import { ProjectCard } from "./ProjectCard";
import { Divider } from "./Divider";

export const FeaturedProjects = ({ projects }) => {
    return (
        <>
            <section className="featured-wrapper">
                <h2>Featured Projects</h2>

                <div className="featured-scroll">
                    {projects.map(project => (
                        <div key={project.name} className="featured-card">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>

            <Divider />
        </>
    );
};
