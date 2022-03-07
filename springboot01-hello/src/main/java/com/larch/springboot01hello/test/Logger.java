package com.larch.springboot01hello.test;

import com.larch.springboot01hello.constants.LEVEL;
import com.larch.springboot01hello.constants.LogMsg;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.concurrent.*;

public class Logger {
    // 用于终止日志执行的"毒丸"
    private final LogMsg poisonPill = new LogMsg(LEVEL.ERROR,"");
    //任务队列
    private final BlockingQueue<LogMsg> bq = new LinkedBlockingQueue<>();
    //只需要一个线程写日志
    private ExecutorService  es = Executors.newFixedThreadPool(1);

    public void start() throws Exception {
        File file = File.createTempFile("foo",".log");
        FileWriter fileWriter = new FileWriter(file);
        this.es.execute(() -> {
            while(true) {
                try {
                    LogMsg log = bq.poll(5, TimeUnit.SECONDS);
                    if (poisonPill.equals(log)) {
                        break;
                    }
                    if (null != log) {
                        System.out.println("执行逻辑：" + log.getMsg());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    try {
                        fileWriter.flush();
                        fileWriter.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
    }
    public void stop() {
        bq.add(poisonPill);
        es.shutdown();
    }
}
