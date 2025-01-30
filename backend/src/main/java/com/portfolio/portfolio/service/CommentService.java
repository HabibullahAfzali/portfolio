package com.portfolio.portfolio.service;

import com.portfolio.portfolio.entity.Comment;
import com.portfolio.portfolio.entity.Project;
import com.portfolio.portfolio.entity.User;
import com.portfolio.portfolio.exception.ResourceNotFoundException;
import com.portfolio.portfolio.repository.CommentRepository;
import com.portfolio.portfolio.repository.ProjectRepository;
import com.portfolio.portfolio.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {
	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private UserRepository userRepository;

	public List<Comment> getCommentsByProjectId(Long projectId) {
		return commentRepository.findByProjectId(projectId);
	}

	public Comment addComment(Long projectId, Long userId, String content) {
		Project project = projectRepository.findById(projectId)
				.orElseThrow(() -> new ResourceNotFoundException("Project not found"));
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found"));

		Comment comment = new Comment();
		comment.setContent(content);
		comment.setCreatedAt(LocalDateTime.now());
		comment.setProject(project);
		comment.setUser(user);

		return commentRepository.save(comment);
	}

	public void deleteComment(Long id) {
		commentRepository.deleteById(id);
	}
}
