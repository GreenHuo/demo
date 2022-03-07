package com.larch.springboot01hello.service.impl;

import com.larch.springboot01hello.controller.BaseController;
import com.larch.springboot01hello.service.MailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {

    protected static final Logger logger = LoggerFactory.getLogger(MailServiceImpl.class);

    @Autowired
    private JavaMailSender mailSender;

    @Value("${fromMail}")
    private String mailAddress;

    @Override
    public void sendSimpleMail(String to, String subject, String content) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom(mailAddress);  //发件人
        simpleMailMessage.setTo(to); //收件人
        simpleMailMessage.setSubject(subject); //主题
        simpleMailMessage.setText(content); //内容
        logger.info("文本文件：" + simpleMailMessage);
        try {
            mailSender.send(simpleMailMessage);
        } catch (MailException e) {
            e.printStackTrace();
        }
    }
}
