package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.*;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import com.programming.techie.humanfirst.model.*;
import com.programming.techie.humanfirst.repository.TopicCommentRepository;
import com.programming.techie.humanfirst.repository.TopicCommentUpvoteRepository;
import com.programming.techie.humanfirst.repository.TopicStanceVoteRepository;
import com.programming.techie.humanfirst.repository.TopicWeekRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.FORBIDDEN;

@Service
@RequiredArgsConstructor
@Transactional
public class TopicDiscussionService {

    private final TopicWeekRepository topicWeekRepository;
    private final TopicStanceVoteRepository topicStanceVoteRepository;
    private final TopicCommentRepository topicCommentRepository;
    private final TopicCommentUpvoteRepository topicCommentUpvoteRepository;
    private final AuthService authService;

    @Transactional(readOnly = true)
    public TopicWeekDetailDto getCurrentTopicDetail() {
        TopicWeek topicWeek = topicWeekRepository.findFirstByActiveTrueOrderByCreatedDateDesc()
                .orElseThrow(() -> new HumanfirstException("No active weekly topic is configured"));
        return mapTopicDetail(topicWeek);
    }

    @Transactional(readOnly = true)
    public TopicWeekDetailDto getTopicDetailBySlug(String slug) {
        TopicWeek topicWeek = topicWeekRepository.findBySlugIgnoreCase(slug)
                .orElseThrow(() -> new HumanfirstException("Topic not found: " + slug));
        return mapTopicDetail(topicWeek);
    }

    @Transactional(readOnly = true)
    public List<TopicWeekSummaryDto> getArchivedTopics() {
        return topicWeekRepository.findByActiveFalseOrderByCreatedDateDesc()
                .stream()
                .map(topicWeek -> TopicWeekSummaryDto.builder()
                        .id(topicWeek.getTopicWeekId())
                        .slug(topicWeek.getSlug())
                        .weekTitle(topicWeek.getWeekTitle())
                        .monthTitle(topicWeek.getMonthTitle())
                        .createdDate(topicWeek.getCreatedDate())
                        .build())
                .collect(Collectors.toList());
    }

    public TopicVoteSummaryDto voteOnTopic(Long topicId, TopicVoteRequest request) {
        if (request == null || request.getStance() == null) {
            throw new HumanfirstException("Topic stance is required");
        }

        TopicWeek topicWeek = topicWeekRepository.findById(topicId)
                .orElseThrow(() -> new HumanfirstException("Topic not found with id: " + topicId));

        User currentUser = authService.getCurrentUser();
        TopicStanceVote vote = getOrCreateStanceVote(topicWeek, currentUser, request.getStance());
        normalizeLegacyVoteFlags(vote);
        if (request.getStance() == TopicStance.PRO) {
            vote.setProVoted(!isProVoted(vote));
        } else {
            vote.setConVoted(!isConVoted(vote));
        }
        vote.setStance(request.getStance());
        vote.setCreatedDate(Instant.now());
        topicStanceVoteRepository.save(vote);
        return buildVoteSummary(topicWeek, currentUser);
    }

    public TopicCommentDto addComment(Long topicId, TopicCommentRequest request) {
        if (request == null) {
            throw new HumanfirstException("Comment request is required");
        }

        String normalizedText = request.getText() == null ? "" : request.getText().trim();
        if (normalizedText.isBlank()) {
            throw new HumanfirstException("Comment text cannot be empty");
        }

        TopicWeek topicWeek = topicWeekRepository.findById(topicId)
                .orElseThrow(() -> new HumanfirstException("Topic not found with id: " + topicId));
        User currentUser = authService.getCurrentUser();

        TopicComment parentComment = null;
        TopicStance stance = request.getStance();

        if (request.getParentCommentId() != null) {
            parentComment = topicCommentRepository.findById(request.getParentCommentId())
                    .orElseThrow(() -> new HumanfirstException("Parent comment not found: " + request.getParentCommentId()));

            if (!Objects.equals(parentComment.getTopicWeek().getTopicWeekId(), topicWeek.getTopicWeekId())) {
                throw new HumanfirstException("Parent comment does not belong to this topic");
            }
        }

        if (stance == null) {
            throw new HumanfirstException("Comment stance is required");
        }

        TopicComment comment = TopicComment.builder()
                .text(normalizedText)
                .topicWeek(topicWeek)
                .user(currentUser)
                .parentComment(parentComment)
                .stance(stance)
                .upvoteCount(0)
                .createdDate(Instant.now())
                .build();

        TopicComment saved = topicCommentRepository.save(comment);
        registerCommentStanceVote(topicWeek, currentUser, stance);
        return mapComment(saved, Collections.emptySet());
    }

