package com.programming.techie.humanfirst.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "topic_week", indexes = {
        @Index(name = "idx_topic_week_slug", columnList = "slug", unique = true),
        @Index(name = "idx_topic_week_active", columnList = "active")
})
public class TopicWeek {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long topicWeekId;

    @Column(nullable = false, unique = true, length = 160)
    private String slug;

    @Column(nullable = false, length = 240)
    private String weekTitle;

    @Column(nullable = false, length = 240)
    private String monthTitle;

    @Column(nullable = false)
    private Boolean active;

    @Column(nullable = false)
    private Instant createdDate;

    @Builder.Default
    @OneToMany(mappedBy = "topicWeek", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("displayOrder ASC")
    private List<TopicSubdivision> subdivisions = new ArrayList<>();
}
