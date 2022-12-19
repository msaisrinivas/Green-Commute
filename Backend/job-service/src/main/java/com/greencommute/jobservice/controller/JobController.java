package com.greencommute.jobservice.controller;

import com.greencommute.jobservice.dto.JobDTO;
import com.greencommute.jobservice.service.MapperService;
import com.greencommute.jobservice.vo.ResponseTemplateVO;
import com.greencommute.jobservice.entity.*;
import com.greencommute.jobservice.exception.UserNotFoundException;
import com.greencommute.jobservice.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private  JobsService jobService;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public  List<Job> getAllJobs() {
        return   jobService.findAll();

    }
    @GetMapping("/{id}")
    public Job findJobById(@PathVariable("id") Integer jobId) {
        if(jobService.findJobById(jobId)==null)
            throw new UserNotFoundException("id-"+ jobId);
        return jobService.findJobById(jobId);
    }

    @GetMapping("/location")
    public List<ResponseTemplateVO> findAllJobByLocation() {
        return  jobService.findAllJobByLocation();
    }

    @GetMapping("/location/{distance}")
    public List<ResponseTemplateVO> findJobByDistance(@PathVariable("distance") String distance) {
        if(jobService.findJobByDistance(distance).isEmpty()){
            throw new UserNotFoundException("Distance is not found");
        }
        return jobService.findJobByDistance(distance);
    }

    @PostMapping
    public Job createJob(@RequestBody JobDTO job){
        return jobService.saveJob(mapperService.convertToEntity(job));
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable("id") Integer jobId){
        jobService.deleteById(jobId);
    }
    @GetMapping("/{id}/location")
    public ResponseTemplateVO getJobWithLocation(@PathVariable("id") int jobId){
        return jobService.getJobWithLocation(jobId);
    }
}