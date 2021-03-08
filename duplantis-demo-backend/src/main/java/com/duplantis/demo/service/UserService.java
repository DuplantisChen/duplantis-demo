package com.duplantis.demo.service;

import com.duplantis.demo.entity.User;

import java.util.List;
import java.util.Map;

public interface UserService {

    public List<User> getUserList();

    String login(Integer uid, String password);

    String register(String name, String password);
}
