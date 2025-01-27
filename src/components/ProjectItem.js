import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <p className="card-text">
          <small className="text-muted">
            Technologies: {project.technologies}
          </small>
        </p>
        <a
          href={project.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
