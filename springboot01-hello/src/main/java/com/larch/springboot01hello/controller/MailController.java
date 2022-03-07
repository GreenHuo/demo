package com.larch.springboot01hello.controller;

import com.larch.springboot01hello.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailController extends BaseController {

    @Autowired
    private MailService mailService;

    @RequestMapping("/testMail")
    public String testMail() {
        try {
            mailService.sendSimpleMail("1662353113@qq.com","test simple mail"," hello this is simple mail");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "success";
    }
}
