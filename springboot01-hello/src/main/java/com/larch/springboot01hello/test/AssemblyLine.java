package com.larch.springboot01hello.test;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.*;

public class AssemblyLine {
    BlockingQueue<FutureTask> bq = new LinkedBlockingQueue<>(2000);

    void start() {
        ExecutorService es = Executors.newFixedThreadPool(5);
        for (int i = 0; i < 5; i ++) {
            es.execute(() -> {
                try {
                    while(true) {
                        List<FutureTask> ts = pollTasks();
                        execTasks(ts);
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
    }

    List<FutureTask> pollTasks() throws InterruptedException{
        LinkedList<FutureTask> ts = new LinkedList<>();
        FutureTask t = bq.take();
        while (t != null) {
            ts.add(t);
            //非阻塞式获取一条任务
            t = bq.poll();
        }
        return ts;
    }

    void execTasks(List<FutureTask> ts) {
        System.out.println("执行的任务。。。");
        for (FutureTask task : ts) {
            new Thread(task).start();
            try {
                int result = (int)task.get();
                System.out.println("result：" + result);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (ExecutionException e) {
                e.printStackTrace();
            }
        }
    }
}
