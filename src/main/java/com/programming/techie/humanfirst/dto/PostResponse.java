package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private Long id;
    private String postName;
    private String url;
    private String videoUrl;
    private String imageUrl;
    private String description;
    private String userName;
    private String subredditName;
    private Long communityId;
    private String communityName;
    private String communitySlug;
    private Integer voteCount;
    private Integer commentCount;
    private String duration;
    private Instant createdAt;
    private boolean upVote;
    private boolean downVote;
}
