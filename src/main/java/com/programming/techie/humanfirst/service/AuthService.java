package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.AuthenticationResponse;
import com.programming.techie.humanfirst.dto.LoginRequest;
import com.programming.techie.humanfirst.dto.RefreshTokenRequest;
import com.programming.techie.humanfirst.dto.RegisterRequest;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import com.programming.techie.humanfirst.model.NotificationEmail;
import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.model.VerificationToken;
import com.programming.techie.humanfirst.repository.UserRepository;
import com.programming.techie.humanfirst.repository.VerificationTokenRepository;
import com.programming.techie.humanfirst.security.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;
    private final MailService mailService;
    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final RefreshTokenService refreshTokenService;
    @Value("${app.url:https://humanfirst-0dc0273c37c7.herokuapp.com}")
    private String appUrl;


    public void signup(RegisterRequest registerRequest) {
        String normalizedUsername = registerRequest.getUsername() == null ? "" : registerRequest.getUsername().trim();
        String normalizedEmail = registerRequest.getEmail() == null ? "" : registerRequest.getEmail().trim();

        cleanupAllPendingRegistrations();
        cleanupPendingConflicts(normalizedUsername, normalizedEmail);

        if (userRepository.existsByUsernameIgnoreCase(normalizedUsername)) {
            throw new HumanfirstException("Username is already taken");
        }
        if (userRepository.existsByEmailIgnoreCase(normalizedEmail)) {
            throw new HumanfirstException("Email is already in use");
        }

        User user = new User();
        user.setUsername(normalizedUsername);
        user.setEmail(normalizedEmail);
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setCreated(Instant.now());
        user.setEnabled(false);

        userRepository.save(user);

        String token = generateVerificationToken(user);
        String activationBaseUrl = normalizeBaseUrl(appUrl);
        mailService.sendMail(new NotificationEmail("Please Activate your Account",
                user.getEmail(), "Thank you for signing up to Humanfirst, " +
                "please click on the below url to activate your account : " +
                activationBaseUrl + "/account-verification/" + token));
    }

    @Transactional(readOnly = true)
    public User getCurrentUser() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder.
                getContext().getAuthentication().getPrincipal();
        return userRepository.findFirstByUsernameAndEnabledTrueOrderByUserIdDesc(principal.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User name not found - " + principal.getUsername()));
    }

    private void fetchUserAndEnable(VerificationToken verificationToken) {
        User user = verificationToken.getUser();
        if (user == null) {
            throw new HumanfirstException("User not found for verification token");
        }
        if (user.isEnabled()) {
            return;
        }
        user.setEnabled(true);
        userRepository.save(user);
        verificationTokenRepository.delete(verificationToken);
    }

    private String generateVerificationToken(User user) {
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(user);

        verificationTokenRepository.save(verificationToken);
        return token;
    }

    public void verifyAccount(String token) {
        Optional<VerificationToken> verificationToken = verificationTokenRepository.findByToken(token);
        fetchUserAndEnable(verificationToken.orElseThrow(() -> new HumanfirstException("Invalid Token")));
    }

    public AuthenticationResponse login(LoginRequest loginRequest) {
        String normalizedIdentifier = loginRequest.getUsername() == null ? "" : loginRequest.getUsername().trim();
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(normalizedIdentifier,
                loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        String token = jwtProvider.generateToken(authenticate);
        return AuthenticationResponse.builder()
                .authenticationToken(token)
                .refreshToken(refreshTokenService.generateRefreshToken().getToken())
                .expiresAt(Instant.now().plusMillis(jwtProvider.getJwtExpirationInMillis()))
                .username(authenticate.getName())
                .build();
    }

    public AuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        refreshTokenService.validateRefreshToken(refreshTokenRequest.getRefreshToken());
        String token = jwtProvider.generateTokenWithUserName(refreshTokenRequest.getUsername());
        return AuthenticationResponse.builder()
                .authenticationToken(token)
                .refreshToken(refreshTokenRequest.getRefreshToken())
                .expiresAt(Instant.now().plusMillis(jwtProvider.getJwtExpirationInMillis()))
                .username(refreshTokenRequest.getUsername())
                .build();
    }

    public boolean isLoggedIn() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return !(authentication instanceof AnonymousAuthenticationToken) && authentication.isAuthenticated();
    }

    private String normalizeBaseUrl(String rawBaseUrl) {
        if (rawBaseUrl == null || rawBaseUrl.isBlank()) {
            return "https://humanfirst-0dc0273c37c7.herokuapp.com";
        }
        return rawBaseUrl.endsWith("/") ? rawBaseUrl.substring(0, rawBaseUrl.length() - 1) : rawBaseUrl;
    }

    private void cleanupAllPendingRegistrations() {
        List<User> pendingUsers = userRepository.findAllByEnabledFalseOrderByCreatedAsc();
        if (pendingUsers.isEmpty()) {
            return;
        }

        pendingUsers.stream()
                .map(User::getUserId)
                .forEach(this::deletePendingRegistrationByUserId);

        log.info("Deleted {} pending registrations before processing a new signup", pendingUsers.size());
    }

    private void cleanupPendingConflicts(String username, String email) {
        Set<Long> pendingUserIds = new LinkedHashSet<>();

        userRepository.findFirstByUsernameIgnoreCaseOrderByUserIdDesc(username)
                .filter(user -> !user.isEnabled())
                .map(User::getUserId)
                .ifPresent(pendingUserIds::add);

        userRepository.findFirstByEmailIgnoreCaseOrderByUserIdDesc(email)
                .filter(user -> !user.isEnabled())
                .map(User::getUserId)
                .ifPresent(pendingUserIds::add);

        pendingUserIds.forEach(this::deletePendingRegistrationByUserId);
    }

    private void deletePendingRegistrationByUserId(Long userId) {
        long deletedTokens = verificationTokenRepository.deleteByUserUserId(userId);
        userRepository.deleteById(userId);
        log.info("Deleted stale pending registration for userId={} (tokensDeleted={})", userId, deletedTokens);
    }
}
