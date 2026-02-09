package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicSubdivisionDto {
    private Long id;
    private String title;
    private Integer displayOrder;
}
