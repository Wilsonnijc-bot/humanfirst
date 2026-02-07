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

        if (jdbcUrl == null || jdbcUrl.isBlank()) {
            String databaseUrl = environment.getProperty("DATABASE_URL");
            if (databaseUrl != null && !databaseUrl.isBlank()) {
                ParsedDbUrl parsed = parseHerokuUrl(databaseUrl.trim());
                jdbcUrl = parsed.jdbcUrl;
                if (username == null || username.isBlank()) {
                    username = parsed.username;
                }
                if (password == null || password.isBlank()) {
                    password = parsed.password;
                }
            }
        }

        if (jdbcUrl == null || jdbcUrl.isBlank()) {
            throw new IllegalStateException("No JDBC URL could be determined from env vars DATABASE_URL/JDBC_DATABASE_URL");
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
}
