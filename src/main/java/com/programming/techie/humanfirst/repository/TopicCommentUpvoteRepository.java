package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.TopicComment;
import com.programming.techie.humanfirst.model.TopicCommentUpvote;
import com.programming.techie.humanfirst.model.TopicWeek;
import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TopicCommentUpvoteRepository extends JpaRepository<TopicCommentUpvote, Long> {

    Optional<TopicCommentUpvote> findByTopicCommentAndUser(TopicComment topicComment, User user);

    @Query("select upvote from TopicCommentUpvote upvote where upvote.user = :user and upvote.topicComment.topicWeek = :topicWeek")
    List<TopicCommentUpvote> findAllByUserAndTopicWeek(@Param("user") User user,
                                                       @Param("topicWeek") TopicWeek topicWeek);
}
