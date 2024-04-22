package com.tufas.project.tufasgo.Repositories;

import com.tufas.project.tufasgo.Entities.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {
}
