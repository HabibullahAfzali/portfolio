package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.entity.Comment;
import com.portfolio.portfolio.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
	@Autowired
	private CommentService commentService;

	@GetMapping("/project/{projectId}")
	public List<Comment> getCommentsByProjectId(@PathVariable Long projectId) {
		return commentService.getCommentsByProjectId(projectId);
	}

	@PostMapping
	public Comment addComment(@RequestParam Long projectId, @RequestParam Long userId, @RequestParam String content) {
		return commentService.addComment(projectId, userId, content);
	}

	@DeleteMapping("/{id}")
	public void deleteComment(@PathVariable Long id) {
		commentService.deleteComment(id);
	}
}
