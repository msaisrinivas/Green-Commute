package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.JobDTO;
import com.greencommute.jobservice.entity.Job;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Slf4j
@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public Job convertToEntity(JobDTO jobDTO){
        try{
            return modelMapper.map(jobDTO, Job.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }
}
