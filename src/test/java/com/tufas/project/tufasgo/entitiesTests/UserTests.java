package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UserTests {
    @Test
    public void userInstanceOfUserTest() {
        User user = new User();
        Assertions.assertTrue(user instanceof User);
    }
}
