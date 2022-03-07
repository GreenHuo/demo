package com.larch.springboot01hello.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GuavaRetrying {

    //异常
    Class[] exceptionClass() default {};

    //重试次数
    int attemptNumber() default 0;

    //等待时间
    long waitStrategySleepTime() default 0;

    //持续时间; 期间
    long duration() default 0;
}
