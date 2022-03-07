package com.larch.springboot01hello.service;

public interface MailService {

    /**
     * 发送普通文件邮件
     */
    void  sendSimpleMail(String to,String data,String content);
}
