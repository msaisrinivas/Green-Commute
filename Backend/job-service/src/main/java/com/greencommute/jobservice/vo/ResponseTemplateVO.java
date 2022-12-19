package com.greencommute.jobservice.vo;

import com.greencommute.jobservice.entity.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {
    private Job job;
    private Location location;

}
