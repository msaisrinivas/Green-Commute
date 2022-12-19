package com.greencommute.locationservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greencommute.locationservice.controller.LocationController;
import com.greencommute.locationservice.dto.dao.LocationRepository;
import com.greencommute.locationservice.entity.Location;
import com.greencommute.locationservice.service.LocationService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LocationController.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = LocationServiceApplication.class)
class LocationServiceApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private LocationService locationService;

    @Autowired
    private LocationController locationController;

    @MockBean
    private LocationRepository locationRepository;

    private Location firstLocation;
    private Location secLocation;

    @BeforeEach
    void setup(){
        firstLocation = new Location(1,"Hyderabad","Ameerpet","503111","Telangana","0 - 10 Kms");
        secLocation = new Location(2,"Mumbai","Bandra","503503","Maharastra","21 - 30 Kms");
    }

    @DisplayName("All Locations")
    @Test
    void allLocationsTest() throws Exception {
        List<Location> locations = new ArrayList<>(Arrays.asList(firstLocation,secLocation));
        Mockito.when(locationController.allcities()).thenReturn(locations);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/locations")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].city",Matchers.is("Hyderabad")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].city",Matchers.is("Mumbai")));
    }

    @DisplayName("Locations Get By Id")
    @Test
    void locationByIdTest() throws Exception {
        Mockito.when(locationService.findLocationById(1)).thenReturn(Optional.ofNullable(firstLocation));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/locations/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.areaId",Matchers.is(1)));
    }

    @DisplayName("Locations Get By Id Exception")
    @Test
    void locationByIdExceptionTest() throws Exception {
        Mockito.when(locationService.findLocationById(1)).thenReturn(Optional.ofNullable(null));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/locations/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(404))
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message",Matchers.is("id-1")));
    }

    @DisplayName("Delete Locations Get By Id")
    @Test
    void deleteLocationByIdTest() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/locations/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @DisplayName("Locations Get By Distance")
    @Test
    void locationByDistanceTest() throws Exception {
        Mockito.when(locationService.findByDistance("0 - 10 Kms")).thenReturn(firstLocation);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/locations/distance/0 - 10 Kms")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.distance",Matchers.is("0 - 10 Kms")));
    }

}