package com.larch.mysql.service.impl;

import com.larch.mysql.entity.User;
import com.larch.mysql.exception.DException;
import com.larch.mysql.mapper.UserMapper;
import com.larch.mysql.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private UserMapper userMapper;

    @Autowired
    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public List<User> queryUser() {
        List<User> all = userMapper.getAll();
        return all;
    }

    @Override
    @Transactional
    public int saveUser(User user) {
        if (null == user) {
            throw new DException("传入User对象为空");
        }
        logger.info("插入用户：{}",user);
        int save = userMapper.save(user);
        if (save <= 0) {
            throw new DException("更新失败");
        }
        return save;
    }

    @Override
    @Transactional
    public int updateUser(User user) {
        logger.info("修改用户属性：{}",user);
        if (null == user) {
            throw new DException("传入User对象为空");
        }
        int count = userMapper.updateUser(user);
        if (count <= 0) {
            throw new DException("修改失败");
        }
        return count;
    }
}
