package com.larch.mq.controller;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RabbitMQController {

    @Autowired
    private AmqpTemplate amqpTemplate;

    @RequestMapping("/send")
    public String send() {
        String msg = "hello rabbit";
       amqpTemplate.convertAndSend("myDirectExchange","my.direct.routing", msg);

        return "success";
    }
}