    public TopicCommentUpvoteResponse toggleCommentUpvote(Long commentId) {
        TopicComment comment = topicCommentRepository.findById(commentId)
                .orElseThrow(() -> new HumanfirstException("Comment not found with id: " + commentId));
        User currentUser = authService.getCurrentUser();

        Optional<TopicCommentUpvote> existingUpvote = topicCommentUpvoteRepository
                .findByTopicCommentAndUser(comment, currentUser);

        boolean upVoted;
        int currentCount = comment.getUpvoteCount() == null ? 0 : comment.getUpvoteCount();

        if (existingUpvote.isPresent()) {
            topicCommentUpvoteRepository.delete(existingUpvote.get());
            comment.setUpvoteCount(Math.max(0, currentCount - 1));
            upVoted = false;
        } else {
            TopicCommentUpvote upvote = TopicCommentUpvote.builder()
                    .topicComment(comment)
                    .user(currentUser)
                    .createdDate(Instant.now())
                    .build();
            topicCommentUpvoteRepository.save(upvote);
            comment.setUpvoteCount(currentCount + 1);
            upVoted = true;
        }

        TopicComment saved = topicCommentRepository.save(comment);
        return TopicCommentUpvoteResponse.builder()
                .commentId(saved.getTopicCommentId())
                .upvoteCount(saved.getUpvoteCount())
                .upVotedByCurrentUser(upVoted)
                .build();
    }

    public void deleteComment(Long commentId) {
        TopicComment comment = topicCommentRepository.findById(commentId)
                .orElseThrow(() -> new HumanfirstException("Comment not found with id: " + commentId));
        User currentUser = authService.getCurrentUser();

        if (!Objects.equals(comment.getUser().getUserId(), currentUser.getUserId())) {
            throw new ResponseStatusException(FORBIDDEN, "You can only delete your own comments");
        }

        TopicComment parentComment = comment.getParentComment();
        List<TopicComment> directReplies = topicCommentRepository.findAllByParentComment(comment);
        for (TopicComment reply : directReplies) {
            reply.setParentComment(parentComment);
        }
        if (!directReplies.isEmpty()) {
            topicCommentRepository.saveAll(directReplies);
        }

        topicCommentUpvoteRepository.deleteAllByTopicComment(comment);
        topicCommentRepository.delete(comment);
    }

    @Transactional(readOnly = true)
    private TopicWeekDetailDto mapTopicDetail(TopicWeek topicWeek) {
        Optional<User> currentUser = getCurrentUserOptional();
        TopicVoteSummaryDto voteSummary = buildVoteSummary(topicWeek, currentUser.orElse(null));

        Set<Long> upvotedCommentIds = currentUser
                .map(user -> topicCommentUpvoteRepository.findAllByUserAndTopicWeek(user, topicWeek)
                        .stream()
                        .map(upvote -> upvote.getTopicComment().getTopicCommentId())
                        .collect(Collectors.toSet()))
                .orElseGet(HashSet::new);

        List<TopicComment> allComments = topicCommentRepository.findAllByTopicWeekOrderByCreatedDateAsc(topicWeek);
        CommentSplit commentSplit = buildCommentTree(allComments, upvotedCommentIds);

        List<TopicSubdivisionDto> subdivisions = topicWeek.getSubdivisions() == null
                ? Collections.emptyList()
                : topicWeek.getSubdivisions().stream()
                .sorted(Comparator.comparing(TopicSubdivision::getDisplayOrder))
                .map(item -> TopicSubdivisionDto.builder()
                        .id(item.getTopicSubdivisionId())
                        .title(item.getTitle())
                        .displayOrder(item.getDisplayOrder())
                        .build())
                .collect(Collectors.toList());

        return TopicWeekDetailDto.builder()
                .id(topicWeek.getTopicWeekId())
                .slug(topicWeek.getSlug())
                .weekTitle(topicWeek.getWeekTitle())
                .monthTitle(topicWeek.getMonthTitle())
                .weeklyTopicBody(topicWeek.getWeeklyTopicBody())
                .subdivisions(subdivisions)
                .voteSummary(voteSummary)
                .proComments(commentSplit.proRoots)
                .conComments(commentSplit.conRoots)
                .build();
    }

