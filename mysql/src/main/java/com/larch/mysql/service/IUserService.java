package com.larch.mysql.service;


import com.larch.mysql.entity.User;

import java.util.List;

public interface IUserService {

    List<User> queryUser();

    int saveUser(User user);

    int updateUser(User user);
}
