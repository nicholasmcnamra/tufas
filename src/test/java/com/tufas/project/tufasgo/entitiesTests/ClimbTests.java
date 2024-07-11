package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.ClimbService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

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

    public static List<Climb> createMockClimbs() {
        List<Climb> mockClimbs = new ArrayList<>();


        Climb climb1 = new Climb();
        climb1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
        climb1.setArea("Acadia");
        climb1.setAreaName("Promise Land");
        climb1.setClimbName("Thunder Cat");
        climb1.setClimbGrade("5.10b");
        climb1.setLatitude(38328023.3202);
        climb1.setLongitude(-32490482.234);

        Climb climb2 = new Climb();
        climb2.setClimbId("23739w8f-hy98sf-ns7518-99ghbnj4332");
        climb2.setArea("Acadia");
        climb2.setAreaName("Promise Land");
        climb2.setClimbName("Man Cave");
        climb2.setClimbGrade("5.12d");
        climb2.setLatitude(38328023.3202);
        climb2.setLongitude(-32490482.234);

        mockClimbs.add(climb1);
        mockClimbs.add(climb2);

        return mockClimbs;
    }

}