    private CommentSplit buildCommentTree(List<TopicComment> comments, Set<Long> upvotedCommentIds) {
        Map<Long, TopicCommentDto> dtoById = new LinkedHashMap<>();
        List<TopicCommentDto> proRoots = new ArrayList<>();
        List<TopicCommentDto> conRoots = new ArrayList<>();

        comments.forEach(comment -> dtoById.put(comment.getTopicCommentId(), mapComment(comment, upvotedCommentIds)));

        comments.forEach(comment -> {
            TopicCommentDto dto = dtoById.get(comment.getTopicCommentId());
            TopicComment parent = comment.getParentComment();

            if (parent != null && dtoById.containsKey(parent.getTopicCommentId())) {
                dtoById.get(parent.getTopicCommentId()).getReplies().add(dto);
                return;
            }

            if (comment.getStance() == TopicStance.PRO) {
                proRoots.add(dto);
            } else {
                conRoots.add(dto);
            }
        });

        Comparator<TopicCommentDto> comparator = Comparator
                .comparing(TopicCommentDto::getUpvoteCount, Comparator.nullsLast(Comparator.reverseOrder()))
                .thenComparing(TopicCommentDto::getCreatedDate, Comparator.nullsLast(Comparator.naturalOrder()));

        sortCommentTree(proRoots, comparator);
        sortCommentTree(conRoots, comparator);

        return new CommentSplit(proRoots, conRoots);
    }

    private void sortCommentTree(List<TopicCommentDto> comments,
                                 Comparator<TopicCommentDto> comparator) {
        comments.sort(comparator);
        comments.forEach(comment -> sortCommentTree(comment.getReplies(), comparator));
    }

    private TopicCommentDto mapComment(TopicComment comment, Set<Long> upvotedCommentIds) {
        Long commentId = comment.getTopicCommentId();
        return TopicCommentDto.builder()
                .id(commentId)
                .text(comment.getText())
                .userName(comment.getUser().getUsername())
                .createdDate(comment.getCreatedDate())
                .duration(getDuration(comment.getCreatedDate()))
                .upvoteCount(comment.getUpvoteCount() == null ? 0 : comment.getUpvoteCount())
                .upVotedByCurrentUser(commentId != null && upvotedCommentIds.contains(commentId))
                .stance(comment.getStance())
                .replies(new ArrayList<>())
                .build();
    }

    private TopicVoteSummaryDto buildVoteSummary(TopicWeek topicWeek, User currentUser) {
        List<TopicStanceVote> votes = topicStanceVoteRepository.findAllByTopicWeek(topicWeek);
        long proVotes = votes.stream().filter(this::isProVoted).count();
        long conVotes = votes.stream().filter(this::isConVoted).count();
        long totalVotes = proVotes + conVotes;

        int proPercent = totalVotes == 0 ? 0 : (int) Math.round((proVotes * 100.0) / totalVotes);
        int conPercent = totalVotes == 0 ? 0 : Math.max(0, 100 - proPercent);

        boolean userProVoted = false;
        boolean userConVoted = false;
        TopicStance userStance = null;
        if (currentUser != null) {
            Optional<TopicStanceVote> userVote = topicStanceVoteRepository.findByTopicWeekAndUser(topicWeek, currentUser);
            userProVoted = userVote.map(this::isProVoted).orElse(false);
            userConVoted = userVote.map(this::isConVoted).orElse(false);
            if (userProVoted && !userConVoted) {
                userStance = TopicStance.PRO;
            } else if (userConVoted && !userProVoted) {
                userStance = TopicStance.CON;
            }
        }

        return TopicVoteSummaryDto.builder()
                .proVotes(proVotes)
                .conVotes(conVotes)
                .totalVotes(totalVotes)
                .proPercent(proPercent)
                .conPercent(conPercent)
                .userStance(userStance)
                .userProVoted(userProVoted)
                .userConVoted(userConVoted)
                .build();
    }

