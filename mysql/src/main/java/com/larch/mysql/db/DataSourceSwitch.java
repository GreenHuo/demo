package com.larch.mysql.db;

public class DataSourceSwitch {

    private static final ThreadLocal<String> CONTEXT_HOLDER = new ThreadLocal<>();

    public static void set(String dataSourceType) {
        CONTEXT_HOLDER.set(dataSourceType);
    }

    public static String get() {
        return CONTEXT_HOLDER.get();
    }

    public static void clear() {
        CONTEXT_HOLDER.remove();
    }

}
