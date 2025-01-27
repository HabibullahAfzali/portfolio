import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  // Temporary list of projects (replace this with the actual `projects` prop later)
  const tempProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a description of Project 1.",
      technologies: ["React", "Spring Boot"],
      link: "https://github.com/HabibullahAfzali/Login-Athentication-JWT",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description of Project 2.",
      technologies: ["Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a description of Project 3.",
      technologies: ["Python", "Django"],
      link: "https://github.com/yourusername/project3",
    },
  ];

  // Use the temporary list if `projects` is empty
  const displayProjects = projects.length > 0 ? projects : tempProjects;

  return (
    <div>
      {displayProjects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
