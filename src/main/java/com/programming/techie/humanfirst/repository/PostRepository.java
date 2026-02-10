package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.Community;
import com.programming.techie.humanfirst.model.Post;
import com.programming.techie.humanfirst.model.Subreddit;
import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByOrderByCreatedDateDesc();

    List<Post> findAllBySubredditOrderByCreatedDateDesc(Subreddit subreddit);

    List<Post> findAllByCommunityOrderByCreatedDateDesc(Community community);

    List<Post> findByUserOrderByCreatedDateDesc(User user);
}
