package com.duplantis.demo.service.impl;

import com.duplantis.demo.constants.MsgConstants;
import com.duplantis.demo.dao.UserMapper;
import com.duplantis.demo.entity.User;
import com.duplantis.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper mapper;

    public List<User> getUserList() {
        return mapper.getAll();
    }

    public String login(Integer uid, String password) {
        if (mapper.checkUser(uid, password) == 1)
            return MsgConstants.SUCCESS_CODE;
        return MsgConstants.FAIL_CODE;
    }

    public String register(String name, String password) {
        if (mapper.checkUserExistence(name) > 0)
            return MsgConstants.FAIL_CODE;
        if (mapper.addUser(name, password) == 1)
            return String.valueOf(mapper.getUid(name));
        return MsgConstants.FAIL_CODE;
    }
}
