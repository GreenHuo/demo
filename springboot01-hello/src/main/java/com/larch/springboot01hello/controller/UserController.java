package com.larch.springboot01hello.controller;

import com.larch.springboot01hello.entity.User;
import com.larch.springboot01hello.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

@RestController
public class UserController extends BaseController{

    private IUserService userService;

    @Autowired
    public void setUserService(IUserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/users/getUserList")
    public Object getUserList() {
        return userService.queryUser();
    }

    @RequestMapping(value = "/users/saveUser",method = RequestMethod.POST)
    public Object saveUser(User user,String error) {
        logger.info("插入用户：{}",user);
        if (null != user.getId()) {
            user.setId(null);
        }
        user.setUsername("tom" + new Random().nextInt(10));
        user.setNickName(UUID.randomUUID().toString());
        int sex = new Random().nextInt(2);
        user.setSex(String.valueOf(sex));
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        if (error.equals("true")) {
            user = null;
        }
        int count = userService.saveUser(user);
        return count > 0 ? "success" : "fail";
    }

    @RequestMapping(value = "/users/updateUser")
    public Object updateUser(User user) {
        user.setUpdateTime(new Date());
        int count = userService.updateUser(user);
        return count > 0 ? "success" : "fail";
    }

}

