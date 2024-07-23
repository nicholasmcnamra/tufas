package com.tufas.project.tufasgo.controllerTest;

import com.tufas.project.tufasgo.Controllers.ClimbController;
import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import com.tufas.project.tufasgo.Security.CustomUserDetailsService;
import com.tufas.project.tufasgo.Security.JwtRequestFilter;
import com.tufas.project.tufasgo.Services.ClimbService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@WebMvcTest(ClimbController.class)
@AutoConfigureMockMvc(addFilters = false)
public class ClimbControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ClimbService climbService;
    @MockBean
    private UserRepository userRepository;

    @MockBean
    private JwtRequestFilter jwtRequestFilter;

    @MockBean
    private CustomUserDetailsService customUserDetailsService;

    @Test
    public void createClimbAddUserTest() throws Exception {
        Climb climb = new Climb();
        climb.setClimbId("45rjfw-84ndf-19shf-72fbe");

        List<User> userList = new ArrayList<>();
        climb.setClimbLog(userList);

        when(climbService.create(any(Climb.class))).thenReturn(climb);
        when(climbService.addUserToClimbLog(anyString(), anyLong(), anyString())).thenReturn(climb);

        mockMvc.perform(post("/api/climbs/createAndAddUser")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{"
                        + "\"climb\": {"
                        + "\"climbId\": \"45rjfw-84ndf-19shf-72fbe\","
                        + "\"climbName\": \"Test Climb\","
                        + "\"area\": \"Test Area\","
                        + "\"areaName\": \"Test Area Name\","
                        + "\"climbType\": \"Sport\","
                        + "\"climbDescription\": null,"
                        + "\"gradeType\": \"5.--\","
                        + "\"climbGrade\": \"5.10\","
                        + "\"latitude\": 45.0,"
                        + "\"longitude\": -123.0"
                        + "},"
                        + "\"userId\": 1"
                        + "}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(userList.size()));
    }
}
