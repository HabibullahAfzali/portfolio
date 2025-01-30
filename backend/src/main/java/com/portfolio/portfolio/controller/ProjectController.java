package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.entity.Project;
import com.portfolio.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
	@Autowired
	private ProjectService projectService;

	@GetMapping
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}

	@PostMapping
	public ResponseEntity<Project> createProject(@RequestBody Project project) {
		Project savedProject = projectService.createProject(project);
		return ResponseEntity.ok(savedProject);
	}

	@DeleteMapping("/{id}")
	public void deleteProject(@PathVariable Long id) {
		projectService.deleteProject(id);
	}
}
