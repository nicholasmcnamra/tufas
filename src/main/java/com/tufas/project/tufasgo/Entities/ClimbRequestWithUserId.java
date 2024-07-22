package com.tufas.project.tufasgo.Entities;

public class ClimbRequestWithUserId {
    private Climb climb;
    private Long userId;

    public ClimbRequestWithUserId(Climb climb, Long userId) {
        this.climb = climb;
        this.userId = userId;
    }

    public Climb getClimb() {
        return climb;
    }
    public void setClimb(Climb climb) {
        this.climb = climb;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
