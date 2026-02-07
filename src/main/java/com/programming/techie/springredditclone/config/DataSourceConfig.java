package com.programming.techie.springredditclone.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;

import javax.sql.DataSource;
import java.net.URI;

/**
 * Converts Heroku's DATABASE_URL (postgres://user:pass@host:port/db) into a JDBC URL
 * when JDBC_DATABASE_URL is not already provided. Ensures Spring always gets a JDBC URL.
 */
@Configuration
public class DataSourceConfig {

    @Autowired
    private Environment environment;

    @Bean
    @Primary
    public DataSource dataSource() {
        String jdbcUrl = environment.getProperty("JDBC_DATABASE_URL");
        String username = environment.getProperty("JDBC_DATABASE_USERNAME");
        String password = environment.getProperty("JDBC_DATABASE_PASSWORD");

        if (isBlank(jdbcUrl)) {
            String databaseUrl = environment.getProperty("DATABASE_URL");
            if (!isBlank(databaseUrl)) {
                ParsedDbUrl parsed = parseHerokuUrl(databaseUrl.trim());
                jdbcUrl = parsed.jdbcUrl;
                if (isBlank(username)) {
                    username = parsed.username;
                }
                if (isBlank(password)) {
                    password = parsed.password;
                }
            }
        }

        // Fallback: pick the first HEROKU_POSTGRESQL_*_URL if present
        if (isBlank(jdbcUrl)) {
            for (var entry : System.getenv().entrySet()) {
                String key = entry.getKey();
                if (key.startsWith("HEROKU_POSTGRESQL_") && key.endsWith("_URL")) {
                    ParsedDbUrl parsed = parseHerokuUrl(entry.getValue());
                    jdbcUrl = parsed.jdbcUrl;
                    if (isBlank(username)) {
                        username = parsed.username;
                    }
                    if (isBlank(password)) {
                        password = parsed.password;
                    }
                    break;
                }
            }
        }

        if (isBlank(jdbcUrl)) {
            throw new IllegalStateException("No JDBC URL found; please ensure DATABASE_URL or JDBC_DATABASE_URL is set");
        }

        return DataSourceBuilder.create()
                .driverClassName("org.postgresql.Driver")
                .url(jdbcUrl)
                .username(username)
                .password(password)
                .build();
    }

    private ParsedDbUrl parseHerokuUrl(String databaseUrl) {
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
            return new ParsedDbUrl(jdbc, username, password);
        } catch (Exception e) {
            return new ParsedDbUrl(databaseUrl, null, null);
        }
    }

    private record ParsedDbUrl(String jdbcUrl, String username, String password) {}

    private boolean isBlank(String value) {
        return value == null || value.isBlank();
    }
}
