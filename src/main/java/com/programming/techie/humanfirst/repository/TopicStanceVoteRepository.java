package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.TopicStance;
import com.programming.techie.humanfirst.model.TopicStanceVote;
import com.programming.techie.humanfirst.model.TopicWeek;
import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TopicStanceVoteRepository extends JpaRepository<TopicStanceVote, Long> {

    Optional<TopicStanceVote> findByTopicWeekAndUser(TopicWeek topicWeek, User user);

    long countByTopicWeekAndStance(TopicWeek topicWeek, TopicStance stance);
}
