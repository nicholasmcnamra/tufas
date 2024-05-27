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

    @Test
    public void getClimbNameTest() {
        Climb climb1 = new Climb();
        climb1.setClimbName("Peak Performance");
        climb1.setClimbType("Trad");
        climb1.setClimbGrade("5.10a/b");
        climb1.setLatitude(44.310803);
        climb1.setLongitude(-68.189828);

        Assertions.assertEquals("Peak Performance", climb1.getClimbName());
    }

    @Test
    public void getClimbTypeTest() {
        Climb climb1 = new Climb();
        climb1.setClimbName("Peak Performance");
        climb1.setClimbType("Trad");
        climb1.setClimbGrade("5.10a/b");
        climb1.setLatitude(44.310803);
        climb1.setLongitude(-68.189828);

        Assertions.assertEquals("Trad", climb1.getClimbType());
    }

    @Test
    public void getClimbGradeTest() {
        Climb climb1 = new Climb();
        climb1.setClimbName("Peak Performance");
        climb1.setClimbType("Trad");
        climb1.setClimbGrade("5.10a/b");
        climb1.setLatitude(44.310803);
        climb1.setLongitude(-68.189828);

        Assertions.assertEquals("5.10a/b", climb1.getClimbGrade());
    }

    @Test
    public void getLatitudeTest() {
        Climb climb1 = new Climb();
        climb1.setClimbName("Peak Performance");
        climb1.setClimbType("Trad");
        climb1.setClimbGrade("5.10a/b");
        climb1.setLatitude(44.310803);
        climb1.setLongitude(-68.189828);

        Assertions.assertEquals(44.310803, climb1.getLatitude());
    }

    @Test
    public void getLongitudeTest() {
        Climb climb1 = new Climb();
        climb1.setClimbName("Peak Performance");
        climb1.setClimbType("Trad");
        climb1.setClimbGrade("5.10a/b");
        climb1.setLatitude(44.310803);
        climb1.setLongitude(-68.189828);

        Assertions.assertEquals(-68.189828, climb1.getLongitude());
    }

}
