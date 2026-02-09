package com.programming.techie.humanfirst.controller;

import com.programming.techie.humanfirst.dto.*;
import com.programming.techie.humanfirst.service.TopicDiscussionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/topics")
@RequiredArgsConstructor
public class TopicDiscussionController {

    private final TopicDiscussionService topicDiscussionService;

    @GetMapping("/current")
    public ResponseEntity<TopicWeekDetailDto> getCurrentTopic() {
        return ResponseEntity.status(OK).body(topicDiscussionService.getCurrentTopicDetail());
    }

    @GetMapping("/archive")
    public ResponseEntity<List<TopicWeekSummaryDto>> getTopicArchive() {
        return ResponseEntity.status(OK).body(topicDiscussionService.getArchivedTopics());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<TopicWeekDetailDto> getTopicBySlug(@PathVariable String slug) {
        return ResponseEntity.status(OK).body(topicDiscussionService.getTopicDetailBySlug(slug));
    }

    @PostMapping("/{topicId}/vote")
    public ResponseEntity<TopicVoteSummaryDto> voteOnTopic(@PathVariable Long topicId,
                                                           @RequestBody TopicVoteRequest request) {
        return ResponseEntity.status(OK).body(topicDiscussionService.voteOnTopic(topicId, request));
    }

    @PostMapping("/{topicId}/comments")
    public ResponseEntity<TopicCommentDto> addComment(@PathVariable Long topicId,
                                                      @RequestBody TopicCommentRequest request) {
        return ResponseEntity.status(CREATED).body(topicDiscussionService.addComment(topicId, request));
    }

    @PostMapping("/comments/{commentId}/upvote")
    public ResponseEntity<TopicCommentUpvoteResponse> toggleCommentUpvote(@PathVariable Long commentId) {
        return ResponseEntity.status(OK).body(topicDiscussionService.toggleCommentUpvote(commentId));
    }
}
