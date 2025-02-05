import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage error

  useEffect(() => {
    // Fetch the projects when the component mounts
    const fetchProjects = async () => {
      try {
        const response = await getProjects(); // Fetch data from the API
        setProjects(response.data); // Update the projects state with API data
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchProjects(); // Trigger the fetch
  }, []); // Empty dependency array to run only on mount

  // Handle loading state
  if (loading) {
    return <div>Loading projects...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row">
      {projects.map((project) => (
        <div className="col-md-4 mb-4" key={project.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <p className="text-muted">{project.technologies}</p>
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
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
