package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	List<Comment> findByProjectId(Long projectId);
}
