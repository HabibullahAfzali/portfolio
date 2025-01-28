package com.portfolio.portfolio.entity;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Entity
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String content;
	private LocalDateTime createdAt;

	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project project;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	// Getters and Setters
}
