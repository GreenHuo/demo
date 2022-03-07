//package com.larch.mysql.db;
//
//import com.zaxxer.hikari.HikariDataSource;
//import org.springframework.beans.factory.support.BeanDefinitionRegistry;
//import org.springframework.boot.context.properties.bind.Bindable;
//import org.springframework.boot.context.properties.bind.Binder;
//import org.springframework.boot.context.properties.source.ConfigurationPropertyName;
//import org.springframework.boot.context.properties.source.ConfigurationPropertyNameAliases;
//import org.springframework.boot.context.properties.source.ConfigurationPropertySource;
//import org.springframework.boot.context.properties.source.MapConfigurationPropertySource;
//import org.springframework.context.EnvironmentAware;
//import org.springframework.context.annotation.ImportBeanDefinitionRegistrar;
//import org.springframework.core.env.Environment;
//import org.springframework.core.type.AnnotationMetadata;
//import org.springframework.util.StringUtils;
//
//import javax.sql.DataSource;
//import java.util.HashMap;
//import java.util.Map;
//
///**
// * 注册数据源
// */
//public class DynamicDataSourceRegister implements ImportBeanDefinitionRegistrar, EnvironmentAware {
//
//    private Environment evn;
//
//    private static final ConfigurationPropertyNameAliases ALIASES = new ConfigurationPropertyNameAliases();
//
//    static {
//        ALIASES.addAliases("url", new String[]{"jdbc-url"});
//        ALIASES.addAliases("username", new String[]{"user"});
//    }
//
//    private Map<String, DataSource> customerDataSources = new HashMap<String, DataSource>();
//
//    private Binder binder;
//
//    @Override
//    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
//        Map config, defauleDataSourceProperties;
//        defauleDataSourceProperties = binder.bind("spring.datasource.master", Map.class).get();
//
//        String typeStr = evn.getProperty("spring.datasource.master.type");
//        // 获取数据源类型
//        Class<? extends DataSource> clazz = getDataSourceType(typeStr);
//        DataSource consumerDatasource, defaultDatasource = bind(clazz, defauleDataSourceProperties);
//        DataSourceSwitch.dataSourceIds.add("master");
//
//    }
//
//    private Class<? extends DataSource> getDataSourceType(String typeStr) {
//        Class<? extends DataSource> type;
//        try {
//            if (StringUtils.hasLength(typeStr)) {
//                type = (Class<? extends DataSource>) Class.forName(typeStr);
//            } else {
//                // 默认为hikariCP数据源，与springboot默认数据源保持一致
//                type = HikariDataSource.class;
//            }
//            return type;
//        } catch (ClassNotFoundException e) {
//            throw new IllegalArgumentException("can not resolve class with type: " + typeStr);
//        }
//    }
//
//    private void bind(DataSource result, Map properties) {
//        MapConfigurationPropertySource source = new MapConfigurationPropertySource(properties);
//        Binder binderSource = new Binder(new ConfigurationPropertySource[]{source.withAliases(ALIASES)});
//        binderSource.bind(ConfigurationPropertyName.EMPTY, Bindable.ofInstance(result));
//    }
//
//    private <T extends DataSource> T bind(Class<T> clazz, Map properties) {
//        MapConfigurationPropertySource source = new MapConfigurationPropertySource(properties);
//        Binder binderSource = new Binder(new ConfigurationPropertySource[]{source.withAliases(ALIASES)});
//        return binderSource.bind(ConfigurationPropertyName.EMPTY, Bindable.of(clazz)).get();
//    }
//
//    private <T extends DataSource> T bind(Class<T> clazz, String sourcePath) {
//        Map properties = binder.bind(sourcePath, Map.class).get();
//        return bind(clazz, properties);
//    }
//
//    @Override
//    public void setEnvironment(Environment environment) {
//        this.evn = environment;
//        binder = Binder.get(evn);
//    }
//}
