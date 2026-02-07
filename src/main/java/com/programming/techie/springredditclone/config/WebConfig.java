package com.programming.techie.springredditclone.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedOrigins(getAllowedOrigins().toArray(new String[0]))
                .allowedMethods("*")
                .maxAge(3600L)
                .allowedHeaders("*")
                .exposedHeaders("Authorization")
                .allowCredentials(true);
    }

    // Allow overriding via property: app.cors.allowed-origins (comma-separated)
    private List<String> getAllowedOrigins() {
        String configured = System.getProperty("app.cors.allowed-origins",
                System.getenv().getOrDefault("APP_CORS_ALLOWED_ORIGINS", ""));
        if (configured == null || configured.isEmpty()) {
            return List.of("https://spring-angular-reddit-clone.herokuapp.com");
        }
        return List.of(configured.split(","));
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}
