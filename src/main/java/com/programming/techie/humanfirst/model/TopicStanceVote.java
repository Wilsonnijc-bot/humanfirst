package com.programming.techie.humanfirst.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "topic_stance_vote", uniqueConstraints = {
        @UniqueConstraint(name = "uk_topic_stance_vote_topic_user", columnNames = {"topic_week_id", "user_id"})
})
public class TopicStanceVote {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long topicStanceVoteId;

    @Enumerated(STRING)
    @Column(nullable = false, length = 12)
    private TopicStance stance;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "topic_week_id", referencedColumnName = "topicWeekId", nullable = false)
    private TopicWeek topicWeek;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "userId", nullable = false)
    private User user;

    @Column(nullable = false)
    private Instant createdDate;
}
