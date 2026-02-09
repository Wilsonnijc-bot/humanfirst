package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.PostRequest;
import com.programming.techie.humanfirst.dto.PostResponse;
import com.programming.techie.humanfirst.exceptions.PostNotFoundException;
import com.programming.techie.humanfirst.exceptions.SubredditNotFoundException;
import com.programming.techie.humanfirst.mapper.PostMapper;
import com.programming.techie.humanfirst.model.Post;
import com.programming.techie.humanfirst.model.Subreddit;
import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.repository.PostRepository;
import com.programming.techie.humanfirst.repository.SubredditRepository;
import com.programming.techie.humanfirst.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final SubredditRepository subredditRepository;
    private final UserRepository userRepository;
    private final AuthService authService;
    private final PostMapper postMapper;

    public void save(PostRequest postRequest) {
        Subreddit subreddit = subredditRepository.findByName(postRequest.getSubredditName())
                .orElseThrow(() -> new SubredditNotFoundException(postRequest.getSubredditName()));
        postRepository.save(postMapper.map(postRequest, subreddit, authService.getCurrentUser()));
    }

    @Transactional(readOnly = true)
    public PostResponse getPost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new PostNotFoundException(id.toString()));
        return postMapper.mapToDto(post);
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getAllPosts() {
        return postRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(postMapper::mapToDto)
                .collect(toList());
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getPostsBySubreddit(Long subredditId) {
        Subreddit subreddit = subredditRepository.findById(subredditId)
                .orElseThrow(() -> new SubredditNotFoundException(subredditId.toString()));
        List<Post> posts = postRepository.findAllBySubredditOrderByCreatedDateDesc(subreddit);
        return posts.stream().map(postMapper::mapToDto).collect(toList());
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getPostsByUsername(String username) {
        User user = userRepository.findFirstByUsernameAndEnabledTrueOrderByUserIdDesc(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        return postRepository.findByUserOrderByCreatedDateDesc(user)
                .stream()
                .map(postMapper::mapToDto)
                .collect(toList());
    }
}
