package com.programming.techie.humanfirst.controller;

import com.programming.techie.humanfirst.dto.CommunityCreateRequest;
import com.programming.techie.humanfirst.dto.CommunityDetailDto;
import com.programming.techie.humanfirst.dto.CommunitySummaryDto;
import com.programming.techie.humanfirst.dto.CommunityUpdateRequest;
import com.programming.techie.humanfirst.dto.MyCommunitiesDto;
import com.programming.techie.humanfirst.service.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/communities")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;

    @GetMapping
    public ResponseEntity<List<CommunitySummaryDto>> getAllCommunities() {
        return ResponseEntity.ok(communityService.getAllCommunities());
    }

    @GetMapping("/mine")
    public ResponseEntity<MyCommunitiesDto> getMyCommunities() {
        return ResponseEntity.ok(communityService.getMyCommunities());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<CommunityDetailDto> getCommunity(@PathVariable String slug) {
        return ResponseEntity.ok(communityService.getCommunityBySlug(slug));
    }

    @PostMapping
    public ResponseEntity<CommunitySummaryDto> createCommunity(@RequestBody CommunityCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(communityService.createCommunity(request));
    }

    @PutMapping("/{slug}")
    public ResponseEntity<CommunitySummaryDto> updateCommunity(@PathVariable String slug,
                                                               @RequestBody CommunityUpdateRequest request) {
        return ResponseEntity.ok(communityService.updateCommunity(slug, request));
    }

    @PostMapping("/{slug}/join")
    public ResponseEntity<CommunityDetailDto> joinCommunity(@PathVariable String slug) {
        return ResponseEntity.ok(communityService.joinCommunity(slug));
    }

    @DeleteMapping("/{slug}/join")
    public ResponseEntity<CommunityDetailDto> leaveCommunity(@PathVariable String slug) {
        return ResponseEntity.ok(communityService.leaveCommunity(slug));
    }
}
