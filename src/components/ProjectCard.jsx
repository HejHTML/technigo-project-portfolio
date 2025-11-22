export const ProjectCard = ({ project }) => {
    const imageUrl = new URL(`../assets/${project.image}`, import.meta.url).href;

    return (
        <div className="project-card">
            <img src={imageUrl} alt={project.name} className="project-image" />

            <h3 className="project-title">{project.name}</h3>

            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>

            <div className="project-buttons">
                <a href={project.netlify} className="btn btn-live" target="_blank" rel="noopener noreferrer">
                    Live demo
                </a>
                <a href={project.github} className="btn btn-code" target="_blank" rel="noopener noreferrer">
                    View code
                </a>
            </div>
        </div>
    );
};
