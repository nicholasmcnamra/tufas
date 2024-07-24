package com.tufas.project.tufasgo.Entities;

public class ClimbRequestWithUserId {
    private Climb climb;
    private User user;

    public ClimbRequestWithUserId(Climb climb, User user) {
        this.climb = climb;
        this.user = user;
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
