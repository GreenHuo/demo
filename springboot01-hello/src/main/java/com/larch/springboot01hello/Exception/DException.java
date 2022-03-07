package com.larch.springboot01hello.Exception;

public class DException extends RuntimeException {

    public DException() { }

    public DException(String msg) {
        super(msg);
    }
}
