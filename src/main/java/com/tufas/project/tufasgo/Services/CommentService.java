package com.tufas.project.tufasgo.Services;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.Comment;
import com.tufas.project.tufasgo.Repositories.ClimbRepository;
import com.tufas.project.tufasgo.Repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private CommentRepository repository;
    @Autowired
    public CommentService(CommentRepository repository) {
        this.repository = repository;
    }

    public Iterable<Comment> index() {
        return repository.findAll();
    }

    public Comment show(Long id) {
        return repository.findById(id).get();
    }

    public Comment create(Comment comment) {
        return repository.save(comment);
    }

    public Comment update(Long id, Comment newCommentData) {
        Comment originalComment = repository.findById(id).get();
        originalComment.setSender(newCommentData.getSender());
        originalComment.setClimbId(newCommentData.getClimbId());
        originalComment.setMessage(newCommentData.getMessage());
        return repository.save(originalComment);
    }

    public Boolean delete(Long id) {
        repository.deleteById(id);
        return true;
    }
}
