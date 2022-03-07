package com.larch.springboot01hello.aspect;

import com.github.rholder.retry.RetryerBuilder;
import com.github.rholder.retry.StopStrategies;
import com.github.rholder.retry.WaitStrategies;
import com.larch.springboot01hello.annotation.GuavaRetrying;
import com.larch.springboot01hello.utils.MyRetryListener;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;


@Aspect
@Service
public class GuavaRetringAspect {

    @Pointcut("@annotation(com.larch.springboot01hello.annotation.GuavaRetrying)")
    public void guavaRetringAspect() {

    }

    @Around(value = "guavaRetringAspect()")
    public Object monitorAround(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("重试策略！");
        Method method;
        if (pjp.getSignature() instanceof MethodSignature) {
            MethodSignature signature = (MethodSignature) pjp.getSignature();
            method = signature.getMethod();
        } else {
            return null;
        }
        GuavaRetrying annotation = method.getDeclaredAnnotation(GuavaRetrying.class);
        if (annotation.duration() <= 0 && annotation.attemptNumber() <= 1) {
            return pjp.proceed();
        }
        RetryerBuilder<Object> builder = RetryerBuilder.newBuilder();
        // 重试次数
        if (annotation.attemptNumber() > 0) {
            builder.withStopStrategy(StopStrategies.stopAfterAttempt(annotation.attemptNumber()));
        }
        // 退出策略
        if (annotation.duration() > 0) {
            builder.withStopStrategy(StopStrategies.stopAfterDelay(annotation.duration(), TimeUnit.MILLISECONDS));
        }
        //重试时间间隔
        if (annotation.waitStrategySleepTime() > 0) {
            builder.withWaitStrategy(WaitStrategies.fixedWait(annotation.waitStrategySleepTime(),TimeUnit.MILLISECONDS));
        }
        builder.withRetryListener(new MyRetryListener<>());

        //停止重试的策略
        if (annotation.exceptionClass().length > 0) {
            for (Class retryThrowable : annotation.exceptionClass()) {
                if (retryThrowable != null && Throwable.class.isAssignableFrom(retryThrowable)) {
                    builder.retryIfExceptionOfType(retryThrowable);
                }
            }
        }
        return builder.build().call(() -> {
            try {
                Object proceed = pjp.proceed();
                return proceed;
            } catch (Throwable throwable) {
                throw new Exception(throwable);
            }
        });

    }
}
