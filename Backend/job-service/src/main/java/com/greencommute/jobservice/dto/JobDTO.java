package com.greencommute.jobservice.dto;

import com.greencommute.jobservice.entity.Skill;
import lombok.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class JobDTO {

    private int jobId;
    private String jobName;
    private String companyName;
    private String postedDate;
    private Date dueDate;
    private String locationId;
    private Skill skill;

}