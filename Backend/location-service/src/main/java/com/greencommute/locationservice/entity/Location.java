package com.greencommute.locationservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "location")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Location {

    @Id
    @Setter(value = AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int areaId;
    @Column(name = "city")
    private String city;
    @Column(name = "area")
    private String area;
    @Column(name = "zip_code")
    private String zipCode;
    @Column(name = "state_name")
    private String stateName;
    @Column(name = "distance")
    private String distance;
}
