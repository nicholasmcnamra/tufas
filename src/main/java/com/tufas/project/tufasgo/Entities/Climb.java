package com.tufas.project.tufasgo.Entities;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;
@Entity
public class Climb {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long climbId;
    private String climbName;
    private String climbType;
    private String climbGrade;
    private Double latitude;
    private Double longitude;
    @ManyToMany
    @JoinTable(name = "climbsByUsers", joinColumns = @JoinColumn(name="climbId", referencedColumnName = "climbId"),
    inverseJoinColumns = @JoinColumn(name = "userId", referencedColumnName = "userId"))
    private List<User> climbLog;

    public Climb(Long climbId, String climbName, String climbType, String climbGrade, Double latitude, Double longitude, List<User> climbLog) {
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

    public Long getClimbId() {
        return climbId;
    }

    public void setClimbId(Long climbId) {
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
