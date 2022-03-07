package com.larch.ratelimitguava.guavademo.annotation;

import org.springframework.core.annotation.AliasFor;

import java.lang.annotation.*;
import java.util.concurrent.TimeUnit;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RateLimiter {
    int NOT_LIMITED = 0;

    //@AliasFor 声明一个别名
    @AliasFor("qps") double value() default NOT_LIMITED;

    @AliasFor("value") double qps() default NOT_LIMITED;

    //超时时长
    int timeout() default 0;

    //超时等待时长
    TimeUnit timeUnit() default TimeUnit.MILLISECONDS;
}
