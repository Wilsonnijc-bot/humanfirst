package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.Subreddit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubredditRepository extends JpaRepository<Subreddit, Long> {

    Optional<Subreddit> findByName(String subredditName);

    boolean existsByNameIgnoreCase(String name);
}
