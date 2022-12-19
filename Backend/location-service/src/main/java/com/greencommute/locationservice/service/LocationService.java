package com.greencommute.locationservice.service;

import com.greencommute.locationservice.entity.Location;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public interface LocationService {
    List<Location> findAll();

    Optional<Location> findLocationById(int id);

    void deleteById(int id);

    Location saveLocation(Location location);

    int findAQI(String name) throws IOException;

    Location findByDistance(String distance);



}
