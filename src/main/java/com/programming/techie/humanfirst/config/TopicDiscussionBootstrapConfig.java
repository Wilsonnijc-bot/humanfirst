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
            if (topicWeekRepository.existsByActiveTrue()) {
                return;
            }

            TopicWeek topicWeek = TopicWeek.builder()
                    .slug("ai-responsibility-in-medical-care")
                    .weekTitle("AI in responsibility of medical care")
                    .monthTitle("Medical ethics in AI")
                    .weeklyTopicBody(buildDefaultWeeklyTopicBody(
                            "AI in responsibility of medical care",
                            "Medical ethics in AI"
                    ))
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

    private String buildDefaultWeeklyTopicBody(String weekTitle, String monthTitle) {
        return "This week focuses on \"" + safeValue(weekTitle) + "\" within the monthly topic \"" + safeValue(monthTitle) + "\".\n\n"
                + "Use this section to explore practical scenarios, ethical trade-offs, and real-world implications before joining the debate."
                + " Consider who is accountable, what evidence is required for decisions, and how humans should stay in control when AI is involved in high-impact contexts."
                + " Then add your perspective in the Pro or Con discussion below.";
    }

    private String safeValue(String value) {
        return isBlank(value) ? "Untitled topic" : value.trim();
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }
}
