package com.larch.springboot01hello.constants;

import java.io.Serializable;

public class LogMsg implements Serializable {

    private static final long serialVersionUID = 1L;

    private String msg = "";

    private String error = "";

    public LogMsg() {
    }

    public LogMsg(String error,String msg) {
        this.msg = msg;
        this.error = error;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
