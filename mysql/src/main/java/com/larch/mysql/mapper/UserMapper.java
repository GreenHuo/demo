package com.larch.mysql.mapper;


import com.larch.mysql.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    public List<User> getAll();

    public int save(User user);

    @Update("UPDATE users SET username=#{username},nick_name=#{nickName},sex=#{sex},update_time=#{updateTime} WHERE ID=#{id}")
    public int updateUser(User user);

}
