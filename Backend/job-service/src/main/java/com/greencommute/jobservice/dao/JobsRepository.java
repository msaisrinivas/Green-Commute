package com.greencommute.jobservice.dao;

import com.greencommute.jobservice.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobsRepository extends JpaRepository<Job,Integer> {
    Job findByJobId(int jobId);

}
