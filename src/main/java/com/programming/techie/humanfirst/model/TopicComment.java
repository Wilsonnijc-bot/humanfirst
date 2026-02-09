package com.programming.techie.humanfirst.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "topic_comment")
public class TopicComment {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long topicCommentId;

    @NotBlank
    @Column(nullable = false, length = 4000)
    private String text;

    @Enumerated(STRING)
    @Column(nullable = false, length = 12)
    private TopicStance stance;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "topic_week_id", referencedColumnName = "topicWeekId", nullable = false)
    private TopicWeek topicWeek;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "userId", nullable = false)
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "parent_comment_id", referencedColumnName = "topicCommentId")
    private TopicComment parentComment;

    @Builder.Default
    @Column(nullable = false)
    private Integer upvoteCount = 0;

    @Column(nullable = false)
    private Instant createdDate;
}
