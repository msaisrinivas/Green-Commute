package com.greencommute.userservice.service;

import com.greencommute.userservice.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {


    List<User> findAll();

    Optional<User> findById(int userId);
}
