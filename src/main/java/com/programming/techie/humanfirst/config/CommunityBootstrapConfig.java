package com.programming.techie.humanfirst.config;

import com.programming.techie.humanfirst.service.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class CommunityBootstrapConfig {

    private final CommunityService communityService;

    @Value("${app.bootstrap.ai-agent-community-creator-email:wilsonnijc@outlook.com}")
    private String aiAgentCommunityCreatorEmail;

    @Bean
    CommandLineRunner communityBootstrapRunner() {
        return args -> {
            communityService.ensureSeedCommunityExists(
                    "AI agent community",
                    "ai-agent-community",
                    "A community for building, testing, and evaluating AI agents."
            );

            communityService.ensureSeedCommunityExists(
                    "Medical Science community",
                    "medical-science-community",
                    "A community focused on medical science, research, and AI in healthcare."
            );

            communityService.ensureSeedCommunityCreator("ai-agent-community", aiAgentCommunityCreatorEmail);
        };
    }
}
