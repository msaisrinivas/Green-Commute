package com.greencommute.jobservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greencommute.jobservice.controller.JobController;
import com.greencommute.jobservice.dao.JobsRepository;
import com.greencommute.jobservice.dto.JobDTO;
import com.greencommute.jobservice.entity.Job;
import com.greencommute.jobservice.service.JobsService;
import com.greencommute.jobservice.service.MapperService;
import com.greencommute.jobservice.vo.ResponseTemplateVO;
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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(JobServiceApplication.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes=JobController.class)
@ComponentScan("com.greencommute.jobservice")
class JobServiceApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	JobsService jobService;

	@MockBean
	JobsRepository jobsRepository;

	@Autowired
	private ObjectMapper mapper;

	@Autowired
	private MapperService mapperService;

	@Autowired
	JobController jobController;

	@Autowired
	private WebApplicationContext wac;

	private Job job1;
	private Job job2;

	@BeforeEach
	void setup(){
		job1=new Job(1,"ui/ux designer","myntra","2 min ago",null,"1",null);
		job2=new Job(2,"software tester","ZEMOSO","28 min ago",null,"2",null);
	}

	@DisplayName("All Jobs")
	@Test
	void allUserJobsTest() throws Exception {
		List<Job> jobs = new ArrayList<>(Arrays.asList(job1, job2));
		when(jobController.getAllJobs()).thenReturn(jobs);

		mockMvc.perform(get("/jobs")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));
	}


	@DisplayName(" Get job By Id ")
	@Test
	void JobByIdTest() throws Exception {
		Mockito.when(jobService.findJobById(1)).thenReturn(job1);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/jobs/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(200));
	}

	@DisplayName(" Get job By Id Exception")
	@Test
	void JobByIdTestException() throws Exception {
		Mockito.when(jobService.findJobById(1)).thenReturn(null);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/jobs/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(404))
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
				.andExpect(MockMvcResultMatchers.jsonPath("$.message",Matchers.is("id-1")));

	}

	@DisplayName("Delete User Job")
	@Test
	void deleteUserJobTest() throws Exception {
		job1=new Job(1,"ui/ux designer","mantra","2 min ago",null,"1",null);
		MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.delete("http://localhost:9003/jobs/1")
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.content(mapper.writeValueAsString(job1));

		ResultActions postUserJobResult =  mockMvc.perform(mockRequest);
		MvcResult testResult = postUserJobResult
				.andExpect(status().isOk())
				.andReturn();
	}

	@DisplayName("Insert User Job")
	@Test
	void createJobTest() throws Exception {
		job1=new Job(1,"ui/ux designer","mantra","2 min ago",null,"1",null);
		JobDTO jobDTO = new JobDTO(1,"ui/ux designer","mantra","2 min ago",null,"1",null);
		Mockito.when(jobController.createJob(jobDTO)).thenReturn(job1);

		MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("http://localhost:9003/jobs")
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.content(mapper.writeValueAsString(jobDTO));

		ResultActions postUserJobResult =  mockMvc.perform(mockRequest);
		MvcResult testResult = postUserJobResult
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
				.andReturn();
	}

	@DisplayName("Get Jobs by location ")
	@Test
	void jobsByLocationTest() throws Exception {
		List<Job> jobs = new ArrayList<>(Arrays.asList(job1, job2));
		List<ResponseTemplateVO> vo = new ArrayList<>();
		when(jobController.findAllJobByLocation()).thenReturn(vo);

		mockMvc.perform(get("/jobs/location")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(0)));
	}

	@DisplayName("Get job with location by id ")
	@Test
	void jobsLocationByLocationTest() throws Exception {
		List<Job> jobs = new ArrayList<>(Arrays.asList(job1, job2));
		List<ResponseTemplateVO> vo = new ArrayList<>();
		when(jobController.findAllJobByLocation()).thenReturn(vo);

		mockMvc.perform(get("/jobs/1/location")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@DisplayName(" Get jobLocation by distance ")
	@Test
	void JobByDistanceTest() throws Exception {
		List<Job> jobs = new ArrayList<>(Arrays.asList(job1, job2));
		List<ResponseTemplateVO> vo = new ArrayList<>();
		Mockito.when(jobService.findJobByDistance("10 - 20 Kms")).thenReturn(vo);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/jobs/location/10 - 20 Kms")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(404));
	}

	@DisplayName(" Get jobLocation by distance Exception ")
	@Test
	void JobByDistanceExceptionTest() throws Exception {
		List<Job> jobs = new ArrayList<>(Arrays.asList(job1, job2));
		List<ResponseTemplateVO> vo = new ArrayList<>();
		Mockito.when(jobService.findJobByDistance("10Kms")).thenReturn(vo);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/jobs/location/10Kms")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(404));
	}
}