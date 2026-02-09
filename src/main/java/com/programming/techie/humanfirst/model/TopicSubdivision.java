package com.programming.techie.humanfirst.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "topic_subdivision")
public class TopicSubdivision {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long topicSubdivisionId;

    @Column(nullable = false, length = 320)
    private String title;

    @Column(nullable = false)
    private Integer displayOrder;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "topic_week_id", referencedColumnName = "topicWeekId", nullable = false)
    private TopicWeek topicWeek;
}
