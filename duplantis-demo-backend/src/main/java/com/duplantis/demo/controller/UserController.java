package com.duplantis.demo.controller;

import com.duplantis.demo.entity.User;
import com.duplantis.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @GetMapping
    public List<User> getUserList() {
        return userService.getUserList();
    }

    @CrossOrigin
    @RequestMapping(value="/login", method=RequestMethod.POST, consumes="application/json")
    public String login(@RequestBody Map<String, Object> requestMap) {
        Integer uid = Integer.valueOf((String) requestMap.get("uid"));
        String password = (String) requestMap.get("password");
        String result = userService.login(uid, password);
        return result;
    }

    @CrossOrigin
    @RequestMapping(value="/register", method=RequestMethod.POST, consumes="application/json")
    public String register(@RequestBody Map<String, Object> requestMap) {
        String name = (String) requestMap.get("name");
        String password = (String) requestMap.get("password");
        String result = userService.register(name, password);
        return result;
    }
}
