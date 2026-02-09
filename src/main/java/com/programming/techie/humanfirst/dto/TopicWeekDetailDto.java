package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicWeekDetailDto {
    private Long id;
    private String slug;
    private String weekTitle;
    private String monthTitle;

    @Builder.Default
    private List<TopicSubdivisionDto> subdivisions = new ArrayList<>();

    private TopicVoteSummaryDto voteSummary;

    @Builder.Default
    private List<TopicCommentDto> proComments = new ArrayList<>();

    @Builder.Default
    private List<TopicCommentDto> conComments = new ArrayList<>();
}
