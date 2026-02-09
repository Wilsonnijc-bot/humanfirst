package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MediaUploadRequest {
    private String fileName;
    private String contentType;
    private MediaType mediaType;
}
