package com.greencommute.jobservice.service;

import com.greencommute.jobservice.vo.ResponseTemplateVO;
import com.greencommute.jobservice.entity.Job;

import java.util.List;

public interface JobsService {

    List<Job> findAll();

    Job findJobById(int id);


    List<ResponseTemplateVO> findAllJobByLocation();

    Job saveJob(Job job);


    void deleteById(int jobId);

    ResponseTemplateVO getJobWithLocation(int jobId);

   List<ResponseTemplateVO> findJobByDistance(String distance);

}
