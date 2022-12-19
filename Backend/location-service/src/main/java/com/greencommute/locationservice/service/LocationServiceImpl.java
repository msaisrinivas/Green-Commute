package com.greencommute.locationservice.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.greencommute.locationservice.dto.dao.LocationRepository;
import com.greencommute.locationservice.entity.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Service
public class LocationServiceImpl implements LocationService {
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private LocationRepository locationRepository;

    @Override
    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    @Override
    public Optional<Location> findLocationById(int id) {
        return locationRepository.findById(id);
    }

    @Override
    public void deleteById(int id) {
        locationRepository.deleteById(id);
    }

    @Override
    public Location saveLocation(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public int findAQI(String name) throws IOException {
        String url="http://localhost:8000/locations";
        Object[] locations = restTemplate.getForObject(url,Object[].class);
        ObjectMapper mapper = new ObjectMapper();
        assert locations != null;
        List<Object> locations1 = Arrays.asList(locations);
        for(int i = 0;i< locations.length;i++){
            String json = mapper.writeValueAsString(locations1.get(i));
            JsonNode jsonNode = mapper.readTree(json);
            JsonNode nameNode = jsonNode.get("name");
            String name1=nameNode.asText();
            JsonNode aqiNode = jsonNode.get("AQIIndex");
            int aqiIndex = aqiNode.asInt();
            if(name1.equalsIgnoreCase(name)){
                return aqiIndex;
            }
        }
        throw new IOException("cannot find AQI index for this location");


    }

    @Override
    public Location findByDistance(String distance) {
        return locationRepository.findAllByDistance(distance);
    }




}
