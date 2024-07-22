package com.tufas.project.tufasgo.Controllers;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.ClimbRequestArea;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.beans.Transient;
import java.util.List;

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
    public ResponseEntity<Climb> show(@PathVariable String id) {
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
    public ResponseEntity<Climb> update(@PathVariable String id, @RequestBody Climb climb) {
        return new ResponseEntity<>(service.update(id, climb), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/climb/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Boolean> destroy(@PathVariable String id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/{climbId}/addUserClimb/{userId}")
    @PreAuthorize("isAuthenticated")
    public ResponseEntity<List<User>> addUserToClimbLog(@PathVariable String climbId, @PathVariable Long userId, @RequestBody ClimbRequestArea area) {
        try {
            Climb climb = service.addUserToClimbLog(climbId, userId, area.getArea());
            return new ResponseEntity<>(climb.getClimbLog(), HttpStatus.OK);
        }
        catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping("/climbs/createAndAddUser")
    @PreAuthorize("isAuthenticated()")
    @Transactional
    public ResponseEntity<List<User>> addClimbAndUser(@RequestBody Climb climb, @RequestParam Long userId, @RequestBody ClimbRequestArea area) {
        try {
            Climb newClimb = service.create(climb);
            Climb climbLog = service.addUserToClimbLog(newClimb.getClimbId(), userId, area.getArea());
            return new ResponseEntity<>(climbLog.getClimbLog(), HttpStatus.OK);
        }
        catch (RuntimeException exception) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch (Exception exception) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
