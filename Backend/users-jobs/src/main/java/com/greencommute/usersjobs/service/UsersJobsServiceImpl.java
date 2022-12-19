package com.greencommute.usersjobs.service;

import com.greencommute.usersjobs.dao.UsersJobsRepository;
import com.greencommute.usersjobs.entity.UserJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UsersJobsServiceImpl implements UsersJobsService {

    @Autowired
    private UsersJobsRepository usersJobsRepository;
    @Override
    public List<UserJob> findAll() {
        return usersJobsRepository.findAll();
    }

    @Override
    public List<UserJob> findAllByUserIdSaved(int userId) {
        return usersJobsRepository.findAllByUserIdAndIsSaved(userId,true);
    }

    @Override
    public List<UserJob> findAllByUserIdApplied(int userId) {
        return usersJobsRepository.findAllByUserIdAndIsApplied(userId,true);
    }

    @Override
    public UserJob findByUserIdJobId(int userId, int jobId) {
        return usersJobsRepository.findByUserIdAndJobId(userId,jobId);
    }

    @Override
    public UserJob saveUserJob(UserJob userJob) {
        return usersJobsRepository.save(userJob);
    }

    @Override
    @Transactional
    public UserJob deleteByUserIdJobId(int userId, int jobId) {
        UserJob deleteUserJob = usersJobsRepository.findByUserIdAndJobId(userId,jobId);
        usersJobsRepository.deleteByUserIdAndJobId(userId,jobId);
        return deleteUserJob;
    }
}
