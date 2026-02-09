package com.programming.techie.humanfirst.dto;

import com.programming.techie.humanfirst.model.TopicStance;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TopicVoteRequest {
    private TopicStance stance;
}
