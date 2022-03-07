package com.larch.springboot01hello.test;

import java.util.Random;
import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

public class TestMain {
    public static void main(String[] args) {
//        AssemblyLine messageTest = new AssemblyLine();
//        FutureTask<Integer> futureTask = new FutureTask<>(new Callable<Integer>() {
//            @Override
//            public Integer call() {
//                return new Random().nextInt(100);
//            }
//        });
//        FutureTask<Integer> futureTask1 = new FutureTask<>(new Callable<Integer>() {
//            @Override
//            public Integer call() {
//                return new Random().nextInt(100);
//            }
//        });
//        FutureTask<Integer> futureTask2 = new FutureTask<>(new Callable<Integer>() {
//            @Override
//            public Integer call() {
//                return new Random().nextInt(100);
//            }
//        });
//        FutureTask<Integer> futureTask3 = new FutureTask<>(new Callable<Integer>() {
//            @Override
//            public Integer call() {
//                return new Random().nextInt(100);
//            }
//        });
//        messageTest.bq.add(futureTask);
//        messageTest.bq.add(futureTask1);
//        messageTest.bq.add(futureTask2);
//        messageTest.bq.add(futureTask3);
//        messageTest.start();
        TestMain testMain = new TestMain();
        int seq = 1;
        testMain.confirm(seq);
        System.out.println("confirm_02");

    }

    private void confirm(Integer seq) {
        if (seq == 1) {
            return;
        }
        System.out.println("confirm_01");
    }
}
