import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => setProjects(response.data));
  }, []);

  return (
    <div className="container mt-5">
      <h1>My Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
