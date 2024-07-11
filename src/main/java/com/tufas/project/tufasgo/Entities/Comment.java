package com.tufas.project.tufasgo.Entities;

import jakarta.persistence.*;

import java.time.Instant;
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String climbId;
    private String message;
    private Instant created;
    private Instant updated;
    @ManyToOne
    @JoinColumn(name= "sender_id", referencedColumnName = "userId")
    private User sender;

    public Comment(Long id, String climbId, String message, Instant created, Instant updated, User sender) {
        this.id = id;
        this.climbId = climbId;
        this.message = message;
        this.created = created;
        this.updated = updated;
        this.sender = sender;
    }

    public Comment(String climbId, String message, Instant created, Instant updated, User sender) {
        this.climbId = climbId;
        this.message = message;
        this.created = created;
        this.updated = updated;
        this.sender = sender;
    }

    public Comment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClimbId() {
        return climbId;
    }

    public void setClimbId(String climbId) {
        this.climbId = climbId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }

    public Instant getUpdated() {
        return updated;
    }

    public void setUpdated(Instant updated) {
        this.updated = updated;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }
}
