import axios from "axios";

const API_URL = "http://localhost:8080/api"; // Replace with your backend URL

// Fetch all projects
export const getProjects = () => axios.get(`${API_URL}/projects`);

// Add a new project
export const addProject = (project) =>
  axios.post(`${API_URL}/projects`, project);

// Add a comment
export const addComment = (projectId, userId, content) =>
  axios.post(`${API_URL}/comments`, { projectId, userId, content });

// Delete a comment
export const deleteComment = (id) => axios.delete(`${API_URL}/comments/${id}`);
