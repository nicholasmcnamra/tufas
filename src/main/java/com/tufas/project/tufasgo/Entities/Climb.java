package com.tufas.project.tufasgo.Entities;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "climbId")
public class Climb {
    @Id
    private String climbId;
    private String climbName;
    private String climbType;
    private String climbGrade;
    private Double latitude;
    private Double longitude;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "climbs_by_users", joinColumns = @JoinColumn(name="climbId", referencedColumnName = "climbId"),
    inverseJoinColumns = @JoinColumn(name = "userId", referencedColumnName = "userId"))
    private List<User> climbLog;

    public Climb(String climbId, String climbName, String climbType, String climbGrade, Double latitude, Double longitude, List<User> climbLog) {
        this.climbId = climbId;
        this.climbName = climbName;
        this.climbType = climbType;
        this.climbGrade = climbGrade;
        this.latitude = latitude;
        this.longitude = longitude;
        this.climbLog = climbLog;
    }

    public Climb(String climbName, String climbType, String climbGrade, Double latitude, Double longitude, List<User> climbLog) {
        this.climbName = climbName;
        this.climbType = climbType;
        this.climbGrade = climbGrade;
        this.latitude = latitude;
        this.longitude = longitude;
        this.climbLog = climbLog;
    }

    public Climb() {
    }

    public String getClimbId() {
        return climbId;
    }

    public void setClimbId(String climbId) {
        this.climbId = climbId;
    }

    public String getClimbName() {
        return climbName;
    }

    public void setClimbName(String climbName) {
        this.climbName = climbName;
    }

    public String getClimbType() {
        return climbType;
    }

    public void setClimbType(String climbType) {
        this.climbType = climbType;
    }

    public String getClimbGrade() {
        return climbGrade;
    }

    public void setClimbGrade(String climbGrade) {
        this.climbGrade = climbGrade;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public List<User> getClimbLog() {
        return climbLog;
    }

    public void setClimbLog(List<User> climbLog) {
        this.climbLog = climbLog;
    }
}
