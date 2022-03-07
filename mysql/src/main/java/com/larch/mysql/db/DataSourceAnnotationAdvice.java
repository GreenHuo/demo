package com.larch.mysql.db;
//
//import org.aspectj.lang.JoinPoint;
//import org.springframework.context.annotation.Configuration;
//
///**
// * 数据源切面：读写分离
// */
//@Configuration
//public class DataSourceAnnotationAdvice {
//
//    /**
//     * 切换从库
//     * @param joinpoint
//     */
//    public void before(JoinPoint joinpoint) throws Throwable {
//        DataSourceSwitch.setSlave();
//    }
//
//    /**
//     * 切换主库
//     * @param joinpoint
//     */
//    public void after(JoinPoint joinpoint) throws Throwable {
//        DataSourceSwitch.setMaster();
//    }
//
//    /**
//     * 切换主库
//     * @param joinpoint
//     */
//    public void masterBefore(JoinPoint joinpoint) throws Throwable {
//        DataSourceSwitch.setMaster();
//    }
//
//    public void doThrowing(JoinPoint joinpoint, Throwable ex) {
//        DataSourceSwitch.setMaster();
//    }
//}
