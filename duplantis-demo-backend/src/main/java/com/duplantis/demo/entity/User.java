package com.duplantis.demo.entity;

import com.sun.istack.internal.NotNull;
import lombok.Data;

@Data
public class User {
    @NotNull
    private Integer uid;

    @NotNull
    private String password;

    @NotNull
    private String name;

    @NotNull
    private String sex;

    @NotNull
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