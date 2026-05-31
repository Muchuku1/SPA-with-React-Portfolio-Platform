import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
      />

      <div className="content">
        <h3>{project.title}</h3>
        <span>{project.category}</span>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;