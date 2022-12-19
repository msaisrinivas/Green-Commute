package com.greencommute.jobservice.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {

    private int areaId;
    private String city;
    private String area;
    private String zipCode;
    private String stateName;
    private String distance;

}