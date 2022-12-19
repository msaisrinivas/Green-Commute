package com.greencommute.jobservice.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "job")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(value = AccessLevel.NONE)
    @Column(name = "id")
    private int jobId;

    @Column(name = "job_title")
    private String jobName;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "posted_date")
    private String postedDate;

    @Column(name = "due_date")
    private Date dueDate;

    @Column(name="location_id")
    private String locationId;

    @ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE,CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name = "id_skill")
    private Skill skill;

}
