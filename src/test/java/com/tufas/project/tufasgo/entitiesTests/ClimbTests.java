package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.Climb;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ClimbTests {
    @Test
    public void climbInstanceOfClimbTest() {
        Climb climb = new Climb();
        Assertions.assertTrue(climb instanceof Climb);
    }
}
