package com.larch.mysql.db.aspect;

import com.larch.mysql.db.DataSourceSwitch;
import com.larch.mysql.db.annotation.DataSourceSelector;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Slf4j
@Aspect
@Order(value = 1)
@Component
public class DataSourceContextAspect {

    @Pointcut("@annotation(com.larch.mysql.db.annotation.DataSourceSelector)")
    public void dataSourcePointcut() {

    }

    @Around("dataSourcePointcut()")
    public Object setDynamicDataSource(ProceedingJoinPoint pjp) throws Throwable {
        boolean clear = true;
        try {
            Method method = this.getMethod(pjp);
            DataSourceSelector dataSourceAnnotation = method.getAnnotation(DataSourceSelector.class);
            clear = dataSourceAnnotation.clear();
            DataSourceSwitch.set(dataSourceAnnotation.value().getDataSourceName());
            log.info("========数据源切换至========：{}", dataSourceAnnotation.value().getDataSourceName());
            return pjp.proceed();
        } finally {
            if (clear) {
                DataSourceSwitch.clear();
            }
        }
    }

    private Method getMethod(JoinPoint pjp) {
        MethodSignature signature = (MethodSignature)pjp.getSignature();
        return signature.getMethod();
    }
}
