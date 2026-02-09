package com.programming.techie.humanfirst.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "topic_comment_upvote", uniqueConstraints = {
        @UniqueConstraint(name = "uk_topic_comment_upvote_comment_user", columnNames = {"topic_comment_id", "user_id"})
})
public class TopicCommentUpvote {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long topicCommentUpvoteId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "topic_comment_id", referencedColumnName = "topicCommentId", nullable = false)
    private TopicComment topicComment;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "userId", nullable = false)
    private User user;

    @Column(nullable = false)
    private Instant createdDate;
}
