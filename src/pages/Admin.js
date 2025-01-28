import React, { useState } from "react";
import { addProject, deleteProject } from "../services/api";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = { title, description, technologies, link };
    await addProject(project);
    window.location.reload(); // Refresh the page to show the new project
  };

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Technologies"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default Admin;
