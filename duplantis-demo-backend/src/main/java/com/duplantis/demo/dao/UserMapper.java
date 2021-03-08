package com.duplantis.demo.dao;

import com.duplantis.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    int deleteByUid(Integer uid);

    int insert(User record);

    List<User> getAll();

    int checkUser(@Param("uid") Integer uid, @Param("password") String password);

    int checkUserExistence(@Param("name") String name);

    int addUser(@Param("name") String name, @Param("password") String password);

    int getUid(@Param("name") String name);
}