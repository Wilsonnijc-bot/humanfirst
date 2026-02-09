package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicCommentUpvoteResponse {
    private Long commentId;
    private Integer upvoteCount;
    private boolean upVotedByCurrentUser;
}
