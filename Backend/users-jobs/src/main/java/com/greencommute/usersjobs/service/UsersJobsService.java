package com.greencommute.usersjobs.service;


import com.greencommute.usersjobs.entity.UserJob;

import java.util.List;

public interface UsersJobsService {

    List<UserJob> findAll();

    List<UserJob> findAllByUserIdSaved(int userId);

    List<UserJob> findAllByUserIdApplied(int userId);

    UserJob findByUserIdJobId(int userId, int jobId);

    UserJob saveUserJob(UserJob userJob);

    UserJob deleteByUserIdJobId(int userId, int jobId);
}
