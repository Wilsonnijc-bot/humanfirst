package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommunitySummaryDto {
    private Long id;
    private String name;
    private String slug;
    private String description;
    private String headerImageUrl;
    private Long createdByUserId;
    private Instant createdAt;
    private Instant updatedAt;
}
