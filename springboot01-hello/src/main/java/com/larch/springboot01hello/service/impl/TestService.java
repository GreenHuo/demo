package com.larch.springboot01hello.service.impl;

import com.larch.springboot01hello.Exception.DException;
import com.larch.springboot01hello.annotation.GuavaRetrying;
import org.springframework.stereotype.Service;

@Service
public class TestService {

    private static int count = 0;

    @GuavaRetrying(exceptionClass = DException.class,attemptNumber = 10,waitStrategySleepTime = 10)
    public Boolean getProductId() {
        count ++;
        try {
            if (count != 5) {
               return false;
            }
            System.out.println("count : " + count);
            return true;
        } catch (DException e) {
            throw new DException("手动抛出异常" + e.getMessage());
        }
    }
}
