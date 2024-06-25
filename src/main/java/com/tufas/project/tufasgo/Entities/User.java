package com.tufas.project.tufasgo.Entities;

import jakarta.persistence.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String firstName;
    private String lastName;
    @Column(name = "username", nullable = false, unique = true)
    private String userName;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String email;
    private Instant registeredOn;
    private Instant lastLogin;
    @ManyToMany
    @JoinTable(name = "userClimbs", joinColumns = @JoinColumn(name="userId", referencedColumnName = "userId"),
            inverseJoinColumns = @JoinColumn(name="climbId", referencedColumnName = "climbId"))
    private List<Climb> userClimbs;


    public User(Long userId, String firstName, String lastName, String userName, String password, String email, Instant registeredOn, Instant lastLogin, List<Climb> userClimbs) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.registeredOn = registeredOn;
        this.lastLogin = lastLogin;
        this.userClimbs = userClimbs;
    }

    public User(String firstName, String lastName, String userName, String password, String email, Instant registeredOn, Instant lastLogin, List<Climb> userClimbs) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.registeredOn = registeredOn;
        this.lastLogin = lastLogin;
        this.userClimbs = userClimbs;
    }

    public User() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Instant getRegisteredOn() {
        return registeredOn;
    }

    public void setRegisteredOn(Instant registeredOn) {
        this.registeredOn = registeredOn;
    }

    public Instant getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Instant lastLogin) {
        this.lastLogin = lastLogin;
    }

    public List<Climb> getUserClimbs() {
        return userClimbs;
    }

    public void setUserClimbs(List<Climb> userClimbs) {
        this.userClimbs = userClimbs;
    }
}
