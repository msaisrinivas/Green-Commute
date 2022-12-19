package com.greencommute.usersjobs.dao;

import com.greencommute.usersjobs.entity.UserJob;
import com.greencommute.usersjobs.entity.UserJobComId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersJobsRepository extends JpaRepository<UserJob, UserJobComId> {
    List<UserJob> findAllByUserIdAndIsApplied(int userId, boolean aTrue);

    List<UserJob> findAllByUserIdAndIsSaved(int userId, boolean aTrue);

    UserJob findByUserIdAndJobId(int userId, int jobId);

    UserJob deleteAllByUserIdAndJobId(int userId, int jobId);

    void deleteByUserIdAndJobId(int userId, int jobId);

}
