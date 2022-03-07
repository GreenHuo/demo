package com.larch.springboot01hello.service;

import com.larch.springboot01hello.entity.User;

import java.util.List;

public interface IUserService {

    List<User> queryUser();

    int saveUser(User user);

    int updateUser(User user);
}
