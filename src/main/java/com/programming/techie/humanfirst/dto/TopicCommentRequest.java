package com.programming.techie.humanfirst.dto;

import com.programming.techie.humanfirst.model.TopicStance;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TopicCommentRequest {
    private String text;
    private TopicStance stance;
    private Long parentCommentId;
}
