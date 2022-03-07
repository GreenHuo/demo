package com.larch.mysql.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Configuration
public abstract class BaseController  {

    protected static final Logger logger = LoggerFactory.getLogger(BaseController.class);

    /**
     * 全局异常处理
     */
    @ExceptionHandler(Exception.class)
    public Object processException(Exception e) {
        logger.error(e.getMessage(),e);
        return "系统出现了点问题，请联系客服处理~~";
    }
}
