package com.programming.techie.humanfirst.mapper;

import com.programming.techie.humanfirst.dto.PostRequest;
import com.programming.techie.humanfirst.dto.PostResponse;
import com.programming.techie.humanfirst.model.Post;
import com.programming.techie.humanfirst.model.Subreddit;
import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.model.Vote;
import com.programming.techie.humanfirst.model.VoteType;
import com.programming.techie.humanfirst.repository.CommentRepository;
import com.programming.techie.humanfirst.repository.VoteRepository;
import com.programming.techie.humanfirst.service.AuthService;
import com.programming.techie.humanfirst.service.VideoStorageService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.Duration;
import java.time.Instant;
import java.util.Optional;

import static com.programming.techie.humanfirst.model.VoteType.DOWNVOTE;
import static com.programming.techie.humanfirst.model.VoteType.UPVOTE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class PostMapper {

    @Autowired
    protected CommentRepository commentRepository;
    @Autowired
    protected VoteRepository voteRepository;
    @Autowired
    protected AuthService authService;
    @Autowired
    protected VideoStorageService videoStorageService;


    @Mapping(target = "postId", ignore = true)
    @Mapping(target = "createdDate", expression = "java(java.time.Instant.now())")
    @Mapping(target = "description", source = "postRequest.description")
    @Mapping(target = "postName", source = "postRequest.postName")
    @Mapping(target = "url", source = "postRequest.url")
    @Mapping(target = "videoKey", source = "postRequest.videoKey")
    @Mapping(target = "imageKey", source = "postRequest.imageKey")
    @Mapping(target = "subreddit", source = "subreddit")
    @Mapping(target = "voteCount", constant = "0")
    @Mapping(target = "user", source = "user")
    public abstract Post map(PostRequest postRequest, Subreddit subreddit, User user);

    @Mapping(target = "id", source = "postId")
    @Mapping(target = "postName", source = "postName")
    @Mapping(target = "url", source = "url")
    @Mapping(target = "videoUrl", expression = "java(resolveVideoUrl(post))")
    @Mapping(target = "imageUrl", expression = "java(resolveImageUrl(post))")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "subredditName", source = "subreddit.name")
    @Mapping(target = "userName", source = "user.username")
    @Mapping(target = "voteCount", source = "voteCount")
    @Mapping(target = "commentCount", expression = "java(commentCount(post))")
    @Mapping(target = "duration", expression = "java(getDuration(post))")
    @Mapping(target = "createdAt", source = "createdDate")
    @Mapping(target = "upVote", expression = "java(isPostUpVoted(post))")
    @Mapping(target = "downVote", expression = "java(isPostDownVoted(post))")
    public abstract PostResponse mapToDto(Post post);

    Integer commentCount(Post post) {
        return commentRepository.findByPost(post).size();
    }

    String resolveVideoUrl(Post post) {
        return videoStorageService.generateViewUrl(post.getVideoKey());
    }

    String resolveImageUrl(Post post) {
        return videoStorageService.generateViewUrl(post.getImageKey());
    }

    String getDuration(Post post) {
        Instant createdDate = post.getCreatedDate();
        if (createdDate == null) {
            return "just now";
        }

        long seconds = Duration.between(createdDate, Instant.now()).getSeconds();
        if (seconds < 60) {
            return "just now";
        }

        long minutes = seconds / 60;
        if (minutes < 60) {
            return minutes + (minutes == 1 ? " minute ago" : " minutes ago");
        }

        long hours = minutes / 60;
        if (hours < 24) {
            return hours + (hours == 1 ? " hour ago" : " hours ago");
        }

        long days = hours / 24;
        return days + (days == 1 ? " day ago" : " days ago");
    }

    boolean isPostUpVoted(Post post) {
        return checkVoteType(post, UPVOTE);
    }

    boolean isPostDownVoted(Post post) {
        return checkVoteType(post, DOWNVOTE);
    }

    private boolean checkVoteType(Post post, VoteType voteType) {
        if (authService.isLoggedIn()) {
            Optional<Vote> voteForPostByUser =
                    voteRepository.findTopByPostAndUserOrderByVoteIdDesc(post,
                            authService.getCurrentUser());
            return voteForPostByUser.filter(vote -> vote.getVoteType().equals(voteType))
                    .isPresent();
        }
        return false;
    }

}
