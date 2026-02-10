package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.PostRequest;
import com.programming.techie.humanfirst.dto.PostResponse;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import com.programming.techie.humanfirst.exceptions.PostNotFoundException;
import com.programming.techie.humanfirst.exceptions.SubredditNotFoundException;
import com.programming.techie.humanfirst.mapper.PostMapper;
import com.programming.techie.humanfirst.model.Community;
import com.programming.techie.humanfirst.model.Post;
import com.programming.techie.humanfirst.model.Subreddit;
import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.repository.CommunityRepository;
import com.programming.techie.humanfirst.repository.PostRepository;
import com.programming.techie.humanfirst.repository.SubredditRepository;
import com.programming.techie.humanfirst.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final SubredditRepository subredditRepository;
    private final CommunityRepository communityRepository;
    private final UserRepository userRepository;
    private final AuthService authService;
    private final PostMapper postMapper;

    public void save(PostRequest postRequest) {
        Community community = resolveCommunity(postRequest);
        Subreddit subreddit = resolveSubreddit(postRequest, community);

        if (community == null && subreddit == null) {
            throw new HumanfirstException("A community must be selected before posting");
        }

        postRepository.save(postMapper.map(postRequest, subreddit, community, authService.getCurrentUser()));
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
    public List<PostResponse> getPostsByCommunity(String slug) {
        Community community = communityRepository.findBySlugIgnoreCase(slug)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Community not found"));
        return postRepository.findAllByCommunityOrderByCreatedDateDesc(community)
                .stream()
                .map(postMapper::mapToDto)
                .collect(toList());
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

    private Community resolveCommunity(PostRequest postRequest) {
        if (postRequest.getCommunityId() == null) {
            return null;
        }
        return communityRepository.findById(postRequest.getCommunityId())
                .orElseThrow(() -> new HumanfirstException("Selected community does not exist"));
    }

    private Subreddit resolveSubreddit(PostRequest postRequest, Community community) {
        if (postRequest.getSubredditName() == null || postRequest.getSubredditName().isBlank()) {
            // Existing subreddit support remains optional for backward compatibility.
            if (community != null) {
                return null;
            }
            return null;
        }

        return subredditRepository.findByName(postRequest.getSubredditName())
                .orElseThrow(() -> new SubredditNotFoundException(postRequest.getSubredditName()));
    }
}
