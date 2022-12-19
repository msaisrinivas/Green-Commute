package com.greencommute.userservice.service;

import com.greencommute.userservice.dao.UserRepository;
import com.greencommute.userservice.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(int userId) {
        return userRepository.findById(userId);
    }
}
