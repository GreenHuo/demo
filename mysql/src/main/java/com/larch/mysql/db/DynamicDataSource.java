package com.larch.mysql.db;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

/**
 *数据源动态切换
 */
public class DynamicDataSource extends AbstractRoutingDataSource {

    @Override
    protected Object determineCurrentLookupKey() {
        return DataSourceSwitch.get();
    }
}
