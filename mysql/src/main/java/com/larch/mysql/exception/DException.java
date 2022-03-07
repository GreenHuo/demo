package com.larch.mysql.exception;

public class DException extends RuntimeException {

    public DException() { }

    public DException(String msg) {
        super(msg);
    }
}
