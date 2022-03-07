package com.larch.mq.conf;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class DirectReceiver {

    @RabbitHandler
    @RabbitListener(queues = "myDirectQueue")
    public void processA(String msg) {
        System.out.println("myDirectQueue " + msg);
    }
}
