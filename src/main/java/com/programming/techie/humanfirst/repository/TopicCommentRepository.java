package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.TopicComment;
import com.programming.techie.humanfirst.model.TopicWeek;
import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicCommentRepository extends JpaRepository<TopicComment, Long> {

    List<TopicComment> findAllByTopicWeekOrderByCreatedDateAsc(TopicWeek topicWeek);

    List<TopicComment> findAllByParentComment(TopicComment parentComment);

    @Query("select comment from TopicComment comment join fetch comment.topicWeek where comment.user = :user order by comment.createdDate desc")
    List<TopicComment> findAllByUserOrderByCreatedDateDesc(@Param("user") User user);
}
