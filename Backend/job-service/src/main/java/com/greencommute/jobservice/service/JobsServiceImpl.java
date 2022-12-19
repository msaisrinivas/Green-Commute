package com.greencommute.jobservice.service;

import com.greencommute.jobservice.vo.Location;
import com.greencommute.jobservice.vo.ResponseTemplateVO;
import com.greencommute.jobservice.dao.JobsRepository;
import com.greencommute.jobservice.entity.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobsServiceImpl implements JobsService{

    @Autowired
    private JobsRepository jobsRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public List<Job> findAll() {
        return jobsRepository.findAll();
    }

    public Job findJobById(int jobId) {
        return jobsRepository.findByJobId(jobId);
    }

    @Value("${location.url}")
    private String locationUrl;

    @Override
    public List<ResponseTemplateVO> findJobByDistance(String distance) {
        List<ResponseTemplateVO> voList = new ArrayList<>();
        List<Job> jobs = jobsRepository.findAll();
        for(Job job : jobs ){
            Location location = restTemplate.getForObject(locationUrl+job.getLocationId(),Location.class);
            if(location!=null && location.getDistance().equals(distance)){
                ResponseTemplateVO vo = new ResponseTemplateVO();
                vo.setJob(job);
                vo.setLocation(location);
                voList.add(vo);
            }
        }
        return voList;
    }

    @Override
    public List<ResponseTemplateVO> findAllJobByLocation() {
        List<ResponseTemplateVO> voList = new ArrayList<>();
        List<Job> jobs = jobsRepository.findAll();
        for(Job job : jobs ){
            Location location = restTemplate.getForObject(locationUrl+job.getLocationId(),Location.class);
                ResponseTemplateVO vo = new ResponseTemplateVO();
                vo.setJob(job);
                vo.setLocation(location);
                voList.add(vo);
        }
        return voList;
    }



    @Override
    public Job saveJob(Job job) {
        return jobsRepository.save(job);
    }

    @Override
    public void deleteById(int jobId) {
         jobsRepository.deleteById(jobId);
    }

    @Override
    public ResponseTemplateVO getJobWithLocation(int jobId) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
        Job job = jobsRepository.findByJobId(jobId);

        Location location = restTemplate.getForObject(locationUrl+job.getLocationId(),Location.class);
        vo.setJob(job);
        vo.setLocation(location);
        return vo;
    }



}
