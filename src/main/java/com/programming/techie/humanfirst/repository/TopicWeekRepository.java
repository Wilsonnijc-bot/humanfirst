package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.TopicWeek;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TopicWeekRepository extends JpaRepository<TopicWeek, Long> {

    Optional<TopicWeek> findFirstByActiveTrueOrderByCreatedDateDesc();

    Optional<TopicWeek> findBySlugIgnoreCase(String slug);

    List<TopicWeek> findByActiveFalseOrderByCreatedDateDesc();
}
