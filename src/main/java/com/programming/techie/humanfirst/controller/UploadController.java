package com.programming.techie.humanfirst.controller;

import com.programming.techie.humanfirst.dto.MediaUploadRequest;
import com.programming.techie.humanfirst.dto.MediaUploadResponse;
import com.programming.techie.humanfirst.dto.VideoUploadRequest;
import com.programming.techie.humanfirst.dto.VideoUploadResponse;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import com.programming.techie.humanfirst.service.VideoStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/uploads")
@RequiredArgsConstructor
public class UploadController {

    private final VideoStorageService videoStorageService;

    @PostMapping("/media/presign")
    public ResponseEntity<MediaUploadResponse> createMediaUploadUrl(@RequestBody MediaUploadRequest request) {
        if (request == null || request.getFileName() == null || request.getFileName().isBlank()) {
            throw new HumanfirstException("fileName is required.");
        }
        if (request.getMediaType() == null) {
            throw new HumanfirstException("mediaType is required.");
        }

        MediaUploadResponse response = videoStorageService.generateMediaUploadUrl(
                request.getFileName(),
                request.getContentType(),
                request.getMediaType()
        );
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/video/presign")
    public ResponseEntity<VideoUploadResponse> createVideoUploadUrl(@RequestBody VideoUploadRequest request) {
        if (request == null || request.getFileName() == null || request.getFileName().isBlank()) {
            throw new HumanfirstException("fileName is required.");
        }
        VideoUploadResponse response = videoStorageService.generateUploadUrl(
                request.getFileName(),
                request.getContentType()
        );
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
