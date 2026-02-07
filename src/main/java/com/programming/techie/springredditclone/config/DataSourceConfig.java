package com.programming.techie.springredditclone.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import javax.sql.DataSource;
import java.net.URI;

/**
 * Converts Heroku's DATABASE_URL (postgres://user:pass@host:port/db) into a JDBC URL
 * when JDBC_DATABASE_URL is not provided by the environment.
 */
@Configuration
public class DataSourceConfig {

    private final Environment environment;
    private final String defaultJdbcUrl;

    public DataSourceConfig(Environment environment,
                            @Value("${JDBC_DATABASE_URL:}") String defaultJdbcUrl) {
        this.environment = environment;
        this.defaultJdbcUrl = defaultJdbcUrl;
    }

    @Bean
    public DataSource dataSource(DataSourceProperties properties) {
        String jdbcUrl = defaultJdbcUrl;
        if (jdbcUrl == null || jdbcUrl.isBlank()) {
            String databaseUrl = environment.getProperty("DATABASE_URL");
            if (databaseUrl != null && !databaseUrl.isBlank()) {
                jdbcUrl = convertHerokuUrl(databaseUrl.trim());
            }
        }

        if (jdbcUrl != null && !jdbcUrl.isBlank()) {
            properties.setUrl(jdbcUrl);
        }
        // username/password may be embedded in DATABASE_URL; set only if present
        if (properties.getUsername() == null || properties.getUsername().isBlank()) {
            String databaseUrl = environment.getProperty("DATABASE_URL");
            if (databaseUrl != null) {
                try {
                    URI uri = new URI(databaseUrl);
                    if (uri.getUserInfo() != null && uri.getUserInfo().contains(":")) {
                        String[] userInfo = uri.getUserInfo().split(":", 2);
                        properties.setUsername(userInfo[0]);
                        properties.setPassword(userInfo[1]);
                    }
                } catch (Exception ignored) {
                    // If parsing fails, leave defaults; Spring will surface proper errors.
                }
            }
        }
        return properties.initializeDataSourceBuilder().build();
    }

    private String convertHerokuUrl(String databaseUrl) {
        try {
            URI uri = new URI(databaseUrl);
            String userInfo = uri.getUserInfo();
            String username = null;
            String password = null;
            if (userInfo != null && userInfo.contains(":")) {
                String[] parts = userInfo.split(":", 2);
                username = parts[0];
                password = parts[1];
            }

            int port = uri.getPort() == -1 ? 5432 : uri.getPort();
            String jdbc = "jdbc:postgresql://" + uri.getHost() + ":" + port + uri.getPath() + "?sslmode=require";

            // populate username/password via DataSourceProperties later
            return jdbc;
        } catch (Exception e) {
            return databaseUrl; // fallback to raw value; Spring will report if invalid
        }
    }
}
