package com.larch.springboot01hello.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloWeb extends BaseController{

   private static final Logger logger = LoggerFactory.getLogger(HelloWeb.class);

    @RequestMapping(value={"/hello"})
    public String index(Model model) {
        logger.info("这是一条测试消息？？");
        model.addAttribute("title", "测试");
        model.addAttribute("atext", "这个冬天不太Cool");
        return "index";
    }
}
