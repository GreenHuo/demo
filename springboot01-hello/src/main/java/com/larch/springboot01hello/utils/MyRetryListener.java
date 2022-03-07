package com.larch.springboot01hello.utils;

import com.github.rholder.retry.Attempt;
import com.github.rholder.retry.RetryListener;

public class MyRetryListener<Boolean> implements RetryListener {

    @Override
    public <Boolean> void onRetry(Attempt<Boolean> attempt) {
        // 第几次重试,(注意:第一次重试其实是第一次调用)
        System.out.println("[retry]time=" + attempt.getAttemptNumber());
    }
    
}
