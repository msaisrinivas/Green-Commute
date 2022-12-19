package com.greencommute.usersjobs.service;

import com.greencommute.usersjobs.dto.UserJobDTO;
import com.greencommute.usersjobs.entity.UserJob;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Slf4j
@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public UserJob convertToEntity(UserJobDTO userJobDTO){
        try{
            return modelMapper.map(userJobDTO, UserJob.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }
}

