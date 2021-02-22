package com.duplantis.demo.dao;

import com.duplantis.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    int deleteByUid(Integer uid);

    int insert(User record);

    List<User> getAll();
}