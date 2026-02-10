package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.CommunityCreateRequest;
import com.programming.techie.humanfirst.dto.CommunityDetailDto;
import com.programming.techie.humanfirst.dto.CommunitySummaryDto;
import com.programming.techie.humanfirst.dto.CommunityUpdateRequest;
import com.programming.techie.humanfirst.dto.MyCommunitiesDto;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import com.programming.techie.humanfirst.model.Community;
import com.programming.techie.humanfirst.model.CommunityMembership;
import com.programming.techie.humanfirst.model.CommunityMembershipRole;
import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.repository.CommunityMembershipRepository;
import com.programming.techie.humanfirst.repository.CommunityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityMembershipRepository communityMembershipRepository;
    private final AuthService authService;

    @Transactional(readOnly = true)
    public List<CommunitySummaryDto> getAllCommunities() {
        return communityRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(this::toSummary)
                .toList();
    }

    @Transactional(readOnly = true)
    public CommunityDetailDto getCommunityBySlug(String slug) {
        Community community = findBySlugOrThrow(slug);
        User currentUser = getCurrentUserOrNull();
        MembershipState membershipState = resolveMembershipState(currentUser, community);

        return CommunityDetailDto.builder()
                .community(toSummary(community))
                .member(membershipState.member())
                .creator(membershipState.creator())
                .canEdit(membershipState.creator())
                .build();
    }

    public CommunitySummaryDto createCommunity(CommunityCreateRequest request) {
        User currentUser = authService.getCurrentUser();
        String name = normalizeRequired(request.getName(), "Community name is required");
        String slug = ensureUniqueSlug(name);

        Community community = Community.builder()
                .name(name)
                .slug(slug)
                .description(normalizeNullable(request.getDescription()))
                .headerImageUrl(normalizeNullable(request.getHeaderImageUrl()))
                .createdBy(currentUser)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();

        Community savedCommunity = communityRepository.save(community);
        saveMembership(currentUser, savedCommunity, CommunityMembershipRole.CREATOR);
        return toSummary(savedCommunity);
    }

    public CommunitySummaryDto updateCommunity(String slug, CommunityUpdateRequest request) {
        Community community = findBySlugOrThrow(slug);
        User currentUser = authService.getCurrentUser();

        if (!hasCreatorAccess(currentUser, community)) {
            throw new ResponseStatusException(FORBIDDEN, "Only the community creator can edit this community");
        }

        community.setDescription(normalizeNullable(request.getDescription()));
        community.setHeaderImageUrl(normalizeNullable(request.getHeaderImageUrl()));
        community.setUpdatedAt(Instant.now());

        Community updatedCommunity = communityRepository.save(community);
        return toSummary(updatedCommunity);
    }

    public CommunityDetailDto joinCommunity(String slug) {
        Community community = findBySlugOrThrow(slug);
        User currentUser = authService.getCurrentUser();

        communityMembershipRepository.findByUserAndCommunity(currentUser, community)
                .orElseGet(() -> saveMembership(currentUser, community, CommunityMembershipRole.MEMBER));

        return getCommunityBySlug(community.getSlug());
    }

    public CommunityDetailDto leaveCommunity(String slug) {
        Community community = findBySlugOrThrow(slug);
        User currentUser = authService.getCurrentUser();

        communityMembershipRepository.findByUserAndCommunity(currentUser, community)
                .filter(membership -> membership.getRole() == CommunityMembershipRole.MEMBER)
                .ifPresent(communityMembershipRepository::delete);

        return getCommunityBySlug(community.getSlug());
    }

    @Transactional(readOnly = true)
    public MyCommunitiesDto getMyCommunities() {
        User currentUser = authService.getCurrentUser();

        List<CommunitySummaryDto> createdCommunities = communityRepository.findAllByOrderByCreatedAtDesc().stream()
                .filter(community -> community.getCreatedBy() != null && currentUser.getUserId().equals(community.getCreatedBy().getUserId()))
                .map(this::toSummary)
                .toList();

        List<CommunitySummaryDto> joinedCommunities = communityMembershipRepository.findAllByUserOrderByCreatedAtDesc(currentUser).stream()
                .filter(membership -> membership.getRole() == CommunityMembershipRole.MEMBER)
                .map(CommunityMembership::getCommunity)
                .map(this::toSummary)
                .toList();

        return MyCommunitiesDto.builder()
                .createdCommunities(createdCommunities)
                .joinedCommunities(joinedCommunities)
                .build();
    }

    public void ensureSeedCommunityExists(String name, String slug, String description) {
        if (communityRepository.existsBySlugIgnoreCase(slug)) {
            return;
        }

        Community community = Community.builder()
                .name(name)
                .slug(slug)
                .description(description)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();

        communityRepository.save(community);
    }

    private Community findBySlugOrThrow(String slug) {
        return communityRepository.findBySlugIgnoreCase(slug)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Community not found"));
    }

    private CommunitySummaryDto toSummary(Community community) {
        return CommunitySummaryDto.builder()
                .id(community.getId())
                .name(community.getName())
                .slug(community.getSlug())
                .description(community.getDescription())
                .headerImageUrl(community.getHeaderImageUrl())
                .createdByUserId(community.getCreatedBy() == null ? null : community.getCreatedBy().getUserId())
                .createdAt(community.getCreatedAt())
                .updatedAt(community.getUpdatedAt())
                .build();
    }

    private String ensureUniqueSlug(String name) {
        String baseSlug = slugify(name);
        if (baseSlug.isBlank()) {
            throw new HumanfirstException("Community name is invalid");
        }

        String candidate = baseSlug;
        int suffix = 2;
        while (communityRepository.existsBySlugIgnoreCase(candidate)) {
            candidate = baseSlug + "-" + suffix;
            suffix++;
        }
        return candidate;
    }

    private String slugify(String value) {
        return value == null ? "" : value.toLowerCase()
                .replaceAll("[^a-z0-9\\s-]", "")
                .trim()
                .replaceAll("\\s+", "-")
                .replaceAll("-+", "-");
    }

    private String normalizeRequired(String value, String errorMessage) {
        if (value == null || value.trim().isEmpty()) {
            throw new HumanfirstException(errorMessage);
        }
        return value.trim();
    }

    private String normalizeNullable(String value) {
        if (value == null) {
            return null;
        }

        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }

    private User getCurrentUserOrNull() {
        if (!authService.isLoggedIn()) {
            return null;
        }

        try {
            return authService.getCurrentUser();
        } catch (Exception ex) {
            return null;
        }
    }

    private MembershipState resolveMembershipState(User currentUser, Community community) {
        if (currentUser == null) {
            return new MembershipState(false, false);
        }

        boolean creatorByOwner = community.getCreatedBy() != null
                && currentUser.getUserId().equals(community.getCreatedBy().getUserId());

        Optional<CommunityMembership> membership = communityMembershipRepository.findByUserAndCommunity(currentUser, community);
        boolean creatorByMembership = membership.map(item -> item.getRole() == CommunityMembershipRole.CREATOR).orElse(false);
        boolean member = membership.isPresent() || creatorByOwner;

        return new MembershipState(member, creatorByOwner || creatorByMembership);
    }

    private boolean hasCreatorAccess(User user, Community community) {
        if (community.getCreatedBy() != null && user.getUserId().equals(community.getCreatedBy().getUserId())) {
            return true;
        }

        return communityMembershipRepository.findByUserAndCommunity(user, community)
                .map(membership -> membership.getRole() == CommunityMembershipRole.CREATOR)
                .orElse(false);
    }

    private CommunityMembership saveMembership(User user, Community community, CommunityMembershipRole role) {
        CommunityMembership membership = CommunityMembership.builder()
                .user(user)
                .community(community)
                .role(role)
                .createdAt(Instant.now())
                .build();

        return communityMembershipRepository.save(membership);
    }

    private record MembershipState(boolean member, boolean creator) {
    }
}
