package com.programming.techie.humanfirst.dto;

import com.programming.techie.humanfirst.model.TopicStance;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicCommentDto {
    private Long id;
    private String text;
    private String userName;
    private Instant createdDate;
    private String duration;
    private Integer upvoteCount;
    private boolean upVotedByCurrentUser;
    private TopicStance stance;

    @Builder.Default
    private List<TopicCommentDto> replies = new ArrayList<>();
}
