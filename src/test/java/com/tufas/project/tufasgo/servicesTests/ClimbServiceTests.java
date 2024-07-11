package com.tufas.project.tufasgo.servicesTests;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.ClimbRepository;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static com.tufas.project.tufasgo.entitiesTests.ClimbTests.createMockClimbs;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

public class ClimbServiceTests {
    @Mock
    private ClimbRepository climbRepository;

    @InjectMocks
    private ClimbService climbService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testIndex() {
        List<Climb> climbs = createMockClimbs();

        when(climbRepository.findAll()).thenReturn(climbs);

        Iterable<Climb> result = climbService.index();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(climbs, result);
    }

    @Test
    public void testShow() {
        List<Climb> climbs = createMockClimbs();

        when(climbRepository.findById("23749w8f-sf98sf-ns8348-99sfdvj4332")).thenReturn(Optional.of(climbs.get(0)));

        Climb result = climbService.show("23749w8f-sf98sf-ns8348-99sfdvj4332");

        Assertions.assertNotNull(result);
        Assertions.assertEquals(climbs.get(0), result);
    }

    @Test
    public void testCreate() {
        List<Climb> climbs = createMockClimbs();

        when(climbRepository.save(climbs.get(0))).thenReturn(climbs.get(0));

        Climb result = climbService.create(climbs.get(0));

        Assertions.assertNotNull(result);
        Assertions.assertEquals(climbs.get(0), result);
    }

    @Test
    public void testUpdate() {
        List<Climb> climbs = createMockClimbs();
        Climb newClimbData = climbs.get(0);
        newClimbData.setClimbGrade("5.10a");

        when(climbRepository.findById("23749w8f-sf98sf-ns8348-99sfdvj4332")).thenReturn(Optional.of(climbs.get(0)));
        when(climbRepository.save(climbs.get(0))).thenReturn(climbs.get(0));

        Climb result = climbService.update("23749w8f-sf98sf-ns8348-99sfdvj4332", newClimbData);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(newClimbData.getClimbGrade(), result.getClimbGrade());
    }

    @Test
    public void testDelete() {
        doNothing().when(climbRepository).deleteById("23749w8f-sf98sf-ns8348-99sfdvj4332");

        Assertions.assertTrue(climbService.delete("23749w8f-sf98sf-ns8348-99sfdvj4332"));
    }
}
