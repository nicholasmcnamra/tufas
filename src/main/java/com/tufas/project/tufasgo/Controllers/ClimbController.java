package com.tufas.project.tufasgo.Controllers;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
public class ClimbController {
    private ClimbService service;

    public ClimbController(ClimbService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/climbs")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Iterable<Climb>> index() {
        return new ResponseEntity<>(service.index(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/climb/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Climb> show(@PathVariable Long id) {
        return new ResponseEntity<>(service.show(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/climbs")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Climb> create(@RequestBody Climb climb) {
        return new ResponseEntity<>(service.create(climb), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/climb/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Climb> update(@PathVariable Long id, @RequestBody Climb climb) {
        return new ResponseEntity<>(service.update(id, climb), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/climb/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }
}
