package com.tufas.project.tufasgo.Controllers;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.ClimbLog;
import com.tufas.project.tufasgo.Entities.ClimbRequestWithUserId;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.beans.Transient;
import java.util.List;

@RequestMapping("/api")
@RestController
public class ClimbController {
    private ClimbService service;
    private UserService userService;

    public ClimbController(ClimbService service, UserService userService) {
        this.service = service;
        this.userService = userService;
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
    @PreAuthorize("isAuthenticated()")
    @Transactional
    public ResponseEntity<ClimbLog> addUserToClimbLog(@PathVariable String climbId, @PathVariable Long userId, @RequestBody Climb climb) {
        try {
            Climb newClimb = service.create(climb);
            System.out.print("Climb added to climb table: " + newClimb);
            ClimbLog newClimbLog = service.addUserToClimbLog(climbId, userId, climb.getArea());
            System.out.println("ClimbLog added: " + newClimbLog);
            return new ResponseEntity<>(newClimbLog, HttpStatus.OK);
        }
        catch (RuntimeException e) {
            System.out.println(climb.getAreaName());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch (Exception e) {
            System.out.println("Server error");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/climblog/{userId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Iterable<ClimbLog>> getUserClimbs(@PathVariable Long userId) {
        User user = userService.show(userId);
        return new ResponseEntity<>(service.getUserClimbLog(user), HttpStatus.OK);
    }
}
