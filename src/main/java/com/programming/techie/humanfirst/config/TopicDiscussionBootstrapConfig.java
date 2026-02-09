package com.programming.techie.humanfirst.config;

import com.programming.techie.humanfirst.model.TopicSubdivision;
import com.programming.techie.humanfirst.model.TopicWeek;
import com.programming.techie.humanfirst.repository.TopicWeekRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;

@Configuration
@RequiredArgsConstructor
public class TopicDiscussionBootstrapConfig {

    private final TopicWeekRepository topicWeekRepository;

    @Bean
    CommandLineRunner topicDiscussionBootstrapRunner() {
        return args -> {
            if (topicWeekRepository.findFirstByActiveTrueOrderByCreatedDateDesc().isPresent()) {
                return;
            }

            TopicWeek topicWeek = TopicWeek.builder()
                    .slug("ai-responsibility-in-medical-care")
                    .weekTitle("AI in responsibility of medical care")
                    .monthTitle("Medical ethics in AI")
                    .active(true)
                    .createdDate(Instant.now())
                    .build();

            addSubdivision(topicWeek, 1, "AI in responsibility of medical care");
            addSubdivision(topicWeek, 2, "AI image deep learning authorizations");
            addSubdivision(topicWeek, 3, "How AI might take over jobs and cause unemployment");
            addSubdivision(topicWeek, 4, "AI assisted medicine");

            topicWeekRepository.save(topicWeek);
        };
    }

    private void addSubdivision(TopicWeek topicWeek, int order, String title) {
        TopicSubdivision subdivision = TopicSubdivision.builder()
                .topicWeek(topicWeek)
                .displayOrder(order)
                .title(title)
                .build();
        topicWeek.getSubdivisions().add(subdivision);
    }
}
