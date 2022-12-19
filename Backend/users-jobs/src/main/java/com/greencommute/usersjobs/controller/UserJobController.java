package com.greencommute.usersjobs.controller;

import com.greencommute.usersjobs.dto.UserJobDTO;
import com.greencommute.usersjobs.entity.UserJob;
import com.greencommute.usersjobs.exception.UserNotFoundException;
import com.greencommute.usersjobs.service.MapperService;
import com.greencommute.usersjobs.service.UsersJobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/userjobs")
public class UserJobController {

    @Autowired
    private UsersJobsService usersJobsService;

    @Autowired
    private MapperService mapperService;

    @GetMapping("")
    public List<UserJob> allUserJobs()
    {
        return usersJobsService.findAll();
    }

    @GetMapping("/{userId}/saved")
    public List<UserJob> allUserSaved(@PathVariable("userId") int userId)
    {
        return usersJobsService.findAllByUserIdSaved(userId);
    }

    @GetMapping("/{userId}/applied")
    public List<UserJob> allUserApplied(@PathVariable("userId") int userId)
    {
        return usersJobsService.findAllByUserIdApplied(userId);
    }

    @GetMapping("/{userId}/jobs/{jobId}")
    public UserJob userJob(@PathVariable("userId") int userId, @PathVariable("jobId") int jobId)
    {
        if(usersJobsService.findByUserIdJobId(userId,jobId) == null)
            throw new UserNotFoundException("userId:"+userId+" jobId:"+jobId);
        return usersJobsService.findByUserIdJobId(userId,jobId);
    }

    @PostMapping("")
    public UserJob postUserJob(@RequestBody UserJobDTO userJob)
    {
        return usersJobsService.saveUserJob(mapperService.convertToEntity(userJob));
    }

    @DeleteMapping("/{userId}/jobs/{jobId}")
    public UserJob deleteUserJob(@PathVariable("userId") int userId, @PathVariable("jobId") int jobId)
    {
        return usersJobsService.deleteByUserIdJobId(userId,jobId);
    }

    @PatchMapping("/{userId}/jobs/{jobId}")
    public UserJob patchUserJob(@PathVariable("userId") int userId, @PathVariable("jobId") int jobId,@RequestBody Map<Object, Object> fields)
    {
        UserJob userJob = usersJobsService.findByUserIdJobId(userId,jobId);
        fields.forEach((key , value) -> {
            Field field = ReflectionUtils.findField(UserJob.class, (String) key);
            ReflectionUtils.makeAccessible(field);
            ReflectionUtils.setField(field,userJob,value);
        } );
        return usersJobsService.saveUserJob(userJob);
    }
}