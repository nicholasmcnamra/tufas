package com.tufas.project.tufasgo.Controllers;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClimbController {
    private ClimbService service;

    public ClimbController(ClimbService service) {
        this.service = service;
    }
    @GetMapping("/climbs")
    public ResponseEntity<Iterable<Climb>> index() {
        return new ResponseEntity<>(service.index(), HttpStatus.OK);
    }
    @GetMapping("/climb/{id}")
    public ResponseEntity<Climb> show(@PathVariable Long id) {
        return new ResponseEntity<>(service.show(id), HttpStatus.OK);
    }
    @PostMapping("/climbs")
    public ResponseEntity<Climb> create(@RequestBody Climb climb) {
        return new ResponseEntity<>(service.create(climb), HttpStatus.CREATED);
    }
    @PutMapping("/climb/{id}")
    public ResponseEntity<Climb> update(@PathVariable Long id, @RequestBody Climb climb) {
        return new ResponseEntity<>(service.update(id, climb), HttpStatus.OK);
    }
    @DeleteMapping("/climb/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }
}
