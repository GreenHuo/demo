package com.larch.mysql.controller;

import com.larch.mysql.db.annotation.DataSourceSelector;
import com.larch.mysql.db.constants.DynamicDataSourceEnum;
import com.larch.mysql.entity.User;
import com.larch.mysql.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Random;
import java.util.UUID;

@RestController
public class UserController extends BaseController {

    private IUserService userService;

    @Autowired
    public void setUserService(IUserService userService) {
        this.userService = userService;
    }

    @DataSourceSelector(value = DynamicDataSourceEnum.SLAVE)
    @RequestMapping("/users/getUserList")
    public Object getUserList() {
        return userService.queryUser();
    }

    @DataSourceSelector(value = DynamicDataSourceEnum.MASTER)
    @PostMapping(value = "/users/saveUser")
    public Object saveUser(User user, String error) {
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
