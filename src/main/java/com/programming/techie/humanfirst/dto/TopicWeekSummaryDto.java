package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicWeekSummaryDto {
    private Long id;
    private String slug;
    private String weekTitle;
    private String monthTitle;
    private Instant createdDate;
}
