package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MyCommunitiesDto {
    private List<CommunitySummaryDto> createdCommunities;
    private List<CommunitySummaryDto> joinedCommunities;
}
