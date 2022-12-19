package com.greencommute.userservice.controller;

import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.exception.UserNotFoundException;
import com.greencommute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> allUsers(){
        return  userService.findAll();

    }
    @GetMapping("users/{id}")
    public Optional<User> findUserById(@PathVariable("id") int userId) {
        if(!userService.findById(userId).isPresent())
            throw new UserNotFoundException("id-"+ userId);
        return userService.findById(userId);
    }

}


