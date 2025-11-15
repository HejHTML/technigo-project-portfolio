export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />

            <h3 className="project-title">{project.name}</h3>

            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>

            <div className="project-buttons">
                <a href={project.netlify} className="btn btn-live" target="_blank">
                    Live demo
                </a>
                <a href={project.github} className="btn btn-code" target="_blank">
                    View code
                </a>
            </div>
        </div>
    );
};