    private void registerCommentStanceVote(TopicWeek topicWeek, User currentUser, TopicStance stance) {
        TopicStanceVote vote = getOrCreateStanceVote(topicWeek, currentUser, stance);
        boolean normalizedLegacyFlags = normalizeLegacyVoteFlags(vote);
        if (stance == TopicStance.PRO && !isProVoted(vote)) {
            vote.setProVoted(true);
            vote.setStance(TopicStance.PRO);
            vote.setCreatedDate(Instant.now());
            topicStanceVoteRepository.save(vote);
            return;
        }

        if (stance == TopicStance.CON && !isConVoted(vote)) {
            vote.setConVoted(true);
            vote.setStance(TopicStance.CON);
            vote.setCreatedDate(Instant.now());
            topicStanceVoteRepository.save(vote);
            return;
        }

        if (vote.getTopicStanceVoteId() == null || normalizedLegacyFlags) {
            topicStanceVoteRepository.save(vote);
        }
    }

    private TopicStanceVote getOrCreateStanceVote(TopicWeek topicWeek, User currentUser, TopicStance fallbackStance) {
        return topicStanceVoteRepository.findByTopicWeekAndUser(topicWeek, currentUser)
                .orElseGet(() -> TopicStanceVote.builder()
                        .topicWeek(topicWeek)
                        .user(currentUser)
                        .stance(fallbackStance)
                        .proVoted(false)
                        .conVoted(false)
                        .createdDate(Instant.now())
                        .build());
    }

    private boolean isProVoted(TopicStanceVote vote) {
        if (vote == null) {
            return false;
        }

        if (Boolean.TRUE.equals(vote.getProVoted())) {
            return true;
        }

        if (vote.getProVoted() == null && vote.getConVoted() == null) {
            return vote.getStance() == TopicStance.PRO;
        }

        return false;
    }

    private boolean isConVoted(TopicStanceVote vote) {
        if (vote == null) {
            return false;
        }

        if (Boolean.TRUE.equals(vote.getConVoted())) {
            return true;
        }

        if (vote.getProVoted() == null && vote.getConVoted() == null) {
            return vote.getStance() == TopicStance.CON;
        }

        return false;
    }

    private boolean normalizeLegacyVoteFlags(TopicStanceVote vote) {
        if (vote == null || vote.getProVoted() != null || vote.getConVoted() != null) {
            return false;
        }

        vote.setProVoted(vote.getStance() == TopicStance.PRO);
        vote.setConVoted(vote.getStance() == TopicStance.CON);
        return true;
    }

    private Optional<User> getCurrentUserOptional() {
        if (!authService.isLoggedIn()) {
            return Optional.empty();
        }

        try {
            return Optional.ofNullable(authService.getCurrentUser());
        } catch (Exception ignored) {
            return Optional.empty();
        }
    }

    private String getDuration(Instant createdDate) {
        if (createdDate == null) {
            return "just now";
        }

        long seconds = Duration.between(createdDate, Instant.now()).getSeconds();
        if (seconds < 60) {
            return "just now";
        }

        long minutes = seconds / 60;
        if (minutes < 60) {
            return minutes + (minutes == 1 ? " minute ago" : " minutes ago");
        }

        long hours = minutes / 60;
        if (hours < 24) {
            return hours + (hours == 1 ? " hour ago" : " hours ago");
        }

        long days = hours / 24;
        return days + (days == 1 ? " day ago" : " days ago");
    }

    private static class CommentSplit {
        private final List<TopicCommentDto> proRoots;
        private final List<TopicCommentDto> conRoots;

        private CommentSplit(List<TopicCommentDto> proRoots, List<TopicCommentDto> conRoots) {
            this.proRoots = proRoots;
            this.conRoots = conRoots;
        }
    }
}
