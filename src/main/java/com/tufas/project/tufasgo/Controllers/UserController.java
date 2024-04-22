package com.tufas.project.tufasgo.Controllers;

import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }
    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> index() {
        return new ResponseEntity<>(service.index(), HttpStatus.OK);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> show(@PathVariable Long id) {
        return new ResponseEntity<>(service.show(id), HttpStatus.OK);
    }
    @PostMapping("/users")
    public ResponseEntity<User> create(@RequestBody User user) {
        return new ResponseEntity<>(service.create(user), HttpStatus.CREATED);
    }
    @PutMapping("/user/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user) {
        return new ResponseEntity<>(service.update(id, user), HttpStatus.OK);
    }
    @DeleteMapping("/user/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }

}
