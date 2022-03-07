package com.larch.springboot01hello.test;

public class ThreadTermination {
    //县城终止标志位
    private volatile boolean terminated = false;
    private boolean started = false;

    //采集线程
    private Thread rptThread;
    //启动采集功能
    synchronized void start() {
        //不允许同事启动多个采集线程
        if (started) {
            return;
        }
        started = true;
        terminated = false;
        rptThread = new Thread(() -> {
            while (!terminated) {
                //采集操作
                System.out.println("采集操作....");
                //每隔两秒钟采集，回传一次数据
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    //重新设置线程中断状态
                    Thread.currentThread().interrupt();
                }
            }
            // 执行到此位置说明线程马上终止
            started = false;
        });
        rptThread.start();
    }

    //终止采集功能
    synchronized void stop() {
        //设置中断标志位
        terminated = true;
        //中断线程 rptThread
        rptThread.interrupt();
    }
}
