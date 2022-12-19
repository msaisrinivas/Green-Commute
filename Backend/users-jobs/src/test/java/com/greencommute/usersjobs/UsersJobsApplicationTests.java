package com.greencommute.usersjobs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greencommute.usersjobs.UsersJobsApplication;
import com.greencommute.usersjobs.controller.UserJobController;
import com.greencommute.usersjobs.dao.UsersJobsRepository;
import com.greencommute.usersjobs.dto.UserJobDTO;
import com.greencommute.usersjobs.entity.UserJob;
import com.greencommute.usersjobs.service.MapperService;
import com.greencommute.usersjobs.service.UsersJobsService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;

import java.util.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserJobController.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = UsersJobsApplication.class)
@ComponentScan("com.greencommute.usersjobs")
class UsersJobsApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

	@MockBean
    private UsersJobsService usersJobsService;

    @Autowired
    private UserJobController userJobController;

    @MockBean
    private UsersJobsRepository usersJobsRepository;

    @Autowired
    private MapperService mapperService;

    @Autowired
    private WebApplicationContext wac;

    private UserJob firstUserJob;
    private UserJob secUserJob;

    @BeforeEach
    void setup(){
        firstUserJob = new UserJob(1,1,true,false);
        secUserJob = new UserJob(2,1,false,true);
    }

    @DisplayName("All User Jobs")
    @Test
    void allUserJobsTest() throws Exception {
        List<UserJob> userJobs = new ArrayList<>(Arrays.asList(firstUserJob,secUserJob));
        Mockito.when(userJobController.allUserJobs()).thenReturn(userJobs);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("http://localhost:9005/userjobs")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].saved",Matchers.is(true)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].saved",Matchers.is(false)));
    }

    @DisplayName("User All Saved Jobs")
    @Test
    void allUserSavedTest() throws Exception {
        List<UserJob> userJobs = new ArrayList<>(Arrays.asList(firstUserJob));
        Mockito.when(userJobController.allUserSaved(1)).thenReturn(userJobs);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("http://localhost:9005/userjobs/1/saved")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].saved",Matchers.is(true)));
    }

    @DisplayName("User All Applied Jobs")
    @Test
    void allUserAppliedTest() throws Exception {
        List<UserJob> userJobs = new ArrayList<>(Arrays.asList(secUserJob));
        Mockito.when(userJobController.allUserApplied(2)).thenReturn(userJobs);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("http://localhost:9005/userjobs/2/applied")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].applied",Matchers.is(true)));
    }

    @DisplayName("Get By User and Job Id")
    @Test
    void userJobTest() throws Exception {
        Mockito.when(usersJobsService.findByUserIdJobId(1,1)).thenReturn(firstUserJob);
        Mockito.when(userJobController.userJob(1,1)).thenReturn(firstUserJob);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("http://localhost:9005/userjobs/1/jobs/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.userId",Matchers.is(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.jobId",Matchers.is(1)));
    }

    @DisplayName("Insert User Job")
    @Test
    void postUserJobTest() throws Exception {
        UserJob userJobNew = new UserJob(3,1,true,true);
        UserJobDTO userJobDTO = new UserJobDTO(3,1,true,true);
        Mockito.when(userJobController.postUserJob(userJobDTO)).thenReturn(userJobNew);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("http://localhost:9005/userjobs")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(userJobDTO));

        ResultActions postUserJobResult =  mockMvc.perform(mockRequest);
        MvcResult testResult = postUserJobResult
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
                .andReturn();
    }

    @DisplayName("Delete User Job")
    @Test
    void deleteUserJobTest() throws Exception {
        UserJob userJobNew = new UserJob(3,1,true,true);
        Mockito.when(userJobController.deleteUserJob(3,1)).thenReturn(userJobNew);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.delete("http://localhost:9005/userjobs/3/jobs/1")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(userJobNew));

        ResultActions postUserJobResult =  mockMvc.perform(mockRequest);
        MvcResult testResult = postUserJobResult
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
                .andReturn();
    }

    @DisplayName("Patch User Job")
    @Test
    void patchUserJobTest() throws Exception {
        UserJob userJobNew = new UserJob(3,1,false,true);
        UserJob userJobNewAfter = new UserJob(3,1,true,true);
        HashMap<Object, Object> map = new HashMap<Object, Object>();
        map.put("isSaved",true);
        Mockito.when(usersJobsService.findByUserIdJobId(3,1)).thenReturn(userJobNew);
        Mockito.when(userJobController.patchUserJob(3,1,map)).thenReturn(userJobNewAfter);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.patch("http://localhost:9005/userjobs/3/jobs/1")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(map));

        ResultActions postUserJobResult =  mockMvc.perform(mockRequest);
        MvcResult testResult = postUserJobResult
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
                .andReturn();
    }

}
