package com.programming.techie.humanfirst.dto;

import com.programming.techie.humanfirst.model.TopicStance;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicVoteSummaryDto {
    private long proVotes;
    private long conVotes;
    private long totalVotes;
    private int proPercent;
    private int conPercent;
    private TopicStance userStance;
}
