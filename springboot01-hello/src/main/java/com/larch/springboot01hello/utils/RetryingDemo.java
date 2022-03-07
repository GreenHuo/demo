package com.larch.springboot01hello.utils;

import com.github.rholder.retry.*;
import com.google.common.base.Predicates;

import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
public class RetryingDemo {

    private static Integer num = 0;

    public static void main(String[] args) throws Exception{
        Retryer<Boolean> retryer = RetryerBuilder.<Boolean>newBuilder()
                .retryIfResult(Predicates.equalTo(false)) // 返回结果 false 也重试
                .retryIfException()  //异常时重试
                .retryIfRuntimeException() //指定异常类型
                .withStopStrategy(StopStrategies.stopAfterAttempt(20)) //重试次数
                .withWaitStrategy(WaitStrategies.incrementingWait(1, TimeUnit.SECONDS, 1, TimeUnit.SECONDS))  // 重试策略
                .withRetryListener(new MyRetryListener<>())
                .build();

        retryer.call(getTokenUserCall);
    }

    private static Callable<Boolean> getTokenUserCall = new Callable<Boolean>() {
        @Override
        public Boolean call() throws Exception {
            num ++;
            System.out.println(" num= " + num);
            if (num == 10) {
                return true;
            }
            return false;
        }
    };
}
