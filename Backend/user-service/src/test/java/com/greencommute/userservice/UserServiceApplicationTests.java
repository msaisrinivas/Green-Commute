package com.greencommute.userservice;

import com.greencommute.userservice.controller.UserController;
import com.greencommute.userservice.dao.UserRepository;
import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.service.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserServiceApplication.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes= UserController.class)
@ComponentScan("com.greencommute.userservice")
class UserServiceApplicationTests {
	@Autowired
	MockMvc mockMvc;

	@MockBean
	UserService userService;

	@MockBean
	UserRepository userRepository;

	@Autowired
	UserController userController;

	@Autowired
	private WebApplicationContext wac;

	private User user1;
	private User user2;

	@BeforeEach
	void setup(){
		user1 =new User(1,"Arifa","ari@","123","arifa.pdf");
		user2 =new User(2,"yas","yas@","yas","yas.pdf");
	}
	@DisplayName("All Jobs")
	@Test
	void allUsersTest() throws Exception {
		List<User> users = new ArrayList<>(Arrays.asList(user1,user2));
		when(userController.allUsers()).thenReturn(users);

		mockMvc.perform(get("/users")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));
	}


	@DisplayName("User Get By Id Exception")
	@Test
	void userByIdExceptionTest() throws Exception {
		Mockito.when(userService.findById(1)).thenReturn(Optional.ofNullable(null));

		mockMvc.perform(MockMvcRequestBuilders
						.get("/users/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(404))
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
				.andExpect(MockMvcResultMatchers.jsonPath("$.message",Matchers.is("id-1")));
	}

	@DisplayName("User Get By Id")
	@Test
	void userByIdTest() throws Exception {
		Mockito.when(userService.findById(1)).thenReturn(Optional.ofNullable(user1));

		mockMvc.perform(MockMvcRequestBuilders
						.get("/users/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(200))
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
				.andExpect(MockMvcResultMatchers.jsonPath("$.userId",Matchers.is(1)));
	}


}
