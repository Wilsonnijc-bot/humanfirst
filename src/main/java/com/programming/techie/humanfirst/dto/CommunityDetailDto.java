package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommunityDetailDto {
    private CommunitySummaryDto community;
    private boolean member;
    private boolean creator;
    private boolean canEdit;
}
