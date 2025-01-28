package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
