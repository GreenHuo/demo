package com.larch.mysql.db.constants;

public enum  DynamicDataSourceEnum {

    MASTER("master"),
    SLAVE("slave");

    private String dataSourceName;

    DynamicDataSourceEnum(String dataSourceName) {
        this.dataSourceName = dataSourceName;
    }
    public String getDataSourceName() {
        return dataSourceName;
    }
}
