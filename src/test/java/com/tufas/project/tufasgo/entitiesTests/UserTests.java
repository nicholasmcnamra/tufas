package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class UserTests {
    
    public static List<User> createMockUsers() {
        List<User> mockUsers = new ArrayList<>();

        Instant registered = Instant.now();
        Instant lastLogin = Instant.now();

        User user1 = new User();
        user1.setFirstName("Harris");
        user1.setLastName("Jaedel");
        user1.setUserName("hjaedel55");
        user1.setPassword("32rf8hf98ufEW#@$@csjs__sefsa");
        user1.setEmail("hjaedel@gmail.com");
        user1.setRegisteredOn(registered);
        user1.setLastLogin(lastLogin);

        User user2 = new User();
        user2.setFirstName("Amy");
        user2.setLastName("Mann");
        user2.setUserName("amann56");
        user2.setPassword("W#@$@csjs_dfshf9fsa_sefsa");
        user2.setEmail("amann@gmail.com");
        user2.setRegisteredOn(registered);
        user2.setLastLogin(lastLogin);

        mockUsers.add(user1);
        mockUsers.add(user2);

        return mockUsers;
    }

    @Test
    public void userInstanceOfUserTest() {
        User user = new User();
        Assertions.assertTrue(user instanceof User);
    }

    @Test
    public void getFirstNameTest() {
        User user = createMockUsers().get(0);
        String userFirstName = "Harris";
        Assertions.assertEquals(userFirstName, user.getFirstName());
    }

    @Test
    public void getLastNameTest() {
        User user = createMockUsers().get(1);
        String userLastName = "Mann";
        Assertions.assertEquals(userLastName, user.getLastName());
    }

    @Test
    public void getUsernameTest() {
        User user = createMockUsers().get(1);
        String username = "amann56";
        Assertions.assertEquals(username, user.getUserName());
    }

    @Test
    public void getPasswordTest() {
        User user = createMockUsers().get(1);
        String password = "W#@$@csjs_dfshf9fsa_sefsa";
        Assertions.assertEquals(password, user.getPassword());
    }

    @Test
    public void getEMailTest() {
        User user = createMockUsers().get(1);
        String eMail = "amann@gmail.com";
        Assertions.assertEquals(eMail, user.getEmail());
    }

    @Test
    public void getRegisteredInstant() {
        User user = createMockUsers().get(1);
        Assertions.assertNotNull(user.getRegisteredOn());
    }

    @Test
    public void getLastLoginInstant() {
        User user = createMockUsers().get(1);
        Assertions.assertNotNull(user.getLastLogin());
    }
}
