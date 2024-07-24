package com.tufas.project.tufasgo.Entities;

import jakarta.persistence.*;

@Entity
public class ClimbLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String area;
    @ManyToOne
    private Climb climb;
    @ManyToOne
    private User user;
    public ClimbLog(String area, Climb climb, User user) {
        this.area = area;
        this.climb = climb;
        this.user = user;
    }
    public ClimbLog() {

    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Climb getClimb() {
        return climb;
    }

    public void setClimb(Climb climb) {
        this.climb = climb;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}