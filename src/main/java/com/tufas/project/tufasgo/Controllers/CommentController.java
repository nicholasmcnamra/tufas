package com.tufas.project.tufasgo.Controllers;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.Comment;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommentController {
    private CommentService service;

    public CommentController(CommentService service) {
        this.service = service;
    }
    @GetMapping("/comments")
    public ResponseEntity<Iterable<Comment>> index() {
        return new ResponseEntity<>(service.index(), HttpStatus.OK);
    }
    @GetMapping("/comment/{id}")
    public ResponseEntity<Comment> show(@PathVariable Long id) {
        return new ResponseEntity<>(service.show(id), HttpStatus.OK);
    }
    @PostMapping("/comments")
    public ResponseEntity<Comment> create(@RequestBody Comment comment) {
        return new ResponseEntity<>(service.create(comment), HttpStatus.CREATED);
    }
    @PutMapping("/comment/{id}")
    public ResponseEntity<Comment> update(@PathVariable Long id, @RequestBody Comment comment) {
        return new ResponseEntity<>(service.update(id, comment), HttpStatus.OK);
    }
    @DeleteMapping("/comment/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }
}
