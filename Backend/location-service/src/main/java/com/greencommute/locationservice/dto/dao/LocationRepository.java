package com.greencommute.locationservice.dto.dao;

import com.greencommute.locationservice.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location,Integer> {
    Location findAllByDistance(String distance);

}
