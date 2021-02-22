package com.duplantis.demo.controller;

import com.duplantis.demo.dao.UserMapper;
import com.duplantis.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserMapper mapper;

    @CrossOrigin
    @GetMapping
    public List<User> getUserList() {
        System.out.println(mapper.getAll());
        return mapper.getAll();
    }
}
