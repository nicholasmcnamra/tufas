package com.tufas.project.tufasgo.servicesTests;

import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import com.tufas.project.tufasgo.Services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static com.tufas.project.tufasgo.entitiesTests.UserTests.createMockUsers;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

public class UserServiceTests {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testIndex() {
        List<User> users = createMockUsers();

        when(userRepository.findAll()).thenReturn(users);

        Iterable<User> result = userService.index();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(users, result);
    }

    @Test
    public void testShow() {
        List<User> users = createMockUsers();

        when(userRepository.findById(1L)).thenReturn(Optional.of(users.get(0)));

        User result = userService.show(1l);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(users.get(0), result);
    }

    @Test
    public void testCreate() {
        List<User> users = createMockUsers();

        when(userRepository.save(users.get(0))).thenReturn(users.get(0));

        User result = userService.create(users.get(0));

        Assertions.assertNotNull(result);
        Assertions.assertEquals(users.get(0), result);
    }

    @Test
    public void testUpdate() {
        List<User> users = createMockUsers();
        User newUserData = users.get(0);
        newUserData.setPassword("newp");

        when(userRepository.findById(1l)).thenReturn(Optional.of(users.get(0)));
        when(userRepository.save(users.get(0))).thenReturn(users.get(0));

        User result = userService.update(1L, newUserData);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(newUserData.getPassword(), result.getPassword());
    }

    @Test
    public void testDelete() {
        doNothing().when(userRepository).deleteById(1L);

        Assertions.assertTrue(userService.delete(1L));
    }
}
