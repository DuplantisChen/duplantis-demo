package com.duplantis.demo.entity;

import lombok.Data;

@Data
public class User {
    private Integer uid;

    private String password;

    private String name;

    private String sex;

    private Integer age;

    private String telephone;

    private String mail;

    private String createDate;

    private String createTime;

    private String createUser;

    private String updateDate;

    private String updateTime;

    private String updateUser;

}