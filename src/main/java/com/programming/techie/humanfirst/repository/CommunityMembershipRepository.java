package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.Community;
import com.programming.techie.humanfirst.model.CommunityMembership;
import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommunityMembershipRepository extends JpaRepository<CommunityMembership, Long> {

    Optional<CommunityMembership> findByUserAndCommunity(User user, Community community);

    boolean existsByUserAndCommunity(User user, Community community);

    List<CommunityMembership> findAllByUserOrderByCreatedAtDesc(User user);

    List<CommunityMembership> findAllByCommunityOrderByCreatedAtDesc(Community community);
}
