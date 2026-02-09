package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.TopicComment;
import com.programming.techie.humanfirst.model.TopicWeek;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicCommentRepository extends JpaRepository<TopicComment, Long> {

    List<TopicComment> findAllByTopicWeekOrderByCreatedDateAsc(TopicWeek topicWeek);
}
